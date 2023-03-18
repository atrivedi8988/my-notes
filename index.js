
let arr = [1,2,3];
var final = []
function xyz(arr,newArr,final){
    if(arr.length==newArr.length){
        final.push(newArr)
        // console.log(final)
        // return 
        return console.log(newArr)
    }
    
    for(let i=0; i<arr.length; i++){
        newArr.push(arr[i])
        // xyz(arr,[...newArr])
        xyz(arr,newArr,final)
        newArr.pop()
    }
}

for(let i=0; i<arr.length; i++){
    xyz(arr,[],final)
}
console.log(final)