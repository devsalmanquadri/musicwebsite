var audio1 = document.getElementById("myAudio");
var slider = document.getElementById("music_slider");
var nxtsong = document.querySelector(".fa-circle-chevron-right");
var prevsong1 = document.querySelector(".fa-circle-chevron-left");
var playlists = document.querySelector(".playlists");
var play1 = document.querySelectorAll(".fa-play");
var pause1 = document.querySelectorAll(".fa-pause");
var volrange = document.querySelector(".rnge");
var musicDuration = document.querySelector("#end_time");
var musicCurrentTime = document.querySelector("#current_time");
var i = 0;
var isPlaying = false;
const audioFiles = [
  { audio: "Aa Mil.mp3", image: "img1.jpg" },
  { audio: "Aaftaab.mp3", image: "img2.jpg" },
  { audio: "Aaj Na.mp3", image: "img3.jpg" },
  { audio: "Aankhon Se Batana.mp3", image: "img4.jpg" },
  { audio: "Aaoge Tum Kabhi.mp3", image: "img5.jpg" },
  { audio: "Aasmaan Jaley.mp3", image: "img6.jpg" },
  { audio: "Akhiyaan.mp3", image: "img7.jpg" },
  { audio: "Alag Aasmaan.mp3", image: "img8.jpg" },
  { audio: "Alfaazo.mp3", image: "img9.jpg" },
  { audio: "Antariksh.mp3", image: "img10.jpg" },
  { audio: "Aziyat.mp3", image: "img11.jpg" },
  { audio: "Baarish Ka Asar.mp3", image: "img12.jpg" },
  { audio: "Baarishein.mp3", image: "img13.jpg" },
  { audio: "Baaton Baaton Main.mp3", image: "img14.jpg" },
  { audio: "Bye.mp3", image: "img15.jpg" },
  { audio: "Chaand Baaliyan.mp3", image: "img16.jpg" },
  { audio: "Choo Lo.mp3", image: "img17.jpg" },
  { audio: "Chor.mp3", image: "img18.jpg" },
  { audio: "Co2.mp3", image: "img19.jpg" },
  { audio: "Dhundhala.mp3", image: "img20.jpg" },
  { audio: "Dil Mere.mp3", image: "img21.jpg" },
  { audio: "Faasle.mp3", image: "img22.jpg" },
  { audio: "Farq hai.mp3", image: "img23.jpg" },
  { audio: "Heer Ranjha.mp3", image: "img24.jpg" },
  { audio: "Hua Main - ANIMAL.mp3", image: "img25.jpg" },
  { audio: "Husn.mp3", image: "img26.jpg" },
  { audio: "Ishq - From _Lost;Found_.mp3", image: "img27.jpg" },
  { audio: "Jaadugari.mp3", image: "img28.jpg" },
  { audio: "jiyorebahubali.mp3", image: "img29.jpg" },
  { audio: "Junoon.mp3", image: "img30.jpg" },
  { audio: "Kaise Ab Kahein.mp3", image: "img31.jpg" },
  { audio: "Kaise Banu.mp3", image: "img32.jpg" },
  { audio: "Kalaastar - Honey Singh.mp3", image: "img33.jpg" },
  { audio: "kargyichull.mp3", image: "img34.jpg" },
  { audio: "Kasoor.mp3", image: "img35.jpg" },
  { audio: "Katchi Sera.mp3", image: "img36.jpg" },
  { audio: "Katputli Ke Dhaage.mp3", image: "img37.jpg" },
  { audio: "Khaare Raste.mp3", image: "img38.jpg" },
  { audio: "Khairiyat Gadar 2.mp3", image: "img39.jpg" },
  { audio: "Khayaal.mp3", image: "img40.jpg" },
  { audio: "Kho Gaye.mp3", image: "img41.jpg" },
  { audio: "khogayehum.mp3", image: "img42.jpg" },
  { audio: "Khoya.mp3", image: "img43.jpg" },
  { audio: "Khwaab.mp3", image: "img44.jpg" },
  { audio: "KTMBK.mp3", image: "img45.jpg" },
  { audio: "Lamhey.mp3", image: "img46.jpg" },
  { audio: "Laut Aao Na.mp3", image: "img47.jpg" },
  { audio: "Leke Prabhu Ka Naam.mp3", image: "img48.jpg" },
  { audio: "letmeloveu.mp3", image: "img49.jpg" },
  { audio: "Mann.mp3", image: "img50.jpg" },
  { audio: "Mazaak.mp3", image: "img51.jpg" },
  { audio: "Mera Safar.mp3", image: "img52.jpg" },
  { audio: "Muskurahat.mp3", image: "img53.jpg" },
  { audio: "nadaaniyan.mp3", image: "img54.jpg" },
  { audio: "Narazi.mp3", image: "img55.jpg" },
  { audio: "Nasha.mp3", image: "img56.jpg" },
  { audio: "Noor.mp3", image: "img57.jpg" },
  { audio: "Pahadon Mein.mp3", image: "img58.jpg" },
  { audio: "Parda.mp3", image: "img59.jpg" },
  { audio: "paro.mp3", image: "img60.jpg" },
  { audio: "Pyaar Mangda Navjeet.mp3", image: "img61.jpg" },
  { audio: "raabta.mp3", image: "img62.jpg" },
  { audio: "Raaton.mp3", image: "img63.jpg" },
  { audio: "Raaz Tera Mera.mp3", image: "img64.jpg" },
  { audio: "Rangi Saari.mp3", image: "img65.jpg" },
  { audio: "Restart - 12th Fail.mp3", image: "img66.jpg" },
  { audio: "Roz Roz.mp3", image: "img67.jpg" },
  { audio: "Saajanwa.mp3", image: "img68.jpg" },
  { audio: "Saara Jahaan.mp3", image: "img69.jpg" },
  { audio: "Sab Rab.mp3", image: "img70.jpg" },
  { audio: "Sardaar Munde.mp3", image: "img71.jpg" },
  { audio: "Sunday.mp3", image: "img72.jpg" },
  { audio: "Tere Bina.mp3", image: "img73.jpg" },
  { audio: "Tere Hi Hum.mp3", image: "img74.jpg" },
  { audio: "Tribute Siddhu Moosewala.mp3", image: "img75.jpg" },
  { audio: "Tu Aazma.mp3", image: "img76.jpg" },
  { audio: "Tu Chodiyon Na.mp3", image: "img77.jpg" },
  { audio: "Tum Jaise Ho.mp3", image: "img78.jpg" },
  { audio: "Tuta Pull Wahan.mp3", image: "img79.jpg" },
  { audio: "Tuu.mp3", image: "img80.jpg" },
  { audio: "Udd Jaa Kaale Kaava.mp3", image: "img81.jpg" },
  { audio: "Waqt Ki Baatein.mp3", image: "img82.jpg" },
  { audio: "When We Feel Young.mp3", image: "img83.jpg" },
  { audio: "Woh Raat.mp3", image: "img84.jpg" },
  { audio: "Zakir.mp3", image: "img85.jpg" },
];
var searchResults = audioFiles;
var searchTerm = "";
var searchbar = document.getElementById("inseraudio");
function searchMedia(keyword) {
  keyword = keyword.toLowerCase(); // Convert keyword to lowercase for case-insensitive search

  // Filter mediaFiles array based on keyword match in audio or image filename
  const results = audioFiles.filter(({ audio, image }) => {
    return audio.toLowerCase().includes(keyword);
  });

  return results;
}
searchbar.addEventListener("input", function (e) {
  console.log(e.target.value);
  searchTerm = e.target.value; // Example search term
  searchResults = searchMedia(searchTerm);
  i = 0;
  createAudioElements(searchResults);
  playlists.innerHTML = "";
  makediv(searchResults);
});

function switchSong(index) {
  var play1 = document.querySelectorAll(".fa-play");
  var pause1 = document.querySelectorAll(".fa-pause");
  if (index === i && isPlaying) {
    // If the same song is clicked and is currently playing, pause it
    audio1.pause();
    isPlaying = false;
    play1[index].style.display = "inline-block";
    pause1[index].style.display = "none";
  } else {
    // Stop currently playing song
    audio1.pause();
    console.log("Switching from song " + i);
    console.log("Switching to song " + index);
    pause1[i].style.display = "none";
    play1[i].style.display = "inline-block";
    i = index;
    // Update and play the new song
    isPlaying = true;
    // Update UI
    play1[i].style.display = "none";
    pause1[i].style.display = "inline-block";
    audio1.src = document.getElementById("song" + i).getAttribute("src");
    audio1.play();
  }
}

function chvol() {
  var volumeValue = volrange.value / 100; // Assuming volrange.value is between 0 and 100
  audio1.volume = volumeValue;
}

function makediv(arrayofimages) {
  var o = 0;
  for (var s = 1; s <= arrayofimages.length; s++) {
    playlists.innerHTML +=
      "<div class='playlist'> <div class='pimg'><img src='./images/" +
      arrayofimages[o].image +
      "' alt='img' /></div><div class='pdet'><i onclick='switchSong(" +
      o +
      ")' class='fa-solid fa-play fa-2xl'></i><i class='fa-solid fa-pause fa-2xl' style='display:none'></i><span class='name'>" +
      document.getElementById("song" + o).dataset.sname +
      "</span></div></div>";
    o++;
  }
}

// Container to hold the audio elements
const audioContainer = document.getElementById("audio-players");

// Function to create audio elements
function createAudioElements(audiofiles1) {
  audioContainer.innerHTML = ""; // Clear the container before adding new audio elements
  audiofiles1.forEach(({ audio }, index) => {
    const audioElement = document.createElement("audio");
    audioElement.id = `song${index}`;
    audioElement.dataset.sname = audio.replace(".mp3", ""); // Set data-sname without extension
    audioElement.src = `./audio/${audio}`;
    audioElement.loop = false;
    audioElement.preload = "auto";
    audioElement.controlsList = "nodownload";
    audioContainer.appendChild(audioElement);
  });
}

// Call the function to create audio elements
createAudioElements(searchResults);

function getTimeString(time) {
  return isNaN(audio1.duration)
    ? "0:00"
    : Math.floor(time / 60) + ":" + parseInt(((time / 60) % 1) * 60);
}

// Function to switch songs

audio1.addEventListener("timeupdate", function (e) {
  var currentTime = e.target.currentTime;
  var duration = e.target.duration;
  var progressWidth = (currentTime / duration) * 100;
  slider.value = progressWidth;

  var audioDuration = audio1.duration;
  var totalMin = Math.floor(audioDuration / 60);
  var totalSec = Math.floor(audioDuration % 60);
  if (totalSec < 10) {
    totalSec = "0" + totalSec;
  }
  musicDuration.innerText = totalMin + ":" + totalSec;

  var currentMin = Math.floor(currentTime / 60);
  var currentSec = Math.floor(currentTime % 60);
  if (currentSec < 10) {
    currentSec = "0" + currentSec;
  }
  musicCurrentTime.innerText = currentMin + ":" + currentSec;
});

slider.addEventListener("change", function () {
  var progressWithValue = slider.value;
  var songDuration = audio1.duration;
  audio1.currentTime = (progressWithValue * songDuration) / 100;
});

setTimeout(function loadplaylist() {
  var play1 = document.querySelectorAll(".fa-play");
  var pause1 = document.querySelectorAll(".fa-pause");
  audio1.addEventListener("ended", updtsong);
  function updtsong() {
    i++;
    if (i > searchResults.length - 1) {
      i = 0;
    }
    audio1.src = document.getElementById("song" + i).getAttribute("src");
    playaudio(i);
  }

  function prevsong() {
    i--;
    if (i < 0) {
      i = searchResults.length - 1;
    }
    audio1.src = document.getElementById("song" + i).getAttribute("src");
    playaudio(i);
  }

  function playaudio(a) {
    play1.forEach(function (g) {
      g.style.display = "inline-block";
    });
    pause1.forEach(function (h) {
      h.style.display = "none";
    });

    play1[a].style.display = "none";
    pause1[a].style.display = "inline-block";
    if (a == i) {
      console.log("song index:", i);
    } else {
      audio1.src = document.getElementById("song" + a).getAttribute("src");
    }
    play1[searchResults.length].style.display = "none";
    pause1[searchResults.length].style.display = "inline-block";
    audio1.play();
  }

  play1.forEach(function (j) {
    j.addEventListener("click", function () {
      play1[searchResults.length].style.display = "none";
      pause1[searchResults.length].style.display = "inline-block";
      audio1.play();
    });
  });

  function pauseaudio() {
    audio1.pause();
    play1.forEach(function (f) {
      f.style.display = "inline-block";
    });
    pause1.forEach(function (e) {
      e.style.display = "none";
    });
  }
  pause1[searchResults.length].addEventListener("click", function () {
    pauseaudio();
  });
  play1[searchResults.length].addEventListener("click", function () {
    playaudio(i);
  });
  pause1.forEach(function (j) {
    j.addEventListener("click", function () {
      audio1.pause();
      j.style.display = "none";
      play1[i].style.display = "inline-block";
      play1[searchResults.length].style.display = "inline-block";
      pause1[searchResults.length].style.display = "none";
    });
  });

  nxtsong.addEventListener("click", function () {
    updtsong();
  });

  prevsong1.addEventListener("click", function () {
    prevsong();
  });
}, 300);
makediv(searchResults);
