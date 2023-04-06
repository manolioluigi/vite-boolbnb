<script>
import {store} from '../store'

export default{
    name: "ApartmentCard",
    props:{
        apartment: Object,
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<template> 
    <router-link :to="{ name: 'single_apartment', params: { slug: apartment.slug }}" class="link-apartment" target="_blank">
        <div class="cards" id="cards-search">
            <div class="title">
                <h3 class="info-title">{{ apartment.title }}</h3>
            </div>
            <img class="cards-img" :src="apartment.cover_img != null ? `${store.baseUrl}/storage/${apartment.cover_img}` : 'https://picsum.photos/400/300'" :alt="apartment.title">
            <div class="cards-list p-4">
                <ul class="list-unstyled d-flex flex-column">
                    <li class="me-4 pb-2"><i class="me-1 fas fa-door-closed"></i><span>{{apartment.room_n}} Local</span></li>
                    <li class="me-4 pb-2"><i class="me-1 fas fa-bed"></i><span>{{apartment.bed_n}} Bed</span></li>
                    <li class="me-4 pb-2"><i class="me-1 fas fa-shower"></i><span>{{apartment.bath_n}} Bath</span></li>
                    <li class="me-4 pb-2"><i class="me-1 fas fa-house-chimney"></i><span>{{apartment.square_meters}} Square Meters</span></li>
                </ul> 
            </div>
        </div>
    </router-link>
</template>

<style lang="scss">
@use '../styles/generals.scss' as *;

.link-apartment{
    color: black;
    text-decoration: none;

    

    .cards{
        position: relative;
        cursor: pointer;
        width: 100%;
        height: 100%;

        .title{
            position: absolute;
            top: 0;
            bottom: 0;
            left: 25px;
            right: 0;
            height: 100%;
            width: 100%;
            z-index: 1;
           

            &:hover{
                color: black;
            }

            
        }
        // .info-title{
        //     background-color: white;
        // }
        
        .cards-img {
            display: block;
            width: 100%;
            height: 100%;
            border-radius: 1rem;
            transition: .5s ease;
            backface-visibility: hidden;
        }
    
        .cards-list {
            position: absolute;
            top: 50px;
            bottom: 0;
            left: 0;
            right: 0;
            height: 100%;
            width: 100%;
            opacity: 0;
            transition: .5s ease;
        }
    }
    .cards:hover .cards-img {
        opacity: 0.4;
    }
    .cards:hover .cards-list {
        opacity: 1;
        color: black;
        text-decoration: none;
    }
}

</style>