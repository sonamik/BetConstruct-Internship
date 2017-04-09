/**
 * Created by Sona Mikayelyan on 4/9/2017.
 */
var sum=0;
for(var i=1; i<10; ++i){
    sum = add(sum, i);
}

console.log("sum is");
console.log(sum);

function add(x, y){
    return x + y;
}