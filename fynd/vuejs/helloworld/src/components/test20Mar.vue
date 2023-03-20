<script setup>
defineProps({
  info:{
    name:String,
    id:Number,
    required:true
  },
  data:{
    place:String,
    required:false
  }
})
</script>

<template>

    <header>
    <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/eg1">Examples</RouterLink>

    <RouterView/>
    </nav>
    </header>

    
<h1 class="greeting">Welcome...!</h1>
<h2 class="Inf">This is the Vuejs App which will help you to know the various things.</h2>
<h2 class="msg1">{{ info }}</h2>
<h2 class="msg2">{{ data }}</h2>
<h2 class="last">Thanks...!</h2>


</template>

<style scoped>
*{
    color: bisque;
}
.greeting{
font-family: 'Times New Roman', Times, serif;
color: plum;

}
.Inf{
    font-size: medium;
    font-family:'Times New Roman', Times, serif;
    color: black;
} 
.msg1{
    color: purple;
    font-weight: 100;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.msg2{
color: purple;
font-weight: 100;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.last{
    font-family: 'Times New Roman', Times, serif;
    color: red;
    font-weight: 300;
}

</style>