// 1299. Replace Elements with Greatest Element on Right Side ---> Leetcode problem

// ---------bigo of n^2----------

// let out = []
// for(let i=0; i<arr.length; i++){
// let max = -Infinity;
// if(i===arr.length-1){
//     out.push(-1)
//     break;
// }
// for(let j=i+1; j<arr.length; j++){
//     if(max<arr[j]){
//         max = arr[j]
//     }
// }
// out.push(max)
// }
// return out

// -----bigo of N--------

// let out = []
// let l = 0;
// let r = arr.length-1
// let max = -Infinity;


// for(let i=arr.length-1; i>=0; i--){
//     if(i===arr.length-1){
//         out.push(-1)
//         max = arr[i]
//     }
//     else{
//         out.push(max)
//         if(max<arr[i]){
//             max = arr[i]
//         }
//     }
// }
// while(l<=r){
//     [out[l],out[r]] = [out[r],out[l]]
//     l++,r--
// }
// return out

// -----bigo of N--------

// let initmax = -1;
// for(let i=arr.length-1; i>=0; i--){
//    let newmax = Math.max(initmax,arr[i]);
//    arr[i] = initmax;
//    initmax = newmax
// }
// return arr


// ---------------------------------------------------------------------------------------------------
