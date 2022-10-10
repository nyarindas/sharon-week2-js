// creating arrays for day & names
const Days_of_the_week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const Male_Names = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
const Female_Names = ["Äkosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];


// var year = 1989;
// var century = 19;
// var month = 12;
// var day = 5;
// var gender = 'f'



console.log(yearOfBirth);

function calculateNameAndDay(century, year, month, day, gender){
    var indexOfTheDay = Math.round(( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7);       
    var dayTheUserWasBorn =  Days_of_the_week[indexOfTheDay] 
    var name = null;        

        if (gender === 'male'){
            name = Male_Names[indexOfTheDay];
        } else if (gender === 'female'){
            name = Female_Names[indexOfTheDay];
        } else{
            alert("Invalid gender, try again");
        }
        var list = [dayTheUserWasBorn, name];
        return list;
}

 
function age (){
    var userInputYear = parseInt(prompt("ConfirmEntertheYear:"));
    var userInputMonth = parseInt(prompt("ConfirmEntertheMonth:"));
    var userInputDay = parseInt(prompt("ConfirmEntertheDay:"));
    var userInputGender = prompt("ConfirmEntertheGender:");
    var userInputCentury = parseInt(userInputYear.toString().substring(0,2));

    calculateNameAndDay(userInputCentury,userInputYear,userInputMonth,userInputDay, userInputGender)


}

