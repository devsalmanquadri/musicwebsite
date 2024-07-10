var audio1 = document.getElementById("myAudio");
var slider = document.getElementById("music_slider");
var nxtsong = document.querySelector(".fa-circle-chevron-right");
var prevsong1 = document.querySelector(".fa-circle-chevron-left");
var playlists = document.querySelector(".playlists");
var play1 = document.querySelectorAll(".fa-play");
var pause1 = document.querySelectorAll(".fa-pause");
var volrange = document.querySelector(".rnge");
var musicDuration = document.querySelector("#end_time");
var songimgf = document.querySelector(".fmimg img");
var songnamef = document.querySelector(".fmdet .fmname");
var songsingerf = document.querySelector(".fmdet .singer");
var musicCurrentTime = document.querySelector("#current_time");
var volumeicon = document.querySelector(".volumeicon");
var isPlaying = false;

function setCookie(name, value, daysToLive, path = "/") {
  var expirationDate = new Date();
  expirationDate.setTime(
    expirationDate.getTime() + daysToLive * 24 * 60 * 60 * 1000
  );
  var expires = "expires=" + expirationDate.toUTCString();
  document.cookie =
    name + "=" + encodeURIComponent(value) + "; " + expires + "; path=" + path;
}

function getCookie(name) {
  var cookieName = name + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var cookieArray = decodedCookie.split(";");
  for (var i = 0; i < cookieArray.length; i++) {
    var cookie = cookieArray[i].trim();
    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  return null;
}

// Set a cookie named "username" with value "John Doe" that expires in 7 days

// Get the value of the cookie named "username"
var i = parseInt(getCookie("i")) || 0;
console.log("i:", i);
audio1.volume = parseFloat(getCookie("volume")) || 1;
volrange.value = audio1.volume * 100;
const audioFiles = [
  { audio: "Aa Mil.mp3", image: "img1.jpg", singer: "Prateek Kuhad" },
  { audio: "Aaftaab.mp3", image: "img2.jpg", singer: "The Local Train" },
  { audio: "Aaj Na.mp3", image: "img3.jpg", singer: "Anuv Jain" },
  { audio: "Aankhon Se Batana.mp3", image: "img4.jpg", singer: "Dikshant" },
  {
    audio: "Aaoge Tum Kabhi.mp3",
    image: "img5.jpg",
    singer: "The Local Train",
  },
  { audio: "Aasmaan Jaley.mp3", image: "img6.jpg", singer: "Anuv Jain" },
  { audio: "Akhiyaan.mp3", image: "img7.jpg", singer: "Mitraz" },
  { audio: "Alag Aasmaan.mp3", image: "img8.jpg", singer: "Anuv Jain" },
  { audio: "Alfaazo.mp3", image: "img9.jpg", singer: "Kashmiri" },
  { audio: "Antariksh.mp3", image: "img10.jpg", singer: "When Chai Met Toast" },
  { audio: "Aziyat.mp3", image: "img11.jpg", singer: "Pratyul Joshi" },
  { audio: "Baarish Ka Asar.mp3", image: "img12.jpg", singer: "Anuv Jain" },
  { audio: "Baarishein.mp3", image: "img13.jpg", singer: "Anuv Jain" },
  { audio: "Baaton Baaton Main.mp3", image: "img14.jpg", singer: "Anuv Jain" },
  { audio: "Bye.mp3", image: "img15.jpg", singer: "Shalmali" },
  { audio: "Chaand Baaliyan.mp3", image: "img16.jpg", singer: "Aditya A" },
  { audio: "Choo Lo.mp3", image: "img17.jpg", singer: "The Local Train" },
  { audio: "Chor.mp3", image: "img18.jpg", singer: "Sourav Roy" },
  { audio: "Co2.mp3", image: "img19.jpg", singer: "Arjit Taneja" },
  { audio: "Dhundhala.mp3", image: "img20.jpg", singer: "When Chai Met Toast" },
  { audio: "Dil Mere.mp3", image: "img21.jpg", singer: "Kashmiri" },
  { audio: "Faasle.mp3", image: "img22.jpg", singer: "Madhur Sharma" },
  { audio: "Farq hai.mp3", image: "img23.jpg", singer: "Neha Kakkar" },
  { audio: "Heer Ranjha.mp3", image: "img24.jpg", singer: "Rito Riba" },
  {
    audio: "Hua Main - ANIMAL.mp3",
    image: "img25.jpg",
    singer: "Sachet Tandon",
  },
  { audio: "Husn.mp3", image: "img26.jpg", singer: "Prateek Kuhad" },
  {
    audio: "Ishq - From _Lost;Found_.mp3",
    image: "img27.jpg",
    singer: "Anuv Jain",
  },
  {
    audio: "Jaadugari.mp3",
    image: "img28.jpg",
    singer: "Siddharth Amit Bhavsar",
  },
  { audio: "jiyorebahubali.mp3", image: "img29.jpg", singer: "Daler Mehndi" },
  { audio: "Junoon.mp3", image: "img30.jpg", singer: "Siddharth Amit Bhavsar" },
  { audio: "Kaise Ab Kahein.mp3", image: "img31.jpg", singer: "Prateek Kuhad" },
  { audio: "Kaise Banu.mp3", image: "img32.jpg", singer: "Anuv Jain" },
  {
    audio: "Kalaastar - Honey Singh.mp3",
    image: "img33.jpg",
    singer: "Yo Yo Honey Singh",
  },
  {
    audio: "kargyichull.mp3",
    image: "img34.jpg",
    singer: "Badshah, Neha Kakkar",
  },
  { audio: "Kasoor.mp3", image: "img35.jpg", singer: "Prateek Kuhad" },
  {
    audio: "Katchi Sera.mp3",
    image: "img36.jpg",
    singer: "When Chai Met Toast",
  },
  {
    audio: "Katputli Ke Dhaage.mp3",
    image: "img37.jpg",
    singer: "Prateek Kuhad",
  },
  { audio: "Khaare Raste.mp3", image: "img38.jpg", singer: "The Local Train" },
  {
    audio: "Khairiyat Gadar 2.mp3",
    image: "img39.jpg",
    singer: "Arijit Singh",
  },
  {
    audio: "Khayaal.mp3",
    image: "img40.jpg",
    singer: "Siddharth Amit Bhavsar",
  },
  { audio: "Kho Gaye.mp3", image: "img41.jpg", singer: "Taaruk Raina" },
  { audio: "khogayehum.mp3", image: "img42.jpg", singer: "Jubin Nautiyal" },
  { audio: "Khoya.mp3", image: "img43.jpg", singer: "Anuv Jain" },
  { audio: "Khwaab.mp3", image: "img44.jpg", singer: "Siddharth Amit Bhavsar" },
  { audio: "KTMBK.mp3", image: "img45.jpg", singer: "Anuv Jain" },
  { audio: "Lamhey.mp3", image: "img46.jpg", singer: "Prateek Kuhad" },
  { audio: "Laut Aao Na.mp3", image: "img47.jpg", singer: "Sonu Nigam" },
  {
    audio: "Leke Prabhu Ka Naam.mp3",
    image: "img48.jpg",
    singer: "Arijit Singh",
  },
  { audio: "letmeloveu.mp3", image: "img49.jpg", singer: "Atif Aslam" },
  { audio: "Mann.mp3", image: "img50.jpg", singer: "Siddharth Amit Bhavsar" },
  { audio: "Mazaak.mp3", image: "img51.jpg", singer: "Kashmiri" },
  { audio: "Mera Safar.mp3", image: "img52.jpg", singer: "Ishaan Khan" },
  { audio: "Muskurahat.mp3", image: "img53.jpg", singer: "Anuv Jain" },
  { audio: "nadaaniyan.mp3", image: "img54.jpg", singer: "Anuv Jain" },
  { audio: "Narazi.mp3", image: "img55.jpg", singer: "The Local Train" },
  { audio: "Nasha.mp3", image: "img56.jpg", singer: "Romy" },
  { audio: "Noor.mp3", image: "img57.jpg", singer: "Kashmiri" },
  {
    audio: "Pahadon Mein.mp3",
    image: "img58.jpg",
    singer: "Siddharth Amit Bhavsar",
  },
  { audio: "Parda.mp3", image: "img59.jpg", singer: "Prateek Kuhad" },
  { audio: "paro.mp3", image: "img60.jpg", singer: "Anuv Jain" },
  { audio: "Pyaar Mangda Navjeet.mp3", image: "img61.jpg", singer: "Navjeet" },
  { audio: "raabta.mp3", image: "img62.jpg", singer: "Arijit Singh" },
  { audio: "Raaton.mp3", image: "img63.jpg", singer: "Anuv Jain" },
  { audio: "Raaz Tera Mera.mp3", image: "img64.jpg", singer: "Prateek Kuhad" },
  { audio: "Rangi Saari.mp3", image: "img65.jpg", singer: "Kavita Seth" },
  {
    audio: "Restart - 12th Fail.mp3",
    image: "img66.jpg",
    singer: "Arijit Singh",
  },
  { audio: "Roz Roz.mp3", image: "img67.jpg", singer: "The Yellow Diary" },
  { audio: "Saajanwa.mp3", image: "img68.jpg", singer: "Amit Trivedi" },
  { audio: "Saara Jahaan.mp3", image: "img69.jpg", singer: "Anuv Jain" },
  { audio: "Sab Rab.mp3", image: "img70.jpg", singer: "Nikhita Gandhi" },
  { audio: "Sardaar Munde.mp3", image: "img71.jpg", singer: "Amrit Maan" },
  { audio: "Sunday.mp3", image: "img72.jpg", singer: "Siddharth Amit Bhavsar" },
  { audio: "Tere Bina.mp3", image: "img73.jpg", singer: "Jubin Nautiyal" },
  { audio: "Tere Hi Hum.mp3", image: "img74.jpg", singer: "Anuv Jain" },
  {
    audio: "Tribute Siddhu Moosewala.mp3",
    image: "img75.jpg",
    singer: "Sidhu Moosewala",
  },
  { audio: "Tu Aazma.mp3", image: "img76.jpg", singer: "Prateek Kuhad" },
  { audio: "Tu Chodiyon Na.mp3", image: "img77.jpg", singer: "Kashmiri" },
  { audio: "Tum Jaise Ho.mp3", image: "img78.jpg", singer: "Prateek Kuhad" },
  { audio: "Tuta Pull Wahan.mp3", image: "img79.jpg", singer: "Anuv Jain" },
  { audio: "Tuu.mp3", image: "img80.jpg", singer: "Kashmiri" },
  {
    audio: "Udd Jaa Kaale Kaava.mp3",
    image: "img81.jpg",
    singer: "Siddharth Amit Bhavsar",
  },
  { audio: "Waqt Ki Baatein.mp3", image: "img82.jpg", singer: "Prateek Kuhad" },
  {
    audio: "When We Feel Young.mp3",
    image: "img83.jpg",
    singer: "Prateek Kuhad",
  },
  { audio: "Woh Raat.mp3", image: "img84.jpg", singer: "Anuv Jain" },
  { audio: "Zakir.mp3", image: "img85.jpg", singer: "Siddharth Amit Bhavsar" },
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
  searchTerm = e.target.value; // Example search term
  searchResults = searchMedia(searchTerm);
  i = 0;
  audioContainer.innerHTML = ""; // Clear the container before adding new audio elements
  createAudioElements(searchResults);
  playlists.innerHTML = "";
  makediv(searchResults);
});
audio1.addEventListener("play", function () {
  songimgf.src = "./images/" + searchResults[i].image;
  songnamef.innerText = searchResults[i].audio.replace(".mp3", "");
  songsingerf.innerText = audioFiles[i].singer;
});
volumeicon.addEventListener("click", function () {
  if (volrange.value == 0) {
    volrange.value = 100;
    chvol();
  } else {
    volrange.value = 0;
    chvol();
  }
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
    audio1.src = document.getElementById("song" + i).getAttribute("data-src");
    audio1.play();
  }
}

function chvol() {
  var volumeValue = volrange.value / 100; // Assuming volrange.value is between 0 and 100
  audio1.volume = volumeValue;
  if (volrange.value == 0) {
    volumeicon.classList.remove("fa-volume-high");
    volumeicon.classList.remove("fa-volume-low");
    volumeicon.classList.add("fa-volume-mute");
  } else if (volrange.value > 0 && volrange.value < 50) {
    volumeicon.classList.remove("fa-volume-mute");
    volumeicon.classList.remove("fa-volume-high");
    volumeicon.classList.add("fa-volume-low");
  } else {
    volumeicon.classList.remove("fa-volume-mute");
    volumeicon.classList.remove("fa-volume-low");
    volumeicon.classList.add("fa-volume-high");
  }
  setCookie("volume", audio1.volume, 1);
}

function makediv(arrayofimages) {
  var o = 0;
  for (var s = 1; s <= arrayofimages.length; s++) {
    playlists.innerHTML +=
      "<div class='playlist'> <div class='pimg'><img loading='lazy' src='./images/" +
      arrayofimages[o].image +
      "' alt='img' /></div><div class='pdet'><i onclick='switchSong(" +
      o +
      ")' class='fa-solid fa-play fa-2xl'></i><i class='fa-solid fa-pause fa-2xl' style='display:none'></i><span class='name'>" +
      document.getElementById("song" + o).dataset.sname +
      "</span></div></div>";
    o++;
  }
}

const audioContainer = document.getElementById("audio-players");

function createAudioElements(audiofiles1) {
  audiofiles1.forEach(({ audio }, index) => {
    const audioElement = document.createElement("span");
    audioElement.id = `song${index}`;
    audioElement.dataset.sname = audio.replace(".mp3", ""); // Set data-sname without extension
    audioElement.dataset.src = `./audio/${audio}`;
    audioElement.setAttribute("loading", "lazy");
    audioContainer.appendChild(audioElement);
  });
}

createAudioElements(searchResults);

function getTimeString(time) {
  return isNaN(audio1.duration)
    ? "0:00"
    : Math.floor(time / 60) + ":" + parseInt(((time / 60) % 1) * 60);
}
// Event listener for the progress slider
slider.addEventListener("input", changeprogress);
slider.addEventListener("mousedown", () => audio1.pause());
slider.addEventListener("mouseup", () => audio1.play());

function changeprogress() {
  var progressWithValue = slider.value;
  var songDuration = audio1.duration;
  audio1.currentTime = (progressWithValue * songDuration) / 100;
}

// Event listener for the audio time update
audio1.addEventListener("timeupdate", timeupateaudio);

function timeupateaudio(e) {
  var currentTime = e.target.currentTime;
  var duration = e.target.duration;
  var progressWidth = (currentTime / duration) * 100;
  slider.value = progressWidth;

  // Update total duration
  if (!isNaN(duration)) {
    var totalMin = Math.floor(duration / 60);
    var totalSec = Math.floor(duration % 60);
    if (totalSec < 10) {
      totalSec = "0" + totalSec;
    }
    musicDuration.innerText = totalMin + ":" + totalSec;
  }

  // Update current time
  var currentMin = Math.floor(currentTime / 60);
  var currentSec = Math.floor(currentTime % 60);
  if (currentSec < 10) {
    currentSec = "0" + currentSec;
  }
  musicCurrentTime.innerText = currentMin + ":" + currentSec;
}

// Initialize the duration display
audio1.addEventListener("loadedmetadata", () => {
  var duration = audio1.duration;
  var totalMin = Math.floor(duration / 60);
  var totalSec = Math.floor(duration % 60);
  if (totalSec < 10) {
    totalSec = "0" + totalSec;
  }
  musicDuration.innerText = totalMin + ":" + totalSec;
});
function sec5skip() {
  slider.value = parseInt(slider.value) + 5;
  changeprogress();
}
function sec5back() {
  slider.value = parseInt(slider.value) - 5;
  changeprogress();
}
setTimeout(function loadplaylist() {
  var play1 = document.querySelectorAll(".fa-play");
  var pause1 = document.querySelectorAll(".fa-pause");
  audio1.addEventListener("ended", updtsong);
  function updtsong() {
    i++;
    if (i > searchResults.length - 1) {
      i = 0;
    }
    setCookie("i", i, 1);
    audio1.src = document.getElementById("song" + i).getAttribute("data-src");
    playaudio(i);
  }

  function prevsong() {
    i--;
    if (i < 0) {
      i = searchResults.length - 1;
    }
    setCookie("i", i, 1);
    audio1.src = document.getElementById("song" + i).getAttribute("data-src");
    playaudio(i);
  }
  var once = 0;
  function playaudio(a) {
    play1.forEach(function (g) {
      g.style.display = "inline-block";
    });
    pause1.forEach(function (h) {
      h.style.display = "none";
    });

    play1[a].style.display = "none";
    pause1[a].style.display = "inline-block";
    console.log("song index:", i);
    if (once == 0) {
      audio1.src = document.getElementById("song" + i).getAttribute("data-src");
    }
    once = 1;
    play1[searchResults.length].style.display = "none";
    pause1[searchResults.length].style.display = "inline-block";
    audio1.play();
  }

  play1.forEach(function (j) {
    j.addEventListener("click", function () {
      play1[searchResults.length].style.display = "none";
      pause1[searchResults.length].style.display = "inline-block";
      playaudio(i);
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
      pauseaudio();
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
  audio1.onplaying = () => {
    isPlaying = true;
  };
  audio1.onpause = () => {
    isPlaying = false;
  };

  window.addEventListener("keydown", function (event) {
    var key = event.which || event.keyCode;
    var isShift = event.shiftKey;
    if (key === 32) {
      // space
      event.preventDefault();
      console.log("space pressed: ", i);
      isPlaying ? pauseaudio() : playaudio(i);
    } else if (key === 37 && isShift) {
      // left arrow
      event.preventDefault();
      prevsong();
    } else if (key === 37) {
      // left arrow
      event.preventDefault();
      sec5back();
    } else if (key === 38) {
      // up arrow
      event.preventDefault();
      volrange.value = parseInt(volrange.value) + 5;
      chvol();
    } else if (key === 39 && isShift) {
      // right arrow
      event.preventDefault();
      updtsong();
    } else if (key === 39) {
      // right arrow
      event.preventDefault();
      sec5skip();
    } else if (key === 40) {
      // down arrow
      event.preventDefault();
      volrange.value = parseInt(volrange.value) - 5;
      chvol();
    }
  });
}, 300);
makediv(searchResults);
