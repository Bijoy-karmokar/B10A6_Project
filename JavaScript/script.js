const loadCategories =async()=>{
    const response =await fetch("https://openapi.programming-hero.com/api/peddy/categories");
    const data = await response.json();
    displayCategories(data.categories);
    
}

const displayCategories =(categories)=>{
    // console.log(categories);
    const btnContainer = document.getElementById("btn-container");

    categories.forEach(item=>{
        // console.log(item);
        const creatDiv = document.createElement("div");
        creatDiv.innerHTML =`
            <button class="btn btn-xl">${item.category}</button>

        `
        btnContainer.appendChild(creatDiv);
    })
    
}

const loadPets =async()=>{
    const response = await fetch("https://openapi.programming-hero.com/api/peddy/pets");
    const data = await response.json();
    displayPets(data.pets);
    
}

// {
//       "petId": 1,
//       "breed": "Golden Retriever",
//       "category": "Dog",
//       "date_of_birth": "2023-01-15",
//       "price": 1200,
//       "image": "https://i.ibb.co.com/p0w744T/pet-1.jpg",
//       "gender": "Male",
//       "pet_details": "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog.",
//       "vaccinated_status": "Fully",
//       "pet_name": "Sunny"
//     }
const displayPets =(pets)=>{
    const petsContainer = document.getElementById("pets-container");
    pets.forEach((pet)=>{
        // console.log(pet);
        const createDiv = document.createElement("div");
        createDiv.innerHTML=`
             <div class="card bg-base-100 shadow-sm">
  <figure class="px-5 pt-5">
    <img
      src=${pet.image}
      alt="pets"
      class="w-160 h-60 rounded-xl" />
  </figure>
  <div class="card-body">
    <h2 class="card-title text-xl font-semibold">${pet.pet_name}</h2>
    <p class="text-lg font-normal">Breed:${pet.breed}</p>
    <p class="text-lg font-normal">Birth:${pet.date_of_birth}</p>
    <p class="text-lg font-normal">Gender:${pet.gender}</p>
    <p class="text-lg font-normal">Price:${pet.price}</p>
    <hr class="border-gray-300">
    <div class="card-actions flex justify-between ">
    <button class="btn btn-square">
    <img class="w-6" src="https://img.icons8.com/?size=100&id=3iSDu4wTLpw2&format=png&color=000000" />
    </button>
      <button class="btn btn-outline btn-accent">Adopt</button>
      <button class="btn btn-outline btn-accent">Details</button>
    </div>
  </div>
</div>
        `
        petsContainer.appendChild(createDiv);
    })
}
loadPets();
loadCategories();