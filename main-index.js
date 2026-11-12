   async function getuser() {
    const response = await fetch(
        "https://raw.githubusercontent.com/ouchad97/cinetrack-api/main/cinetrack-data.json"
    );
    const movies = await response.json();

    const grid = document.querySelector("#movies-grid");
    const modal = document.querySelector("#modal-popup");
    const modalContent = modal.querySelector(".modal-popup-content");

    modal.style.cssText =
        "display:none; position:fixed; inset:0; z-index:50; background:rgba(0,0,0,.8); align-items:center; justify-content:center; padding:1rem;";
    modalContent.style.cssText =
        "width:100%; max-width:32rem; padding:1.5rem; color:white;";

    let output = "";

    movies.forEach((movie, index) => {
        output += `
      <button type="button" data-index="${index}">
        <img
          src="${movie.image}"
          alt="${movie.title || movie.name || "Movie poster"}"
          class="border border-black rounded-xl"
        >
      </button>
    `;
        const card = document.querySelector('#card')
        let output2 = ``
        grid.addEventListener('click', function (e) {
            e.preventDefault()
            e.stopPropagation()
            const button = e.target.closest("button[data-index]");
            if (!button) return;
            const movie = movies[Number(button.dataset.index)];
            output2 =`<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
  <a href="index.html" class="block w-full max-w-sm rounded-xl border-2 border-red-600 bg-white p-6 text-black shadow-lg">
    <h5 class="mb-3 text-2xl font-semibold leading-8 text-red-600">
      ${movie.title}
    </h5>
    <p class="text-gray-700">
      <h3>${movie.title}</h3>
      <h3>${movie.type}</h3>
      <h3>${movie.releaseYear}</h3>
      <h3>${movie.seasons}</h3>
      <h3>${movie.directors}</h3>
      directors
    </p>
  </a>
</div>`;
            card.classList.remove("hidden");
            grid.innerHTML = output;
            card.innerHTML = output2
        })
    });
    grid.innerHTML = output;
    
    
   const paginationall = document.getElementById('paginationall')
   let pogiantion = document.createElement("ul")
   pogiantion.style.color = "red"
   pogiantion.setAttribute('id', 'pogiantion')
   for(let i = 1 ; i <= movies.length ; i++){
    const paginationitem = document.createElement('ul')
    paginationitem.setAttribute('data-index', i)
    paginationitem.textContent = i
    pogiantion.appendChild(paginationitem)
   }
   paginationall.appendChild(pogiantion)
    


  const all = document.querySelector("#Tout")
  const movie = document.querySelector("#movie")
  const show = document.querySelector("#Show")

  
  movie.addEventListener("click", function(e){
    e.preventDefault()
   const allmovies = movies.filter(item => item.type === "movie")
    let output = "";

    allmovies.forEach((movie, index) => {
        output += `
      <button type="button" data-index="${index}">
        <img
          src="${movie.image}"
          alt="${movie.title || movie.name || "Movie poster"}"
          class="border border-black rounded-xl"
        >
      </button>
    `;
        const card = document.querySelector('#card')
        let output2 = ``
        grid.addEventListener('click', function (e) {
            e.preventDefault()
            e.stopPropagation()
            const button = e.target.closest("button[data-index]");
            if (!button) return;
            const movie = movies[Number(button.dataset.index)];
            output2 =`<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
  <a href="index.html" class="block w-full max-w-sm rounded-xl border-2 border-red-600 bg-white p-6 text-black shadow-lg">
    <h5 class="mb-3 text-2xl font-semibold leading-8 text-red-600">
      ${movie.title}
    </h5>
    <p class="text-gray-700">
      <h3>${movie.title}</h3>
      <h3>${movie.type}</h3>
      <h3>${movie.releaseYear}</h3>
      <h3>${movie.seasons}</h3>
      <h3>${movie.directors}</h3>
      directors
    </p>
  </a>
</div>`;
            card.classList.remove("hidden");
            grid.innerHTML = output;
            card.innerHTML = output2
        })
    });
    grid.innerHTML = output;
  })
  show.addEventListener("click", function(e){
      e.preventDefault()
    const seriess =  movies.filter(item => item.type === "series")
    let output = ''
    
      seriess.forEach((srie, index) => {
        output += `
      <button type="button" data-index="${index}">
        <img
          src="${srie.image}"
          alt="${srie.title || srie.name || "Movie poster"}"
          class="border border-black rounded-xl"
        >
      </button>
    `;
                grid.innerHTML = output;

        const card = document.querySelector('#card')
        
        grid.addEventListener('click', function (e) {
          let output2 = ``
            e.preventDefault()
            e.stopPropagation()
            const button = e.target.closest("button[data-index]");
            if (!button) return;
            const srie = movies[Number(button.dataset.index)];
            output2 =`<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
  <a href="index.html" class="block w-full max-w-sm rounded-xl border-2 border-red-600 bg-white p-6 text-black shadow-lg">
    <h5 class="mb-3 text-2xl font-semibold leading-8 text-red-600">
      ${srie.title}
    </h5>
    <p class="text-gray-700">
      <h3>${srie.title}</h3>
      <h3>${srie.type}</h3>
      <h3>${srie.releaseYear}</h3>
      <h3>${srie.seasons}</h3>
      <h3>${srie.directors}</h3>
      directors
    </p>
  </a>
</div>`;
            card.classList.remove("hidden");
            card.innerHTML = output2
        })
    });
    grid.innerHTML = output;
  })

  all.addEventListener("click", function(e){
    e.preventDefault()
    grid.innerHTML = output
  })
  const input = document.querySelector("#searche")
  input.addEventListener("input", function(e){
    e.preventDefault()
    const serche = movies.filter(item=> item.title.toLowerCase() === input)
    console.log(serche)
  })

  const fav = document.querySelector("#fav")
  const favcard = document.querySelector("#favcard")
  fav.addEventListener("click", function(e){
         e.preventDefault()
         let output3 = ''
         output3=`<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
  <a href="index.html" class="block w-full max-w-sm rounded-xl border-2 border-red-600 bg-white p-6 text-black shadow-lg">
    <h5 class="mb-3 text-2xl font-semibold leading-8 text-red-600">
    </h5>
    <p class="text-gray-700">
      <h3></h3>
      <h3></h3>
      <h3></h3>
      <h3></h3>
      <h3></h3>
    </p>
  </a>
</div>`;

   favcard.innerHTML = output3
    favcard.classList.remove("hidden");

  })
}






getuser().catch(console.error);
;
