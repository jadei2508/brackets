module.exports = function check(str, bracketsConfig) {
    let flag = true;
    let buff = [];
    let arr = str.split('');
    outer: for(let i = 0; i < arr.length; i++) {

         for (let j = 0; j < bracketsConfig.length; j++) {
            // for(let k = 0; k < bracketsConfig[j].length - 1; k++) {

            let buffer;
            if(buff.length !== 0) {
                buffer = buff.pop();
                // if(buffer === [] || buffer === undefined) {
                //     buffer = buff.pop();
                // }
            }
             if(i === 2 && j===1) {
                 console.log(i)
                 let g = arr[i];
                 let h =buffer;
                     let a = arr[i] === bracketsConfig[j][1];
                     let c = buffer !== bracketsConfig[j][0];
                     let d = buffer === arr[i];

             }
             // if(i === 80) {
             //     console.log(i)
             //     let g = arr[i];
             //     let h =buffer;
             //     let a = arr[i] === bracketsConfig[j][1];
             //     // let b = buffer !== undefined;
             //     let c = buffer !== bracketsConfig[j][0];
             //     let d = buffer === str[i];
             //     console.log(arr[i])
             // }

                if (bracketsConfig[j][0] === bracketsConfig[j][1] && buffer === arr[i]) {
                    // return false;
                    continue outer;

                } else if(arr[i] === bracketsConfig[j][0]) {

                        console.log(arr[i]);
                        if(buffer !== undefined) {
                            buff.push(buffer);
                        }
                        buff.push(arr[i]);
                        continue outer;
                } else if (arr[i] === bracketsConfig[j][1] && buffer !== bracketsConfig[j][0]) {/*&& buffer === arr[i]*/
                    return false;
                    // continue outer;
                } else if(arr[i] === bracketsConfig[j][1] && buffer === bracketsConfig[j][0]) {

                    continue outer;
                }  else{
                    if(buffer !== undefined) {
                        buff.push(buffer);
                    }
        }
            // }
        }
    }
    // your solution
    return buff.length === 0;
}

// for(let i = 0; i < arr.length; i++) {
//     if(i === 3) {
//         console.log(i)
//     }
//     outer: for (let j = 0; j < bracketsConfig.length; j++) {
//         // for(let k = 0; k < bracketsConfig[j].length - 1; k++) {
//         let buffer;
//         if(buff.length !== 0) {
//             buffer = buff.pop();
//             if(buffer === [] || buffer === undefined) {
//                 buffer = buff.pop();
//             }
//         }
//
//         if (arr[i] === bracketsConfig[j][0]) {
//             console.log(arr[i]);
//             buff.push(buffer);
//             buff.push(arr[i]);
//             continue outer;
//         } else {
//             if (arr[i] === bracketsConfig[j][1] && buffer !== bracketsConfig[j][0]) {
//                 // buff.pop();
//                 return false;
//             } else if(arr[i] === bracketsConfig[j][1] && buffer === bracketsConfig[j][0]){
//                 // buff.pop();
//             } else {
//                 buff.push(buffer);
//             }
//         }
//         // }
//     }
// }
