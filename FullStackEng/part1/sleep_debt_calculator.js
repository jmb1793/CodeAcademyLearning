/*
Use functions, switch statements, control flow and loops to make simple sleep debt calculator.
3 Helper functions to calculate the amount of sleep needed and wanted. Called in main function to determine if 
over or under the hour quota
*/

const getSleepHours = day => {
    switch(day.toLowerCase()){
      case 'monday':
        return 8;
        break;
      case 'tuesday':
        return 7;
        break;
      case 'wednesday':
        return 8;
        break;
      case 'thursday':
        return 7;
        break;
      case 'friday':
        return 8;
        break;
      case 'saturday':
        return 8;
        break;
      case 'sunday': 
        return 8;
        break;
      default:
        return 'invalid day';
        break;
    }
  }
  
  const getActualSleepHours = () =>{
    let days = ['monday', 'tuesday', 'wednesday','thursday','friday', 'saturday', 'sunday'];
    let total = 0;
    for (day of days){
      total += getSleepHours(day); 
    }
    return total;
  }
  
  const getIdealSleepHours = (ideal) => {
    let idealHours = ideal;
    return idealHours*7;
  }
  
  const calculateSleepDebt = (ideal) => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours(ideal);
    let hourDifference = actualSleepHours - idealSleepHours
    if(actualSleepHours === idealSleepHours){
      console.log('You got the perfect amount of sleep.');
    } else if(actualSleepHours >= idealSleepHours){
      console.log(`You got ${hourDifference} hours more sleep than needed.`);
    } else {
      console.log(`You need to get ${-hourDifference} hours more sleep.`);
    }
  
  
  }
  
  calculateSleepDebt(7)