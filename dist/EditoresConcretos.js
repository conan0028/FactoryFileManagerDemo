"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditorTXT = exports.EditorXLSX = exports.EditorDOCX = exports.EditorPDF = void 0;
//Criadores Concretos
//--------------------------------------------------------------------
const EditorArquivo_1 = require("./EditorArquivo");
const Arquivo_1 = require("./Arquivo");
// Criador concreto para arquivos PDF
class EditorPDF extends EditorArquivo_1.EditorArquivo {
    criarArquivo() {
        return new Arquivo_1.ArquivoPDF();
    }
}
exports.EditorPDF = EditorPDF;
// Criador concreto para arquivos DOCX
class EditorDOCX extends EditorArquivo_1.EditorArquivo {
    criarArquivo() {
        return new Arquivo_1.ArquivoDOCX();
    }
}
exports.EditorDOCX = EditorDOCX;
// Criador concreto para arquivos XLSX
class EditorXLSX extends EditorArquivo_1.EditorArquivo {
    criarArquivo() {
        return new Arquivo_1.ArquivoXLSX();
    }
}
exports.EditorXLSX = EditorXLSX;
// Criador concreto para arquivos TXT
class EditorTXT extends EditorArquivo_1.EditorArquivo {
    criarArquivo() {
        return new Arquivo_1.ArquivoTXT();
    }
}
exports.EditorTXT = EditorTXT;
