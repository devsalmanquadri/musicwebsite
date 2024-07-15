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
  {
    audio: "2 States - Hulla Re.mp3",
    image: "2 States - Hulla Re.jpg",
    singer: "Shankar Mahadevan, Siddharth Mahadevan",
  },
  {
    audio: "2 States - Iski Uski.mp3",
    image: "2 States - Iski Uski.jpg",
    singer: "Akriti Kakar, Shahid Mallya",
  },
  {
    audio: "2 States - Locha-e-ulfat.mp3",
    image: "2 States - Locha-e-ulfat.jpg",
    singer: "Benny Dayal",
  },
  {
    audio: "2 States - Mast Magan.mp3",
    image: "2 States - Mast Magan.jpg",
    singer: "Arijit Singh, Chinmayi Sripada",
  },
  {
    audio: "2 States - Offo.mp3",
    image: "2 States - Offo.jpg",
    singer: "Amitabh Bhattacharya, Aditi Singh Sharma",
  },
  {
    audio: "Aa Bhi Jaa Tu Kahin Se - Sonu Nigam.mp3",
    image: "Aa Bhi Jaa Tu Kahin Se - Sonu Nigam.jpg",
    singer: "Sonu Nigam",
  },
  { audio: "Aahatein.mp3", image: "Aahatein.jpg", singer: "Agnee" },
  {
    audio: "Aaj Ibaadat.mp3",
    image: "Aaj Ibaadat.jpg",
    singer: "Aditya Narayan",
  },
  { audio: "Aayat.mp3", image: "Aayat.jpg", singer: "Arijit Singh" },
  {
    audio: "Ab Tohe Jane Na Doongi.mp3",
    image: "Ab Tohe Jane Na Doongi.jpg",
    singer: "Payal Dev",
  },
  {
    audio: "Agar Tu Hota.mp3",
    image: "Agar Tu Hota.jpg",
    singer: "Ankit Tiwari",
  },
  { audio: "Aisha.mp3", image: "Aisha.jpg", singer: "Amit Trivedi" },
  {
    audio: "Albela Sajan.mp3",
    image: "Albela Sajan.jpg",
    singer: "Shashi Suman, Kunal Pandit, Raja Kumari",
  },
  {
    audio: "Alfazon Ki Tarah.mp3",
    image: "Alfazon Ki Tarah.jpg",
    singer: "Ankit Tiwari",
  },
  {
    audio: "Angreji Beat.mp3",
    image: "Angreji Beat.jpg",
    singer: "Honey Singh, Gippy Grewal",
  },
  { audio: "Ankhiyaan.mp3", image: "Ankhiyaan.jpg", singer: "Kanika Kapoor" },
  {
    audio: "Aye Khuda (Duet Version).mp3",
    image: "Aye Khuda (Duet Version).jpg",
    singer: "Arijit Singh, Saim Bhatt",
  },
  { audio: "Aye Khuda.mp3", image: "Aye Khuda.jpg", singer: "Saim Bhatt" },
  {
    audio: "Badlapur - Jee Karda.mp3",
    image: "Badlapur - Jee Karda.jpg",
    singer: "Divya Kumar",
  },
  {
    audio: "Banno.mp3",
    image: "Banno.jpg",
    singer: "Brijesh Shandilya, Swati Sharma",
  },
  { audio: "Bebo.mp3", image: "Bebo.jpg", singer: "Alfaaz, Yo Yo Honey Singh" },
  {
    audio: "Bhoothnath Returns - Party To Banti Hai.mp3",
    image: "Bhoothnath Returns - Party To Banti Hai.jpg",
    singer: "Meet Bros, Mika Singh",
  },
  {
    audio: "Blue Eyes - Yo Yo Honey Singh.mp3",
    image: "Blue Eyes - Yo Yo Honey Singh.jpg",
    singer: "Yo Yo Honey Singh",
  },
  {
    audio: "Bol Do Na Zara.mp3",
    image: "Bol Do Na Zara.jpg",
    singer: "Armaan Malik",
  },
  {
    audio: "Bolna.mp3",
    image: "Bolna.jpg",
    singer: "Arijit Singh, Asees Kaur",
  },
  {
    audio: "Breakup Party.mp3",
    image: "Breakup Party.jpg",
    singer: "Leo, Honey Singh",
  },
  {
    audio: "Bring Me Back.mp3",
    image: "Bring Me Back.jpg",
    singer: "Yo Yo Honey Singh",
  },
  {
    audio: "Brown Rang.mp3",
    image: "Brown Rang.jpg",
    singer: "Yo Yo Honey Singh",
  },
  {
    audio: "Buddhu Sa Mann.mp3",
    image: "Buddhu Sa Mann.jpg",
    singer: "Armaan Malik",
  },
  {
    audio: "Chali Kahani.mp3",
    image: "Chali Kahani.jpg",
    singer: "Vishal Dadlani, Shalmali Kholgade",
  },
  { audio: "Cham Cham.mp3", image: "Cham Cham.jpg", singer: "Monali Thakur" },
  {
    audio: "Chitta Ve - Udta Punjab.mp3",
    image: "Chitta Ve - Udta Punjab.jpg",
    singer: "Babu Haabi, Shahid Mallya, Bhanu Pratap",
  },
  {
    audio: "D Se Dance.mp3",
    image: "D Se Dance.jpg",
    singer: "Vishal Dadlani, Shalmali Kholgade, Anushka Manchanda",
  },
  {
    audio: "Da Da Dasse.mp3",
    image: "Da Da Dasse.jpg",
    singer: "Kanika Kapoor, Babu Haabi, Shahid Mallya",
  },
  {
    audio: "Daingad Daingad.mp3",
    image: "Daingad Daingad.jpg",
    singer: "Yashita Sharma, Akriti Kakar, Deepanshu Pandit",
  },
  {
    audio: "Deewani Mastani.mp3",
    image: "Deewani Mastani.jpg",
    singer: "Shreya Ghoshal, Ganesh Chandanshive",
  },
  {
    audio: "Dheere Dheere - Yo Yo Honey Singh.mp3",
    image: "Dheere Dheere - Yo Yo Honey Singh.jpg",
    singer: "Yo Yo Honey Singh",
  },
  {
    audio: "Dil Cheez Tujhe Dedi.mp3",
    image: "Dil Cheez Tujhe Dedi.jpg",
    singer: "Arijit Singh, Ankit Tiwari",
  },
  {
    audio: "Dil Dhadakne Do.mp3",
    image: "Dil Dhadakne Do.jpg",
    singer: "Priyanka Chopra, Farhan Akhtar",
  },

  {
    audio: "Dil Kare Ho Mann Jahaan - Atif Aslam.mp3",
    image: "Dil Kare Ho Mann Jahaan - Atif Aslam.jpg",
    singer: "Atif Aslam",
  },
  {
    audio: "DJ Waley Babu - Badshah.mp3",
    image: "DJ Waley Babu - Badshah.jpg",
    singer: "Badshah, Aastha Gill",
  },
  {
    audio: "Ek Thi Daayan - Yaaram.mp3",
    image: "Ek Thi Daayan - Yaaram.jpg",
    singer: "Sunidhi Chauhan, Clinton Cerejo",
  },
  {
    audio: "Emotional Fool.mp3",
    image: "Emotional Fool.jpg",
    singer: "Himesh Reshammiya, Alam Gir Khan",
  },
  {
    audio: "Entertainment - Johnny Johnny.mp3",
    image: "Entertainment - Johnny Johnny.jpg",
    singer: "Jigar Saraiya, Priya Saraiya",
  },
  {
    audio: "Entertainment - Nahin Woh Saamne.mp3",
    image: "Entertainment - Nahin Woh Saamne.jpg",
    singer: "Atif Aslam",
  },
  {
    audio: "Entertainment - Tera Naam Doon.mp3",
    image: "Entertainment - Tera Naam Doon.jpg",
    singer: "Atif Aslam, Shalmali Kholgade",
  },
  {
    audio: "Entertainment - Teri Mahima Aprampaar.mp3",
    image: "Entertainment - Teri Mahima Aprampaar.jpg",
    singer: "Anushka Manchanda, Udit Narayan",
  },
  {
    audio: "Entertainment - Veerey Di Wedding (Remix).mp3",
    image: "Entertainment - Veerey Di Wedding (Remix).jpg",
    singer: "Mika Singh",
  },
  {
    audio: "Entertainment - Veerey Di Wedding.mp3",
    image: "Entertainment - Veerey Di Wedding.jpg",
    singer: "Mika Singh",
  },
  {
    audio: "Fake Ishq.mp3",
    image: "Fake Ishq.jpg",
    singer: "Kailash Kher, Nakaash Aziz",
  },
  {
    audio: "Fitoor - Haminastu.mp3",
    image: "Fitoor - Haminastu.jpg",
    singer: "Zeb Bangash",
  },
  {
    audio: "Fitoor - Hone Do Batiya.mp3",
    image: "Fitoor - Hone Do Batiya.jpg",
    singer: "Nandini Srikar, Zeb Bangash",
  },
  {
    audio: "Fitoor - Pashmina.mp3",
    image: "Fitoor - Pashmina.jpg",
    singer: "Amit Trivedi",
  },
  {
    audio: "Fitoor - Rangaa Re (English Version).mp3",
    image: "Fitoor - Rangaa Re (English Version).jpg",
    singer: "Caralisa Monteiro",
  },
  {
    audio: "Fitoor - Rangaa Re (Hindi Version).mp3",
    image: "Fitoor - Rangaa Re (Hindi Version).jpg",
    singer: "Sunidhi Chauhan",
  },
  {
    audio: "Fitoor - Tere Liye.mp3",
    image: "Fitoor - Tere Liye.jpg",
    singer: "Sunidhi Chauhan, Jubin Nautiyal",
  },
  {
    audio: "Fitoor - Yeh Fitoor Mera.mp3",
    image: "Fitoor - Yeh Fitoor Mera.jpg",
    singer: "Arijit Singh",
  },
  { audio: "Fitoori.mp3", image: "Fitoori.jpg", singer: "Amit Trivedi" },
  {
    audio: "Freak - Rishi Rich Project.mp3",
    image: "Freak - Rishi Rich Project.jpg",
    singer: "Rishi Rich Project",
  },

  {
    audio: "Gabbar Is Back - Teri Meri Kahaani.mp3",
    image: "Gabbar Is Back - Teri Meri Kahaani.jpg",
    singer: "Arijit Singh, Palak Muchhal",
  },
  {
    audio: "Gallan Goodiyaan.mp3",
    image: "Gallan Goodiyaan.jpg",
    singer: "Yashita Sharma, Manish Kumar Tipu, Farhan Akhtar",
  },
  {
    audio: "Get Ready To Fight (Baaghi).mp3",
    image: "Get Ready To Fight (Baaghi).jpg",
    singer: "Pranaay, Siddharth Basrur",
  },
  {
    audio: "Ghani Bawri (Remix).mp3",
    image: "Ghani Bawri (Remix).jpg",
    singer: "Jyoti Nooran",
  },
  {
    audio: "Ghani Bawri.mp3",
    image: "Ghani Bawri.jpg",
    singer: "Jyoti Nooran",
  },
  { audio: "Ghar.mp3", image: "Ghar.jpg", singer: "Shubhank Sharma" },
  {
    audio: "Girl I Need You.mp3",
    image: "Girl I Need You.jpg",
    singer: "Arijit Singh",
  },
  {
    audio: "Girls Like To Swing.mp3",
    image: "Girls Like To Swing.jpg",
    singer: "Sunidhi Chauhan",
  },
  {
    audio: "Go Goa Gone - Khoon Choos Le.mp3",
    image: "Go Goa Gone - Khoon Choos Le.jpg",
    singer: "Sachin Sanghvi, Priya Panchal",
  },
  {
    audio: "Gurdeep Mehndi ft. Bohemia - Saheli.mp3",
    image: "Gurdeep Mehndi ft. Bohemia - Saheli.jpg",
    singer: "Bohemia, Gurdeep Mehndi",
  },
  {
    audio: "Hass Nache Le.mp3",
    image: "Hass Nache Le.jpg",
    singer: "Raghav Sachar, Shahid Mallya",
  },
  {
    audio: "Heer Toh Badi Sad Hai.mp3",
    image: "Heer Toh Badi Sad Hai.jpg",
    singer: "Mika Singh",
  },
  {
    audio: "High Heels.mp3",
    image: "High Heels.jpg",
    singer: "Jaz Dhami, Yo Yo Honey Singh",
  },

  {
    audio: "Ho Gaya Hai Pyar.mp3",
    image: "Ho Gaya Hai Pyar.jpg",
    singer: "Dev Negi",
  },
  {
    audio: "Ikk Kudi (Reprised).mp3",
    image: "Ikk Kudi (Reprised).jpg",
    singer: "Diljit Dosanjh",
  },
  { audio: "Ikk Kudi.mp3", image: "Ikk Kudi.jpg", singer: "Diljit Dosanjh" },
  { audio: "Ishq Flint J.mp3", image: "Ishq Flint J.jpg", singer: "Flint J" },
  {
    audio: "Itni Si Baat Hain.mp3",
    image: "Itni Si Baat Hain.jpg",
    singer: "Arijit Singh, Antara Mitra",
  },
  { audio: "Jabra Fan.mp3", image: "Jabra Fan.jpg", singer: "Nakash Aziz" },
  {
    audio: "Jeena Marna (Female).mp3",
    image: "Jeena Marna (Female).jpg",
    singer: "Palak Muchhal",
  },
  { audio: "Jeena Marna.mp3", image: "Jeena Marna.jpg", singer: "Atif Aslam" },
  { audio: "Jeetne Ke Liye.mp3", image: "Jeetne Ke Liye.jpg", singer: "K. K." },
  {
    audio: "Kar Gayi Chull.mp3",
    image: "Kar Gayi Chull.jpg",
    singer: "Badshah, Fazilpuria",
  },
  {
    audio: "Khel Khel Mein.mp3",
    image: "Khel Khel Mein.jpg",
    singer: "Siddharth Basrur, Anushka Manchanda",
  },
  {
    audio: "Kuch To Hai - Do Lafzon Ki Kahani.mp3",
    image: "Kuch To Hai - Do Lafzon Ki Kahani.jpg",
    singer: "Armaan Malik",
  },

  {
    audio: "Lets Nacho.mp3",
    image: "Lets Nacho.jpg",
    singer: "Badshah, Benny Dayal",
  },
  { audio: "Lonely.mp3", image: "Lonely.jpg", singer: "Akon" },
  {
    audio: "Lucky Tu Lucky Me.mp3",
    image: "Lucky Tu Lucky Me.jpg",
    singer: "Benny Dayal, Anushka Manchanda",
  },
  {
    audio: "Lungi Dance.mp3",
    image: "Lungi Dance.jpg",
    singer: "Yo Yo Honey Singh",
  },
  {
    audio: "Main Sharabi.mp3",
    image: "Main Sharabi.jpg",
    singer: "Yo Yo Honey Singh, Imran Aziz Mian",
  },
  {
    audio: "Mainu Ishq Da Lagya Rog.mp3",
    image: "Mainu Ishq Da Lagya Rog.jpg",
    singer: "Tulsi Kumar",
  },
  {
    audio: "Makkhi - Are Are Are.mp3",
    image: "Makkhi - Are Are Are.jpg",
    singer: "Kavita Krishnamurthy",
  },
  {
    audio: "Malamaal.mp3",
    image: "Malamaal.jpg",
    singer: "Mika Singh, Monali Thakur",
  },
  { audio: "Malhari.mp3", image: "Malhari.jpg", singer: "Vishal Dadlani" },
  {
    audio: "Mar Jaayen - Loveshhuda - Atif Aslam.mp3",
    image: "Mar Jaayen - Loveshhuda - Atif Aslam.jpg",
    singer: "Atif Aslam",
  },
  { audio: "Mat Ja Re.mp3", image: "Mat Ja Re.jpg", singer: "Ankit Tiwari" },
  {
    audio: "Matargashti.mp3",
    image: "Matargashti.jpg",
    singer: "Mohit Chauhan",
  },
  { audio: "Maula.mp3", image: "Maula.jpg", singer: "Javed Ali" },
  {
    audio: "Mera Nachan Nu.mp3",
    image: "Mera Nachan Nu.jpg",
    singer: "Diljit Dosanjh",
  },
  {
    audio: "Mohe Rang Do Laal.mp3",
    image: "Mohe Rang Do Laal.jpg",
    singer: "Pandit Birju Maharaj, Shreya Ghoshal",
  },

  {
    audio: "Move On.mp3",
    image: "Move On.jpg",
    singer: "Shaan, Alisha Chinai",
  },
  {
    audio: "Neendein Khul Jaati Hai.mp3",
    image: "Neendein Khul Jaati Hai.jpg",
    singer: "Meet Bros, Mika Singh, Kanika Kapoor",
  },
  {
    audio: "Nenjukkule - Shakthishree Gopalan.mp3",
    image: "Nenjukkule - Shakthishree Gopalan.jpg",
    singer: "Shakthisree Gopalan",
  },
  {
    audio: "O Sathi Mere.mp3",
    image: "O Sathi Mere.jpg",
    singer: "Arijit Singh",
  },
  {
    audio: "Old School Girl (Haryanvi).mp3",
    image: "Old School Girl (Haryanvi).jpg",
    singer: "Sharda Rathore",
  },
  {
    audio: "Old School Girl.mp3",
    image: "Old School Girl.jpg",
    singer: "Anmol Malik",
  },
  {
    audio: "One Bottle Down - Yo Yo Honey Singh.mp3",
    image: "One Bottle Down - Yo Yo Honey Singh.jpg",
    singer: "Yo Yo Honey Singh",
  },
  {
    audio: "Oye Oye.mp3",
    image: "Oye Oye.jpg",
    singer: "Aditi Singh Sharma, Armaan Malik",
  },
  {
    audio: "Parade De La Bastille.mp3",
    image: "Parade De La Bastille.jpg",
    singer: "Shahin Badar",
  },
  {
    audio: "Party On My Mind.mp3",
    image: "Party On My Mind.jpg",
    singer: "K. K., Shefali Alvares, Yo Yo Honey Singh",
  },
  { audio: "Pehli Baar.mp3", image: "Pehli Baar.jpg", singer: "Sukriti Kakar" },
  {
    audio: "Phir Bhi Yeh Zindagi.mp3",
    image: "Phir Bhi Yeh Zindagi.jpg",
    singer: "Farhan Akhtar",
  },
  {
    audio: "Piku - Bezubaan.mp3",
    image: "Piku - Bezubaan.jpg",
    singer: "Anupam Roy",
  },
  {
    audio: "Piku - Journey Song.mp3",
    image: "Piku - Journey Song.jpg",
    singer: "Anupam Roy, Shreya Ghoshal",
  },
  {
    audio: "Piku - Lamhe Guzar Gaye.mp3",
    image: "Piku - Lamhe Guzar Gaye.jpg",
    singer: "Anupam Roy",
  },
  {
    audio: "Piku - Teri Meri Baatein.mp3",
    image: "Piku - Teri Meri Baatein.jpg",
    singer: "Anupam Roy",
  },
  { audio: "Piku.mp3", image: "Piku.jpg", singer: "Anupam Roy" },
  {
    audio: "Pinga.mp3",
    image: "Pinga.jpg",
    singer: "Shreya Ghoshal, Vaishali Made",
  },
  {
    audio: "Players.mp3",
    image: "Players.jpg",
    singer: "Benny Dayal, Neeti Mohan",
  },
  {
    audio: "Punjabiyaan Di Battery.mp3",
    image: "Punjabiyaan Di Battery.jpg",
    singer: "Mika Singh, Yo Yo Honey Singh",
  },
  {
    audio: "Pyaar Ki.mp3",
    image: "Pyaar Ki.jpg",
    singer: "Sharib Sabri, Toshi Sabri",
  },
  {
    audio: "Rani Tu Mein Raja.mp3",
    image: "Rani Tu Mein Raja.jpg",
    singer: "Mika Singh, Bhavya Pandit",
  },

  {
    audio: "Rehnuma.mp3",
    image: "Rehnuma.jpg",
    singer: "Shreya Ghoshal, Arijit Singh",
  },
  {
    audio: "Ro Ne Do - The Pain Of Love.mp3",
    image: "Ro Ne Do - The Pain Of Love.jpg",
    singer: "Sashi Suman",
  },
  {
    audio: "Rock Tha Party.mp3",
    image: "Rock Tha Party.jpg",
    singer: "Sashi Suman, Hard Kaur",
  },
  {
    audio: "Roy - Sooraj Dooba Hain.mp3",
    image: "Roy - Sooraj Dooba Hain.jpg",
    singer: "Arijit Singh, Aditi Singh Sharma",
  },
  { audio: "Saathi Rey.mp3", image: "Saathi Rey.jpg", singer: "Arko" },
  {
    audio: "Sab Tera.mp3",
    image: "Sab Tera.jpg",
    singer: "Armaan Malik, Shraddha Kapoor",
  },
  { audio: "Safarnama.mp3", image: "Safarnama.jpg", singer: "Lucky Ali" },
  { audio: "Saiyyan.mp3", image: "Saiyyan.jpg", singer: "Kailash Kher" },
  {
    audio: "Samjhawan.mp3",
    image: "Samjhawan.jpg",
    singer: "Arijit Singh, Shreya Ghoshal",
  },
  {
    audio: "Sarfarosh - Hoshwalon Ko Khabar Kya.mp3",
    image: "Sarfarosh - Hoshwalon Ko Khabar Kya.jpg",
    singer: "Jagjit Singh",
  },
  {
    audio: "Satan - Weed Pila De.mp3",
    image: "Satan - Weed Pila De.jpg",
    singer: "Yo Yo Honey Singh",
  },
  {
    audio: "Saturday Saturday.mp3",
    image: "Saturday Saturday.jpg",
    singer: "Badshah, Indeep Bakshi",
  },
  { audio: "Sehra.mp3", image: "Sehra.jpg", singer: "Ankit Tiwari" },

  {
    audio: "Soch Na Sake (version 2).mp3",
    image: "Soch Na Sake (version 2).jpg",
    singer: "Arijit Singh, Tulsi Kumar",
  },
  {
    audio: "Soch Na Sake.mp3",
    image: "Soch Na Sake.jpg",
    singer: "Arijit Singh, Tulsi Kumar",
  },

  {
    audio: "Student Of The Year - Ishq Wala Love.mp3",
    image: "Student Of The Year - Ishq Wala Love.jpg",
    singer: "Shekhar Ravjiani, Salim Merchant, Neeti Mohan",
  },
  {
    audio: "Student Of The Year - Kukkad.mp3",
    image: "Student Of The Year - Kukkad.jpg",
    singer: "Shahid Mallya",
  },
  {
    audio: "Student Of The Year - Radha.mp3",
    image: "Student Of The Year - Radha.jpg",
    singer: "Shreya Ghoshal, Udit Narayan, Vishal Dadlani",
  },
  {
    audio: "Student Of The Year - The Disco Song.mp3",
    image: "Student Of The Year - The Disco Song.jpg",
    singer: "Sunidhi Chauhan, Vishal Dadlani",
  },
  {
    audio: "Student Of The Year - Vele.mp3",
    image: "Student Of The Year - Vele.jpg",
    singer: "Vishal Dadlani, Shekhar Ravjiani",
  },
  {
    audio: "Taang Uthake.mp3",
    image: "Taang Uthake.jpg",
    singer: "Mika Singh, Sohail Sen, Neeti Mohan, Mamta Sharma",
  },
  {
    audio: "Tanu Weds Manu - Sadi Gali.mp3",
    image: "Tanu Weds Manu - Sadi Gali.jpg",
    singer: "Lehmber Hussainpuri",
  },
  {
    audio: "Tanu Weds Manu - Yun Hi.mp3",
    image: "Tanu Weds Manu - Yun Hi.jpg",
    singer: "Mohit Chauhan, Ujjaini",
  },
  { audio: "Tere Bin.mp3", image: "Tere Bin.jpg", singer: "Atif Aslam" },
  {
    audio: "Tere Dar Par Sanam (Remake) - Be My Love.mp3",
    image: "Tere Dar Par Sanam (Remake) - Be My Love.jpg",
    singer: "Mithoon, Benny Dayal",
  },
  {
    audio: "Tere Liye Mere Kareem.mp3",
    image: "Tere Liye Mere Kareem.jpg",
    singer: "Jubin Nautiyal",
  },

  {
    audio: "The Shaukeens - Manali Trance.mp3",
    image: "The Shaukeens - Manali Trance.jpg",
    singer: "Neha Kakkar, Lil Golu, Yo Yo Honey Singh",
  },
  {
    audio: "Titliyan.mp3",
    image: "Titliyan.jpg",
    singer: "Sunidhi Chauhan, Sajid-Wajid, Chinmayi",
  },
  { audio: "Tu Bhoola Jise.mp3", image: "Tu Bhoola Jise.jpg", singer: "K.K." },
  {
    audio: "Tu Hi Na Jaane.mp3",
    image: "Tu Hi Na Jaane.jpg",
    singer: "Sonu Nigam, Neeti Mohan",
  },
  {
    audio: "Tu Isaq Mera.mp3",
    image: "Tu Isaq Mera.jpg",
    singer: "Meet Bros, Neha Kakkar",
  },
  {
    audio: "Tu Koi Aur Hai.mp3",
    image: "Tu Koi Aur Hai.jpg",
    singer: "Arijit Singh",
  },
  {
    audio: "Tu Mere Paas.mp3",
    image: "Tu Mere Paas.jpg",
    singer: "Ankit Tiwari",
  },
  {
    audio: "Tum Saath Ho.mp3",
    image: "Tum Saath Ho.jpg",
    singer: "Alka Yagnik, Arijit Singh",
  },
  {
    audio: "Tumhe Apna Banane Ka.mp3",
    image: "Tumhe Apna Banane Ka.jpg",
    singer: "Armaan Malik, Neeti Mohan",
  },
  {
    audio: "Ud-Daa Punjab.mp3",
    image: "Ud-Daa Punjab.jpg",
    singer: "Vishal Dadlani, Amit Trivedi",
  },
  {
    audio: "Ungli - Dance Basanti.mp3",
    image: "Ungli - Dance Basanti.jpg",
    singer: "Vishal Dadlani, Anushka Manchanda",
  },
  { audio: "Vadiya.mp3", image: "Vadiya.jpg", singer: "Rashi Raagga" },

  {
    audio: "Vicky Donor - Pani Da Rang (Male).mp3",
    image: "Vicky Donor - Pani Da Rang (Male).jpg",
    singer: "Ayushmann Khurrana",
  },

  {
    audio: "Wajah Tum Ho.mp3",
    image: "Wajah Tum Ho.jpg",
    singer: "Armaan Malik",
  },
  {
    audio: "Wat Wat (vengeance Mix).mp3",
    image: "Wat Wat (vengeance Mix).jpg",
    singer: "Arijit Singh, Anushka Manchanda",
  },
  {
    audio: "Wat Wat Wat.mp3",
    image: "Wat Wat Wat.jpg",
    singer: "Arijit Singh",
  },
  {
    audio: "Wazir Theme.mp3",
    image: "Wazir Theme.jpg",
    singer: "Gaurav Godkhindi, Rohit Kulkarni",
  },
  {
    audio: "Yaariyan - ABCD.mp3",
    image: "Yaariyan - ABCD.jpg",
    singer: "Yo Yo Honey Singh, Benny Dayal",
  },
  {
    audio: "Yaariyan - Baarish.mp3",
    image: "Yaariyan - Baarish.jpg",
    singer: "Mohammed Irfan, Gajendra Verma",
  },
  {
    audio: "Yeh Jawaani Hai Deewani - Badtameez Dil.mp3",
    image: "Yeh Jawaani Hai Deewani - Badtameez Dil.jpg",
    singer: "Benny Dayal, Shefali Alvares",
  },
  {
    audio: "Yeh Jawaani Hai Deewani - Balam Pichkari.mp3",
    image: "Yeh Jawaani Hai Deewani - Balam Pichkari.jpg",
    singer: "Vishal Dadlani, Shalmali Kholgade",
  },
  {
    audio: "Yeh Jawaani Hai Deewani - Dilliwaali Girlfriend.mp3",
    image: "Yeh Jawaani Hai Deewani - Dilliwaali Girlfriend.jpg",
    singer: "Arijit Singh, Sunidhi Chauhan",
  },
  {
    audio: "Yeh Jawaani Hai Deewani - Ghagra.mp3",
    image: "Yeh Jawaani Hai Deewani - Ghagra.jpg",
    singer: "Rekha Bhardwaj, Vishal Dadlani",
  },
  {
    audio: "Yeh Jawaani Hai Deewani - Ilahi.mp3",
    image: "Yeh Jawaani Hai Deewani - Ilahi.jpg",
    singer: "Arijit Singh",
  },
  {
    audio: "Yeh Jawaani Hai Deewani - Kabira (2).mp3",
    image: "Yeh Jawaani Hai Deewani - Kabira (2).jpg",
    singer: "Rekha Bhardwaj, Tochi Raina",
  },
  {
    audio: "Yeh Jawaani Hai Deewani - Kabira.mp3",
    image: "Yeh Jawaani Hai Deewani - Kabira.jpg",
    singer: "Rekha Bhardwaj, Tochi Raina",
  },
  {
    audio: "Yeh Jawaani Hai Deewani - Subhanallah.mp3",
    image: "Yeh Jawaani Hai Deewani - Subhanallah.jpg",
    singer: "Sreeram, Shilpa Rao",
  },
];
var searchResults = audioFiles;
var searchTerm = "";
var searchbar = document.getElementById("inseraudio");
var debounceTimeout;

function searchMedia(keyword) {
  keyword = keyword.toLowerCase(); // Convert keyword to lowercase for case-insensitive search

  // Filter mediaFiles array based on keyword match in audio or image filename
  const results = audioFiles.filter(({ audio, image }) => {
    return audio.toLowerCase().includes(keyword);
  });

  return results;
}

function debounce(func, delay) {
  return function (...args) {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => func.apply(this, args), delay);
  };
}

searchbar.addEventListener(
  "input",
  debounce(function (e) {
    searchTerm = e.target.value; // Example search term
    searchResults = searchMedia(searchTerm);
    i = 0;
    audioContainer.innerHTML = ""; // Clear the container before adding new audio elements
    createAudioElements(searchResults);
    playlists.innerHTML = "";
    makediv(searchResults);
  }, 200)
); // 300ms delay

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
    pause1[searchResults.length].style.display = "none";
    play1[searchResults.length].style.display = "inline-block";
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
    play1[searchResults.length].style.display = "none";
    pause1[searchResults.length].style.display = "inline-block";
    audio1.src = document.getElementById("song" + i).getAttribute("data-src");
    audio1.play();
  }
  updateActivePlaylist();
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
      "<div class='playlist' data-songnum=" +
      o +
      " onclick='switchSong(" +
      o +
      ") '> <div class='pimg'><img loading='lazy' src='./images/" +
      arrayofimages[o].image +
      "' alt='img' /></div><div class='pdet'><i class='fa-solid fa-play fa-2xl'></i><i class='fa-solid fa-pause fa-2xl' style='display:none'></i><span class='name'>" +
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
  if (isNaN(time)) {
    return "0:00";
  }
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  console.log(audio1.duration);
  // Ensure seconds are always two digits
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${minutes}:${formattedSeconds}`;
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

function updateActivePlaylist() {
  var playlists = document.querySelectorAll(".playlist");

  playlists.forEach(function (playlist) {
    if (playlist.getAttribute("data-songnum") == i) {
      playlist.classList.add("activeplaylist");
    } else {
      playlist.classList.remove("activeplaylist");
    }
  });
}
setTimeout(function loadplaylist() {
  var playlist = document.querySelectorAll(".playlist");
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
    updateActivePlaylist();
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
    updateActivePlaylist();
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
