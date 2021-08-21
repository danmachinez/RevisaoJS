function tabuadas(n){
    for (let i = 1; i <= 10; i++) {
        const tab = n + " * "+ n + " = " + n * i;
        console.log(tab);
    }
}

for (let i = 1; i <= 10; i++) {
    tabuadas(i)
    console.log('')
}