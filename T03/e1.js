const arr =  [1,2,3,4,5,6,7,8]

for (let index = 0; index < arr.length; index++) {
    console.log((arr[index]*3)-10);   
}
arr.forEach(
    function(e){
    console.log((e*3)-10)
})
arr.forEach(e => console.log((e*3)-10));