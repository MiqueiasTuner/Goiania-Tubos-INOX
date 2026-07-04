import { jsPDF } from 'jspdf';
import { CartItem } from '../types';

interface ClientInfo {
  name: string;
  company: string;
  phone: string;
  city: string;
  notes?: string;
}

/**
 * Generates a polished, professional PDF containing the cart quote details
 * and triggers a download.
 */
export async function generateQuotePDF(
  quoteId: string,
  items: CartItem[],
  client: ClientInfo
): Promise<void> {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 15;
  const contentWidth = pageWidth - (margin * 2); // 180mm

  // Colors
  const primaryColor = [1, 30, 65]; // #011e41 (GTI Deep Blue)
  const accentColor = [0, 203, 213]; // #00cbd5 (GTI Teal)
  const textColor = [51, 65, 85]; // #334155 (Slate 700)
  const lightBg = [248, 250, 252]; // #f8fafc (Slate 50)
  const borderLight = [226, 232, 240]; // #e2e8f0 (Slate 200)

  // Try to load the logo image
  let logoLoaded = false;
  try {
    const logoUrl = 'https://goianiatubos.com.br/wp-content/uploads/2023/07/logo-GTI-site-e1741897302433.png';
    
    // Create an image element and wait for it to load
    const img = await new Promise<HTMLImageElement | null>((resolve) => {
      const element = new Image();
      element.crossOrigin = 'anonymous';
      element.onload = () => resolve(element);
      element.onerror = () => resolve(null);
      element.src = logoUrl;
      // Timeout after 2.5 seconds to avoid hanging the flow
      setTimeout(() => resolve(null), 2500);
    });

    if (img) {
      // Original proportions: width is around 3.5x height
      doc.addImage(img, 'PNG', margin, 12, 52, 15);
      logoLoaded = true;
    }
  } catch (error) {
    console.warn('Failed to load external logo, using vector fallback', error);
  }

  // Fallback vector logo if image failed to load or CORS blocked it
  if (!logoLoaded) {
    // Elegant emblem
    doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.rect(margin, 12, 10, 15, 'F');
    doc.setFillColor(accentColor[0], accentColor[1], accentColor[2]);
    doc.rect(margin + 2, 22, 10, 5, 'F');

    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(14);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text('GOIÂNIA TUBOS INOX', margin + 14, 19);
    
    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(100, 116, 139); // Slate 500
    doc.text('DISTRIBUIDOR DE INOX & AÇO CARBONO', margin + 14, 24);
  }

  // Document details on the right
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text('SOLICITAÇÃO DE ORÇAMENTO', pageWidth - margin, 16, { align: 'right' });

  doc.setFont('Helvetica', 'mono');
  doc.setFontSize(9);
  doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
  doc.text(`Nº: ${quoteId}`, pageWidth - margin, 21, { align: 'right' });

  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(100, 116, 139);
  const currentDate = new Date().toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
  doc.text(`Gerado em: ${currentDate}`, pageWidth - margin, 26, { align: 'right' });

  // Divider
  doc.setDrawColor(borderLight[0], borderLight[1], borderLight[2]);
  doc.setLineWidth(0.4);
  doc.line(margin, 31, pageWidth - margin, 31);

  // Client Info Section Box
  const clientBoxY = 35;
  const clientBoxHeight = 30;
  doc.setFillColor(lightBg[0], lightBg[1], lightBg[2]);
  doc.rect(margin, clientBoxY, contentWidth, clientBoxHeight, 'F');
  doc.setDrawColor(borderLight[0], borderLight[1], borderLight[2]);
  doc.rect(margin, clientBoxY, contentWidth, clientBoxHeight, 'D');

  // Client section title
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text('DADOS DO SOLICITANTE / CLIENTE B2B', margin + 4, clientBoxY + 5.5);

  // Divider inside client box
  doc.setDrawColor(borderLight[0], borderLight[1], borderLight[2]);
  doc.line(margin, clientBoxY + 8, margin + contentWidth, clientBoxY + 8);

  // Info details (2 columns)
  doc.setFontSize(8.5);
  doc.setTextColor(textColor[0], textColor[1], textColor[2]);
  
  // Col 1
  doc.setFont('Helvetica', 'bold');
  doc.text('Nome:', margin + 4, clientBoxY + 13.5);
  doc.setFont('Helvetica', 'normal');
  doc.text(client.name, margin + 17, clientBoxY + 13.5);

  doc.setFont('Helvetica', 'bold');
  doc.text('Empresa:', margin + 4, clientBoxY + 19.5);
  doc.setFont('Helvetica', 'normal');
  doc.text(client.company || 'Pessoa Física / Não informada', margin + 21, clientBoxY + 19.5);

  doc.setFont('Helvetica', 'bold');
  doc.text('WhatsApp:', margin + 4, clientBoxY + 25.5);
  doc.setFont('Helvetica', 'normal');
  doc.text(client.phone, margin + 23, clientBoxY + 25.5);

  // Col 2
  const col2X = margin + 100;
  doc.setFont('Helvetica', 'bold');
  doc.text('Cidade / UF:', col2X, clientBoxY + 13.5);
  doc.setFont('Helvetica', 'normal');
  doc.text(client.city, col2X + 22, clientBoxY + 13.5);

  doc.setFont('Helvetica', 'bold');
  doc.text('Canal:', col2X, clientBoxY + 19.5);
  doc.setFont('Helvetica', 'normal');
  doc.text('B2B Distribuidor', col2X + 11, clientBoxY + 19.5);

  doc.setFont('Helvetica', 'bold');
  doc.text('Status:', col2X, clientBoxY + 25.5);
  doc.setFont('Helvetica', 'bold');
  doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
  doc.text('AGUARDANDO COTAÇÃO', col2X + 12, clientBoxY + 25.5);

  // Items Table Section
  const tableY = 71;
  
  // Table Header
  doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.rect(margin, tableY, contentWidth, 8, 'F');

  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(255, 255, 255); // White text

  const colWidths = {
    idx: 8,
    name: 82,
    size: 25,
    alloy: 25,
    thick: 25,
    qty: 15
  };

  const colX = {
    idx: margin + 2,
    name: margin + colWidths.idx + 3,
    size: margin + colWidths.idx + colWidths.name + 3,
    alloy: margin + colWidths.idx + colWidths.name + colWidths.size + 3,
    thick: margin + colWidths.idx + colWidths.name + colWidths.size + colWidths.alloy + 3,
    qty: margin + colWidths.idx + colWidths.name + colWidths.size + colWidths.alloy + colWidths.thick + 1 // align right mostly or center
  };

  doc.text('#', colX.idx, tableY + 5.5);
  doc.text('ESPECIFICAÇÃO DO PRODUTO', colX.name, tableY + 5.5);
  doc.text('DIÂMETRO / BITOLA', colX.size, tableY + 5.5);
  doc.text('LIGA / PADRÃO', colX.alloy, tableY + 5.5);
  doc.text('PAREDE / CLASSE', colX.thick, tableY + 5.5);
  doc.text('QUANTIDADE', colX.qty, tableY + 5.5, { align: 'center' });

  // Table Body Rows
  let currentY = tableY + 8;
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(8);
  
  items.forEach((item, index) => {
    // Alternate row colors
    const isEven = index % 2 === 0;
    if (isEven) {
      doc.setFillColor(255, 255, 255);
    } else {
      doc.setFillColor(lightBg[0], lightBg[1], lightBg[2]);
    }
    
    // Draw row background
    doc.rect(margin, currentY, contentWidth, 8, 'F');
    
    // Bottom border for each row
    doc.setDrawColor(borderLight[0], borderLight[1], borderLight[2]);
    doc.line(margin, currentY + 8, margin + contentWidth, currentY + 8);

    doc.setTextColor(115, 125, 140); // Slate 400
    doc.text((index + 1).toString().padStart(2, '0'), colX.idx, currentY + 5);

    // Shorten product name to fit nicely
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setFont('Helvetica', 'bold');
    let prodName = item.product.name;
    if (prodName.length > 50) prodName = prodName.substring(0, 48) + '...';
    doc.text(prodName, colX.name, currentY + 5);

    doc.setFont('Helvetica', 'normal');
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    doc.text(item.selectedSize, colX.size, currentY + 5);
    doc.text(item.selectedMaterial, colX.alloy, currentY + 5);
    doc.text(item.selectedPressureClass || 'N/A', colX.thick, currentY + 5);

    doc.setFont('Helvetica', 'bold');
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text(`${item.quantity} ${item.product.unit || 'UN'}`, colX.qty, currentY + 5, { align: 'center' });

    currentY += 8;
  });

  // Notes & Observações gerais section
  if (client.notes && client.notes.trim()) {
    currentY += 4;
    doc.setFillColor(lightBg[0], lightBg[1], lightBg[2]);
    doc.rect(margin, currentY, contentWidth, 18, 'F');
    doc.setDrawColor(borderLight[0], borderLight[1], borderLight[2]);
    doc.rect(margin, currentY, contentWidth, 18, 'D');

    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text('OBSERVAÇÕES ADICIONAIS DO SOLICITANTE:', margin + 4, currentY + 5);

    doc.setFont('Helvetica', 'italic');
    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139);
    
    // Split text into lines to avoid overflow
    let noteText = client.notes;
    if (noteText.length > 110) noteText = noteText.substring(0, 107) + '...';
    doc.text(`"${noteText}"`, margin + 4, currentY + 11);
    
    currentY += 18;
  }

  // Terms and conditions disclaimer box
  currentY += 5;
  doc.setFillColor(240, 253, 250); // very light green/teal
  doc.rect(margin, currentY, contentWidth, 18, 'F');
  doc.setDrawColor(204, 251, 241); // slightly darker teal border
  doc.rect(margin, currentY, contentWidth, 18, 'D');

  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(13, 148, 136); // Teal 600
  doc.text('INFORMAÇÕES ADICIONAIS PARA FATURAMENTO B2B', margin + 4, currentY + 4.5);

  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(7);
  doc.setTextColor(79, 94, 113);
  doc.text('• Este lote de especificações foi gerado pelo portal B2B da Goiânia Tubos Inox.', margin + 4, currentY + 9);
  doc.text('• O faturamento é realizado diretamente de fábrica, sujeito à análise cadastral de CNPJ e termos de crédito.', margin + 4, currentY + 13);

  // Signature lines or footer details
  const footerY = pageHeight - 20;

  doc.setDrawColor(borderLight[0], borderLight[1], borderLight[2]);
  doc.line(margin, footerY, pageWidth - margin, footerY);

  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text('GOIÂNIA TUBOS INOX LTDA', margin, footerY + 4);

  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(7);
  doc.setTextColor(115, 125, 140);
  doc.text('Matriz Goiânia: (62) 3092-2724 | Filial Imperatriz: (99) 4102-3415', margin, footerY + 8);
  doc.text('Email: comercial@goianiatubos.com.br | www.goianiatubos.com.br', margin, footerY + 12);

  doc.setFont('Helvetica', 'bold');
  doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
  doc.text('Qualidade, Rastreabilidade e Agilidade Industrial.', pageWidth - margin, footerY + 4, { align: 'right' });

  // Save the document
  doc.save(`Orcamento_GTI_${quoteId}.pdf`);
}
