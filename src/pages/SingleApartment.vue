<script>
import { store } from '../store';
import axios from 'axios';

export default {
    name: 'SingleApartment',
    data(){
        return{
            store,
            apartment: null,
            loading: true,
        }
    },
    mounted() {
        this.store.loading = true
        axios.get(`${this.store.baseUrl}/api/apartments/${this.$route.params.slug}`).then((response) => {
            if(response.data.success){
                this.apartment = response.data.results,
                this.loading = false
            }
            else{
                // redirect 404
                this.$router.push({ 'name': 'not_found' })
            }
        })
    }
}
</script>

<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12 d-flex justify-content-center mt-5" v-if="loading">
                <div class="loader"></div>
            </div>
            <div class="col-12" v-else>
                <div class="float-end">
                    <router-link :to="{ name: 'homepage' }" class="btn btn-sm btn-success my-2">
                        Back to apartment
                    </router-link>
                </div>
                <div class="card mt-5">
                    <div class="card-img-top">
                        <div class="cover-img">
                            <img class="img-fluid" :src="apartment.cover_img != null ? `${store.baseUrl}/storage/${apartment.cover_img}` : 'https://picsum.photos/400/200'">
                        </div>
                    </div>
                    <div class="card-title mt-3">
                        <h2>{{ apartment.title }}</h2>
                    </div>
                    <div class="card-body">
                        <p>{{ apartment.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .cover-img{
        width: 300px;
    }
</style>