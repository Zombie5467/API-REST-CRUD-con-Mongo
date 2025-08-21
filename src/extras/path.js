// import path from 'path'
// para no usar path.dirname o path.join los importamos directamente
import path from 'path'
import { dirname, join, parse } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, '/public/style.css')
const parseado = parse(filePath)

// console.log(__dirname, path.dirname(__dirname));
console.log(parseado);