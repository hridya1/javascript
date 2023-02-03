//js program to print pyramid star pattern
let n = 4;
for( let i = 1; i <= n; i++) {
    for ( let j = 1; j <= n-i; j++){
        Process.stdout.write('  ');
    }
    for (let k =0; k < 1 * i - 1; k++) {
        process.stdout.write('* ');
    }
    console.log();
}

// js program to print stars in a rectangle pattern

for (let i = 1; i <= 5; i++) {
    let str = '';
    for (let j = 1; j <= 5; j++){
        str += '*';
    }
    console.log(str)
}