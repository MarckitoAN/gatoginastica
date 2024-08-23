<template>

    <div>
        <p @click="handleClick">
            Parágrafo: {{ paragraph }}
        </p>
    </div>

</template>

<script>
    export default {
        props: ['paragraph'],
        methods: {
            handleClick() {
                console.log('Clicar no parágrafo');
            }
        }
    }

</script>


<style>
    p{
        background-color: pink;
        font-weight: 400;
        cursor: pointer;
    }
</style>