function getAkan(){
  let birthDate= document.getElementById("birthday").value;
  //alert(birthDate)
 // console.log(birthDate)
 let dateArray=birthDate.split("-")
 //alert(dateArray)
 let year=dateArray[0]
 let month=dateArray[1]
 let date=dateArray[2]
 //alert(date)
 let century=Math.ceil(year/100)
 //alert(century)
 let dayOftheWeek=( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + date ) % 7
 //alert(dayOftheWeek)
 let day=Math.round(dayOftheWeek)
 //alert(day)
 let gender=document.getElementById("gender").value;
 //alert(gender)
 let maleAkannames=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
 let femaleAkannames=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
 

     }
