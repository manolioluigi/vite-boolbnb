<script>

export default {
   
}
</script>

<template>
    <div class="container-jumbo">
        <div id='footer-navmenu'>
            <svg class='wave-animation' preserveAspectRatio='none' viewBox='0 24 150 28' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
            <defs>
            <path d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z' id='gentle-wave'/>
            </defs>
            <g class='wave-bg'>
            <use fill='rgba(242,193,78,.5)' x='50' xlink:href='#gentle-wave' y='0'/>
            <use fill='rgba(242,193,78,.7)' x='50' xlink:href='#gentle-wave' y='3'/>
            <use fill='#fff' x='50' xlink:href='#gentle-wave' y='6'/>
            </g>
            </svg>
        </div>

    </div>




    <div class="container-jumbo">
        <div class="ocean">
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
        </div>
    </div>
    <div class="container-jumbo-reverso">
        <div class="ocean">
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
        </div>
    </div>
</template>

<style lang="scss">
.container-jumbo{

    width: 100%;
    margin: 0 auto;
    height: 200px;
    #footer-navmenu .wave-animation{-webkit-transform:rotate(180deg);-moz-transform:rotate(180deg);transform:rotate(180deg);bottom:initial;top:0;height:20em}#footer-navmenu{padding-top:50px;background:linear-gradient(to right, #654ea3, #eaafc8);position:relative}#footer-navmenu-container{max-width:1000px;margin:0 auto;text-align:center}#footer-navmenu ul{list-style:none;margin:0}#footer-navmenu ul li{display:inline-block;margin:6px 0}#footer-navmenu ul li:last-child::after{content:""}#footer-container {background:linear-gradient(to right, #654ea3, #eaafc8);}
    
    /* Wave Animation */
    .wave-animation{display:block;width:100%;height:8em;max-height:100vh;margin:0;position:absolute;bottom:-10px}.wave-bg > use{-webkit-animation:move-forever 20s linear infinite;animation:move-forever 20s linear infinite}.wave-bg > use:nth-child(1){animation-delay:-2s;fill:rgba(232, 174, 199, 0.58);}.wave-bg > use:nth-child(2){animation-delay:-2s;animation-duration:10s;fill:rgba(232, 174, 199, 0.85);}.wave-bg > use:nth-child(3){animation-delay:-4s;animation-duration:8s}@-webkit-keyframes move-forever{0%{transform:translate(-90px,0%)}100%{transform:translate(85px,0%)}}@keyframes move-forever{0%{transform:translate(-90px,0%)}100%{transform:translate(85px,0%)}}.wave-animation{height:3em}.wave-animation{height:4em}

}


// .container-jumbo{
//     width: 100%;
//     margin: 0 auto;
//     height: 180px;


//     /* for the pen */
//     // html, body {
//     // margin: 0;
//     // min-height: 100%;
//     // background-color: #f2f2f2;
//     // }

//     /* waves */
//     .ocean {
//     height: 200px; /* change the height of the waves here */
//     width: 100%;
//     position: absolute;
//     left: 0;
//     right: 0;
//     overflow-x: hidden;
//     }

//     .wave {
//     background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 88.7'%3E%3Cpath d='M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v31.8h800v-.2-31.6z' fill='%23003F7C'/%3E%3C/svg%3E");
//     position: absolute;
//     width: 200%;
//     height: 100%;
//     animation: wave 10s -3s linear infinite;
//     transform: translate3d(0, 0, 0);
//     opacity: 0.8;
//     }

//     .wave:nth-of-type(2) {
//     bottom: 0;
//     animation: wave 18s linear reverse infinite;
//     opacity: 0.5;
//     }

//     .wave:nth-of-type(3) {
//     bottom: 0;
//     animation: wave 20s -1s linear infinite;
//     opacity: 0.5;
//     }

//     @keyframes wave {
//         0% {transform: translateX(0);}
//         50% {transform: translateX(-25%);}
//         100% {transform: translateX(-50%);}
//     }
// }

// .container-jumbo-reverso{
//     width: 100%;
//     margin: 0 auto;
//     height: 180px;


//     /* for the pen */
//     // html, body {
//     // margin: 0;
//     // min-height: 100%;
//     // background-color: #f2f2f2;
//     // }

//     /* waves */
//     .ocean {
//     height: 200px; /* change the height of the waves here */
//     width: 100%;
//     position: absolute;
//     left: 0;
//     right: 0;
//     overflow-x: hidden;
//     transform: rotate(3.142rad);
//     }

//     .wave {
//     background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 88.7'%3E%3Cpath d='M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v31.8h800v-.2-31.6z' fill='%23003F7C'/%3E%3C/svg%3E");
//     position: absolute;
//     width: 200%;
//     height: 100%;
//     animation: wave 10s -3s linear infinite;
//     transform: translate3d(0, 0, 0);
//     opacity: 0.8;
//     }

//     .wave:nth-of-type(2) {
//     bottom: 0;
//     animation: wave 18s linear reverse infinite;
//     opacity: 0.5;
//     }

//     .wave:nth-of-type(3) {
//     bottom: 0;
//     animation: wave 20s -1s linear infinite;
//     opacity: 0.5;
//     }

//     @keyframes wave {
//         0% {transform: translateX(0);}
//         50% {transform: translateX(-25%);}
//         100% {transform: translateX(-50%);}
//     }
// }
   
</style>