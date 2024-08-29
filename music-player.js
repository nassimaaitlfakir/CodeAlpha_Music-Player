       const audioPlayer = document.getElementById('audio-player');
const playPauseButton = document.getElementById('play-pause');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const playerView = document.getElementById('player-view');
let currentSong = null;
let isPlaying = false;
let currentSongIndex = 0;

// Add your songs here, with matching the HTML
const songs = [
  { imageSrc: 'images-icons/hunter.jpg', title: 'Hunter X Hunter -القناص', audioSrc: 'audios/hunter.mp3' },
  { imageSrc: 'images-icons/inazuma-eleven.jpg', title: 'Inazuma Eleven-ابطال الكرة', audioSrc: 'audios/inazuma-eleven.mp3' },
  { imageSrc: 'images-icons/remi.jpg', title: 'Remi-ريمي', audioSrc: 'audios/remi.mp3' },
  { imageSrc: 'images-icons/romeo.jpg', title: 'Romeo\'s blue skies-عهد الاصدقاء', audioSrc: 'audios/romeo.mp3' },
  { imageSrc: 'images-icons/digimon.jpg', title: 'Digimon Adventure-ابطال الديجيتال', audioSrc: 'audios/digimon.mp3' }
];

function playSong(index) {
  currentSongIndex = index;
  currentSong = new Audio(songs[currentSongIndex].audioSrc);
  currentSong.play();
  isPlaying = true;
  playPauseButton.querySelector('img').src = 'images-icons/pause-icon.png'; // Update icon
  playerView.style.backgroundImage = `url(${songs[currentSongIndex].imageSrc})`;
  playerView.style.display = 'flex';

  currentSong.addEventListener('timeupdate', updateSlider);
}

playPauseButton.addEventListener('click', () => {
  if (isPlaying) {
    currentSong.pause();
    isPlaying = false;
    playPauseButton.querySelector('img').src = 'images-icons/play-icon.png'; // Update icon
  } else {
    currentSong.play();
    isPlaying = true;
    playPauseButton.querySelector('img').src = 'images-icons/pause-icon.png'; // Update icon
  }
});

prevButton.addEventListener('click', () => {
  if (currentSongIndex > 0) {
    currentSongIndex--;
  } else {
    currentSongIndex = songs.length - 1;
  }
  currentSong.pause(); // Stop the current song
  playSong(currentSongIndex); // Play the previous song
});

nextButton.addEventListener('click', () => {
  if (currentSongIndex < songs.length - 1) {
    currentSongIndex++;
  } else {
    currentSongIndex = 0;
  }
  currentSong.pause(); // Stop the current song
  playSong(currentSongIndex); // Play the next song
});

function updateSlider() {
  const progress = (currentSong.currentTime / currentSong.duration) * 100;
  document.getElementById('progress-slider').value = progress;
}

// Make sure the songs are clickable to trigger playSong
document.querySelectorAll('.song').forEach((song, index) => {
  song.addEventListener('click', () => playSong(index));
});
function playSong(index) {
  if (currentSong) {
    currentSong.pause(); // Pause the currently playing song
  }

  currentSongIndex = index;
  currentSong = new Audio(songs[currentSongIndex].audioSrc);
  currentSong.play();
  isPlaying = true;
  playPauseButton.querySelector('img').src = 'images-icons/pause-icon.png'; // Update icon
  playerView.style.backgroundImage = `url(${songs[currentSongIndex].imageSrc})`;
  playerView.style.display = 'flex';

  currentSong.addEventListener('timeupdate', updateSlider);
}

