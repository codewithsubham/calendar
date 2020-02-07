import Init from './models/Initialization';
import { GlobalData } from './models/GlobalData';
import  *  as Header from './views/bareBone';
import * as Calendar from './views/calendar'
import Swipe from './views/Swipe';
import { Elements } from './models/Element';



// App state;∫∫

window.State = {};





const slider = e => {
    

    //this 
    State.Swipe.SlideCalendar(e.clientX - Elements.calendar.offsetLeft)

    
  
}

const touchSlider = e => {

    State.Swipe.TouchSlideCalendar(e.touches[0].pageX - Elements.calendar.offsetLeft)
    
}




let swipeEndAction = (startTouch,  touchEndPosition) => {



    Elements.CalendarHolder.removeEventListener('mousemove' ,slider)

    let SwipeTo = State.Swipe.SwipeCheck(startTouch , touchEndPosition);
    
    if(SwipeTo == 1){
        changeYearAndMonth(-1)
    }else if(SwipeTo == 0){
        changeYearAndMonth(1);
    }   
  

    GlobalData.startMouse = 0;

}


let changeYearAndMonth = (value) => {

//Elements.CalendarHolder.innerHTML = '';   
GlobalData.monthIndex += value

if(GlobalData.monthIndex > 11){
    GlobalData.DaysAndDates = []
    GlobalData.monthIndex = 0
    State.DateInit = new Init(GlobalData.year+=1);
}else if(GlobalData.monthIndex < 0){
    GlobalData.DaysAndDates = []
    State.DateInit = new Init(GlobalData.year-=1);
      GlobalData.monthIndex = 11
}


document.querySelectorAll('month_calendar')[0].style.left = "-40%";
document.querySelectorAll('month_calendar')[1].style.left = "50%";
State.Swipe.SlideCalendarAction()
//Calendar.RenderOneMonth(GlobalData.monthIndex);

}




window.addEventListener('load' , () => {

    // initializing app;
    // instance of Initialization Class

    State.DateInit = new Init(GlobalData.year);
    //console.log(GlobalData.DaysAndDates);

    // renderBearBone skeleton
    Header.renderBearBone();

    // Calendar part

    Calendar.RenderOneMonth(GlobalData.monthIndex);

     //initialiaze swipe class 
    State.Swipe = new Swipe(GlobalData.MouseXBuffer);

    // code for touch screen
    Elements.CalendarHolder.addEventListener('touchstart' , (e) => {
        
        GlobalData.startTouch = e.touches[0].pageX;
    
        
    })  
    
    Elements.CalendarHolder.addEventListener('touchmove' ,touchSlider);

    Elements.CalendarHolder.addEventListener('touchend', (e) => {
        //after touch end mouse position is saved in changedtches object
        swipeEndAction(GlobalData.startTouch,e.changedTouches[0].pageX)

    })
    

    // code for not touch

    Elements.CalendarHolder.addEventListener('mousedown' ,e => {

      GlobalData.startMouse = e.pageX;
      GlobalData.nextSliderCounter = 0

      //Calendar.RenderOneMonth(GlobalData.monthIndex+1);
      Elements.CalendarHolder.addEventListener('mousemove' ,slider)

      
    });

    window.addEventListener('mouseup' ,e => {
        swipeEndAction(GlobalData.startMouse,e.pageX)
        GlobalData.nextSliderCounter = 0

    });

});




