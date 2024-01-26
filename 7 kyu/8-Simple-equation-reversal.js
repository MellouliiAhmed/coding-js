// Simple equation reversal

// Given a mathematical equation that has *,+,-,/, reverse it as follows:

// solve("100*b/y") = "y/b*100"
// solve("a+b-c/d*30") = "30*d/c-b+a"
// More examples in test cases.

// Good luck!



function solve(eq) {
    let operations = ['*', '+', '-', '/'];
    let list = [];
    let currentOperand = '';

    for (let i = 0; i < eq.length; i++) {
        if (operations.includes(eq[i])) {
            list.push(currentOperand);
            list.push(eq[i]);
            currentOperand = '';
        } else {
            currentOperand += eq[i];
        }
    }
    list.push(currentOperand);
    return list.reverse().join('');
}

console.log(solve("100*b/y"))