/* =========================
   LANGUAGE & TRANSLATIONS
========================= */

const translations = {
  dari: {
    appName: "نگین AAC",
    tagline: "هر کودک، یک صدا؛ هر صدا، یک نگین",
    online: "🟢 آنلاین",
    offline: "🟠 حالت آفلاین",
    version: "نسخه 1.1",
    sentencePlaceholder: "جمله خود را بسازید",
    speak: "🔊 پخش",
    clear: "🗑️ پاک",
    searchPlaceholder: "🔎 جستجوی کلمه...",
    all: "🏠 همه",
    drinks: "💧 نوشیدنی",
    food: "🍎 غذا",
    people: "👨‍👩‍👧 افراد",
    needs: "🚻 نیازها",
    feelings: "😊 احساسات",
    health: "🩺 سلامت",
    places: "📍 مکان‌ها",
    emergency: "🚨 کمک فوری",
    favorites: "⭐ علاقه‌مندی‌ها",
    recent: "🕘 اخیر",
    hint: "نکته: برای افزودن به علاقه‌مندی‌ها، روی کلمه دوبار لمس کنید.",
    noWord: "کلمه‌ای پیدا نشد.",
    noFavorites: "هنوز کلمه‌ای به علاقه‌مندی‌ها اضافه نشده است.\n\nبرای افزودن، روی یک کلمه دوبار لمس کنید.",
    noRecent: "هنوز کلمه‌ای استفاده نشده است.",
    footer: "💎 مرکز آموزشی نگین",
    langSwitch: "پښتو",
    emergencySentence: ["کمک", "لطفاً", "من به کمک نیاز دارم"],
    emergencySpeak: "کمک لطفاً من به کمک نیاز دارم",
    ttsLang: "fa-IR"
  },
  pashto: {
    appName: "نگین AAC",
    tagline: "هر ماشوم، یوه غږ؛ هر غږ، یوه نگین",
    online: "🟢 آنلاین",
    offline: "🟠 آفلاین حالت",
    version: "نسخه ۱.۱",
    sentencePlaceholder: "خپل جمله جوړه کړئ",
    speak: "🔊 غږول",
    clear: "🗑️ پاکول",
    searchPlaceholder: "🔎 کلمه لټون...",
    all: "🏠 ټول",
    drinks: "💧 څښاک",
    food: "🍎 خواړه",
    people: "👨‍👩‍👧 خلک",
    needs: "🚻 اړتیاوې",
    feelings: "😊 احساسات",
    health: "🩺 روغتیا",
    places: "📍 ځایونه",
    emergency: "🚨 بیړنۍ مرسته",
    favorites: "⭐ خوښې",
    recent: "🕘 وروستی",
    hint: "یادونه: د خوښو لپاره په کلمه دوه ځله ټک وکړئ.",
    noWord: "هیڅ کلمه ونه موندل شوه.",
    noFavorites: "تر اوسه هیڅ کلمه په خوښو کې نه ده اضافه شوې.\n\nد اضافه کولو لپاره په کلمه دوه ځله ټک وکړئ.",
    noRecent: "تر اوسه هیڅ کلمه نه ده کارول شوې.",
    footer: "💎 د نگین ښوونیز مرکز",
    langSwitch: "دری",
    emergencySentence: ["مرسته", "مهرباني وکړئ", "زه مرستې ته اړتیا لرم"],
    emergencySpeak: "مرسته مهرباني وکړئ زه مرستې ته اړتیا لرم",
    ttsLang: "ps"
  }
};

let currentLang = localStorage.getItem("neginLang") || "dari";

function t(key) {
  return (translations[currentLang] && translations[currentLang][key]) || key;
}


/* =========================
   SYMBOLS (Bilingual)
========================= */

const symbols = [
  // drinks
  { id: "water", dari: "آب", pashto: "اوبه", category: "drinks", emoji: "💧" },
  { id: "milk", dari: "شیر", pashto: "شیدې", category: "drinks", emoji: "🥛" },
  { id: "tea", dari: "چای", pashto: "چای", category: "drinks", emoji: "🍵" },
  { id: "juice", dari: "آبمیوه", pashto: "جوس", category: "drinks", emoji: "🧃" },
  { id: "yogurt_drink", dari: "دوغ", pashto: "دوغ", category: "drinks", emoji: "🥛" },

  // food
  { id: "food", dari: "غذا", pashto: "خواړه", category: "food", emoji: "🍲" },
  { id: "bread", dari: "نان", pashto: "ډوډۍ", category: "food", emoji: "🍞" },
  { id: "rice", dari: "برنج", pashto: "وریجې", category: "food", emoji: "🍚" },
  { id: "apple", dari: "سیب", pashto: "مڼه", category: "food", emoji: "🍎" },
  { id: "qabuli", dari: "قابلی", pashto: "قابلی", category: "food", emoji: "🍛" },
  { id: "bolani", dari: "بولانی", pashto: "بولاني", category: "food", emoji: "🥟" },
  { id: "egg", dari: "تخم‌مرغ", pashto: "هګۍ", category: "food", emoji: "🥚" },
  { id: "meat", dari: "گوشت", pashto: "غوښه", category: "food", emoji: "🥩" },
  { id: "soup", dari: "آش", pashto: "اش", category: "food", emoji: "🍜" },

  // people
  { id: "mother", dari: "مادر", pashto: "مور", category: "people", emoji: "👩" },
  { id: "father", dari: "پدر", pashto: "پلار", category: "people", emoji: "👨" },
  { id: "brother", dari: "برادر", pashto: "ورور", category: "people", emoji: "👦" },
  { id: "sister", dari: "خواهر", pashto: "خور", category: "people", emoji: "👧" },
  { id: "teacher", dari: "معلم", pashto: "ښوونکی", category: "people", emoji: "👩‍🏫" },
  { id: "friend", dari: "دوست", pashto: "ملګری", category: "people", emoji: "🧑‍🤝‍🧑" },
  { id: "grandmother", dari: "مادربزرگ", pashto: "نیا", category: "people", emoji: "👵" },
  { id: "grandfather", dari: "پدربزرگ", pashto: "نیکه", category: "people", emoji: "👴" },

  // needs
  { id: "toilet", dari: "تشناب", pashto: "تشناب", category: "needs", emoji: "🚻" },
  { id: "sleep", dari: "خواب", pashto: "خوب", category: "needs", emoji: "😴" },
  { id: "help", dari: "کمک", pashto: "مرسته", category: "needs", emoji: "🆘" },
  { id: "yes", dari: "بلی", pashto: "هو", category: "needs", emoji: "✅" },
  { id: "no", dari: "نخیر", pashto: "نه", category: "needs", emoji: "❌" },
  { id: "want", dari: "می‌خواهم", pashto: "غواړم", category: "needs", emoji: "🙏" },
  { id: "more", dari: "بیشتر", pashto: "نور", category: "needs", emoji: "➕" },
  { id: "stop", dari: "بس است", pashto: "بس دی", category: "needs", emoji: "🛑" },
  { id: "thirsty", dari: "تشنه", pashto: "تږی", category: "needs", emoji: "🥵" },
  { id: "hungry", dari: "گرسنه", pashto: "وږی", category: "needs", emoji: "😋" },

  // feelings
  { id: "happy", dari: "خوشحال", pashto: "خوښ", category: "feelings", emoji: "😊" },
  { id: "sad", dari: "غمگین", pashto: "خفه", category: "feelings", emoji: "😢" },
  { id: "angry", dari: "عصبانی", pashto: "قهرجن", category: "feelings", emoji: "😡" },
  { id: "afraid", dari: "ترسیده", pashto: "ویره", category: "feelings", emoji: "😨" },
  { id: "tired", dari: "خسته", pashto: "ستړی", category: "feelings", emoji: "😩" },
  { id: "love", dari: "دوست دارم", pashto: "میینه لرم", category: "feelings", emoji: "❤️" },
  { id: "bored", dari: "حوصله‌ام سر رفته", pashto: "بې حوصله", category: "feelings", emoji: "😑" },

  // health
  { id: "pain", dari: "درد", pashto: "درد", category: "health", emoji: "🤕" },
  { id: "doctor", dari: "دکتر", pashto: "ډاکټر", category: "health", emoji: "👨‍⚕️" },
  { id: "medicine", dari: "دوا", pashto: "درمل", category: "health", emoji: "💊" },
  { id: "hospital", dari: "شفاخانه", pashto: "روغتون", category: "health", emoji: "🏥" },
  { id: "fever", dari: "تب", pashto: "تبه", category: "health", emoji: "🤒" },
  { id: "hurt", dari: "زخم", pashto: "زخم", category: "health", emoji: "🩹" },

  // places
  { id: "home", dari: "خانه", pashto: "کور", category: "places", emoji: "🏠" },
  { id: "school", dari: "مکتب", pashto: "ښوونځی", category: "places", emoji: "🏫" },
  { id: "park", dari: "پارک", pashto: "پارک", category: "places", emoji: "🌳" },
  { id: "mosque", dari: "مسجد", pashto: "جومات", category: "places", emoji: "🕌" },
  { id: "market", dari: "بازار", pashto: "بازار", category: "places", emoji: "🛒" },
  { id: "clinic", dari: "کلینیک", pashto: "کلینیک", category: "places", emoji: "🏥" }
];


/* =========================
   STATE
========================= */

let sentence = [];
let currentCategory = "all";

function loadList(key) {
  try {
    return JSON.parse(localStorage.getItem(key) || "[]");
  } catch {
    return [];
  }
}

function saveList(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

let favorites = loadList("neginFavorites");
let recent = loadList("neginRecent");


/* =========================
   HELPERS
========================= */

function getTitle(symbol) {
  return currentLang === "pashto" ? symbol.pashto : symbol.dari;
}


/* =========================
   UI UPDATE (Language)
========================= */

function updateUILanguage() {
  const h1 = document.querySelector(".header h1");
  const tagline = document.querySelector(".header p");
  if (h1) h1.textContent = t("appName");
  if (tagline) tagline.textContent = t("tagline");

  updateConnection();
  const versionEl = document.querySelector(".status-card span:last-child");
  if (versionEl) versionEl.textContent = t("version");

  if (sentence.length === 0) {
    const sent = document.getElementById("sentence");
    if (sent) sent.textContent = t("sentencePlaceholder");
  }

  const speakBtn = document.querySelector(".speak-button");
  const clearBtn = document.querySelector(".clear-button");
  if (speakBtn) speakBtn.textContent = t("speak");
  if (clearBtn) clearBtn.textContent = t("clear");

  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.placeholder = t("searchPlaceholder");

  const catButtons = document.querySelectorAll(".categories button");
  const catKeys = ["all", "drinks", "food", "people", "needs", "feelings", "health", "places"];
  catButtons.forEach((btn, i) => {
    if (catKeys[i]) btn.textContent = t(catKeys[i]);
  });

  const hint = document.querySelector(".hint");
  if (hint) hint.textContent = t("hint");

  const quickBtns = document.querySelectorAll(".quick-actions button");
  if (quickBtns[0]) quickBtns[0].textContent = t("emergency");
  if (quickBtns[1]) quickBtns[1].textContent = t("favorites");
  if (quickBtns[2]) quickBtns[2].textContent = t("recent");

  const footerP = document.querySelector("footer p");
  if (footerP) footerP.textContent = t("footer");

  const langBtn = document.getElementById("langSwitch");
  if (langBtn) langBtn.textContent = t("langSwitch");

  document.documentElement.lang = currentLang === "pashto" ? "ps" : "fa";
}


/* =========================
   LANGUAGE SWITCH
========================= */

function switchLanguage() {
  currentLang = currentLang === "dari" ? "pashto" : "dari";
  localStorage.setItem("neginLang", currentLang);
  sentence = [];
  updateSentence();
  updateUILanguage();
  searchSymbols();
}


/* =========================
   RENDER
========================= */

function renderSymbols(list) {
  list = list || symbols;
  const grid = document.getElementById("aacGrid");
  if (!grid) return;
  grid.innerHTML = "";

  if (list.length === 0) {
    grid.innerHTML = '<div class="empty">' + t("noWord") + '</div>';
    return;
  }

  list.forEach(function(symbol) {
    const isFavorite = favorites.some(function(item) { return item.id === symbol.id; });
    const title = getTitle(symbol);

    const button = document.createElement("button");
    button.className = "symbol" + (isFavorite ? " is-favorite" : "");
    button.type = "button";
    button.setAttribute("aria-label", title);

    button.innerHTML =
      '<span class="symbol-emoji" aria-hidden="true">' + symbol.emoji + '</span>' +
      '<span class="symbol-title">' + title + '</span>' +
      (isFavorite ? '<span class="fav-badge" aria-hidden="true">⭐</span>' : '');

    var lastTap = 0;
    button.addEventListener("click", function(e) {
      var now = Date.now();
      if (now - lastTap < 350) {
        e.preventDefault();
        toggleFavorite(symbol);
        renderSymbols(getFilteredList());
      } else {
        addWord(symbol);
      }
      lastTap = now;
    });

    grid.appendChild(button);
  });
}


function getFilteredList() {
  var input = document.getElementById("searchInput");
  var query = (input ? input.value.trim().toLowerCase() : "");
  var list = symbols;

  if (currentCategory !== "all") {
    list = list.filter(function(s) { return s.category === currentCategory; });
  }

  if (query) {
    list = list.filter(function(s) {
      return getTitle(s).toLowerCase().indexOf(query) !== -1;
    });
  }

  return list;
}


/* =========================
   ADD WORD
========================= */

function addWord(symbol) {
  var title = getTitle(symbol);
  sentence.push(title);
  updateSentence();
  speak(title);
  addRecent(symbol);
}


function updateSentence() {
  var element = document.getElementById("sentence");
  if (!element) return;
  if (sentence.length === 0) {
    element.textContent = t("sentencePlaceholder");
    return;
  }
  element.textContent = sentence.join(" ");
}


/* =========================
   TEXT TO SPEECH
========================= */

function speak(text) {
  if (!("speechSynthesis" in window)) {
    alert("دستگاه شما از پخش صدا پشتیبانی نمی‌کند.");
    return;
  }

  speechSynthesis.cancel();

  var utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = t("ttsLang");
  utterance.rate = 0.78;
  utterance.pitch = 1.05;
  utterance.volume = 1;

  var voices = speechSynthesis.getVoices();
  var preferred = null;

  if (currentLang === "pashto") {
    preferred = voices.find(function(v) {
      return v.lang.indexOf("ps") === 0 ||
             (v.name && v.name.toLowerCase().indexOf("pashto") !== -1);
    });
    if (!preferred) {
      preferred = voices.find(function(v) {
        return v.lang.indexOf("fa") === 0 || v.lang.indexOf("ar") === 0;
      });
    }
  } else {
    preferred = voices.find(function(v) {
      return v.lang.indexOf("fa") === 0 ||
             (v.name && (v.name.indexOf("Persian") !== -1 || v.name.indexOf("Farsi") !== -1));
    });
  }

  if (preferred) utterance.voice = preferred;
  speechSynthesis.speak(utterance);
}


function speakSentence() {
  if (sentence.length === 0) return;
  speak(sentence.join(" "));
}


function clearSentence() {
  sentence = [];
  updateSentence();
}


/* =========================
   CATEGORY & SEARCH
========================= */

function filterCategory(category) {
  currentCategory = category;
  var input = document.getElementById("searchInput");
  if (input) input.value = "";
  searchSymbols();
}


function searchSymbols() {
  renderSymbols(getFilteredList());
}


/* =========================
   FAVORITES
========================= */

function toggleFavorite(symbol) {
  var exists = favorites.some(function(item) { return item.id === symbol.id; });
  if (exists) {
    favorites = favorites.filter(function(item) { return item.id !== symbol.id; });
  } else {
    favorites.push(symbol);
  }
  saveList("neginFavorites", favorites);
}


function showFavorites() {
  if (favorites.length === 0) {
    alert(t("noFavorites"));
    return;
  }
  currentCategory = "all";
  var input = document.getElementById("searchInput");
  if (input) input.value = "";
  renderSymbols(favorites);
}


/* =========================
   RECENT
========================= */

function addRecent(symbol) {
  recent = recent.filter(function(item) { return item.id !== symbol.id; });
  recent.unshift(symbol);
  recent = recent.slice(0, 12);
  saveList("neginRecent", recent);
}


function showRecent() {
  if (recent.length === 0) {
    alert(t("noRecent"));
    return;
  }
  currentCategory = "all";
  var input = document.getElementById("searchInput");
  if (input) input.value = "";
  renderSymbols(recent);
}


/* =========================
   EMERGENCY
========================= */

function showEmergency() {
  sentence = t("emergencySentence").slice();
  updateSentence();
  speak(t("emergencySpeak"));
}


/* =========================
   CONNECTION
========================= */

function updateConnection() {
  var element = document.getElementById("connectionStatus");
  if (!element) return;
  element.textContent = navigator.onLine ? t("online") : t("offline");
}

window.addEventListener("online", updateConnection);
window.addEventListener("offline", updateConnection);


/* =========================
   SERVICE WORKER
========================= */

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker.register("sw.js").catch(function(err) {
      console.log("Service Worker:", err);
    });
  });
}


if ("speechSynthesis" in window) {
  speechSynthesis.onvoiceschanged = function() {};
}


/* =========================
   START
========================= */

updateUILanguage();
renderSymbols();
updateConnection();
