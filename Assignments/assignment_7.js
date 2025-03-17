let obj = {
    "c": {
      "value": [
        517
      ],
      "b": {
        "a": {
          "b": {
            "h": {
              "value": [
                961
              ]
            }
          }
        }
      }
    },
    "f": {
      "value": [
        778,
        936,
        810
      ],
      "d": {
        "value": [
          969
        ]
      },
      "a": {
        "g": {
          "b": {
            "value": [
              708
            ]
          }
        }
      }
    },
    "e": {
      "value": [
        363
      ],
      "g": {
        "b": {
          "g": {
            "value": [
              68
            ]
          }
        },
        "e": {
          "f": {
            "b": {
              "value": [
                632
              ]
            }
          }
        }
      },
      "f": {
        "g": {
          "b": {
            "d": {
              "value": [
                537
              ]
            }
          }
        }
      }
    },
    "d": {
      "b": {
        "value": [
          547
        ]
      },
      "e": {
        "h": {
          "value": [
            884
          ]
        }
      },
      "a": {
        "d": {
          "h": {
            "value": [
              111
            ]
          }
        }
      },
      "h": {
        "b": {
          "c": {
            "d": {
              "value": [
                915
              ]
            }
          }
        }
      }
    },
    "g": {
      "f": {
        "value": [
          694
        ]
      },
      "d": {
        "b": {
          "value": [
            443
          ]
        },
        "h": {
          "value": [
            967
          ]
        }
      },
      "a": {
        "b": {
          "h": {
            "value": [
              502
            ]
          }
        }
      }
    },
    "b": {
      "h": {
        "value": [
          544
        ]
      },
      "e": {
        "c": {
          "value": [
            798
          ]
        }
      },
      "f": {
        "c": {
          "value": [
            912
          ]
        }
      }
    },
    "h": {
      "c": {
        "value": [
          264
        ]
      },
      "g": {
        "h": {
          "f": {
            "value": [
              130
            ]
          }
        }
      }
    },
    "a": {
      "e": {
        "f": {
          "a": {
            "h": {
              "value": [
                333
              ]
            }
          }
        }
      }
    }
  }

// Now make a function to convert this obj into an array like this one :-
// let arr = [[ 'c = 517', 'f = 778', 'f = 936', 'f = 810', 'e = 363' ],
// [ 'd.b = 547', 'g.f = 694', 'b.h = 544', 'f.d = 969', 'h.c = 264' ],
// [
//   'g.d.b = 443',
//   'b.e.c = 798',
//   'b.f.c = 912',
//   'd.e.h = 884',
//   'g.d.h = 967'
// ],
// [
//   'f.a.g.b = 708',
//   'g.a.b.h = 502',
//   'd.a.d.h = 111',
//   'e.g.b.g = 68',
//   'h.g.h.f = 130'
// ],
// [
//   'd.h.b.c.d = 915',
//   'e.g.e.f.b = 632',
//   'a.e.f.a.h = 333',
//   'e.f.g.b.d = 537',
//   'c.b.a.b.h = 961'
// ]];

// -----------------------------------------------------------------------------------------------------------------------------------------------

// Approach 1

// function convertObjToArray(obj) {
//   let result = [];
//   let tempGroup = [];
//   let count = 0;
//   let maxSize = 5;

//   function traverse(current, path) {
//     if(current.value) {
//       for(let number of current.value) {
//         let element = `${path.join('.')} = ${number}`;
//         tempGroup.push(element);
//         count++;
//         if(count % maxSize === 0) {
//           result.push(tempGroup);
//           tempGroup = [];
//         }
//       }
//     }

//     for(let key in current) {
//       if(key !== 'value') {
//         traverse(current[key], [...path, key]);
//       }
//     }
//   }
//     traverse(obj,[]);
//     if(tempGroup.length > 0) result.push([...tempGroup]);
//     return result; 
// }

// let arr = convertObjToArray(obj);
// console.log(arr);

// -----------------------------------------------------------------------------------------------------------------------------------------------

// Approach-2

function convertObjToArray(obj) {
  let flatArray = [];

  function traverse(current, path) {
    if(current.value) {
      for(let number of current.value) {
        let element = `${path.join('.')} = ${number}`;
        flatArray.push(element);
      }
    }
    for(let key in current) {
      if(key !== 'value') {
        traverse(current[key], [...path, key]);
      }
    }
  }

  traverse(obj,[]);

  flatArray.sort(compare);

  let maxSize = Math.sqrt(flatArray.length);
  let result = [];
  for(let i = 0; i < flatArray.length; i += maxSize) {
    result.push(flatArray.slice(i, i + maxSize));
  }
  return result;
}

function compare(a, b) {
  let firstLength = a.split(" = ")[0].split(".").length;
  let secondLength = b.split(" = ")[0].split(".").length;

  if(firstLength < secondLength) return -1;
  if(firstLength === secondLength) {
    if(a.split(" = ")[0].split(".")[0] < b.split(" = ")[0].split(".")[0]) return 0;
    else return 1;
  }
  else return 1;

}

let arr = convertObjToArray(obj);
console.log(arr);