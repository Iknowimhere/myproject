// let time=()=>{
//     let element=document.querySelector("h1")


//     let date=new Date();
//     hours=date.getHours(),
//     min=date.getMinutes(),
//     sec=date.getSeconds();


//     let day;
//     day=hours<12? "AM":"PM";
//     hours=hours>12 ? hours-12:hours;
//     hours=hours==0?(hours=12):hours;



//     hours=hours<10?`0${hours}`:hours;
//     min=min<10?`0${min}`:min;
//     sec=sec<10?`0${sec}`:sec;

//     element.innerHTML=`${hours}:${min}:${sec}`;


// }

// time()
// setInterval(time,1000)


let time=()=>{
    let element=document.querySelector("h1")


    let date=new Date();
    hours=date.getHours(),
    min=date.getMinutes(),
    sec=date.getSeconds(),
    mon=date.getMonth();
    

    let day;
    day=hours<12? "AM":"PM";

    let month=["jan","feb","march","april","may","jun","jul","aug","sep","oct","nov","dec"]

   

   

    hours=hours<10?`0${hours}`:hours;
    min=min<10?`0${min}`:min;
    sec=sec<10?`0${sec}`:sec;
    mont=month[mon]
    


    element.innerHTML=`${hours}:${min}:${sec}:${day}:${mont}`
}

time()  
setInterval(time,1000)