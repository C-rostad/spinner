const spinArray = ["|","/","-","\\","|","/","-","\\","|"];

for (let i = 0; i < spinArray.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r ${spinArray[i]}`);
    if (i === spinArray.length - 1) {
      console.log();
    }
  }, (i * 200) + 100);
}