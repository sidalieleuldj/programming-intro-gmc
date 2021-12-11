
function generatesum (n1 , n2){
    if (typeof n1 == "number"){
        if (typeof n2 == "number"){
            var sum = n1 + n2;
            console.log(sum)
        }else { 
            console.log("n2 must be a number")
        }
    }else{
        console.log("n1 must be a number")
    }
}

generatesum(20 , 5);