var swap = function(array, firstIndex, secondIndex) {
    var temp2 = array[secondIndex];
    array[secondIndex] = array[firstIndex];
    array[firstIndex] = temp2;
};

var testArray = [7, 9, 4];
swap(testArray, 0, 1);

println(testArray);

//Program.assertEqual(testArray, [9, 7, 4]);