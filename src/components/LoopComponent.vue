<template>
    <div>
            <form @submit.prevent="addItem">  
                <input type="text" v-model="inputValue">
                <button @click="addItem" >Adicionar</button>
            </form>
            <table>
                <tr>
                    <td>index</td>
                    <td>key</td>
                </tr>
                <tr v-for="(item, index) in itens" :key="index">
                    <td>{{ index }}</td>
                    <td> {{ item }}</td>
                </tr>
            </table>
    </div>
</template>

<script>
export default {
    data() {
        return{ 
            itens:[],
            inputValue: ''
        }
    },
    methods:{
        addItem() {
            if (this.inputValue) {
                this.itens.push(this.inputValue)
            }
            this.inputValue = ''
        }
    }
}
</script>

<style>
</style>
