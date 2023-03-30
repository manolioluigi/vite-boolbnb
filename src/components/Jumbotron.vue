<script>
export default {
    name: "Jumbotron",
    props:{
        jumbotron: Object,
    },
}
</script>

<template>
    <div class="container-jumbo">
        <div class="jumbo-title">
            <div class="col d-flex align-items-center">
                <div class="ciccio">
                    <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                        <button class="btn-boolBnB">
                            <img src="../../public/img/airbnb.svg" alt="logo" height="35" width="35">
                            <span>BOOLBNB</span>
                        </button>
                    </a>
                    <div class="offcanvas offcanvas-start" tabindex="3" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                        <div class="offcanvas-header">
                            <div class="d-flex">
                                <a href="#">
                                    <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c513.png" alt="logo" width="100">
                                </a>
                            </div>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <div>
                                <div>
                                    <h4 class="mb-3">Search your appartament</h4>
                                    <div class="container-input mb-3">
                                        <input type="text" placeholder="Search" name="text" class="input">
                                        <svg fill="#000000" width="20px" height="20px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z" fill-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <div class="d-flex align-items-center mb-3">
                                        <i class="fas fa-sliders"></i>
                                        <h4 class="mb-0">Filter</h4>
                                    </div>
                                    <div>
                                        <h5>Rooms</h5>
                                        
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col d-flex align-items-center flex-column text-center">
                <div>
                    <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c513.png" width="400" alt="logo">
                </div>
                <div>
                    <h3>Travel with emotion & experience</h3>
                </div>
            </div>
        </div>
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
</template>

<style lang="scss">

.container-jumbo{
    width: 100%;
    margin: 0 auto;
    height: 400px;
    position: relative;
    z-index: 1;

    .jumbo-title{
        position: absolute;
        z-index: 2;
        top: 80px;
        left: 540px;
    }

    .ciccio{
        position: absolute;
        z-index: 2;
        top: 200px;
        left: 130px;
    }

    .container-input {
        position: relative;
    }

    .input {
        width: 150px;
        padding: 10px 0px 10px 40px;
        border-radius: 9999px;
        border: solid 1px #333;
        transition: all .2s ease-in-out;
        outline: none;
        opacity: 0.8;
    }

    .container-input svg {
        position: absolute;
        top: 50%;
        left: 10px;
        transform: translate(0, -50%);
    }

    .input:focus {
        opacity: 1;
        width: 250px;
    }

    #footer-navmenu .wave-animation{
        -webkit-transform:rotate(180deg);
        -moz-transform:rotate(180deg);
        transform:rotate(180deg);
        bottom:initial;
        top:0;
        height:20em
    }

    #footer-navmenu{
        padding-top:50px;
        background:linear-gradient(to right, #654ea3, #eaafc8);
        position:relative
    }

    #footer-navmenu-container{
        max-width:1000px;
        margin:0 auto;
        text-align:center
    }

    #footer-navmenu ul{
        list-style:none;
        margin:0
    }

    #footer-navmenu ul li{
        display:inline-block;
        margin:6px 0
    }

    #footer-navmenu ul li:last-child::after{
        content:""
    }

    #footer-container {
        background:linear-gradient(to right, #654ea3, #eaafc8);
    }
    
    .wave-animation{
        display:block;
        width:100%;
        height:8em;
        max-height:100vh;
        margin:0;
        position:absolute;
        bottom:-10px
    }

    .wave-bg > use{
        -webkit-animation:move-forever 20s linear infinite;
        animation:move-forever 20s linear infinite
    }

    .wave-bg > use:nth-child(1){
        animation-delay:-2s;
        fill:rgba(232, 174, 199, 0.58);
    }

    .wave-bg > use:nth-child(2){
        animation-delay:-2s;
        animation-duration:10s;
        fill:rgba(232, 174, 199, 0.85);
    }

    .wave-bg > use:nth-child(3){
        animation-delay:-4s;
        animation-duration:8s
    }

    @-webkit-keyframes move-forever{
        0%{transform:translate(-90px,0%)}
        100%{transform:translate(85px,0%)}
    }

    @keyframes move-forever{
        0%{transform:translate(-90px,0%)}
        100%{transform:translate(85px,0%)}
    }

    .wave-animation{
        height:3em
    }

    .wave-animation{
        height:4em
    }

    .fa-sliders{
        margin-right: 10px;
    }

}
</style>