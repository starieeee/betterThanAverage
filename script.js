function betterThanAverage(classmateScore, myScore){
    let arr = classmateScore.reduce((a , b) => a + b, 0) / classmateScore.length;
    return myScore > arr;
}
console.log(betterThanAverage([100, 25, 70, 50, 125], 100));
