import { Elements } from "../models/Element"


// Rendering html

const RenderHeader = () =>{

    const markup = `<header class="header">
            <logo>
            <svg width="482" height="375" viewBox="0 0 482 375" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d)">
            <circle cx="275.5" cy="171.5" r="77.5" stroke="#F5F6B7" stroke-width="20" stroke-dasharray="15 15"/>
            </g>
            <g filter="url(#filter1_d)">
            <circle cx="275.5" cy="171.5" r="63.1009" fill="url(#paint0_linear)"/>
            </g>
            <g filter="url(#filter2_d)">
            <path d="M218.399 146.725C201.701 131.373 179.418 122 154.947 122C109.542 122 71.6735 154.268 63.0231 197.124C41.3544 205.579 26 226.677 26 251.366C26 283.506 52.0194 309.56 84.116 309.56C84.5082 309.56 84.899 309.56 85.2883 309.56C85.5335 309.56 85.7782 309.559 86.0222 309.559C121.1 313.605 194.228 314.258 318.295 310.014C350.164 310.014 376 283.67 376 251.174C376 218.678 350.164 192.335 318.295 192.335C318.124 192.335 317.953 192.336 317.782 192.337C305.467 163.305 276.631 142.933 243.022 142.933C234.438 142.933 226.165 144.262 218.399 146.725Z" fill="url(#paint1_linear)"/>
            </g>
            <defs>
            <filter id="filter0_d" x="107" y="0" width="375" height="375" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dx="19" dy="16"/>
            <feGaussianBlur stdDeviation="50"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.960784 0 0 0 0 0.964706 0 0 0 0 0.717647 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
            <filter id="filter1_d" x="131.399" y="24.3992" width="326.202" height="326.202" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dx="19" dy="16"/>
            <feGaussianBlur stdDeviation="50"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.960784 0 0 0 0 0.964706 0 0 0 0 0.717647 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
            <filter id="filter2_d" x="0" y="103" width="402" height="242.909" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="7"/>
            <feGaussianBlur stdDeviation="13"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.9375 0 0 0 0 0.316406 0 0 0 0 0.316406 0 0 0 0.58 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear" x1="338.601" y1="108.399" x2="224.178" y2="227.45" gradientUnits="userSpaceOnUse">
            <stop stop-color="#F4FFBC"/>
            <stop offset="1" stop-color="#F7ECB6"/>
            </linearGradient>
            <linearGradient id="paint1_linear" x1="316.5" y1="142" x2="149" y2="291.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="#C24E71"/>
            <stop offset="1" stop-color="#F06060"/>
            </linearGradient>
            </defs>
            </svg>
            
            </logo>
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

const RenderCalendarHolder = () => {

    const markup = `
        <CalendarHolder>

        </CalendarHolder>
    `;
    
    Elements.calendar.insertAdjacentHTML('afterbegin' , markup);

    Elements.CalendarHolder = document.querySelector('CalendarHolder');

}
// functions to call render functions
export const renderBearBone = () => {
   RenderHeader();
   RenderContent();
   RenderCalendarHolder()
}













