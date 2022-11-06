const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

let dayValue = 0;
let hourValue = 1;
let minuteValue = 1;
let secondsValue = 5;

const timeFunction = setInterval(() => {
    secondsValue--;
    if(secondsValue === 0){
        if(minuteValue > 0){
            minuteValue--;
            secondsValue = 60;
        }
      
    }
    if(minuteValue === 0 && secondsValue === -1){
        secondsValue = 0;
    } 
    if(minuteValue === 0){
        if (hourValue > 0){
           hourValue--;
           minuteValue = 60;

        }
       
    }
    if(hourValue === 0  ) {
       if (dayValue > 0){
            dayValue--;
            hourValue = 24;

        }

    }
   
   
    seconds.textContent = secondsValue;
    minutes.textContent = minuteValue;
    hours.textContent = hourValue;
    days.textContent = dayValue;

   
},1000)
