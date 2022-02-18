function esperar(ms) {
    const fim = Date.now() + ms;

    while(Date.now() < fim) {
    }
}

console.log("A");
esperar(2000);
console.log("B");