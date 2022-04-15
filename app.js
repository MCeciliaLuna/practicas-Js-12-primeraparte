console.log('Javascript 11')

const getData = async() => {
  //fetch('url') + .then(resp => resp.json) + .then(json => console.log(json)) >>> DESVENTAJAS: trabajamos la respuesta adentro del último punto then, o se hace una maniobra rara para sacar esa info)
  const resp = await fetch ('https://rickandmortyapi.com/api/character'); //cuando la función sea llamada espere la respuesta para ejecutarse
  const json = await resp.json(); //guardamos la respuesta convertida en esta variable para el próximo return
  
  return json.results
}

const createCard = async () => {
  const data = await getData(); //obtener la data de la API
  const containerPj = document.querySelector('#container-pj');
  //creo un DIV en el html que vaya a contener las cards creadas en js
  const dataCard = data.map(pj => `
  <div >
   <h3>${pj.name}</h3>
   <h5>${pj.species}</h5>
   <img src="${pj.image}" alt"${pj.id}" onclick="setDetailData(${pj.id})" />
   <hr>
  </div>
  `) //creo una estructura con los datos de los personajes

  containerPj.innerHTML = dataCard.join('') //insertar lo hecho en js en el html
}

const setDetailData = async (id) => {
  const resp = await fetch (`https://rickandmortyapi.com/api/character/${id}`);
  const json = await resp.json();

  const newJson= JSON.stringify(json)
  
  localStorage.setItem('personaje', newJson); //primer valor: generalmente es un string | segundo valor: la información que queremos
  localStorage.getItem('personaje'); //obtener la información

  window.location.href = "/detail.html"
}