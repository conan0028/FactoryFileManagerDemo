"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArquivoTXT = exports.ArquivoXLSX = exports.ArquivoDOCX = exports.ArquivoPDF = void 0;
// Implementação concreta para arquivos PDF
class ArquivoPDF {
    abrir() {
        console.log("Abrindo arquivo PDF...");
    }
    salvar() {
        console.log("Salvando arquivo PDF...");
    }
}
exports.ArquivoPDF = ArquivoPDF;
// Implementação concreta para arquivos DOCX
class ArquivoDOCX {
    abrir() {
        console.log("Abrindo arquivo DOCX...");
    }
    salvar() {
        console.log("Salvando arquivo DOCX...");
    }
}
exports.ArquivoDOCX = ArquivoDOCX;
// Implementação concreta para arquivos XLSX
class ArquivoXLSX {
    abrir() {
        console.log("Abrindo arquivo XLSX...");
    }
    salvar() {
        console.log("Salvando arquivo XLSX...");
    }
}
exports.ArquivoXLSX = ArquivoXLSX;
// Implementação concreta para arquivos TXT
class ArquivoTXT {
    abrir() {
        console.log("Abrindo arquivo TXT...");
    }
    salvar() {
        console.log("Salvando arquivo TXT...");
    }
}
exports.ArquivoTXT = ArquivoTXT;
