fetch("http://localhost:3000/characters")
    .then(response => response.json())
    .then(data => {
        characters = data
        nameEach()
    })
const characterNames = document.getElementById("character-bar")
characterNames.innerHTML=""
const votes = document.getElementById("vote-count");
function displayCharacter(character){
    const image = document.querySelector("#detailed-info img")
    image.src=`${character.image}`;
    image.alt=`${character.name}`;
    const name = document.querySelector("#detailed-info p");
    name.innerHTML = character.name;
    votes.innerHTML = character.votes;
}
function nameEach(){
    characters.forEach(character => {
        const characterName = document.createElement("span")
        characterName.innerHTML = character.name
        characterName.addEventListener("click", () => {
            displayCharacter(character)
        })
        characterNames.appendChild(characterName)
    });
}
const votesForm = document.getElementById("votes-form");
votesForm.addEventListener("submit", (event) => {
    event.preventDefault(); 
    const inputVotes = document.getElementById("votes");
    const additional = parseInt(inputVotes.value, 10);
    if (!isNaN(additional)) {
        const currentVotes = parseInt(votes.innerHTML, 10);
        const updatedVotes = currentVotes + additional;
        votes.innerHTML = updatedVotes;
        inputVotes.value = "";
    }
});