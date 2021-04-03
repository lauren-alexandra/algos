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

// #622 Design Circular Queue

/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
   this.queue = new Array(k); 
   this.headIndex = 0; 
   this.count = 0;
   this.capacity = k; 
};

/**
* Insert an element into the circular queue. Return true if the operation is successful. 
* @param {number} value
* @return {boolean}
*/
MyCircularQueue.prototype.enQueue = function(value) {
   if(this.count === this.capacity) {
       return False;
   }
   this.queue[(this.headIndex + this.count) % this.capacity] = value;
   this.count += 1; 
   return True; 
};

/**
* Delete an element from the circular queue. Return true if the operation is successful.
* @return {boolean}
*/
MyCircularQueue.prototype.deQueue = function() {
   if(this.count === 0) {
       return False;
   }
   this.headIndex = (this.headIndex + 1) % this.capacity;
   this.count -= 1;
   return True; 
};

/**
* Get the front item from the queue.
* @return {number}
*/
MyCircularQueue.prototype.Front = function() {
   if(self.count === 0) {
       return -1; 
   }
   return this.queue[this.headIndex]; 
};

/**
* Get the last item from the queue.
* @return {number}
*/
MyCircularQueue.prototype.Rear = function() {
   if(self.count === 0) {
       return -1;
   }
   return this.queue[(this.headIndex + this.count - 1) % this.capacity];
};

/**
* Checks whether the circular queue is empty or not.
* @return {boolean}
*/
MyCircularQueue.prototype.isEmpty = function() {
   return this.count === 0; 
};

/**
* Checks whether the circular queue is full or not.
* @return {boolean}
*/
MyCircularQueue.prototype.isFull = function() {
   return this.count === this.capacity; 
};

/** 
* Your MyCircularQueue object will be instantiated and called as such:
* var obj = new MyCircularQueue(k)
* var param_1 = obj.enQueue(value)
* var param_2 = obj.deQueue()
* var param_3 = obj.Front()
* var param_4 = obj.Rear()
* var param_5 = obj.isEmpty()
* var param_6 = obj.isFull()
*/