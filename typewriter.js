const typeWriter = (input) => {
  input += "\n";
  let x = 500;
    for (const char of input) {
      setTimeout(() => {
      process.stdout.write(char)
  }, x);
  x += 100  
  }
};

typeWriter("Sean Rules")

module.exports = {
  typeWriter,
}