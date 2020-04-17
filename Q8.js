function shuffle(array,index) {
    let tempArr = [];
    for( index+1 ; index <=array.length ; index++){ 
        tempArr.push(array[index]) 
    }
    tempArr.sort(() => Math.random() - 0.5);
    let i;
    for ( let i in array){
        let j=0
        i = tempArr[j]
        j++;
    }
    return array
}
