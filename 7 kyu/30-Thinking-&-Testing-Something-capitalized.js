// Thinking & Testing : Something capitalized

// No Story

// No Description

// Only by Thinking and Testing

// Look at result of testcase, guess the code!

// //return s.toUpperCase() ?
// Test.assertSimilar(testit(""), "", "")
// Test.assertSimilar(testit("a"), "A", "")
// Test.assertSimilar(testit("b"), "B", "")
// Test.assertSimilar(testit("a a"), "A A", "")
// Test.assertSimilar(testit("a b"), "A B", "")
// Test.assertSimilar(testit("a b c"), "A B C", "")
// //click "Submit" try more testcase...



function testit(s) {
    if (s.length === 0) return "";
    return s.split(' ').map((m) => {
        if (m.length === 0) return ""; 
        return m.slice(0, -1) + m[m.length - 1].toUpperCase();}).join(' ');
}


///////method2///////////

// const testit = s => s.replace(/.\b/g, c => c.toUpperCase())





  console.log(testit("aa"))