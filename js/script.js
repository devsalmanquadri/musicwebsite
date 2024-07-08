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
document.addEventListener("DOMContentLoaded", function () {
  function makediv() {
    var o = 0;
    for (var s = 1; s <= 18; s++) {
      playlists.innerHTML +=
        "<div class='playlist'> <div class='pimg'><img src='./images/img" +
        s +
        ".jpg' alt='img' /></div><div class='pdet'><i onclick='switchSong(" +
        o +
        ")' class='fa-solid fa-play fa-2xl'></i><i class='fa-solid fa-pause fa-2xl' style='display:none'></i><span class='name'>" +
        document.getElementById("song" + o).dataset.sname +
        "</span></div></div>";
      o++;
    }
  }

  function chvol() {
    audio1.volume = volrange.value;
  }

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
    audio1.play();
  });

  setTimeout(function loadplaylist() {
    var play1 = document.querySelectorAll(".fa-play");
    var pause1 = document.querySelectorAll(".fa-pause");

    function updtsong() {
      i++;
      console.log(i);
      console.log(document.getElementById("song" + i));
      if (i == 18) {
        i = 0;
      }
      if (i < 0) {
        i = 17;
      }
      audio1.src = document.getElementById("song" + i).getAttribute("src");
      playaudio(i);
    }

    function prevsong() {
      i--;
      if (i > 17) {
        i = 0;
      }
      if (i < 0) {
        i = 17;
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
      audio1.src = document.getElementById("song" + a).getAttribute("src");
      play1[18].style.display = "none";
      pause1[18].style.display = "inline-block";
      audio1.play();
    }

    play1.forEach(function (j) {
      j.addEventListener("click", function () {
        play1[18].style.display = "none";
        pause1[18].style.display = "inline-block";
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

    // pause1.forEach(function (j) {
    //   j.addEventListener("click", function () {
    //     audio1.pause();
    //     play1.forEach(function (f) {
    //       f.style.display = "inline-block";
    //     });
    //     pause1.forEach(function (e) {
    //       e.style.display = "none";
    //     });
    //   });
    // });

    nxtsong.addEventListener("click", function () {
      updtsong();
    });

    prevsong1.addEventListener("click", function () {
      prevsong();
    });
  }, 300);

  makediv();
});
