<template>

  <div class="w-full p-4 md:w-1/2 lg:w-1/4">

    <a href="#">
      <img class="rounded-t-lg" :src="pet.url" alt="dmds " />
    </a>
    <div class="mt-4">
      <!-- <img class="rounded-t-lg" :src="pet.avatar" alt="dmds " /> -->
      <h3 class="title-font mb-1 text-xs tracking-widest text-gray-500"> {{ pet.name }}</h3>
      <h2 class="title-font text-lg font-medium  text-gray-900">Age - {{ pet.age }}</h2>
      
    </div>
    <div>
      <h1>{{ pet.id }}</h1>
      <div class="flex flex-row place-content-evenly  items-center w-full ">

        <button @click="$emit('remove-pet',pet.id)" type="button" class="text-white  bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Delete</button>
        <!-- <button @click=" $emit('remove-pet',pet.id)" type="button"
          class="text-white  bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm  text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
          Delete
        </button> -->

        <EditPet :pet="pet" @edit-pet="$emit('edit-pet')"/>
        <button @click="pet.favorate=!pet.favorate;  $emit('add-favorate',pet.id)"  >
          <HeartIconSolid class="h-[3rem] w-[3rem] inline-block" v-if="pet.favorate"/>
          <HeartIcon class="h-[3rem] w-[3rem] inline-block" v-else/>
        </button>
      </div>
      
    </div>
  </div>

</template>
<script setup>
import {HeartIcon } from '@heroicons/vue/24/outline'
import {HeartIcon as HeartIconSolid } from '@heroicons/vue/24/solid'
import EditPet from './EditPet.vue';
const props = defineProps(['pet'])
</script>
<style>
</style>
