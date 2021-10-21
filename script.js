async function getPoke(id) {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const pokes = await data.json();
    console.log(pokes.abilities.length)
    const pokecontainer = document.querySelector(".poke-container")
        pokecontainer.innerHTML += `
        <div class="pokes-container">
        <img class ="txt" src="${pokes.sprites["front_default"]}"
        <p class="txt" id="pokename">${pokes["name"]}</p>
        <p class="txt">Move :${pokes.moves[id]["move"]["name"]}</p>
        <p class="txt">Weight :${pokes.weight}</p>
        <p class="txt">Ability :${pokes.abilities[0]["ability"]["name"]}</p>
        </div>
        `
    console.log(pokes);
}
function getAllPoke(num) {
    for(let i=1;i<num;i++)
    {
        getPoke(i);
    }
}
getAllPoke(50);
