let arr = [[ 'c = 517', 'f = 778', 'f = 936', 'f = 810', 'e = 363' ],
[ 'd.b = 547', 'g.f = 694', 'b.h = 544', 'f.d = 969', 'h.c = 264' ],
[
  'g.d.b = 443',
  'b.e.c = 798',
  'b.f.c = 912',
  'd.e.h = 884',
  'g.d.h = 967'
],
[
  'f.a.g.b = 708',
  'g.a.b.h = 502',
  'd.a.d.h = 111',
  'e.g.b.g = 68',
  'h.g.h.f = 130'
],
[
  'd.h.b.c.d = 915',
  'e.g.e.f.b = 632',
  'a.e.f.a.h = 333',
  'e.f.g.b.d = 537',
  'c.b.a.b.h = 961'
]];

// Now make a function which converts the above array arr into an object like the below one val. 
// let val = {
//     f : {
//         value : [778, 936, 810],
//         d : {
//             value : 969
//         },
//         a : {
//             g : {
//                 b : {
//                     value : 708
//                 }
//             }
//         }
//     },
//     e : {
//         value : 363,
//         g : {
//             b : {
//                 g : {
//                     value : 68
//                 }
//             },
//             e : {
//                 f : {
//                     b : {
//                         value : 632
//                     }
//                 }
//             }
//         },
//         f : {
//             g : {
//                 b : {
//                     d : {
//                         value : 537
//                     }
//                 }
//             }
//         }
//     }
// }

// console.log(Object.fromEntries(arr)); // isse toh yeah array object mein convert nhi hoga

function arrToObject(arr) {
    let result = {};
    arr.forEach(element => {
        
        element.forEach(item => {
            let [key, value] = item.split(" = "); //item = 'd.h.b.c.d = 915'and the returned array is ['d.h.b.c.d', '915'] then key = 'd.h.b.c.d' and value = '915'
            let keyHierarchy = key.split("."); // keyHierarchy = ['d', 'h', 'b', 'c', 'd']
            value = Number(value); // key and value are strings destructured from the array returned by item.split(" = "), first one is key string and second one is value string.
            
            let current = result;
            for(let i = 0; i < keyHierarchy.length; i++) {
                let keyCharacter = keyHierarchy[i];
                if(i === keyHierarchy.length - 1) {
                    if(current[keyCharacter] && current[keyCharacter].value) {
                        current[keyCharacter].value.push(value);
                    }
                    else if(current[keyCharacter]) {
                        current[keyCharacter].value = [value];
                    }
                    else {
                        current[keyCharacter] = { value : [value] };
                    }
                }
                else {
                    if(current[keyCharacter]) {
                        current = current[keyCharacter];
                    }
                    else {
                        current[keyCharacter] = {};
                        current = current[keyCharacter];
                    }
                }
                
            }

        })
        
    });
    return result;
}

// console.log(arrToObject(arr));
let resultObject = arrToObject(arr);
console.log(JSON.stringify(resultObject, null, 2));