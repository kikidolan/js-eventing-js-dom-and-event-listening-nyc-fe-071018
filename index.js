const main = document.querySelector('#main')
const paragraph = document.querySelector('p')

main.addEventListener('click', (event) => {
  alert('Nice click!')
})

paragraph.addEventListener("click", (event) => {
  alert("You clicked the p!!!")
})