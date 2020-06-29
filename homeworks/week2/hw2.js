function capitalize(str) {     
    if( str[0] >= 'a' && str[0] <= 'z'){
        let upper = str.charCodeAt(0) - 32
        let ans = str.replace(str[0],String.fromCharCode(upper))//不能直接改字串，因為 immutable
        return ans //把第一個字轉成大寫之後「回傳」
    }else{
        return str
    }  
}

console.log(capitalize('nick'))
