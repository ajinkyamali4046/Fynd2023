<script setup>
defineProps({
    name:{
        type:String,
        required :true
    },
    pn:{
        type:Number,
        required:false
    }
})
</script>

<template>
<h1 class="nam">{{ name }}}</h1>
<h1 class="pn">{{ pn }}}</h1>
<h2 class="demo"> This is the Vue.Js Example we have done</h2>

</template>

<style scoped>

.demo{
    color: bisque;
    font-size: medium;
    font-family: 'Times New Roman', Times, serif;
}
 
.nam{
    font-family: 'Courier New', Courier, monospace;
    font-size: small;
}

.pn{
    font-size: small;
}

</style>