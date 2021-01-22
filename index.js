var fs = require('fs');
var lo = require('lodash');
let arqName = './test.fasta';
fs.readFile(arqName, 'utf8', (err, data) => {
  if(err) console.log(`erro ao tentar abrir o arquivo: ${err}` );

  
  
  let lines = data.split('\n');

  k = lo.split(lines[0], '=')[1] 
  d = lo.split(lines[1], '=')[1]
  
  mers = lines.splice(2)
  
  mers = mers.join().replace(/(\r\n|\n|\r|,)/gm, "")

  header = `k=${k}\nd=${d}`
  
  fs.appendFile("arqName", (header+'\n'), err => {
    if(err) console.log(`Erro ao criar arquivo de saida: ${err}`);
  });
   function  kdmers(k, d , mers) {
    kfix = parseInt(k)
    k = parseInt(k)
    d = parseInt(d)
    for (i in mers) {
      kmer = `${mers.slice(i, k)} | ${mers.slice(k+d, k+d+kfix)}`
      k =+ k+1
 
       fs.appendFile("kdmers.fasta", kmer+".\t\t", err => {
        if(err) console.log(`Erro ao criar arquivo de saida: ${err}`);
      });
      
    }
  }
  kdmers(k, d, mers)

    
})

