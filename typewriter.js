let sentence = "hello there from lighthouse labs";

// sentence += "\n";

let x = 500;
const typeWriter = (input) => {
  input += "\n";
for (const char of input) {
  setTimeout(() => {
    process.stdout.write(char)
  }, x);
  x += 100
  
}
};


typeWriter(sentence)
typeWriter("You are doing great Sean")