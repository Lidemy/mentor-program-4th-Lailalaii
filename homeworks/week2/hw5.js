function join(arr, concatStr) {
    if (arr.length === 0){ //special case
        return '';
    }


    let ans =''
    for (let i=0; i<(arr.length-1); i++){
        ans += arr[i] + concatStr
    }
    ans += arr[arr.length-1]//最後一個要分開加，不然會多一個concatStr
    //console.log('ans:',ans)
    return ans
}

function repeat(str, times) {
    let ans = ''
    for (let i=0 ; i<times ; i++){
        ans += str
    }
    return ans  
}

//console.log(join(["aaa", "bb", "c", "dddd"], ',,'))