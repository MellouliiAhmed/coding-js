// Curing Arachnophobia

// There is no single treatment that works for every phobia, but some people cure it by being gradually exposed to the phobic situation or object. In this kata we will try curing arachnophobia by drawing primitive spiders.

// Our spiders will have legs, body, eyes and a mouth. Here are some examples:

// /\((OOwOO))/\

// /╲(((0000w0000)))╱\

// ^(oWo)^
// You will be given four values:

// leg size where each value stands for its own leg type: 1 for "^ ^", 2 for "/\ /\", 3 for "/╲ ╱\", 4 for "╱╲ ╱╲"
// body size where each value stands for its own body type: 1 for "( )", 2 for "(( ))", 3 for "((( )))"
// mouth representing the spider's mouth
// eye representing the spider's eye
// Note: the eyes are symmetric, and their total amount is 2 to the power of body size.

// You will also be given only valid data. That's it for the instructions, you can start coding!


function drawSpider(legSize, bodySize, mouth, eye) {
    let listLeft =[];
    let listRight =[];
    switch(legSize){
        case 1 : listLeft.push('^') && listRight.push('^'); break; 
        case 2 : listLeft.push('/\\') && listRight.push('/\\'); break;
        case 3 : listLeft.push('/╲') && listRight.push('╱\\'); break;
        case 4 : listLeft.push('╱╲') && listRight.push('╱╲'); break;
    }
    switch(bodySize){
        case 1 : listLeft.push('(') && listRight.push(')'); break;
        case 2 : listLeft.push('((') && listRight.push('))'); break;
        case 3 : listLeft.push('(((') && listRight.push(')))'); break;
    }
    for(let i=0;i<Math.pow(2,bodySize)/2;i++){
        listLeft.push(eye) && listRight.push(eye);
    }
    listLeft.push(mouth);
    return listLeft.concat(listRight.reverse()).join('');
  }

  console.log(drawSpider(1, 1, "W", "o"))


















 
