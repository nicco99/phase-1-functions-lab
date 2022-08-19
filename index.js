// Code your solution in this file!
 function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
if(someValue<=42) {
    return (42-someValue);
}else{
    return (someValue-42);
}

  }

  function distanceFromHqInFeet(someValue) {
    if(someValue<=42) {
        return (42-someValue)*264;
    }else{
        return (someValue-42)*264;
    }
  }

  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled


    if(destination<=start) {
        return (start-destination)*264
    }else {
return (destination-start)*264;
    }
  }
  


  function calculatesFarePrice(start, destination) {
    let newValue = distanceTravelledInFeet(start,destination);
if(newValue<400) {
    return 0;
} else if (newValue>400 && newValue<2000) {
    return (newValue-400)*0.02;
}else if (newValue>2000 && newValue<2500) {
    return 25;
} else if (newValue>2500){
    return "cannot travel that far";
}

  }
