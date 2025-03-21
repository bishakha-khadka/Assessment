function count_inversion(arr) {
    let count=0;
    let length=arr.length;
    for(let i=0;i<length;i++){
        for (let j=i+1; j<length; j++) {
            if (arr[i]>arr[j]){
                count++;
            }
        }
    }
    return count;
}

const arr = [8,4,2,1];
console.log(count_inversion(arr));
