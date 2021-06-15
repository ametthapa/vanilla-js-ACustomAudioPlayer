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
let songIndex = 3;

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

//pausee song
function pauseSong(){
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    audio.pause();
}

function prevSong(){
    songIndex--;
    if(songIndex < 0){
        songIndex = songs.length -1;
    }
    loadSong(songs[songIndex]);

    playSong();
}

function nextSong(){
    songIndex++;
    if(songIndex > songs.length -1){
        songIndex = 0;
    }
    loadSong(songs[songIndex]);

    playSong();
}

function updateProgress(e){
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime/duration) * 100;
    progress.style.width = `${progressPercent}%`;
    if(currentTime == duration){
        nextSong();
    }
}

//set Progress bar
function setProgress(e){
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX/width)*duration;

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

//change song
prevBtn.addEventListener('click',prevSong); 
nextBtn.addEventListener('click',nextSong);

//time/song update
audio.addEventListener('timeupdate', updateProgress);

//click om progress bar
progressContainer.addEventListener('click', setProgress);