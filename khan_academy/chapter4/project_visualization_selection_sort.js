var displayArray = function(array) {
    textFont(createFont("monospace"), 12);
    
};

// Swap function.
var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

// Index of Minimum function
var indexOfMinimum = function(array, startIndex) {

    var minValue = array[startIndex];
    var minIndex = startIndex;

    for(var i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    } 
    return minIndex;
}; 

// Selection sort function
var selectionSort = function(array) {
    var index = 0;
    for(var i = 0; i < array.length; i++) {
        index = indexOfMinimum(array, i);
        swap(array, i, index);
    }
};

// Test vectors
var array = [22, 11, 99, 88, 9];
array = selectionSort(array);
array = [2.5,0.2,5.5,-1.2];
array = selectionSort(array);
array = [9,8,7,6,5,4,3,2,1];
array = selectionSort(array);
