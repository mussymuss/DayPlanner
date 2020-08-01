// current date format
$(document).ready(function() {
    $("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));

    // Current hour at moment in time
    var currentHour = moment().format("HH")

    // Save button clicks
    var saveButton = document.querySelectorAll(".saveBtn")
    $(saveButton).on("click",saveClick);

    function saveClick(event){
        // get values
        var target = event.target;
        var text = target.parentElement.querySelector(".description").value;
        var time =target.parentElement.getAttribute("id");

        // save in localStorage
        localStorage.setItem(time,text);
    }

    function currentTime(){
        $(".time-block").each(function(){
            var blockHour = $(this).attr("id").split("-")[1];
         
            if(currentHour > blockHour){
                $(this).addClass("past");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                
            } 
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
              }

        })
   
    }
    
    function dynamicBackground(){
        var background = document.getElementsByClassName("dynamicBackground");
        if(currentHour < 11){
           $(background).addClass("sunrise");
           $(background).removeClass("moon");
           $(background).removeClass("midday");
        }else if(18 < currentHour){
            $(background).addClass("moon");
            $(background).removeClass("sunrise");
            $(background).removeClass("midday");
        }else{
            $(background).addClass("midday");
            $(background).removeClass("sunrise");
            $(background).removeClass("moon");
        }
    }

    function getText(){
    $(".time-block").each(function(){
        var block = $(this).attr("id");
        // var addDescription =(this).attr("id").val(localStorage.getItem(this)); 
       var textSection = $(this).children()[1];

       $(textSection).val(localStorage.getItem(block));
    })
}
    dynamicBackground();
    currentTime();
    getText();

});
