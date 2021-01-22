# kdmer
Crie um programa chamado kdMer. Tal programa tem como entrada uma
sequencia
genômica no formado FASTA, o tamanho da leitura (k) e a distância entre as leituras
(d). A partir desse programa, ele gera, em ordem lexicográfica o (k,d) mers, em um
arquivo texto. Supondo que k = 50 e d = 20, o arquivo de saída do programa será
k50d20mer.txt. A entrada deverá ter o seguinte formato:
INPUT - arquivo fasta com o seguinte leiaut:
>k=999d=999
Sequencia de Nucleotideos
OUTPUT – arquivo texto com os kdmers em ordem lexicográfica:
[ATTG|TTGG, GCTG|GGTG, ...]

### Prerequisites 

1. NodejS

###  Installing

[Windows Installer](https://nodejs.org/en/)

MacOS: run
```
brew install nodejs
```
Linux: run
```
apt install nodejs
```
## Usage 

modify the variable ```arqName``` to change the readed file 

## Running the test

To execute the test is easier than looks like, on project directory just run:

```
node ./index.js
```


## Authors

* **Amós Lima** - *Initial work* - [Amslimaa](https://github.com/amslimaa)
