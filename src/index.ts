import {
  EditorPDF,
  EditorDOCX,
  EditorXLSX,
  EditorTXT,
} from "./EditoresConcretos";

// Testando o Factory Method para diferentes tipos de arquivos
const editorPDF = new EditorPDF();
console.log("=== Gerenciando Arquivo PDF ===");
editorPDF.gerenciarArquivo();

const editorDOCX = new EditorDOCX();
console.log("\n=== Gerenciando Arquivo DOCX ===");
editorDOCX.gerenciarArquivo();

const editorXLSX = new EditorXLSX();
console.log("\n=== Gerenciando Arquivo XLSX ===");
editorXLSX.gerenciarArquivo();

const editorTXT = new EditorTXT();
console.log("\n=== Gerenciando Arquivo TXT ===");
editorTXT.gerenciarArquivo();
