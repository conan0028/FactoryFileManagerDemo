//Interface e Produtos Concretos
//--------------------------------------------------------------------
// Interface Arquivo
export interface Arquivo {
  abrir(): void;
  salvar(): void;
}

// Implementação concreta para arquivos PDF
export class ArquivoPDF implements Arquivo {
  abrir(): void {
    console.log("Abrindo arquivo PDF...");
  }
  salvar(): void {
    console.log("Salvando arquivo PDF...");
  }
}

// Implementação concreta para arquivos DOCX
export class ArquivoDOCX implements Arquivo {
  abrir(): void {
    console.log("Abrindo arquivo DOCX...");
  }
  salvar(): void {
    console.log("Salvando arquivo DOCX...");
  }
}

// Implementação concreta para arquivos XLSX
export class ArquivoXLSX implements Arquivo {
  abrir(): void {
    console.log("Abrindo arquivo XLSX...");
  }
  salvar(): void {
    console.log("Salvando arquivo XLSX...");
  }
}

// Implementação concreta para arquivos TXT
export class ArquivoTXT implements Arquivo {
  abrir(): void {
    console.log("Abrindo arquivo TXT...");
  }
  salvar(): void {
    console.log("Salvando arquivo TXT...");
  }
}
