const sentence = "hello there from lighthouse labs";
let start =0 ;
for (const char of sentence) {
  setTimeout(() => {process.stdout.write(char);}, start);
  start+=100;
};
setTimeout(() => {process.stdout.write("\n");}, start);
