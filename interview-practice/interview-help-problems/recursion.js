/*
344. Reverse String

Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place.

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
*/

// one way of doing two pointers (not recursion)
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    let backIndex = s.length - 1;
    
    for (let i = 0; i < s.length / 2; i++) {
        let currentLetter = s[i];
        s[i] = s[backIndex]; 
        s[backIndex] = currentLetter; 
        backIndex = backIndex - 1;
    }
    
    return s;
};

// two pointers (with recursion)

/*
Algorithm

Here is an example. Let's implement recursive function helper which receives two pointers, left and right, as arguments.

Base case: if left >= right, do nothing. (because already swapped)

Otherwise, swap s[left] and s[right] and call helper(left + 1, right - 1).

To solve the problem, call helper function passing the head and tail indexes as arguments: return helper(0, len(s) - 1).

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    const helper = (s, left, right) => {
        if (left < right) {
            // swap operation 
            let leftChar = s[left];
            s[left] = s[right];
            s[right] = leftChar;
            
            // recursive call to continue iteration
            helper(s, left + 1, right - 1);
        }
    }
    
    // init call
    helper(s, 0, s.length - 1);
};


/*
206. Reverse Linked List

Given the head of a singly linked list, reverse the list, and return the reversed list.

Example:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
*/

// Approach #1 (Iterative) 
/*
While you are traversing the list, change the current node's next pointer to 
point to its previous element. Since a node does not have reference to its 
previous node, you must store its previous element beforehand. You also need 
another pointer to store the next node before changing the reference. Do not 
forget to return the new head reference at the end!
*/
/*
Complexity analysis

Time complexity : O(n). Assume that nn is the list's length, the time complexity is O(n)O(n).

Space complexity : O(1).
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    
    let prev = null; 
    let curr = head;
    
    while (curr !== null) {
        let currentNext = curr.next; 
        curr.next = prev; // this is how you swap
        prev = curr;
        curr = currentNext; // this is how you continue
    }
    
    return prev; // modified linked list
};

// Approach #2 (Recursive)
/*
The recursive version is slightly trickier and the key is to work backwards. 
Assume that the rest of the list had already been reversed, now how do I reverse the front part?
*/
/*
Complexity analysis

Time complexity : O(n). Assume that n is the list's length, the time complexity is O(n)O(n).

Space complexity : O(n). The extra space comes from implicit stack space due to recursion. The recursion could go up to nn levels deep.
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    if (head === null || head.next === null) {
        return head;
    }
    
    let p = reverseList(head.next);
    head.next.next = head; 
    head.next = null; // this puts the node at the end
    
    return p; 
};


/*
486. Predict the Winner

You are given an integer array nums. Two players are playing a game with this array: player 1 and player 2.

Player 1 and player 2 take turns, with player 1 starting first. Both players start the game with a score of 0. At each turn, the player takes one of the numbers from either end of the array (i.e., nums[0] or nums[nums.length - 1]) which reduces the size of the array by 1. The player adds the chosen number to their score. The game ends when there are no more elements in the array.

Return true if Player 1 can win the game. If the scores of both players are equal, then player 1 is still the winner, and you should also return true. You may assume that both players are playing optimally.

 

Example 1:

Input: nums = [1,5,2]
Output: false
Explanation: Initially, player 1 can choose between 1 and 2. 
If he chooses 2 (or 1), then player 2 can choose from 1 (or 2) and 5. If player 2 chooses 5, then player 1 will be left with 1 (or 2). 
So, final score of player 1 is 1 + 2 = 3, and player 2 is 5. 
Hence, player 1 will never be the winner and you need to return false.
*/

/*
This is a general criteria for any arbitrary two player game and is commonly known as the Min-Max algorithm.

Approach #1 Using Recursion
The idea behind the recursive approach is simple. The two players Player 1 and Player 2 will be taking turns alternately. For the Player 1 to be the winner, we need score_{Player\_1} ≥ score_{Player\_2}. Or in other terms, score_{Player\_1} - score_{Player\_2} ≥ 0.

Thus, for the turn of Player 1, we can add its score obtained to the total score and for Player 2's turn, we can substract its score from the total score. At the end, we can check if the total score is greater than or equal to zero(equal score of both players), to predict that Player 1 will be the winner.

Thus, by making use of a recursive function winner(nums,s,e,turn) which predicts the winner for the numsnums array as the score array with the elements in the range of indices [s,e][s,e] currently being considered, given a particular player's turn, indicated by turn=1turn=1 being Player 1's turn and turn=-1turn=−1 being the Player 2's turn, we can predict the winner of the given problem by making the function call winner(nums,0,n-1,1). Here, nn refers to the length of numsnums array.

In every turn, we can either pick up the first(nums[s]nums[s]) or the last(nums[e]nums[e]) element of the current subarray. Since both the players are assumed to be playing smartly and making the best move at every step, both will tend to maximize their scores. Thus, we can make use of the same function winner to determine the maximum score possible for any of the players.

Now, at every step of the recursive process, we determine the maximum score possible for the current player. It will be the maximum one possible out of the scores obtained by picking the first or the last element of the current subarray.

To obtain the score possible from the remaining subarray, we can again make use of the same winner function and add the score corresponding to the point picked in the current function call. But, we need to take care of whether to add or subtract this score to the total score available. If it is Player 1's turn, we add the current number's score to the total score, otherwise, we need to subtract the same.

Thus, at every step, we need update the search space appropriately based on the element chosen and also invert the turnturn's value to indicate the turn change among the players and either add or subtract the current player's score from the total score available to determine the end result.

Further, note that the value returned at every step is given by turn *\text{max}(turn * a, turn * b)turn∗max(turn∗a,turn∗b). This is equivalent to the statement max(a,b)max(a,b) for Player 1's turn and min(a,b)min(a,b) for Player 2's turn.

This is done because, looking from Player 1's perspective, for any move made by Player 1, it tends to leave the remaining subarray in a situation which minimizes the best score possible for Player 2, even if it plays in the best possible manner. But, when the turn passes to Player 1 again, for Player 1 to win, the remaining subarray should be left in a state such that the score obtained from this subarrray is maximum(for Player 1).
*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
 const winner = (nums, s, e, turn) => {
    if (s === e) {
        return turn * nums[s];
    }

    let a = turn * nums[s] + winner(nums, s + 1, e, -turn);
    let b = turn * nums[e] + winner(nums, s, e - 1, -turn);

    return turn * Math.max(turn * a, turn * b);
};

var PredictTheWinner = function(nums) {
    return winner(nums, 0, nums.length - 1, 1) >= 0; 
};


