const listcontair = document.querySelector("#list")
const task = document.querySelector("#task")
async function getuser() {
  const response = await fetch(
    "https://raw.githubusercontent.com/ouchad97/cinetrack-api/main/cinetrack-data.json"
  );
  const movies = await response.json();

  const grid = document.querySelector("#movies-grid");
  const card = document.querySelector("#card");
  const fav = document.querySelector("#fav");
  const favcard = document.querySelector("#favcard");
  const input = document.querySelector("#searche");


let datamovie = JSON.parse(localStorage.getItem("fav")) || [];
  // ---------- PAGINATION ----------

  const paginationall = document.getElementById('paginationall')
let pogiantion = document.createElement("ul")


  const perPage = 8;
  let page = 1;
  let list = movies;

  const pag = document.createElement("div");   
  pag.className = "mt-6 text-center";
  grid.after(pag);                             

  function render() {
    const items = list.slice((page - 1) * perPage, page * perPage);

    grid.innerHTML = items.map(m => {
      const i = movies.indexOf(m);
      return `
        <div class="border-2 border-solid ">
          <button type="button" data-index="${i}">
            <img src="${m.image}" alt="${m.title || "Poster"}" class="border border-black rounded-xl">
          </button>
          <p class="text-gray-400 text-xs mt-2">
            ${m.releaseYear} · ${m.type}
            <i class="fa-solid fa-plus plus cursor-pointer" style="color: rgb(196, 17, 17);" data-index="${i}"></i>
          </p>
        </div>`;
    }).join("");
    saveData()

    pag.innerHTML = Array.from({ length: Math.ceil(list.length / perPage) }, (_, n) =>
      `<button data-page="${n + 1}" class="mx-1 mb-1 rounded-full border border-red-600 px-3 py-1 ${n + 1 === page ? "bg-red-600 text-black" : "text-red-600"}">${n + 1}</button>`
    ).join("");
    saveData()
  }

  function setList(newList) {  
    list = newList;
    page = 1;
    render();
    saveData()
  }

  pag.addEventListener("click", e => {
    const b = e.target.closest("[data-page]");
    if (!b) return;
    page = Number(b.dataset.page);
    render();
    saveData()
  });

  // ---------- Details + Plus ----------
  grid.addEventListener("click", e => {
    const plus = e.target.closest(".plus");
    if (plus) {
      const m = movies[Number(plus.dataset.index)];
      if (!datamovie.includes(m)) datamovie.push(m);
      localStorage.setItem("fav", JSON.stringify(datamovie));
      return;
    }
    const btn = e.target.closest("button[data-index]");
    if (!btn) return;
    const m = movies[Number(btn.dataset.index)];
    card.innerHTML = `<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
    <a class="relative left-90 bottom-14" id="exitmovie"><i class="fa-solid fa-x" style="color: rgb(196, 17, 17);"></i></a>
      <div class="box w-full max-w-sm rounded-xl border-2 border-red-600 bg-white p-6 text-black shadow-lg">
        <h5 class="mb-3 text-2xl font-semibold text-red-600">${m.title}</h5>
        <h3>${m.type}</h3>
        <h3>${m.releaseYear}</h3>
        ${m.seasons ? `<h3>Seasons: ${m.seasons}</h3>` : ""}
        ${m.directors ? `<h3>Directors: ${m.directors}</h3>` : ""}
      </div>
    </div>`;
    saveData()
    card.classList.remove("hidden");
    const exitmovie = document.querySelector("#exitmovie")
    exitmovie.addEventListener("click", function(e){
      e.preventDefault()
      card.classList.add('hidden')

    })
  });

  card.addEventListener("click", e => {
    if (!e.target.closest(".box")) card.classList.add("hidden");
  });

  // ---------- Favoris ----------
  fav.addEventListener("click", e => {
    e.preventDefault();
    favcard.innerHTML = `<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div class="box w-full max-w-sm rounded-xl border-2 border-red-600 bg-white p-6 text-black shadow-lg">
        <h5 class="mb-3 text-2xl font-semibold text-red-600">Favoris</h5>
        <a class="relative left-80 bottom-10" id="exits"><i class="fa-solid fa-x" style="color: rgb(196, 17, 17);"></i><a>
        ${datamovie.length ? datamovie.map(m => `<img src="${m.image}" class="w-24 rounded-lg mb-1"><h3>${m.title}</h3><button id="remove" class="border border-solid bg-red-800 rounded-xl hover: bg-red-100 ">remove</button>`).join("") : "<p>Aucun favori</p>"}
        
      </div>
    </div>`;
    favcard.classList.remove("hidden");
    const exist =document.querySelector("#exits")
    exist.addEventListener("click", function(e){
      e.preventDefault()
      favcard.classList.add('hidden')
    })
    //---remove---
    const remove = document.querySelector("#remove")
    remove.addEventListener("click", function(e){
      e.preventDefault(e)
    })
  });

  favcard.addEventListener("click", e => {
    if (!e.target.closest(".box")) favcard.classList.add("hidden");
  });

  document.querySelector("#Tout").addEventListener("click", () => setList(movies));
  document.querySelector("#movie").addEventListener("click", () => setList(movies.filter(m => m.type === "movie")));
  document.querySelector("#Show").addEventListener("click", () => setList(movies.filter(m => m.type === "series")));
  input.addEventListener("input", () => setList(movies.filter(m => (m.title || "").toLowerCase().includes(input.value.toLowerCase()))));

  render();
}

getuser().catch(console.error);

