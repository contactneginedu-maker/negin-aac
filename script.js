(() => {
  "use strict";

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  // ---------- Hero slider ----------
  const slides = [
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1800&q=80",
    "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1800&q=80",
    "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1800&q=80",
    "https://images.unsplash.com/photo-1504159506876-f8338247a14a?auto=format&fit=crop&w=1800&q=80"
  ];

  const slidesEl = $("#slides");
  const dots = $("#dots");
  let current = 0;
  let sliderTimer = null;

  function renderSlides() {
    if (!slidesEl || !dots) return;

    const fragment = document.createDocumentFragment();
    slides.forEach((src, i) => {
      const slide = document.createElement("div");
      slide.className = `hero-slide${i === 0 ? " active" : ""}`;
      slide.style.backgroundImage = `url("${src}")`;
      slide.setAttribute("aria-hidden", i === 0 ? "false" : "true");
      fragment.appendChild(slide);

      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = i === 0 ? "active" : "";
      dot.setAttribute("aria-label", `اسلاید ${i + 1}`);
      dot.setAttribute("aria-pressed", i === 0 ? "true" : "false");
      dot.addEventListener("click", () => showSlide(i, true));
      dots.appendChild(dot);
    });
    slidesEl.appendChild(fragment);
  }

  function showSlide(index, userInitiated = false) {
    const slideNodes = $$(".hero-slide", slidesEl);
    const dotNodes = $$("button", dots);
    if (!slideNodes.length || !dotNodes.length) return;

    current = ((index % slideNodes.length) + slideNodes.length) % slideNodes.length;
    slideNodes.forEach((slide, i) => {
      const active = i === current;
      slide.classList.toggle("active", active);
      slide.setAttribute("aria-hidden", String(!active));
    });
    dotNodes.forEach((dot, i) => {
      const active = i === current;
      dot.classList.toggle("active", active);
      dot.setAttribute("aria-pressed", String(active));
    });

    if (userInitiated) restartSlider();
  }

  function restartSlider() {
    if (sliderTimer) window.clearInterval(sliderTimer);
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    sliderTimer = window.setInterval(() => showSlide(current + 1), 5000);
  }

  renderSlides();
  restartSlider();

  // ---------- Navigation ----------
  $$('[data-target]').forEach(button => {
    button.addEventListener("click", () => {
      const target = $(button.dataset.target);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  const menuBtn = $("#menuBtn");
  const mobileNav = $("#mobileNav");
  menuBtn?.addEventListener("click", () => {
    const open = mobileNav?.classList.toggle("open") ?? false;
    menuBtn.setAttribute("aria-expanded", String(open));
  });
  $$("a", mobileNav).forEach(link => link.addEventListener("click", () => {
    mobileNav?.classList.remove("open");
    menuBtn?.setAttribute("aria-expanded", "false");
  }));

  // ---------- Language ----------
  const translations = {
    fa: {
      brandSmall: "مؤسسه‌ی خدماتی و حرفوی زنان بی‌بضاعت",
      brand: "مرکز آموزشی و توانبخشی نگین",
      about: "درباره ما",
      services: "خدمات",
      education: "آموزش",
      games: "هنر و بازی",
      register: "ثبت‌نام",
      contact: "تماس",
      rehab: "توانبخشی",
      eyebrow: "آموزش • توانبخشی • حمایت",
      heroTitle: "مرکز آموزشی و توانبخشی نگین",
      heroText: "خانه‌ای امن برای آموزش و توانمندسازی کودکان دارای معلولیت در افغانستان",
      slogan: "هر کودک یک نگین است",
      viewServices: "مشاهده خدمات",
      aboutHeading: "هر کودک شایسته فرصت برابر است"
    },
    ps: {
      brandSmall: "د بې وزلو ښځو د خدماتو او حرفوي چارو مؤسسه",
      brand: "د نگین د ښوونې او بیارغونې مرکز",
      about: "زموږ په اړه",
      services: "خدمتونه",
      education: "ښوونه",
      games: "هنر او لوبې",
      register: "نوم‌لیکنه",
      contact: "اړیکه",
      rehab: "بیارغونه",
      eyebrow: "ښوونه • بیارغونه • ملاتړ",
      heroTitle: "د نگین د ښوونې او بیارغونې مرکز",
      heroText: "په افغانستان کې د معلولیت لرونکو ماشومانو لپاره د ښوونې او پیاوړتیا خوندي کور",
      slogan: "هر ماشوم یو نگین دی",
      viewServices: "خدمتونه وګورئ",
      aboutHeading: "هر ماشوم د برابر فرصت وړ دی"
    }
  };

  function safeStorageGet(key, fallback = null) {
    try { return localStorage.getItem(key) ?? fallback; } catch { return fallback; }
  }

  function safeStorageSet(key, value) {
    try { localStorage.setItem(key, value); } catch { /* storage can be unavailable */ }
  }

  let lang = safeStorageGet("lang", "fa");
  if (!translations[lang]) lang = "fa";

  function setLanguage(language) {
    lang = translations[language] ? language : "fa";
    document.documentElement.lang = lang;
    document.documentElement.dir = "rtl";
    $$('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (translations[lang][key]) el.textContent = translations[lang][key];
    });
    const langBtn = $("#langBtn");
    if (langBtn) {
      langBtn.title = lang === "fa" ? "تغییر به پشتو" : "تغییر به دری";
      langBtn.setAttribute("aria-label", langBtn.title);
    }
    safeStorageSet("lang", lang);
  }

  $("#langBtn")?.addEventListener("click", () => setLanguage(lang === "fa" ? "ps" : "fa"));
  setLanguage(lang);

  // ---------- Accessibility ----------
  const modal = $("#accessModal");
  const accessBtn = $("#accessBtn");
  const accessClose = $("#accessClose");

  function setModal(open) {
    if (!modal) return;
    modal.classList.toggle("open", open);
    modal.setAttribute("aria-hidden", String(!open));
    accessBtn?.setAttribute("aria-expanded", String(open));
    if (open) $("#fontDown", modal)?.focus();
  }

  accessBtn?.addEventListener("click", () => setModal(true));
  accessClose?.addEventListener("click", () => setModal(false));
  modal?.addEventListener("click", e => {
    if (e.target === modal) setModal(false);
  });

  function applyAccessState(state) {
    document.body.classList.remove("dark", "high-contrast", "font-large", "font-xl");
    if (state?.dark) document.body.classList.add("dark");
    if (state?.contrast) document.body.classList.add("high-contrast");
    if (state?.font === "large") document.body.classList.add("font-large");
    if (state?.font === "xl") document.body.classList.add("font-xl");
  }

  function readAccessState() {
    try { return JSON.parse(safeStorageGet("accessibility", "{}")) || {}; } catch { return {}; }
  }

  function saveAccessState(state) {
    safeStorageSet("accessibility", JSON.stringify(state));
  }

  let accessState = readAccessState();
  applyAccessState(accessState);

  $("#fontDown")?.addEventListener("click", () => {
    accessState.font = "large";
    applyAccessState(accessState);
    saveAccessState(accessState);
  });
  $("#fontUp")?.addEventListener("click", () => {
    accessState.font = "xl";
    applyAccessState(accessState);
    saveAccessState(accessState);
  });
  $("#fontReset")?.addEventListener("click", () => {
    delete accessState.font;
    applyAccessState(accessState);
    saveAccessState(accessState);
  });
  $("#darkBtn")?.addEventListener("click", () => {
    accessState.dark = !document.body.classList.contains("dark");
    applyAccessState(accessState);
    saveAccessState(accessState);
  });
  $("#contrastBtn")?.addEventListener("click", () => {
    accessState.contrast = !document.body.classList.contains("high-contrast");
    applyAccessState(accessState);
    saveAccessState(accessState);
  });
  $("#resetAccess")?.addEventListener("click", () => {
    accessState = {};
    applyAccessState(accessState);
    saveAccessState(accessState);
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      setModal(false);
      mobileNav?.classList.remove("open");
      menuBtn?.setAttribute("aria-expanded", "false");
    }
  });

  // ---------- Text-to-speech ----------
  $$(".speak").forEach(button => button.addEventListener("click", () => {
    if (!("speechSynthesis" in window)) return;
    const section = $(button.dataset.speak);
    if (!section) return;
    const text = section.innerText.replace(/🔊/g, " ").replace(/\s+/g, " ").trim();
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang === "ps" ? "ps-AF" : "fa-AF";
    utterance.rate = 0.88;
    window.speechSynthesis.speak(utterance);
  }));

  // ---------- Drawing canvas ----------
  const canvas = $("#canvas");
  const brush = $("#brush");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    let drawing = false;
    let last = null;

    function position(event) {
      const rect = canvas.getBoundingClientRect();
      return {
        x: (event.clientX - rect.left) * canvas.width / rect.width,
        y: (event.clientY - rect.top) * canvas.height / rect.height
      };
    }

    canvas.addEventListener("pointerdown", event => {
      drawing = true;
      canvas.setPointerCapture?.(event.pointerId);
      last = position(event);
    });
    canvas.addEventListener("pointermove", event => {
      if (!drawing || !last) return;
      const point = position(event);
      ctx.beginPath();
      ctx.moveTo(last.x, last.y);
      ctx.lineTo(point.x, point.y);
      ctx.lineWidth = Number(brush?.value || 8);
      ctx.lineCap = "round";
      ctx.stroke();
      last = point;
      event.preventDefault();
    });
    const stopDrawing = event => {
      drawing = false;
      last = null;
      if (event?.pointerId != null) canvas.releasePointerCapture?.(event.pointerId);
    };
    canvas.addEventListener("pointerup", stopDrawing);
    canvas.addEventListener("pointercancel", stopDrawing);
    canvas.addEventListener("pointerleave", event => {
      if (drawing && event.buttons === 0) stopDrawing(event);
    });
    $("#clearCanvas")?.addEventListener("click", () => ctx.clearRect(0, 0, canvas.width, canvas.height));
  }

  // ---------- Number game ----------
  const nums = $("#numbers");
  const targetEl = $("#numberTarget");
  const msg = $("#gameMessage");

  function newNumberGame() {
    if (!nums || !targetEl) return;
    const target = Math.floor(Math.random() * 9) + 1;
    targetEl.textContent = String(target);
    nums.replaceChildren();
    if (msg) msg.textContent = "";

    for (let i = 1; i <= 9; i += 1) {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = String(i);
      button.addEventListener("click", () => {
        if (!msg) return;
        msg.textContent = i === target ? "آفرین! درست پیدا کردی." : "دوباره تلاش کن.";
        if (i === target) window.setTimeout(newNumberGame, 700);
      });
      nums.appendChild(button);
    }
  }
  newNumberGame();

  // ---------- Alphabet game ----------
  const letters = [["آ", "آب"], ["ب", "باد"], ["پ", "پرنده"], ["ت", "توپ"], ["ج", "جاده"], ["د", "درخت"], ["ر", "رود"], ["س", "ستاره"]];
  let letterIndex = 0;
  $("#nextLetter")?.addEventListener("click", () => {
    letterIndex = (letterIndex + 1) % letters.length;
    $("#letter").textContent = letters[letterIndex][0];
    $("#letterMeaning").textContent = `${letters[letterIndex][0]} مثل ${letters[letterIndex][1]}`;
  });

  // ---------- Piano ----------
  const piano = $("#piano");
  let audioContext = null;
  const frequencies = [261.63, 293.66, 329.63, 349.23, 392, 440, 493.88];
  const noteNames = ["دو", "ر", "می", "فا", "سل", "لا", "سی"];

  function tone(frequency) {
    try {
      audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
      if (audioContext.state === "suspended") audioContext.resume();
      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();
      oscillator.frequency.value = frequency;
      oscillator.connect(gain);
      gain.connect(audioContext.destination);
      const now = audioContext.currentTime;
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
      oscillator.start(now);
      oscillator.stop(now + 0.45);
    } catch {
      // Audio may be unavailable in some browsers/devices.
    }
  }

  if (piano) {
    frequencies.forEach((frequency, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = noteNames[index];
      button.setAttribute("aria-label", `نُت ${noteNames[index]}`);
      button.addEventListener("click", () => tone(frequency));
      piano.appendChild(button);
    });
  }

  // ---------- Registration form ----------
  $("#regForm")?.addEventListener("submit", event => {
    event.preventDefault();
    const status = $("#formStatus");
    if (status) {
      status.textContent = "درخواست شما در این نسخه نمایشی ثبت شد. برای ارسال واقعی، فرم را به یک سرویس فرم یا بک‌اند متصل کنید.";
    }
    event.currentTarget.reset();
  });

  // ---------- Offline chat assistant ----------
  const chat = $("#chat");
  const chatBody = $("#chatBody");

  function setChat(open) {
    if (!chat) return;
    chat.classList.toggle("open", open);
    chat.setAttribute("aria-hidden", String(!open));
    $("#chatFab")?.setAttribute("aria-expanded", String(open));
    if (open) $("#chatInput")?.focus();
  }

  $("#chatFab")?.addEventListener("click", () => setChat(!chat?.classList.contains("open")));
  $("#chatClose")?.addEventListener("click", () => setChat(false));

  function botAnswer(question) {
    const q = question.toLowerCase();
    if (q.includes("ثبت") || q.includes("نام")) return "برای ثبت‌نام، به بخش «ثبت‌نام» بروید و نام کودک، سرپرست، شماره تماس و خدمت مورد نیاز را وارد کنید.";
    if (q.includes("تماس") || q.includes("شماره")) return "شماره تماس مرکز: ۰۷۸۶۸۳۸۰۰۲ و ایمیل: negineducationcenter@gmail.com است.";
    if (q.includes("آدرس") || q.includes("کابل")) return "مرکز در سرک ۳۷، پروژه وزیر آباد، کابل، افغانستان قرار دارد.";
    if (q.includes("فیزی") || q.includes("کاردرمانی") || q.includes("گفتار")) return "نگین خدمات فیزیوتراپی، کاردرمانی و گفتاردرمانی را معرفی و ارائه می‌کند؛ نیاز هر کودک باید توسط متخصص ارزیابی شود.";
    if (q.includes("ساعت")) return "شنبه تا چهارشنبه از ۸ صبح تا ۴ بعدازظهر و پنجشنبه از ۸ صبح تا ۱۲ ظهر.";
    return "من در این نسخه اطلاعات صفحات وب‌سایت نگین را پاسخ می‌دهم. درباره ثبت‌نام، خدمات، تماس، آدرس یا ساعات کاری بپرسید.";
  }

  function appendChatMessage(className, text) {
    if (!chatBody) return;
    const message = document.createElement("div");
    message.className = className;
    message.textContent = text;
    chatBody.appendChild(message);
  }

  function sendChat() {
    const input = $("#chatInput");
    const question = input?.value.trim() || "";
    if (!question) return;
    appendChatMessage("user", question);
    appendChatMessage("bot", botAnswer(question));
    input.value = "";
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  $("#chatSend")?.addEventListener("click", sendChat);
  $("#chatInput")?.addEventListener("keydown", event => {
    if (event.key === "Enter") {
      event.preventDefault();
      sendChat();
    }
  });
})();
