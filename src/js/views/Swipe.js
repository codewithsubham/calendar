import { GlobalData } from "../models/GlobalData";
import { Elements } from "../models/Element";
import {renderChangedMonth}   from "../views/calendar";
export default class Swipe{


    constructor(MousebufferValue){
        this.MousebufferValue = MousebufferValue;
    }

    // check swipe

    SwipeCheck(startPosX , endPosX){
        

        console.log(startPosX - endPosX)
        if(endPosX - startPosX > this.MousebufferValue){
          return 1;
         }else if(startPosX - endPosX > this.MousebufferValue){
            return 0;
        }else{
            return 2;
        }
    }    

    SlideCalendar(Xvalue){
        
        let calendarWitdh = Elements.calendar.getClientRects()[0].width
        
        Xvalue = Xvalue - (GlobalData.startMouse - Elements.calendar.getClientRects()[0].left)
        
        let leftPos = Xvalue / calendarWitdh * 100
        
        Elements.monthCalendar.style.left = (50 + leftPos) +'%';

        console.log(GlobalData.startMouse , Xvalue);

        this.preSliderRender(Xvalue , leftPos)    

    }
    
    TouchSlideCalendar(Xvalue){

        let calendarWitdh = Elements.calendar.getClientRects()[0].width
        //console.log(GlobalData.startTouch)
        Xvalue = Xvalue - (GlobalData.startTouch - Elements.calendar.getClientRects()[0].left)
       
        let leftPos = Xvalue / calendarWitdh * 100
        
        Elements.monthCalendar.style.left = (50 + leftPos) +'%';

    
        
    }

    SlideCalendarAction(){

        if(parseInt(Elements.monthCalendar.style.left) > 25 || parseInt(Elements.monthCalendar.style.left) < 75){
            Elements.monthCalendar.style.left = '50%';
           // document.querySelectorAll('month_calendar')[0].remove()
        }else{
           // document.querySelectorAll('month_calendar')[1].remove()
        
        }    


    }

    preSliderRender(TouchPos , leftPos){

        //check where slide position is left or right 
        //right is positive value and negative is left value
        
        let value = GlobalData.startMouse + TouchPos
        

        if(value > GlobalData.startMouse){
            // it is moving toward right side
           
            if(GlobalData.nextSliderCounter <= 0){
                
                Elements.CalendarHolder.insertAdjacentHTML('afterbegin' , renderChangedMonth(--GlobalData.monthIndex));   

            }
           

        }else if(value < GlobalData.startMouse){
            // it is moving toward left side

            if(GlobalData.nextSliderCounter <= 0){

                Elements.CalendarHolder.insertAdjacentHTML('beforeend' , renderChangedMonth(++GlobalData.monthIndex)); 
            }

           
        }



        document.querySelectorAll('month_calendar')[1].style.left = (140+leftPos)+'%';
        GlobalData.nextSliderCounter = 1;
    }

}