const main = document.querySelector('#main')
const paragraph = document.querySelector('p')

let divs = document.querySelectorAll('div')

function bubble(event) {
  console.log(this.firstChild.nodeValue.trim() + 'bubbled')
}

for (div of divs) {
  div.addEventListener('click', bubble, true)
}

main.addEventListener('click', (event) => {
  alert('Nice click!')
})

paragraph.addEventListener("click", (event) => {
  paragraph.style.backgroundColor = "yellow"
  alert("You clicked the p!!!")
})