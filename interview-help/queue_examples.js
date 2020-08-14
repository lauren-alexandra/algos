// FIFO 

// #933 recent counter
var RecentCounter = function() {
    this.queue = []; 
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
   // add t to queue 
   this.queue.push(t); 
  
   // while queue first element < t - 3000 
   while(t - this.queue[0] > 3000) {  
      this.queue.shift();  // remove first element
   } 
  
   return this.queue.length; 
};


// Your input
// ["RecentCounter","ping","ping","ping","ping"]
// [[],[1],[100],[3001],[3002]]
// Output
// [null,1,2,3,4]
// Expected
// [null,1,2,3,3]