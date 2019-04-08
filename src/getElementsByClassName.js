// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
// var getElementsByClassName = function(className, node = document.body) {
//     let output = [];
//     function recursiveHelper(className, node) {
//         if (node.classList.contains(className)) output.push(node);
//         for (let i = 0; i < node.children.length; i++) {
//                 recursiveHelper(className, node.children[i]);
//         }
//     }
//     recursiveHelper(className, node);
//     return output;
//   // recursive case: call get elements on all child nodes (node.children or childnodes?)
//   // base case: there are no child nodes --> identify if the desired class name is in element.classList
//     // return output.concat(??, getElementsByClassName(??));
// };


var getElementsByClassName = function(className, node = document.body) {
    let output = [];
    if (node.classList.contains(className)) {
        output.push(node);
    }
    for (let i = 0; i < node.children.length; i++) {
       output = output.concat(getElementsByClassName(className, node.children[i]));
    }
  // recursive case: call get elements on all child nodes (node.children or childnodes?)
  // base case: there are no child nodes --> identify if the desired class name is in element.classList
    // return output.concat(??, getElementsByClassName(??));
    return output;
};