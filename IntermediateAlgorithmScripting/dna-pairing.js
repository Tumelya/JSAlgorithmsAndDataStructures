const pairElement = (str) => {
    let result = [];
    for (let i = 0; i < str.length; i++) {
      switch (str[i]) {
        case "G":
        result.push(["G", "C"]);
        break;
        case "C":
        result.push(["C", "G"]);
        break;
        case "A":
        result.push(["A", "T"]);
        break;
        case "T":
        result.push(["T", "A"]);
        break;
      }
    }
    return result;
  }
  
  /*
  function pairElement(str) {
    // create object for pair lookup
    const pairs = {
      A: "T",
      T: "A",
      C: "G",
      G: "C"
    };
  
    // map character to array of character and matching pair
    return str
      .split("")
      .map(x => [x, pairs[x]]);
  }
  */
  
  pairElement("GCG");