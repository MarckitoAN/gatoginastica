<template>
    <form @submit.prevent='addCirculo'>
        <input type="text" v-model="raio" placeholder="Raio">
        <button type="button" @click="addCirculo"> Calcular Área</button>
    </form>

<div v-for="(circulo, index) in circuloList" :key="index">
    <p>ID:{{index + 1}}</p>
    <p>Raio: {{circulo.raio}}</p>
    <p>Area: {{circulo.area}}</p>
    <hr>
</div>

</template>


<script>
export default{
    data(){
        return {
            circuloList:[],
            raio:'',
            area:''
        }
    },
    methods: {
        addCirculo(){
            const area = (Math.PI*(this.raio*this.raio));
            this.circuloList.push({
                raio:this.raio,
                area:area
            }
        )
            }
        }
    }
</script>

<style>
</style>