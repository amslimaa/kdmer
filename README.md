# 🧬 kdMer

Programa em Node.js que gera os **(k,d)-mers** de uma sequência genômica em formato FASTA, em ordem lexicográfica. Exercício da disciplina de **Bioinformática** (UFPI).

## Entrada e saída

**Entrada** — arquivo FASTA com `k` (tamanho da leitura) e `d` (distância entre as leituras) no cabeçalho:

```
>k=50d20
SEQUENCIA_DE_NUCLEOTIDEOS
```

**Saída** — arquivo de texto com os pares de k-mers ordenados, por exemplo `k50d20mer.txt`:

```
[ATTG|TTGG, GCTG|GGTG, ...]
```

## Como usar

Requer [Node.js](https://nodejs.org/).

```bash
npm install
# edite a variável arqName em index.js para apontar para o seu .fasta
node index.js
```

Exemplos de entrada: [`sequenciaGenomica.fasta`](sequenciaGenomica.fasta) e [`test.fasta`](test.fasta).

> Próximo passo do pipeline: [`bioassembler`](https://github.com/amslimaa/bioassembler) remonta a sequência a partir da saída deste programa.

## Autor

Feito por [Amós Magalhães](https://github.com/amslimaa).
