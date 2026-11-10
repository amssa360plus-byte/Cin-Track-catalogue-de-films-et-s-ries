async function getuser() {
    const response = await fetch('https://raw.githubusercontent.com/ouchad97/cinetrack-api/main/cinetrack-data.json')
    const movie = await response.json()
    let outpot = ''
    const grid = document.querySelector('#movies-grid')
    const modal = document.getElementById("modal")
    const modalbody = document.getElementById("modal-body")
    const closebtn = document.querySelector(".close-btn")

    
    for (let movielist of movie) {
        outpot += `<img src=${movielist.image} class="border border-black rounded-xl" alt="" onclick="open_popup()">
        `;
        grid.innerHTML = outpot  
        


    }

}
getuser();
