// #232 implement queue using stacks // success

var MyQueue = function() {
    this.elements = []; 
};

MyQueue.prototype.push = function(x) {
    return this.elements.push(x); 
};

MyQueue.prototype.pop = function() {
    return this.elements.shift(); 
};

MyQueue.prototype.peek = function() {
    return this.elements.slice(0, 1); 
};

MyQueue.prototype.empty = function() {
  return this.elements.length === 0;    
};


// #921 minimum add to make parentheses valid  // success

var minAddToMakeValid = function(S) {
    var a = 0;
    var balance = 0; 
    var parenArr = S.split("");
    parenArr.forEach(function(item) {
        if(item === '\(') {
            // if left paren increase balance
            balance++;
        } else {
            // if right paren decrease balance
            balance--; 
        }
        
        if(balance === -1) {
            a++;
            balance++; 
        }
    }); 
    // if 0 then balanced, valid
    return a + balance; 
};
