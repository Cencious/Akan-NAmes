function getAkan(){
  let birthDate= document.getElementById("birthday").value;
  //alert(birthDate)
 // console.log(birthDate)
 let dateArray=new Date(birthDate);
 //alert(dateArray)
 let year=dateArray.getFullYear()
 let month=dateArray.getMonth()
 let date=dateArray.getDay()
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
 if(month<=0||month>12){
     alert("please enter a valid date and month")
 }
 //alert(day)
 if(gender==="male"){
     //alert(day)
     document.getElementById("message").innerHTML="Your Akan name is " +maleAkannames[date]
 }
 else if(gender==="female"){
    document.getElementById("message").innerHTML="Your Akan name is " +femaleAkannames[date]
 }
 else{
     alert("choose a valid gender")
 }
     }
