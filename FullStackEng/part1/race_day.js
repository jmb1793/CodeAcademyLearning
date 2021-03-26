let raceNumber = Math.floor(Math.random() * 1000);
let early = true;

let runnerAge = 18;

if(runnerAge > 17 && early){
  raceNumber += 1000;
}

if(runnerAge > 18 && early){
  console.log('Your race will begin at 9:30 am and your race number is '+ raceNumber);
} else if(runnerAge > 18 && !early){
  console.log('Late adults run at 11:00 am and your race number is '+
  raceNumber);
} else if(runnerAge < 18){
  console.log('Youth Registracts run at 12:30 pm and your number is '+
  raceNumber);
} else {
  console.log('Please go to the registration desk');
}