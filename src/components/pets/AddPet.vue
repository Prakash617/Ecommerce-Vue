<template>

  <form class=" w-5/6 mx-auto" @submit.prevent="onSubmit">

    <div class="mb-6">
      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your pet name</label>
      <input v-model="pet.name" type="text" id="name"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="name" required>
    </div>
    <div class="mb-6">
      <label for="age" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
      <input v-model="pet.age" type="text" id="age"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required>
    </div>
    <div class="mb-6">
      <label for="image" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">upload image</label>
      <input v-model="pet.url" type="text" id="image"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required>

    </div>
    <div>

      <label for="vehicle2">Favorate</label><span> --</span>
      <input type="checkbox" v-model="pet.favorate" name="vehicle2" value="Car">
    </div>
    

    <button type="submit" 
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

    <!-- <h1>{{ pet.name }}</h1>
    <h1>{{ pet.age }}</h1>
    <h1>{{ obj.image }}</h1> -->
  </form>
 

</template>
<script setup>

import { reactive  } from 'vue';

const pet = reactive({
  name: "",
  age: "",
  url: "",
  favorate:false,

})
const emit = defineEmits("getPet")




const onSubmit = (e) => {
  console.log('before',pet)
  const newPet = {

    name: pet.name,
    age: pet.age,
    url: pet.url,
    favorate:pet.favorate,

  };

  emit('getPet',newPet)

  pet.name = ""
  pet.age = ""
  pet.url = ""
  pet.favorate=false,
  console.log('after',pet)
}

</script>
<style >
    
</style>