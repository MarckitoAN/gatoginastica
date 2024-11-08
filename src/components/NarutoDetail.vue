<template>
<div>
    <div>
        <div class="card text-center my-4">
            <div class="card-body">
                <div class="col-3">
                    <img :src="CharacterData.images[0]" class="img-thumbnail" alt="">
                </div>
                <div class="col-9">
                    <h2 class="card-title">{{ character.name }}</h2>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default{

}
</script>

<style>

</style>