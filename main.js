/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n === 0) return 0;
    if(n === 1) return 1;
    var vec = [];
    vec[0] = 1;
    vec[1] = 2;
    
    for(i = 2; i < n + 1; i ++){
        vec[i] = vec[i-1] + vec[i - 2];
    }//end for i
    return vec[n-1];
};
