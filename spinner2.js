const animationChars = ['|', '/', '-', '\\']; // Characters for the spinner animation
let delay = 100; // Initial delay in milliseconds

function animateSpinner() {
  for (const char of animationChars) {
    setTimeout(() => {
      process.stdout.write(`\r${char}   `);
    }, delay);
    delay += 200; // Increase the delay for the next character
  }

  setTimeout(() => {
    process.stdout.write('\n');
  }, delay); 
}

animateSpinner(); 
