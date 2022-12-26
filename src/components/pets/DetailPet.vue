<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue'
import { fetchPetByID } from '../../helper';
    const route = useRoute()

    const petId = route.params
// const url = "https://639d448e16d1763ab15be5cb.mockapi.io/api/pets/mypets"
// const fetchPetByID = async(id)=> {
//       const res = await fetch(
//         `https://639d448e16d1763ab15be5cb.mockapi.io/api/pets/mypets/${id}`
//       );
//       const data = await res.json();
//       return data;
//     };

    const pet = ref({})


    onMounted(async() => {
        pet.value = await fetchPetByID(petId.id)
        
    });

</script>
<template>
    <div class="flex flex-row justify-center items-center h-full;">
    
        <div class="p-10">
         
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full"
                    :src="pet.url"
                    alt="Mountain">
                <div class="px-6 py-4">
                    // <div class="font-bold text-xl mb-2">{{ pet.name }}</div>
                    <p class="text-gray-700 text-base">
                        {{ pet.age }}
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <span
                        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span
                        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span
                        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div>
            </div>
        </div>
    </div>
</template>