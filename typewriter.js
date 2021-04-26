let sentence = "hello there from lighthouse labs";

sentence += "\n";

let x = 500;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char)
  }, x);
  x += 100
  
}


