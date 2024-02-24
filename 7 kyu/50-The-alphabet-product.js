// The alphabet product

// I have four positive integers, A, B, C and D, where A < B < C < D. The input is a list of the integers A, B, C, D, AxB, BxC, CxD, DxA in some order. Your task is to return the value of D.



function alphabet(ns) {
    let ns1 = ns.sort((a,b) =>a-b)
    let A = ns1[0];
    let B = ns1[1];
    // the 3 is AB or C ?
    if(ns1[2]==A*B){
        return ns1[ns1.length-1]/ns1[3]
    }
    else{
        return ns1[ns1.length-1]/ns1[2]
    }
  }

  console.log(alphabet([2,6,7,3,14,35,15,5]))