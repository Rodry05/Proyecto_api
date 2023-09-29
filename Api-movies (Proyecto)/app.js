let pagina =1;
const btnant = document.querySelector('#ant');
const btnsig = document.querySelector('#sig');
const busbtn = document.querySelector('#busbtn');
const Inbtn = document.querySelector('.btn1');
const pagbtn = document.querySelector('#numpag');
const query = document.querySelector('#businput').value;

busbtn.addEventListener('click',()=>{
  buscarPeli()
  query.value='';
});
 

Inbtn.addEventListener('click',()=>{
  location.reload();
mostrarPeli();
});

btnsig.addEventListener('click',()=>{
pagina +=1;
pagbtn.textContent=pagina
mostrarPeli();

});

btnant.addEventListener('click',()=>{
  pagina-=1;
  pagbtn.textContent=pagina
  mostrarPeli();
});

const mostrarPeli = async ()=>{

  try{
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=fc563e64461a84fd42c1513d00228523&language=es-MX&page=${pagina}`);
    console.log(response);

    if (response.status == 200) {
      const data = await response.json();
      console.log(data);
      let movies = '';
      data.results.forEach(peli => {
        movies += `
          <div class="pelicula">
          <img class="poster" src="https://image.tmdb.org/t/p/w500/${peli.poster_path}">
           <div class= "card-info">
           <h3 class="titulo">${peli.title}</h3>
           <small class="green"><p>Rating:</p>${peli.vote_average}</small> 
           </div>
           
           <div class="infopeli">
           <p>${peli.overview}</p>
           </div>

          </div>
        `;

      
      });
      document.querySelector('#contenedor').innerHTML = `
        <div class="fila">
          ${movies}
        </div>
      `;
    } else if (response.status == 401) {
      console.log('La llave es incorrecta');
    } else if (response.status == 404) {
      console.log('La película no existe');
    } else {
      console.log('Error extraño');
    }
  } catch (error) {
    console.log(error);
  }
 
 
}
  

async function buscarPeli(){
  const query = document.querySelector('#businput').value;

  try{
const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=fc563e64461a84fd42c1513d00228523&language=es-MX&query=${query}`);

if(response.status == 200){
const data = await response.json();
console.log(data);
let movies='';
data.results.forEach(peli =>{
movies += `
<div class="pelicula">
<img class="poster" src="https://image.tmdb.org/t/p/w500/${peli.poster_path}">
 <div class= "card-info">
 <h3 class="titulo">${peli.title}</h3>
 <small class="green"><p>Rating:</p>${peli.vote_average}</small> 
 </div>
 
 <div class="infopeli">
 <p>${peli.overview}</p>
 </div>

</div>


`
});
document.querySelector('#contenedor').innerHTML =`
<div class="fila">
${movies}
</div>

`;

}else if(response.status == 401) {
  console.log('La llave es incorrecta');
} else if (response.status == 404) {
  console.log('La película no existe');
} else {
  console.log('Error extraño');
}

  }catch(error){
    console.log(error);
  }
borrar()
}


document.querySelectorAll('.generos button').forEach(button =>{
   button.addEventListener('click', async()=>{
    const generoId = button.dataset.generoId;
    try{
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=fc563e64461a84fd42c1513d00228523&language=es-MX&with_genres=${generoId}`);
    if(response.status ==200){
       const data = await response.json();
       let movies ='';
       data.results.forEach(peli =>{
       movies += `
<div class="pelicula">
<img class="poster" src="https://image.tmdb.org/t/p/w500/${peli.poster_path}">
 <div class= "card-info">
 <h3 class="titulo">${peli.title}</h3>
 <small class="green"><p>Rating:</p>${peli.vote_average}</small> 
 </div>
 
 <div class="infopeli">
 <p>${peli.overview}</p>
 </div>

</div>


`;

       });
       document.querySelector('#contenedor').innerHTML=`
         <div class="fila">
         ${movies}
         </div>
       
       `;
    }else{
      console.log('Error al buscar por genero');
    }

    }catch(error){
      console.log(error);
    }

   });


});

function borrar(){
  query.value="";

}





mostrarPeli();