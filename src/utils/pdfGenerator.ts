import { jsPDF } from 'jspdf';
import { CartItem } from '../types';

const LOGO_BASE64 = "data:image/png;base64,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";

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
    // Render the base64 logo directly without external HTTP requests or CORS blocks
    doc.addImage(LOGO_BASE64, 'PNG', margin, 12, 52, 15);
    logoLoaded = true;
  } catch (error) {
    console.warn('Failed to load embedded logo, using vector fallback', error);
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
