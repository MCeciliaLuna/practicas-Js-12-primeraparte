const getDataPj = () => {
  const personaje = localStorage.getItem('personaje')
  
  const personajeObj = JSON.parse(personaje)
  const pjDetail = document.getElementById('pj-detail')

  if (personajeObj === null) {
    window.location.href = "/index.html"
  }

  pjDetail.innerHTML = `
  <h3>${personajeObj.name}</h3>
  <h5>${personajeObj.species}</h5>
  <img src="${personajeObj.image}" alt="${personajeObj.id}" />
  <button onclick="deleteLocalStorage()">Borrar data</button>
  `
}

getDataPj()

const deleteLocalStorage = () => {
  localStorage.clear()

  if (personajeObj === null) {
    window.location.href = "/index.html"
  }
}