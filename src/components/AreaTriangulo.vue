<template>
    <form @submit.prevent='addTriangulo'>
        <input type="text" v-model="lado" placeholder="Lado">
        <button type="button" @click="addTriangulo"> Calcular Área</button>
    </form>

<div v-for="(triangulo, index) in trianguloList" :key="index">
    <p>ID:{{index + 1}}</p>
    <p>lado: {{triangulo.lado}}</p>
    <p>Area: {{triangulo.area}}</p>
    <hr>
</div>

</template>


<script>
export default{
    data(){
        return {
            trianguloList:[],
            lado:'',
            area:''
        }
    },
    methods: {
        addTriangulo(){
            const area = ((this.lado*this.lado)*(Math.SQRT(3))/4);
            this.trianguloList.push({
                lado:this.lado,
                area:area
            }
        )
            }
        }
    }
</script>

<style>
</style>