const handleCategory = async() => {
    const response = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const data = await response.json();
    const buttonContainer = document.getElementById("btn-container");
    data.data.forEach((category) => {
        const div = document.createElement("div");
        div.innerHTML = `
        <button onclick="handleLoadVideos('${category.category_id}')" class="btn">${category.category}</button>
        `;
        buttonContainer.appendChild(div);
    });

    console.log(data.data);
};

const handleLoadVideos = async(categoryId) => {
    const response = await fetch(` https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await response.json();
    console.log(data);
}
handleCategory();