var target = 17;
var array = [4,2,7,1,9,5]
var contigiousArray = []

// Logic for finding sum and contagious elements
function hasContiguousSubarray(arr, target) {
    let start = 0;
    let end = 0;
    let sum = 0;

    while (end < arr.length) {
        sum += arr[end];
        contigiousArray.push(arr[end]);

        while (sum > target) {
            sum -= arr[start];
            contigiousArray.shift();
            start ++;
        }

        if(sum === target) {
            return contigiousArray.slice();
        }

        end++;
    }
    return null;
}

var result = hasContiguousSubarray(array, target)

if(result !== null) {
    console.log("Output: true")
    console.log("Explaination: The subarray [ ",)
    for(var i = 0;i< result.length;i++){
        console.log(result[i] + ' ,')
    }
    console.log("which is equal to the target.")
}
else {
    console.log("Output: false")
}
