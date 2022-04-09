console.log('hola mundo')

const inputVal = document.getElementById('input-text')

const btnAgregar = document.querySelector('#agregar')


console.log(inputVal)
console.log(btnAgregar)

let arr = [];

btnAgregar.addEventListener('click', () => {
  arr.push(inputVal.value)
  inputVal.value = ''
  console.log(arr)
  localStorage.setItem('nombres', arr)
  renderElemento()
})

function renderElemento() {
  const lista = document.getElementById('lista-nombres')
  lista.innerHTML = ''
  arr.forEach(function (item, i) {
    lista.innerHTML += `
      <li>
        ${item}
        <button onclick="borrarElemento(${i})" >X</button>
        <button onclick="editar(${i})" >editar</button>
      </li>
    `
  })
}

function borrarElemento(posicion) {
  console.log(posicion)
  arr.splice(posicion, 1)
  localStorage.setItem('nombres', arr)
  renderElemento()
}

function getItems() {
  const nombres = localStorage.getItem('nombres')
  'nombre1, nombre2, nombre2'
  arr = nombres.split(',')
  renderElemento()
}

function editar(i) {
  console.log(i)
}

getItems()
