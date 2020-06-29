function printFactor(n) {
    for(let i=1 ; i<=n ; i++){
        if(isFactor(i,n)) console.log(i)
    } 
}
function isFactor(i,n){
    return(n%i === 0)
}

printFactor(10)