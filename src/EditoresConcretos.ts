//Criadores Concretos
//--------------------------------------------------------------------
import { EditorArquivo } from "./EditorArquivo";
import { ArquivoPDF, ArquivoDOCX, ArquivoXLSX, ArquivoTXT } from "./Arquivo";

// Criador concreto para arquivos PDF
export class EditorPDF extends EditorArquivo {
  criarArquivo(): ArquivoPDF {
    return new ArquivoPDF();
  }
}

// Criador concreto para arquivos DOCX
export class EditorDOCX extends EditorArquivo {
  criarArquivo(): ArquivoDOCX {
    return new ArquivoDOCX();
  }
}

// Criador concreto para arquivos XLSX
export class EditorXLSX extends EditorArquivo {
  criarArquivo(): ArquivoXLSX {
    return new ArquivoXLSX();
  }
}

// Criador concreto para arquivos TXT
export class EditorTXT extends EditorArquivo {
  criarArquivo(): ArquivoTXT {
    return new ArquivoTXT();
  }
}
