$(document).ready(function(){
    $(currentDay).text(moment().format('MMMM Do YYYY'));
   
//save hours to local storage
$("#hour9 .description").val(localStorage.getItem("hour-9"));
$("#hour10 .description").val(localStorage.getItem("hour-10"));
$("#hour11 .description").val(localStorage.getItem("hour-11"));
$("#hour12 .description").val(localStorage.getItem("hour-12"));
$("#hour13 .description").val(localStorage.getItem("hour-13"));
$("#hour14 .description").val(localStorage.getItem("hour-14"));
$("#hour15 .description").val(localStorage.getItem("hour-15"));
$("#hour16 .description").val(localStorage.getItem("hour-16"));
$("#hour17 .description").val(localStorage.getItem("hour-17"));



function trackTime (){
    let currentTime = moment().hours();
    console.log(currentTime)
    $(".time-block").each(function () {
    
        console.log("hello")
            let allTime = parseInt($(this).attr("id").split("-")[1]);
        
            if (allTime < currentTime){
                $(this).addClass("past");
            }
            console.log($(this))
            if (allTime === currentTime){
                $(this).addClass("present");
                $(this).removeClass("past");
            }
            if (allTime > currentTime){
                $(this).addClass("future");
                $(this).removeClass("past");
                $(this).removeClass("present");
            }
            })
        

}
trackTime()
})
