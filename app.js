const button = document.querySelector('button')
const joke = document.querySelector('p')

const getDadJoke = async() => {
  try {
    const config = { headers: { Accept: 'application/json' } }
    const res = await axios.get('https://icanhazdadjoke.com/', config)
    return res.data.joke
  } catch (e) {
    return 'NO JOKES AVAILABLE atm'
  }
}
const addNewJoke = async() => {
  const jokeText = await getDadJoke()
  joke.textContent = jokeText
}
button.addEventListener('click', addNewJoke)