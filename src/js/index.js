import Init from './models/Initialization';
import { GlobalData } from './models/GlobalData';
import  *  as Header from './views/bareBone';
import * as Calendar from './views/calendar'



// App state;

window.State = {};





window.addEventListener('load' , () => {

    // initializing app;
    // instance of Initialization Class

    State.DateInit = new Init(2020);
    //console.log(GlobalData.DaysAndDates);

    // renderBearBone skeleton
    Header.renderBearBone();



    // Calendar part

    Calendar.RenderOneMonth(0);

})