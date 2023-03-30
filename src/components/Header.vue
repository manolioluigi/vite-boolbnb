<script>

export default{
    name: 'Header',
    data() {
        return {
            menuItems: [
                {
                    label: 'Homepage',
                    routeName: 'homepage',
                },
                {
                    label: 'About Us',
                    routeName: 'about_us',
                },
            ]
        }
    },
}
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
// function openNav() {
//     document.getElementById("mySidenav").style.width = "250px";
//     document.getElementById("main").style.marginLeft = "250px";
// }
// /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
// function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
//     document.getElementById("main").style.marginLeft = "0";
// }
// let navside = document.getElementById("mySidenav")

// let btn_open = document.getElementById('btn-open')

// btn_open.addEventListener('click', function(){
//     navside.classList.remove('none-active')
//     navside.classList.add('active-block')
// })

</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <div>
                    <a class="navbar-brand" href="#">
                        <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c513.png" alt="logo" width="200">
                    </a>
                </div>
                <div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li>
                                <!-- <div>
                                    <div id="mySidenav" class="sidenav none-active">
                                        <div class="d-flex justify-content-between p-5">
                                            <div>
                                                <a href="#">About</a>
                                                <a href="#">Services</a>
                                                <a href="#">Clients</a>
                                                <a href="#">Contact</a>
                                            </div>
                                            <div>
                                                <i class="fas fa-xmark text-white fs-5" id="btn-close"></i>
                                            </div>
                                        </div>
                                    </div>
                                
                                     Use any element to open the sidenav 
                                    <button id="btn-open">Open</button>
                                
                                    Add all page content inside this div if you want the side nav to push page content to the right not used if you only want the sidenav to sit on top of the page 
                                    <div >
                                        
                                    </div>
                                </div> -->
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fas fa-user"></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="http://127.0.0.1:8000/login">Login</a></li>
                                    <li><a class="dropdown-item" href="http://127.0.0.1:8000/register">Register</a></li>
                                </ul>
                            </li>
                            <li class="nav-item" v-for="(item, index) in menuItems" :key="index">
                                <router-link :to="{name: item.routeName}" class="nav-link">
                                    {{ item.label }}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>

// .sidenav {
//   height: 100%; /* 100% Full-height */
//   width: 0vw; /* 0 width - change this with JavaScript */
//   position: fixed; /* Stay in place */
//   z-index: 1; /* Stay on top */
//   top: 0;
//   left: 0;
//   background-color: #111; /* Black*/
//   overflow-x: hidden; /* Disable horizontal scroll */
//   padding-top: 60px; /* Place content 60px from the top */
//   transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
// }

// /* The navigation menu links */
// .sidenav a {
//   padding: 8px 8px 8px 32px;
//   text-decoration: none;
//   font-size: 25px;
//   color: #818181;
//   display: block;
//   transition: 0.3s;
// }

// /* When you mouse over the navigation links, change their color */
// .sidenav a:hover {
//   color: #f1f1f1;
// }

// /* Position and style the close button (top right corner) */
// // .sidenav .closebtn {
// //   position: absolute;
// //   top: 0;
// //   right: 25px;
// //   font-size: 36px;
// //   margin-left: 50px;
// // }

// /* Style page content - use this if you want to push the page content to the right when you open the side navigation */
// #main {
//   transition: margin-left .5s;
//   padding: 20px;
// }

// .none-active{
//     display: none;
// }

// .active-block{
//     display: block;
//     width: 50vw;
// }

// /* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
// @media screen and (max-height: 450px) {
//   .sidenav {
//     padding-top: 15px;
// }
//   .sidenav a {font-size: 18px;}
// }


   
</style>
