//BigInt
//2^53-1 = 9007199254740991

let limit = 9007199254740991;

console.log(limit + 1);//correct bcs it gives even num as OP
console.log(limit + 2);//wrong op but it is ODD
console.log(limit + 3);//correct
// to solve we use BigInt

let $limit = 9007199254740991n; // save as bigint we add "n"at last

console.log($limit + 1n);// always perform operation on bigint with bigint num only
console.log($limit + 2n);
console.log($limit + 3n);

console.log(typeof limit);
console.log(typeof $limit);

let periyaNumber = 12345678910n;

console.log(periyaNumber + 2025n);
