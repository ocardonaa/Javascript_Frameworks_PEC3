function printArray(array: Array<number>): void {
       array.forEach(elem => {
              console.log(elem);
       });
       console.log(' ');
}

let array: number[] = [2, 3, 4];
console.log(array.shift()); //2
console.log(' ');
printArray(array); // 3,4
array.push(5);
printArray(array); // 3,4,5
console.log(array[array.length - 1]); //5
console.log(' ');
array.pop();
printArray(array); // 3,4
array.push(1);
printArray(array); // 3,4,1
array.unshift(8);
printArray(array); // 8,3,4,1

/** check if every number is greater than 3 */
const biggerThanThree = (num: number) => num > 3;
let everyisgreater = array.every(biggerThanThree);
console.log(everyisgreater);  //false
console.log(' ');

/** check if every number is less than 10 */
const lessThanTen = (num: number) => num < 10;
let everyisless = array.every(lessThanTen);
console.log(everyisless);  //true
console.log(' ');
console.log(array.sort()); //1,3,4,8
console.log(' ');
console.log(array.reverse()); //8,4,3,1
