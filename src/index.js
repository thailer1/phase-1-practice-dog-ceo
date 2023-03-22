// console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', () => {
    dogImages(), dogList()
  })

function dogList(){
  const breedUrl = "https://dog.ceo/api/breeds/list/all"
  fetch(breedUrl)
  .then((response) => response.json())
    .then((data) => {
        const breeds = Object.keys(data.message)
         displayBreeds(breeds)
        
    })   
}
function displayBreeds(breeds){
    const doggieBreeds = document.getElementById('dog-breeds')
      breeds.forEach((breed) => {
            const list = document.createElement('li');
            list.innerText = breed;
             doggieBreeds.appendChild(list)
             list.addEventListener('click',changeColor)
        })
}
function changeColor(event) {
    event.target.style.color = '#00FF00'
  }
  function selectBreedsStartingWith(letter) {
        updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
      }

function dogImages(){
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
fetch(imgUrl)
.then((response) => response.json())
  .then((json) => dogPicture(json));
}
  function dogPicture(images) {
    const dog = document.querySelector('div')
    images.message.forEach(Image => {
      const img = document.createElement('img');
      img.src = Image;
      dog.appendChild(img)
    });
  }
  
  
  