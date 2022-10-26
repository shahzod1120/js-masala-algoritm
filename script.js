'use strict'

// *********** 1-dars TIP lar bo'limi **************

// M-1
// let s = +prompt('Sonni kiriting')
// console.log((s/100) + ' metr');

// M-2
// let m = +prompt('Sonni kiriting')
// console.log((m/1000) + ' tonna')

// M-3
// let A = +prompt('A kesmani kiriting')
// let B = +prompt('B kesmani kiriting')
// console.log((Math.floor(A/B)))

// M-4
// let s = +prompt('Sonni kiriting')
// console.log((Math.floor(s/10)) + " o'nlar honasidagi son");
// console.log((s%10) + " birlar honasidagi son")

// M-5
// let s = +prompt('Sonni kiriting')
// console.log(s + " sonining raqamlari yig'indisi " +  ((Math.floor(s/10)) + (s%10)));

// M-6
// let s = +prompt('Sonni kiriting')
// console.log(s + " sonining raqamlari ko'paytmasi " +  ((Math.floor(s/10)) * (s%10)));

// M-7
// let s = +prompt('Sonni kiriting')
// console.log((s%1000) + ' yuzlar honasidag son');

// M-8
// let s = +prompt('Sonni kiriting')
// console.log(`${Math.floor(s/3600)}:${Math.floor((s%3600)/60)}:${((s%3600)%60)}`)

// *********** 1-dars Mantiqiy amallar (if, else) **************

// M-1
// let s = +prompt('Sonni kiriting')
// if(s > 0){
//     console.log(true)
// }
// else{
//     console.log(false);
// }

// M-2
// let s = +prompt('Sonni kiriting')
// if(s%2 === 1){
//     console.log(true)
// }
// else{
//     console.log(false);
// }

// M-3
// let s = +prompt('Sonni kiriting')
// if(s%2 === 0){
//     console.log(true)
// }
// else{
//     console.log(false);
// }

// M-4
// let a = +prompt('a sonni kiriting');
// let b = +prompt('b sonni kiriting');
// let c;
// if(a > 0 && b > 0){
//     if((a*10)%10 === 0){
//         console.log(`${a} butun son`);
//     }
//     else{
//         console.log(`${a} butun son emas`);
//     }
//     if((b*10)%10 === 0){
//         console.log(`${b} butun son`);
//     }
//     else{
//         console.log(`${b} butun son emas`);
//     }
// }
// else{
//     console.log("Iltimos ikkala sonni ham musbat kiriting");
// }

// M-5
// let a = +prompt('a sonni kiriting');
// let b = +prompt('b sonni kiriting');
// let c = +prompt('b sonni kiriting');

// if(a>b && b>c){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

// M-6
// let a = +prompt('a sonni kiriting');
// let b = +prompt('b sonni kiriting');
// let c = +prompt('b sonni kiriting');

// if(a>=b && b>=c){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

// M-7
// let a = +prompt('a sonni kiriting');
// let b = +prompt('b sonni kiriting');
// if(a%2 === 1){
//     console.log(`${a} toq son`)
// }
// else{
//     console.log(`${a} toq son emas`)
// }
// if(b%2 === 1){
//     console.log(`${b} toq son`)
// }
// else{
//     console.log(`${b} toq son emas`)
// }

// M-8
// let a = +prompt('a sonni kiriting');
// let b = +prompt('b sonni kiriting');
// let c = +prompt('b sonni kiriting');
// let d = +prompt('b sonni kiriting');
// if(a>0 && b>0 && c>0 && d>0){
//     console.log(true)
// }
// else{
//     console.log(false)
// }

// M-9
// let a = +prompt('a sonni kiriting');
// let b = +prompt('b sonni kiriting');
// let c = +prompt('b sonni kiriting');
// if((a>0 && b>0) || (a>0 && c>0) || (b>0 && c>0)){
//     console.log(true)
// }
// else{
//     console.log(false)
// }

// M-10
// let s = +prompt('Sonni kiriting')
// if(s === 1){
//     console.log('Dushanba');
// }else if(s === 2){
//     console.log('Seshanba');
// }
// else if(s === 3){
//     console.log('Chorshanba');
// }
// else if(s === 4){
//     console.log('Payshanba');
// }
// else if(s === 5){
//     console.log('Juma');
// }
// else if(s === 6){
//     console.log('Shanba');
// }
// else if(s === 7){
//     console.log('Yakshanba');
// }
// else{
//     console.log('Bunday hafta kuni yo\'q')
// }

// M-11
// let raqam = +prompt('kodni kiriting')

// if(raqam === 93 || raqam === 94){
//     console.log("Usell");
// }
// else if(raqam === 90 || raqam === 91){
//     console.log("Beeline");
// }
// else if(raqam === 99){
//     console.log("Uzmobile");
// }
// else {
//     console.warn('Bunday kompaniya kodi mavjud emas !')
// }

// M-12
// let s = +prompt('Sonni kiriting')
// if(s > 0){
//     ++s;
//     console.log(s)
// }
// else{
//     --s;
//     console.log(s);
// }

// M-13
// let s = +prompt('Sonni kiriting')
// if(s > 0){
//     s+=3;
//     console.log(s)
// }
// else{
//     s-=2;
//     console.log(s);
// }

// M-14
// let a = +prompt('1-sonni kiriting')
// let b = +prompt('2-sonni kiriting')
// if(a > b){
//     console.log(a)
// }else{
//     console.log(b)
// }

// M-15
// let a = +prompt('1-sonni kiriting')
// let b = +prompt('2-sonni kiriting')
// let c = +prompt('2-sonni kiriting')
// if(a>b && a>c){
//     console.log(a)
// }else if(b>a & b>c){
//     console.log(b)
// }else{
//     console.log(c)
// }

// M-16
// let a = +prompt('1-sonni kiriting')
// let b = +prompt('2-sonni kiriting')
// let c = +prompt('2-sonni kiriting')
// if(a<b && a<c){
//     console.log(a)
// }else if(b<a & b<c){
//     console.log(b)
// }else{
//     console.log(c)
// }

