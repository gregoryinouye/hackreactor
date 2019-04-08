// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node = document.body) {
    let output = [];
    if (node.classList.contains(className)) output.push(node);
    function recursiveHelper(className, node) {
        for (let i = 0; i < node.children.length; i++) {
            if (node.children[i].classList.contains(className)) {
                output.push(node.children[i]);
            }
            recursiveHelper(className, node.children[i]);
        }
    }
    recursiveHelper(className, node);
    return output;
  // recursive case: call get elements on all child nodes (node.children or childnodes?)
  // base case: there are no child nodes --> identify if the desired class name is in element.classList
    // return output.concat(??, getElementsByClassName(??));
};


// var getElementsByClassName = function(className, node = document.body) {
//     let output = [];
//     if (node.children.length === 0) {
//         if (node.classList.contains(className)) {
//             output.push(node);
//         }
//     } else {
//         for (let i = 0; i < node.children.length; i++) {
//             if (node.children[i].classList.contains(className)) {
//                 output.push(node.children[i]);
//             }
//             output.push(getElementsByClassName(className, node.children[i]));
//         }
//     }   
//     return output;
//   // recursive case: call get elements on all child nodes (node.children or childnodes?)
//   // base case: there are no child nodes --> identify if the desired class name is in element.classList
//     // return output.concat(??, getElementsByClassName(??));
// };