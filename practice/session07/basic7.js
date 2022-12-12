let n = prompt('Nhap so vao day');
if (n % 2) {
   console.log(`${n} la so le`);
} else {
    console.log(`${n} la so chan`);
}

// cách viết gọn
console.log(`${n} la so ${n % 2 === 0 ? "chan" : "le"}`);

// dùng cách switch
switch (n % 2) {
    case 0:
    console.log (`${n} la so chan`);
    break;
    default:
        console.log (n + "la so le");
    break;
}