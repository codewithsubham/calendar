import { GlobalData } from "./GlobalData";



export default class Init{



    constructor(SelectedYear){
        this.dates = new Date();
        let i = 0;
        GlobalData.year = SelectedYear;
        GlobalData.todayDay = this.dates.getDate()
        this.date = new Date(`jan ${SelectedYear}`);
        this.year = this.date.getFullYear();
        this.indexs = [0,1,2,3,4,5,6,6,5,4,3,2];
     
        while(i <= 11){
            // check  the track status
            // which let us know when 30 and 31 will be pushed in monthAndDate
            (this.indexs[i] == 1) ? (this.year % 4 == 0) ? GlobalData.monthAndDate[GlobalData.months[i]] = 29 :  GlobalData.monthAndDate[GlobalData.months[i]] = 28 : (this.indexs[i] % 2 == 0) ?   GlobalData.monthAndDate[GlobalData.months[i]] = 31 : GlobalData.monthAndDate[GlobalData.months[i]] = 30; 
            i++;
         }
    
    
         for(let k in GlobalData.months){
            let month = new Date(`${GlobalData.months[k]} , ${this.year}`);
            let numberOfDays = GlobalData.monthAndDate[GlobalData.months[month.getMonth()]];
            let j = 0;
            var l = 1;
            let onemonth = [];
              
               
            for(let i = 0 ;i <= numberOfDays + month.getDay()-1;i++){
                if(j  > 6){
                    j = 0;  
                }
                let smallObject = {};
                if(i<month.getDay()){
                
                    smallObject[GlobalData.days[j]] = null;
                    onemonth.push(smallObject);
                }else{
                    smallObject[GlobalData.days[j]] = l;
                    onemonth.push(smallObject);
                    l++;
                }
                j++;
    
            }
    
            GlobalData.DaysAndDates.push(onemonth);
            
        }   
            

        console.log(GlobalData.DaysAndDates);
    
        
    }

}