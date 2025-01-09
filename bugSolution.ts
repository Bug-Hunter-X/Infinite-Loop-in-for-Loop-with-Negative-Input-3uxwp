function printNumbers(n: number): void {
  if (n < 0) {
    console.log('Input must be a non-negative number.');
    return;
  }
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); 
printNumbers(-5); //This will now print a message