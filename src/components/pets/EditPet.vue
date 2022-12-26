<script setup>
import { Modal } from 'flowbite-vue'
import { ref, reactive } from 'vue'
import { editPet } from '../../helper/index'

const isShowModal = ref(false)
const emit = defineEmits("edit-pet")
function closeModal() {
  isShowModal.value = false
}
function showModal() {
  isShowModal.value = true
}
const props = defineProps(['pet'])
// const editpet = reactive({
//   id:


// })

const editpet = reactive({'key':'praksh'})
const onSubmit = () => { 
  console.log(props.pet.id)
  const id = props.pet.id

  editPet(id,props.pet )
 
  
  closeModal()


};
</script>
<template>
  <div class="p-4">
    <button @click="showModal" type="button"
      class=" text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
      Edit

    </button>
    <Modal :size="size" v-if="isShowModal" @close="closeModal">
      <template #header>
        <div class="flex items-center text-lg w-5/6 mx-auto">
          Edit
          <p>{{ pet }}</p>
        </div>
      </template>
      <template #body>


        <form class="w-5/6 mx-auto" @submit.prevent="onSubmit()">
          <div class="mb-6">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your pet name</label>
            <input v-model="pet.name" type="text" id="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your pet name" />
          </div>
          <div class="mb-6">
            <label for="age" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
            <input v-model="pet.age" type="text" id="age"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <div class="mb-6">
            <label for="image" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image url</label>
            <input v-model="pet.url" type="text" id="image"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <div class="flex items-start mb-6">
            <div class="flex items-center h-5">
              <input id="remember" v-model="pet.favorate" type="checkbox" value=""
                class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
            </div>
            <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Favorate</label>
          </div>
          <div class="flex flex-row justify-between gap-2 mx-auto my-3">
            <button  type="submit"  
              class="text-white mb-5 bg-yellow-400 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">Update</button>
            <button @click="closeModal" type="button"
              class="text-white mb-5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
              Cancel
            </button>
          </div>
        </form>


      </template>
      <template #footer class="my-4">

      </template>
    </Modal>
  </div>
</template>
