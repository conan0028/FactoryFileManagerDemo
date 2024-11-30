
# FactoryFileManagerDemo

FactoryFileManagerDemo é um projeto acadêmico demonstrativo do padrão de projeto Factory Method aplicado 
a um sistema de gerenciamento de arquivos. Este exemplo ilustra como criar uma arquitetura extensível 
para abrir e salvar arquivos de diferentes tipos (PDF, DOCX, XLSX, TXT), sem implementar funcionalidade 
real de manipulação de arquivos, sendo o foco na demonstração do padrão de projeto.

## Tecnologias Utilizadas
- **TypeScript**: Linguagem principal do projeto.
- **Node.js**: Para execução do código gerado.
- **Padrão de Projeto Factory Method**: Base arquitetural do projeto.

## Estrutura do Projeto
```
FactoryFileManagerDemo/
├── diagrams/	   # Diagrama UML do projeto 
├── dist/                  # Arquivos JavaScript compilados
├── src/                   # Código-fonte TypeScript
│   ├── Arquivo.ts         # Interface e classes concretas de arquivos
│   ├── EditorArquivo.ts   # Criador abstrato para editores de arquivos
│   ├── EditoresConcretos.ts # Classes concretas de editores de arquivos
│   └── index.ts           # Ponto de entrada do projeto
├── tsconfig.json          # Configuração do TypeScript
├── package.json           # Dependências do projeto
└── LICENSE                # Arquivo de licença do projeto
```

## Instalação e Execução

### 1. Clonar o repositório
```bash
git clone https://github.com/seuusuario/FactoryFileManagerDemo.git
cd FactoryFileManagerDemo
```

### 2. Instalar dependências
Certifique-se de ter o Node.js e o npm instalados. Depois, instale as dependências do projeto:
```bash
npm install
```

### 3. Compilar o TypeScript
Compile os arquivos TypeScript para JavaScript:
```bash
npm run build
```

### 4. Executar o código
Após a compilação, rode o arquivo gerado:
```bash
node dist/index.js
```

## Uso
O projeto cria instâncias de editores de arquivos (PDF, DOCX, XLSX, TXT) utilizando o padrão Factory Method. 
O código no `index.ts` demonstra como gerenciar arquivos chamando o método `gerenciarArquivo()`.

Exemplo:
```typescript
const editorPDF = new EditorPDF();
editorPDF.gerenciarArquivo();
```

Saída esperada:
```plaintext
Abrindo arquivo PDF...
Salvando arquivo PDF...
```

## Contribuição
Contribuições são bem-vindas! Abra *issues* ou envie *pull requests*.

## Licença
Este projeto é distribuído sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
