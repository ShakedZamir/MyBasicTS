const getAverage = ( array: number[]) => {
 let sum:number=0;
 let avg: number;
 let count: number=0;
 array.forEach((value) => {
 sum+=value;
 count++;
});
avg= sum/count;
console.log(avg);
}


const getAmountOfPositive =(arr : number[]) => {
let count:number=0;
arr.forEach((value) => {
  if(value>0) {
    count++;
}
});
console.log(count);
}

const sortList =(arr: number[]) => {
arr.sort();
for(let i=0;i<arr.length; i++) {
 console.log(arr[i]);   
}
}

sortList([-2 ,2,4,6, -3,-5]);


