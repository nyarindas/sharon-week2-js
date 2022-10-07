const Days_of_the_week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const Male_Names = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
const Female_Names = ["Äkosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];


var century = 19;
var year = 1989;
var month = 12;
var day = 5;
var gender = 'f'



function calculateNameAndDay(century, year, month,day,gender){
        var indexOfTheDay = ( ( (century/4) -2*century-1) + ((5*YY/4) ) + ((26*(month+1)/10)) + day ) % 7;

        var dayTheUserWasBorn = Days_of_the_week[indexOfTheDay];
        var name = null;

        indexOfTheDay = Math.round(indexOfTheDay);

        if (gender === 'm'){
            name = Male_Names[indexOfTheDay];
        } else if (gender === 'f'){
            name = Female_Names[indexOfTheDay];
        } else{
            alert("Invalid gender, try again");
        }
        var list = [dayTheUserWasBorn, name];


        console.log(dayTheUserWasBorn);
}

