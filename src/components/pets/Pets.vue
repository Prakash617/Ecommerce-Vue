<template>
  <div>
    
    <section class="min-h-screen body-font text-gray-600">
      <div class="container mx-auto px-5 py-10">
        <div class="-m-4 flex flex-row flex-wrap">
        

            <Pet :pet="pet" v-for="pet in pets" :key="pet.id"  @remove-pet="$emit('remove-pet', pet.id)" @edit-pet="$emit('edit-pet',pet)"  @add-favorate="$emit('add-favorate',pet.id) "/>
        
        </div>

      </div>
    </section>
  </div>
</template>

<!-- <script setup>
import Pet from "./pet.vue";


const props = defineProps(['pets'])

</script> -->
<script setup>
import Pet from './pet.vue';
const props = defineProps(['pets']);

</script>
<style scoped>
</style>
