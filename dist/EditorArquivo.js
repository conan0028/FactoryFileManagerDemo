"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditorArquivo = void 0;
// Criador abstrato
class EditorArquivo {
    // Método público que gerencia o arquivo
    gerenciarArquivo() {
        const arquivo = this.criarArquivo();
        arquivo.abrir();
        arquivo.salvar();
    }
}
exports.EditorArquivo = EditorArquivo;
