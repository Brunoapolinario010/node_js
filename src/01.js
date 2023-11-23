const readline = require('readline');

function somatorio(n) {
  let soma = 0;

  n = parseInt(n);

  if(isNaN(n)) return 'O valor informado deve ser um número';
  if(n < 0) return 'O valor informado deve ser positivo';
  if(n === 0) return soma;
  
  if(typeof n === 'number') {
    for (let i = 0; i < n.toFixed(0); i++) {
      if (i % 3 === 0 || i % 5 === 0) soma += i;
    }
    return soma;
  }
}

let node = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

node.setPrompt('Digite um número: ');
node.prompt();

node.on('line', (number) => {
  console.log(somatorio(number));
  node.close();
});