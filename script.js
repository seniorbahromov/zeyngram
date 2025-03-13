// alert('salom, dunyo')
// console.log('salom, dunyo')

var ism = 'zeyn';

console.log(ism);
ism = 'e';
// alert(Sism);

let yosh = 28;

console.log(yosh);

const salom = 'zeyn';
const sa = 'qalaysan';

console.log(salom, sa, 'sasa');
console.log('salom')

let nom = "Ali"; 
let familiya = 'Karimov';
// console.log(nom + " " + familiya); // Ali Karimov
console.log(nom, familiya)

let mavjud = true;
let ishlaydi = false;
console.log(mavjud && ishlaydi); // false

let x;
console.log(x); // undefined


let id = Symbol("id");
console.log(id); // Symbol(id)


let odam = {
    ism: "Ali",
    yosh: 25,
    kasb: "Dasturchi"
};
console.log(odam.ism); // Ali

const age = '27'
const amount = '123.34'

// console.log(age)
// console.log(amount)

console.log(Number(age));
console.log(parseInt(age))
console.log(parseFloat(age))

console.log(Number(amount));
console.log(parseInt(amount))
console.log(parseFloat(amount))

const page = 27;
const pageNumber = Number(age);

console.log(pageNumber)

const zzz = 'zeyn';

console.log(zzz)
console.log(Number(zzz))

console.log(Boolean(0))
console.log(Boolean(1))

console.log(Boolean(''))
console.log(Boolean('zeyn'))

console.log("5" - 2); // 3 (String avtomatik Number bo‘ldi)
console.log("5" + 2); // "52" (String sifatida qoldi)

console.log(true + 2)
console.log(false + 5)

// asosiy operatorlar

// arifmetik

console.log(10 + 5);  // 15  (qo‘shish)
console.log(10 - 5);  // 5   (ayirish)
console.log(10 * 5);  // 50  (ko‘paytirish)
console.log(10 / 5);  // 2   (bo‘lish)
console.log(10 % 3);  // 1   (bo‘lishdan qoldiq)
console.log(2 ** 3);  // 8   (daraja: 2 × 2 × 2)

// 2 taqqoslash

console.log(5 > 3);   // true  (5 katta 3 dan)
console.log(5 < 3);   // false (5 kichik emas)
console.log(5 == '5');  // true  (qiymati teng, lekin turi emas)
console.log(5 === '5'); // false (qiymat va turi ham tekshiriladi)
console.log(5 != 3);   // true  (5 va 3 har xil)
console.log(5 !== '5'); // true (tur va qiymati har xil)

console.log(18 > 5)
console.log("5" == 5)
console.log(18 === "18")

// 3 mantiqiy 

console.log(true && false); // false (ikkalasi ham true bo‘lishi kerak)
console.log(true || false); // true  (kamida bittasi true bo‘lsa yetarli)
console.log(!true);         // false (aksincha qilib beradi)

let yoshcha = 20;
console.log(yoshcha > 18 && yoshcha < 25); // true (18 dan katta va 25 dan kichik)
console.log(yoshcha < 18 || yoshcha > 25); // false (yoshcha 18 dan katta)
console.log(!(yoshcha < 18)); // true (yosh 18 dan kichik emas)
    

// 4 tayinlash operatori 

let soncha = 10;
soncha += 5;  // soncha = soncha + 5   => 15
soncha -= 3;  // soncha = soncha - 3   => 12
soncha *= 2;  // soncha = soncha * 2   => 24
soncha /= 4;  // soncha = soncha / 4   => 6
soncha %= 2;  // soncha = soncha % 2   => 0

let s = 1;
s += 1 
console.log(s)

let ab = 10
ab -= 3
console.log(ab)

let abdd = 10
abdd *= 2 
console.log(abdd)

let n = 5;
console.log(++n); // 6 (avval oshirib, keyin chiqaradi)
console.log(n++); // 6 (avval chiqarib, keyin oshiradi)
console.log(--n); // 6 (avval kamaytirib, keyin chiqaradi)
console.log(n--); // 6 (avval chiqarib, keyin kamaytiradi)

let yosh1 = 18;
let natijam = (yosh1 >= 18) ? "Kattalar" : "Bolalar";
console.log(natijam); // "Kattalar"

let bir = 1;
// let nat = (bir >= 1)
console.log(bir);

let tir = 14;
console.log(tir)

// tegilmasin 
    document.addEventListener("DOMContentLoaded", function() {
        document.querySelectorAll(".main-post__content img").forEach((img, index) => {
            img.src = `https://picsum.photos/420/420?random=${Math.random()}`;
        });
    });

    document.addEventListener("DOMContentLoaded", function() {
        document.querySelectorAll(".main-section__stories-photo").forEach((img, index) => {
            img.src =`https://picsum.photos/30/30?random=${Math.random()}`;
        });
    });

    document.addEventListener("DOMContentLoaded", function() {
        document.querySelectorAll(".main-post__logo-img").forEach((img, index) => {
            img.src =`https://picsum.photos/15/15?random=${Math.random()}`;
        });
    });