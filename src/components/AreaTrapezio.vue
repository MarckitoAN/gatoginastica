<template>
    <form @submit.prevent='addTrapezio'>
        <input type="text" v-model="height" placeholder="Altura">
        <input type="text" v-model="basemaior" placeholder="Largura do topo">
        <input type="text" v-model="basemenor" placeholder="Largura do fundo">
        <button type="button" @click="addTrapezio"> Calcular Área</button>
    </form>

<div v-for="(trapezio, index) in trapezioList" :key="index">
    <p>ID:{{index + 1}}</p>
    <p>Altura: {{trapezio.height}}</p>
    <p>Largura do topo: {{trapezio.basemaior}}</p>
    <p>Largura do fundo: {{trapezio.basemenor}}</p>
    <p>Area: {{trapezio.area}}</p>
    <hr>
</div>

</template>


<script>
export default{
    data(){
        return {
            trapezioList:[],
            height:'',
            basemaior:'',
            basemenor:'',
            area:''
        }
    },
    methods: {
        addTrapezio(){
            const area = (((this.basemaior+this.basemenor)*this.height)/2);
            
            this.trapezioList.push({
                height:this.height,
                basemaior:this.basemaior,
                basemenor:this.basemenor,
                area:area
            }
        )
            }
        }
    }
</script>

<style>
</style>