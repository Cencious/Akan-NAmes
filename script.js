function getAkan(){
  let birthDate= document.getElementById("birthday").value;
  //alert(birthDate)
 // console.log(birthDate)
 let dateArray=birthDate.split("-")
 //alert(dateArray)
 let year=parseInt(dateArray[0])
 let month=parseInt(dateArray[1])
 let date=parseInt(dateArray[2])
 //alert(date)
 let century=Math.ceil(year/100)
 //alert(century)
 let dayOftheWeek=( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + date ) % 7
 //alert(dayOftheWeek)
 let day=Math.round(dayOftheWeek)
 //alert(dayOftheWeek)
 let gender=document.getElementById("gender").value;
 //alert(gender)
 let maleAkannames=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
 let femaleAkannames=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
 if((date <=0||date>31)||(month<=0||month>12)){
     alert("please enter a valid date and month")
 }
 if(gender==="male"){
     //alert(maleAkannames[day])
     document.getElementById("message").innerHTML="Your Akan name is " +maleAkannames[day]
 }
 else if(gender==="female"){
    document.getElementById("message").innerHTML="Your Akan name is " +femaleAkannames[day]
 }
 else{
     alert("choose a valid gender")
 }
 
     }
