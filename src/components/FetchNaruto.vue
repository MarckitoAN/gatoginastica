
<template>
    <div class="container">
        <div class="row">
            <!--Exibe uma mensagem enquanto aguarda dados da api-->
            <div v-if="loading" class="col-12 text-center">
                <p>Carregando...</p>

            </div>

            <!--Exibe uma mensagem de erro caso a api falhe-->
            <div v-if="error" class="col-12 text-center">  
                <p>Ops, algum erro aconteceu;</p>
            </div>

            <div v-else v-for= "characters in characters" :key= "characters.id" class="col-md-4">
                <div class="card mb-4">
                    <img :src="characters.images[0]" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">{{ characters.name }}</h5>
                        <router-link :to="{name: 'detalhes', params: {id: characters.id}}">
                            Detalhes
                        </router-link>
                    </div>
                          
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                 Ver jutsus
                            </button>
                                <ul class="dropdown-menu">
                                    <li v-for="jutsu in characters.jutsu" :key="jutsu.id">
                                        <a class="dropdown-item">{{ jutsu }}</a>

                                    </li>
                                </ul>
                        </div>         
                </div>
            </div>      
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return{
            characters:[],
            images: [],
            jutsu: [],
            loading:true,
            error: false,
        }
    },
    methods:{
        fetchNewPage(){
            fetch('https://dattebayo-api.onrender.com/characters')
                .then(response =>{
                    if (!response.ok){
                        throw new Error ("NetWork error");
                    }
                    return response.json();
                })
                .then(data =>{
                    console.log(data)
                    this.characters = data.characters;
                    this.loading = false;
                })
                .catch(()=>{
                    this.error = true;
                    this.loading = false;
                })
        }
    },
    mounted (){
        this.fetchNewPage();
    }
}
</script>
<style>
.dropdown button{
    background-color: rgb(255, 0, 166);

}
</style>