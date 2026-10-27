const bcrypt = require('bcryptjs');

console.log('===========================================');
console.log('GENERADOR DE HASHES BCRYPT');
console.log('===========================================\n');

// Hash para admin (contraseña: 1234)
const hashAdmin = bcrypt.hashSync('1234', 8);
console.log('📌 ADMIN (contraseña: 1234):');
console.log(hashAdmin);
console.log('');

// Hash para juan (contraseña: abcd)
const hashJuan = bcrypt.hashSync('abcd', 8);
console.log('📌 JUAN (contraseña: abcd):');
console.log(hashJuan);
console.log('');

// Verificación en vivo
console.log('===========================================');
console.log('VERIFICACIÓN:');
console.log('admin/1234:', bcrypt.compareSync('1234', hashAdmin) ? '✅ OK' : '❌ FALLO');
console.log('juan/abcd:', bcrypt.compareSync('abcd', hashJuan) ? '✅ OK' : '❌ FALLO');
console.log('===========================================');