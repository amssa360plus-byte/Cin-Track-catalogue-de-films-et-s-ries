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
            const button = e.target.closest("button[data-index]");
            if (!button) return;
            const movie = movies[Number(button.dataset.index)];
            output2 =`<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
  <a href="index.html" class="block w-full max-w-sm rounded-xl border-2 border-red-600 bg-white p-6 text-black shadow-lg">
    <h5 class="mb-3 text-2xl font-semibold leading-8 text-red-600">
      ${movie.title}
    </h5>
    <p class="text-gray-700">
      ${movie.title}
    </p>
  </a>
</div>`;
            card.classList.remove("hidden");
            grid.innerHTML = output;
            card.innerHTML = output2
        })
    });
    grid.innerHTML = output;




}

getuser().catch(console.error);
;
