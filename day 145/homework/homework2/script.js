let songs = [
{
    title: "Passionfruit",
    artist: "Drake",
    audio: "hthttps://youtu.be/EgfsXTOn_pIhttps://www.youtube.com/watch?v=EgfsXTOn_pI&pp=ygUScGFzc2lvbmZydWl0IGRyYWtlhttps://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3tps://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
},
{
    title: "Fancy",
    artist: "Drake",
    audio: "https://www.soundhelix.com/https://youtu.be/XXr8fnKffq8examples/mp3/SoundHelix-Song-2.mp3"
},
{
    title: "Luther",
    artist: "Kendrick Lamar",
    audio: "https://www.soundhelix.com/examhttps://youtu.be/HfWLgELllZsles/mp3/SoundHelix-Song-3.mp3"
}
];

let titleInput = document.getElementById("title");
let artistInput = document.getElementById("artist");
let audioInput = document.getElementById("audio");
let addBtn = document.getElementById("addBtn");
let musicList = document.getElementById("musicList");

function show() {
    musicList.innerHTML = "";

    for (let i = 0; i < songs.length; i++) {
        let li = document.createElement("li");


        li.textContent = songs[i].title + " - " + songs[i].artist;

        let audio = document.createElement("audio");
        audio.src = songs[i].audio;
        audio.controls = true;

        li.appendChild(document.createElement("br"));
        li.appendChild(audio);

        musicList.appendChild(li);
}
}

show();

addBtn.addEventListener("click", function() {
    let newSong = {
        title: titleInput.value,
        artist: artistInput.value,
        audio: audioInput.value
    };

    songs.push(newSong);

show();

    titleInput.value = "";
    artistInput.value = "";
    audioInput.value = "";
});
