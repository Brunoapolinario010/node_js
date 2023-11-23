const readline = require('readline');

function somatorio(n) {
  let soma = 0;
  for (let i = 0; i < n; i++) {
    if (i % 3 === 0 || i % 5 === 0) soma += i;
  }
  return soma;
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