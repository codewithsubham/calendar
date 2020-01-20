import { GlobalData } from "../models/GlobalData";
import { Elements } from "../models/Element";

// Rendering functions
const GetFullYear = year =>{
            // for full;
            for (const i of GlobalData.DaysAndDates) {
               for (const j of i) {
                    for (const k in j) {
                        console.log(j[k]);   
                    } 
                } 
            }
        }   


// extra functions neeeded by RenderMonth
const Days = () => {
   // console.log(GlobalData.days);
     let String = '';   
    for (const iterator of GlobalData.days) {
     //   console.log(iterator);
        
        String += `<li> ${iterator } </li>`;
    }

    return String;
}

const Date = (month) => {

        let dates = '<ul>';
        let count = 1;
        
        // console.log(intervals);
        for (const i of GlobalData.DaysAndDates[month]) {
            for (const j in i) {
                console.log(i[j])
                dates = (i[j] == null) ? dates + `<li></li>` :(i[j] == GlobalData.todayDay) ? dates + `<li class='today'>${i[j]}</li>` : dates + `<li>${i[j]}</li>`
                count++;
                if(count > 7){
                    count = 1;
                    dates =  dates + `</ul><ul>`
                 }    


            }
            
            
        }
        dates =  dates + `</ul>`
        return dates;
}

const getOneMonth = month => {
    // for a single month;
    
    const markup = `<CalendarHolder>
    <Month_Calendar>
    <currentmonth>
   
    <span>${GlobalData.months[month]}</span> <span>${GlobalData.year}</span></currentmonth>
    <ul class='days'>${Days()}</ul>
    ${Date(month)}
    </Month_Calendar>
    </CalendarHolder>`;

//console.log(Elements.calendar);

Elements.calendar.insertAdjacentHTML('afterbegin' , markup);
   
}

// exports functions

export const RenderOneMonth = (month) => {
    getOneMonth(month);
    
}

export const RenderYear = (year) => {
    GetFullYear(year);
}