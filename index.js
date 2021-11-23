// Code your solution in this file!
function distanceFromHqInBlocks(n){
    return Math.abs(n-42)
}
function distanceFromHqInFeet(n){
    return Math.abs(n-42)*264
}
function distanceTravelledInFeet(n,n1){
    return Math.abs(n-n1)*264
}
function calculatesFarePrice(start, destination){
    if (Math.abs(start - destination) *264 < 400){
        return 0
    }
   

    else if (Math.abs(start - destination) *264 > 2500 ){
    return 'cannot travel that far'
    }
    else if (Math.abs(start - destination) *264 > 2000){
        return 25;
    }
    else if (Math.abs(start - destination) *264  <= 2000){
        return (Math.abs(start - destination) *264 - 400) * 0.02
    }

}