<template >
    <div>
        <!-- <p>about<  /p> -->
        <!-- <AddPets @displayData="display($e)"/> -->
        <!-- <EditPet/> -->
        <AddPets @get-pet="addPet"/>
        <!-- <h1 v-for="(pet, index) in pets" :key="index">{{ pet }}</h1> -->
        <Pets :pets="pets" @remove-pet="removePet" @edit-pet="editPet" @add-favorate="addFavorite" />

        
    </div>
</template>
<script setup>

import Pets from "../components/pets/Pets.vue";
import AddPets from "../components/pets/AddPet.vue";

// import EditPet from "../components/pets/EditPet.vue"
// import fetchPetByID from '../helper/index'
import { fetchPet  } from "../helper";
import { ref, onMounted } from "vue";

// const data = ref([])

const pets = ref([])

const url = "https://639d448e16d1763ab15be5cb.mockapi.io/api/pets/mypets"



// const fetchPetByID = async(id)=> {
//       const res = await fetch(
//         `${url}/${id}`
//       );
//       const data = await res.json();
//       return data;
//     }
// const  fetchPetByID =  await fetchPetByID(id)


 onMounted(async() => {
    pets.value = await fetchPet()
    
    // console.log(data.value)
})
const removePet =  async(id)=> {
  console.log('delete hited')
      if (confirm("Are you sure you want to remove this pet?")) {
        const res = await fetch(
          `${url}/${id}`,
          {
            method: "DELETE",
          }
        );
        res.status === 200
          ? (pets.value = pets.value.filter((pet) => pet.id !== id))
          : alert("Delete failed!");
        // const data = await res.json();
        // console.log(data)
        // (this.pets = this.pets.filter((pet) => pet.id !== id)
        // pets.value = data;
      
      }
    }

    const editPet = async(pet)=>{
      console.log('pet',pet)
      const oldPet = await fetchPetByID(pet.id);
      const updatedPet = {
        ...oldPet,pet
      };
      const res = await fetch(
        `${url}/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(updatedFavorite),
        }
      );
    }

    const addFavorite = async(id)=> {
      // console.log('put',id)
      const addFavorite = await fetchPetByID(id);
      const updatedFavorite = {
        ...addFavorite,
        favorate: !addFavorite.favorate,
      };

      const res = await fetch(
        `${url}/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(updatedFavorite),
        }
      );
      const data = await res.json();

      pets.value = pets.value.map((pet) =>
        pet.id === id ? { ...pet, favorate: data.favorate } : pet

      );
      // console.log(pets.value)
    }

const addPet = async(pet)=> {
      const res = await fetch(
        url,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(pet),
        }
      );

      const data = await res.json();
      console.log("data",data)
      pets.value=[...pets.value,data]
      
    };
</script>

<style>
    
</style>