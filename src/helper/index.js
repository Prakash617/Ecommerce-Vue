const url = "https://639d448e16d1763ab15be5cb.mockapi.io/api/pets/mypets"

export const fetchPetByID = async(id) => {
    const res = await fetch(
        `${url}/${id}`
    );
    const data = await res.json();
    return data;
};

export const fetchPet = async() => {
    const res = await fetch(
        url
    );
    const data = await res.json();
    //   console.log(data)

    return data;
};

export const editPet = async(id, newdata) => {
    // console.log('put',id)
    // const addFavorite = await fetchPetByID(id);
    // const updatedFavorite = {
    //     ...addFavorite,
    //     favorate: !addFavorite.favorate,
    // };

    const res = await fetch(
        `${url}/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(newdata),
        }
    );
    const data = await res.json();

    pets.value = pets.value.map((pet) =>
        pet.id === id ? {...pet, favorate: data.favorate } : pet

    );
    // console.log(pets.value)
}