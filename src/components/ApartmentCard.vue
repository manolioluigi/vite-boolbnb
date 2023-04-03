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
    <router-link :to="{ name: 'single_apartment', params: { slug: apartment.slug }}" class="link-apartment">
        <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-4">
                    <img :src="apartment.cover_img != null ? `${store.baseUrl}/storage/${apartment.cover_img}` : 'https://picsum.photos/400/300'" :alt="apartment.title" class="img-fluid rounded-start">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{{ apartment.title }}</h5>
                        <p class="card-text"><small class="text-body-secondary"><i class="fas fa-location-dot me-2"></i>{{ apartment.address }}</small></p>
                        <div class="card-text">
                            <ul class="list-unstyled d-flex flex-column">
                                <li class="me-4 pb-2"><i class="me-1 fas fa-door-closed"></i><span>{{apartment.room_n}} Local</span></li>
                                <li class="me-4 pb-2"><i class="me-1 fas fa-bed"></i><span>{{apartment.bed_n}} Bed</span></li>
                                <li class="me-4 pb-2"><i class="me-1 fas fa-shower"></i><span>{{apartment.bath_n}} Bath</span></li>
                                <li class="me-4 pb-2"><i class="me-1 fas fa-house-chimney"></i><span>{{apartment.square_meters}} Square Meters</span></li>
                            </ul>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </router-link>


</template>

<style lang="scss">
@use '../styles/generals.scss' as *;

.link-apartment{
    color: black;
    text-decoration: none;

    &:hover .card-body{
        color: black;
    }

    &:hover img{
        width: 200%;
        object-fit: cover;
    }



}

</style>