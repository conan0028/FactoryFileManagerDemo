"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EditoresConcretos_1 = require("./EditoresConcretos");
// Testando o Factory Method para diferentes tipos de arquivos
const editorPDF = new EditoresConcretos_1.EditorPDF();
console.log("=== Gerenciando Arquivo PDF ===");
editorPDF.gerenciarArquivo();
const editorDOCX = new EditoresConcretos_1.EditorDOCX();
console.log("\n=== Gerenciando Arquivo DOCX ===");
editorDOCX.gerenciarArquivo();
const editorXLSX = new EditoresConcretos_1.EditorXLSX();
console.log("\n=== Gerenciando Arquivo XLSX ===");
editorXLSX.gerenciarArquivo();
const editorTXT = new EditoresConcretos_1.EditorTXT();
console.log("\n=== Gerenciando Arquivo TXT ===");
editorTXT.gerenciarArquivo();
