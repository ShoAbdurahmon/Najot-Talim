// Task 1

function katta_kichik(array){
    largest = 0;
    for(i of array){
        if(i > 0){
            largest = i;
        }
    }
    console.log(largest)
}

katta_kichik([23,234,345,3,6,3,53,5,2,53,5,55645]);

// Task 2

function create_arr(min, max){
    arr = []
    for (let i = min; i <= max; i += 1){
        arr.push(i)
    }
    console.log(arr)
}

create_arr(3,90)


// Task 3


arr1 = [12,2,34,3,4656,557,6,undefined, null, false, true,];

function includes(arr, data){
    for (i of arr){
        if(i === data){
            return true;
        }
    }
    return false;
}
console.log(includes(arr1, 544))


