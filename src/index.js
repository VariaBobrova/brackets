module.exports = (str, bracketsConfig) => {
  let brackets = [];

  for (let i = 0; i < bracketsConfig.length; ++i) {
    brackets[i] = bracketsConfig[i].join('');
  }

  let ifIncludes = (s, arr) => {
    for (let element of arr) return s.includes(element) ? true : false;
  }
    
  function deletePairs(s) {
    if (!s) {
      return true;
    } else if (s.length === 1 || !ifIncludes(s, brackets)) {
      return false;
    } else {
      for (let element of brackets) {
        if (s.includes(element)) {
          s = s.replace(element, '');
        }
      }
      return deletePairs(s);
    }
  }

  return deletePairs(str);
}



  // let brackets = [];
  // for (let i = 0; i < bracketsConfig.length; ++i) {
  //   brackets[i] = bracketsConfig[i].join('');
  // }
  
  // function deletePairs(str) {
  //   let fin;
  //   if (str.length < 2) {
  //     fin = str;
  //   } else {
  //     for (let element of brackets) {
  //       if (str.includes(element)) {
  //         str = str.replace(element, '');
  //       }
  //     }
  //     deletePairs(str);
  //   }
  //   return fin;
  // }

  // return deletePairs(str) ? false : true;
