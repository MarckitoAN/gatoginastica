<template>
    <form @submit.prevent='addAaaa'>
        <button type="button" @click="addCirculo"> A</button>
    </form>

<div>
    <p>Aaaa</p>
    <hr>
</div>

</template>


<script>
export default{
    data(){
    },
    methods: {
        addAaaa(){
            const aaaa = 'Aaaa';
            this.aList.push({
                aaaa
            }
        )
            }
        }
    }
</script>

<style>
</style>