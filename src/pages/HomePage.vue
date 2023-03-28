<script>
    import axios from 'axios';
    import {store} from '../store.js';

    export default {
        name: 'HomePage',
        components:{

        },
        data(){
            return{
                store,
                apartments: [],
                currentPage: 1,
                lastPage: null,
                loading: true,
            }
        },
        methods:{
            getApartments(apartment_page){
                this.loading = true;
                axios.get(`${this.store.baseUrl}/api/apartments`, { params: {page: apartment_page}}).then((response) => {
                    if(response.data.success){
                        this.apartments = response.data.results.data;
                        this.currentPage = response.data.results.current_page;
                        this.lastPage = response.data.results.last_page;
                        this.loading = false;
                    }else{
                        alert('La chiamata non è andata a buon fine')
                    }
                    
                });
            }
        },
        mounted(){
            this.getApartments(this.currentPage);
        }
    }
</script>

<template>
    
    <div class="container">
        <div class="row">
            <div>
                <div v-if="loading" class="col-12 d-flex justify-content-center">
                    <div class="my-5 loader"></div> 
                </div>
                <div v-else class="col-12 d-flex justify-content-center flex-wrap">
                    <div class="row">
                        <div class="col-12 col-md-6 col-lg-4" v-for="project in projects" :key="project.id">
                            

                            <div class="card my-3">
                                <div class="card-body">
                                    <div class="card-img-top d-flex justify-content-center">
                                        <img :src="project.cover_image != null ? `${store.baseUrl}/storage/${project.cover_image}` : 'https://picsum.photos/300/200'" :alt="project.title" class="img-fluid">
                                    </div>
                                    <div class="card-title py-1 d-flex flex-column">
                                        <h5>{{ project.title }}</h5>
                                        <em> 
                                            <strong>Tipo: </strong> 
                                            <span  v-if="project.type">
                                                {{ project.type.name }}
                                            </span>
                                            <span v-else>
                                                Nessun tipo
                                            </span>
                                        </em>
                                        <em> 
                                            <strong>Tecnologie: </strong> 
                                            <span v-if="project.technologies.length > 0">
                                                <span class="badge bg-primary mx-1" v-for="item in project.technologies">{{ item.name }}</span>
                                            </span>
                                            <span v-else>
                                                Nessuna tecnologia
                                            </span>
                                        </em>
                                    </div>
                                    <div class="card-text py-1">
                                        {{ project.content }}
                                    </div>
                                    <router-link :to="{ name: 'SingleProject', params: { slug: project.slug } }" class="btn btn-sm btn-success my-3">
                                        Continua a leggere
                                    </router-link>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <nav>
                                <!-- <ul class="pagination">
                                    <li :class="currentPage == 1 ? 'disabled' : 'page-item'">
                                        <button class="page-link" @click="getProjects(currentPage - 1)">Prev</button>
                                    </li>
                                    <li :class="currentPage == i ? 'disabled' : 'page-item'" v-for="i in lastPage">
                                        <button class="page-link" @click="getProjects(i)">{{ i }}</button>
                                    </li>
                                    <li :class="currentPage == lastPage ? 'disabled' : 'page-item'">
                                        <button class="page-link" @click="getProjects(currentPage + 1)">Next</button>
                                    </li>
                                </ul> -->
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>

    .card-img-top{
        img{
            max-width: 300px;
        }
    }

</style>