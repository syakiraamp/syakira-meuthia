//Dekalarasi Object
const karakter ={
    nama: "syakira",
    level: 5,
    hp: 100,
    senjata: "pedang",
};
//output
console.log(karakter.nama);
console.log(karakter.level);
console.log(karakter.hp);
console.log(karakter.senjata);
//output bracket notation
console.log(karakter["nama"]);
console.log(karakter["level"]);
console.log(karakter["hp"]);
console.log(karakter["senjata"]);
//template literal
console.log(`Nama karakter ini adalah ${karakter.nama} dengan level ${karakter.level} dan memiliki hp ${karakter.hp} serta menggunakan senjata ${karakter.senjata}`);
