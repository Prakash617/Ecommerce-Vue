<template lang="">
    <div>
        <p v-for="item in items" :key="item">hello work{{item}}</p>
        <div>
         
        </div>
    </div>
</template>
<script setup>  

const  items = [1,2,3,4,5]
</script>


<style lang="">
    
</style>