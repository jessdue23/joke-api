//get button
const btnGenerateJoke = document.querySelector('#btnGenerate')

//get header elements
const h2 = document.querySelector('h2')
const h3 = document.querySelector('h3')

//on button click generate joke & call the API route
btnGenerateJoke.addEventListener('click', () => {
    console.log("clicked")
    getRandomJoke()
})


const getRandomJoke = async () => {
    const response = await fetch('/api/v1/random-joke')
    //console.log(response)

    const {joke, punchline} = await response.json()
    //console.log(joke, punchline)

    h2.textContent = joke;
    h3.textContent = punchline;
    

}



