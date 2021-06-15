const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');

const title = document.getElementById('title');
const cover = document.getElementById('cover');

//song titles
const songs = ["Life Doesn't Escape Us – Sapajou", "Maarif - Soyb & Amine Maxwell", "Middle Class (Instrumental) - RYYZN", "mn_music"  ];

//keep track of songs
let songIndex = 1;

//initially load song details into DOM
loadSong(songs[songIndex]);

//Update song details
function loadSong(song){
    title.innerText = song;
    audio.src =`music/${song}.ogg`;
    cover.src =`images/${song}.jpg`;
}

//play song
function playSong(){
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play();

}


//event listeners
playBtn.addEventListener('click', () =>{
    const isPlaying = musicContainer.classList.contains('play');
    if(isPlaying){
        pauseSong();
    }
    else{
        playSong();
    }
})