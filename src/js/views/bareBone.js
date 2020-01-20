import { Elements } from "../models/Element"


// Rendering html

const RenderHeader = () =>{

    const markup = `<header class="header">
                 <div class="navbar">
                </div>  
        </header>`
        Elements.body.insertAdjacentHTML("afterbegin" , markup);

        // add Selector to element filesl;

        Elements.header = document.querySelector("header");

}

const RenderContent = () => {
    const markup = ` <content>
                         <time>
                            <clock_container>
                            </clock_container>
                         </time>
                        <calendar>
                    
                        </calendar>
                    </content>`;


    Elements.body.insertAdjacentHTML("beforeEnd" , markup);
    Elements.time = document.querySelector("time");
    Elements.calendar = document.querySelector("calendar");
}


// functions to call render functions
export const renderBearBone = () => {
   RenderHeader();
   RenderContent();
}













