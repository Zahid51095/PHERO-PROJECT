const handleCategory = async() => {
    const response = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const data = await response.json();
    const buttonContainer = document.getElementById("btn-container");
    data.data.forEach((category) => {
        const div = document.createElement("div");
        div.innerHTML = `
        <button class="btn">${category.category}</button>
        `;
        buttonContainer.appendChild(div);
    })

    // console.log(data.data);
}

handleCategory();