// usando common js modules.
// node esta transaccionando los módulos build in ECMAScript.

const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

function question() {
    rl.question('Introduce la ecuación: ', (input) => {
        if (input === 'quit') {
            rl.close();
        } else {
            try {
                const value = eval(input);
                console.log(`${value}`);
            } catch (exception) {
                console.log('datos inválidos');
            }

            question();
        }
    });
}

question();

// El error indica que el archivo 

// calc_common.js

//  está siendo tratado como un módulo ES debido a la configuración en el archivo 

// package.json

//  que contiene `"type": "module"`. En los módulos ES, no se puede usar 

// require

// , en su lugar se debe usar `import`.

// Para corregir este error, puedes cambiar el archivo para usar `import` en lugar de 

// require

// . Aquí tienes el código corregido:

/**
 * 
// node esta transaccionando los módulos build in ECMAScript.

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function question() {
    rl.question('Introduce la ecuación: ', (input) => {
        if (input === 'quit') {
            rl.close();
        } else {
            try {
                const value = eval(input);
                console.log(`${value}`);
            } catch (exception) {
                console.log('datos inválidos');
            }

            question();
        }
    });
}

question();
 * 
 */

// Alternativamente, si prefieres seguir usando 

// require

// , puedes cambiar la extensión del archivo a `.cjs` y asegurarte de que el archivo 

// package.json

//  no tenga `"type": "module"`.