function leapYearCheck(year){

    if( year % 4 === 0){

            if(year%100 !== 0){
                console.log("its a leap year");
            }
            else{
                if(year%400 ===0){
                    console.log("its a leap year bcs %4 = 0 and %400 = 0");
                }
                else{
                    console.log('its not a leap year')
                }
            }
        
        
    }
    else{
        console.log("not a leap year bcs %4 != 0")
    }




    
}



leapYearCheck(2400)