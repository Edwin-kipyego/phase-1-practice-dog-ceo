console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const imageContainer = document.getElementById("dog-image-container");
    const breedList = document.getElementById("dog-breeds");
    const breedDropdown = document.getElementById("breed-dropdown"); // Dropdown element
  
    let allBreeds = []; // Store all breeds for filtering
  
    // Fetch images from the API
    fetch(imgUrl)
      .then((response) => response.json())
      .then((data) => {
        data.message.forEach((imageUrl) => {
          const img = document.createElement("img");
          img.src = imageUrl;
          img.alt = "A cute dog";
          imageContainer.appendChild(img);
        });
      })
      .catch((error) => console.error("Error fetching images:", error));
  
    // Fetch breeds from the API
    fetch(breedUrl)
      .then((response) => response.json())
      .then((data) => {
        allBreeds = Object.keys(data.message); // Store all breed names
        renderBreeds(allBreeds); // Render all breeds initially
      })
      .catch((error) => console.error("Error fetching breeds:", error));
  
    // Function to render breeds
    function renderBreeds(breeds) {
      breedList.innerHTML = ""; // Clear the list
      breeds.forEach((breed) => {
        const li = document.createElement("li");
        li.textContent = breed;
  
        // Add click event listener to change font color
        li.addEventListener("click", () => {
          li.style.color = "blue"; // Change this to any color you prefer
        });
  
        breedList.appendChild(li);
      });
    }
  
    // Event listener for dropdown change
    breedDropdown.addEventListener("change", (event) => {
      const selectedLetter = event.target.value;
      const filteredBreeds = allBreeds.filter((breed) =>
        breed.startsWith(selectedLetter)
      );
      renderBreeds(filteredBreeds); // Render filtered breeds
    });
  });

