//Criador Abstrato
//--------------------------------------------------------------------
import { Arquivo } from "./Arquivo";

// Criador abstrato
export abstract class EditorArquivo {
  // Método Factory abstrato
  abstract criarArquivo(): Arquivo;

  // Método público que gerencia o arquivo
  gerenciarArquivo(): void {
    const arquivo = this.criarArquivo();
    arquivo.abrir();
    arquivo.salvar();
  }
}
