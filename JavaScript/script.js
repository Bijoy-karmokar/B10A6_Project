const loadCategories =async()=>{
    const response =await fetch("https://openapi.programming-hero.com/api/peddy/categories");
    const data = await response.json();
    displayCategories(data.categories);
    
}

const displayCategories =(categories)=>{
    // console.log(categories);
    const btnContainer = document.getElementById("btn-container");

    categories.forEach(item=>{
        console.log(item);
        const creatDiv = document.createElement("div");
        creatDiv.innerHTML =`
            <button class="btn btn-xl">${item.category}</button>

        `
        btnContainer.appendChild(creatDiv);
    })
    
}
loadCategories();