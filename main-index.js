async function getuser() {
    const response = await fetch('https://raw.githubusercontent.com/ouchad97/cinetrack-api/main/cinetrack-data.json')
    const movie = await response.json()
    console.log(movie)
    
}
getuser();
