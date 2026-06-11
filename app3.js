// German A1 Lesson 3 Learning Application Data & Logic

// --- DATA STRUCTURES ---

const REVIEW_NUMBERS = [
  { val: 0, word: 'null' }, { val: 1, word: 'eins' }, { val: 2, word: 'zwei' },
  { val: 3, word: 'drei' }, { val: 4, word: 'vier' }, { val: 5, word: 'fünf' },
  { val: 6, word: 'sechs' }, { val: 7, word: 'sieben' }, { val: 8, word: 'acht' },
  { val: 9, word: 'neun' }, { val: 10, word: 'zehn' }, { val: 11, word: 'elf' },
  { val: 12, word: 'zwölf' }, { val: 13, word: 'dreizehn' }, { val: 14, word: 'vierzehn' },
  { val: 15, word: 'fünfzehn' }, { val: 16, word: 'sechzehn' }, { val: 17, word: 'siebzehn' },
  { val: 18, word: 'achtzehn' }, { val: 19, word: 'neunzehn' }, { val: 20, word: 'zwanzig' }
];

const REVIEW_W_FRAGEN = [
  {
    word: 'Wie',
    meaning: 'Như thế nào / Cái gì',
    usage: 'Hỏi về tính chất, trạng thái, tên, cách thức.',
    examples: [
      { q: 'Wie heißt du?', a: 'Ich heiße Laura.', translation: 'Bạn tên gì? - Tôi tên là Laura.' },
      { q: 'Wie geht es dir?', a: 'Mir geht es gut, danke.', translation: 'Bạn khỏe không? - Tôi khỏe, cảm ơn.' },
      { q: 'Wie ist deine Telefonnummer?', a: 'Meine Nummer ist 0826...', translation: 'Số điện thoại của bạn là gì? - Số của tôi là...' }
    ]
  },
  {
    word: 'Wo',
    meaning: 'Ở đâu',
    usage: 'Hỏi về vị trí, địa điểm hiện tại (trả lời đi với giới từ "in").',
    examples: [
      { q: 'Wo wohnst du?', a: 'Ich wohne in Hanoi.', translation: 'Bạn sống ở đâu? - Tôi sống ở Hà Nội.' },
      { q: 'Wo bist du?', a: 'Ich bin im Supermarkt.', translation: 'Bạn đang ở đâu? - Tôi đang ở siêu thị.' }
    ]
  },
  {
    word: 'Woher',
    meaning: 'Từ đâu',
    usage: 'Hỏi về nguồn gốc, xuất xứ (trả lời đi với giới từ "aus" hoặc "aus der").',
    examples: [
      { q: 'Woher kommst du?', a: 'Ich komme aus Vietnam.', translation: 'Bạn đến từ đâu? - Tôi đến từ Việt Nam.' },
      { q: 'Woher kommen Sie?', a: 'Ich komme aus Deutschland.', translation: 'Ngài đến từ đâu? - Tôi đến từ nước Đức.' }
    ]
  }
];

const REVIEW_COUNTRIES = [
  { flag: '🇻🇳', country: 'Vietnam', lang: 'Vietnamesisch', prep: 'aus', example: 'Ich komme aus Vietnam und spreche Vietnamesisch.' },
  { flag: '🇩🇪', country: 'Deutschland', lang: 'Deutsch', prep: 'aus', example: 'Er kommt aus Deutschland und spricht Deutsch.' },
  { flag: '🇦🇹', country: 'Österreich', lang: 'Deutsch', prep: 'aus', example: 'Wir kommen aus Österreich und sprechen Deutsch.' },
  { flag: '🇨🇭', country: 'Schweiz', lang: 'Deutsch / Französisch', prep: 'aus der', example: 'Sie kommt aus der Schweiz und spricht Deutsch.' }
];

const SAMPLE_NUMBERS = [
  { val: 21, word: 'einundzwanzig' }, { val: 22, word: 'zweiundzwanzig' },
  { val: 25, word: 'fünfundzwanzig' }, { val: 30, word: 'dreißig' },
  { val: 34, word: 'vierunddreißig' }, { val: 40, word: 'vierzig' },
  { val: 47, word: 'siebenundvierzig' }, { val: 50, word: 'fünfzig' },
  { val: 58, word: 'achtundfünfzig' }, { val: 60, word: 'sechzig' },
  { val: 63, word: 'dreiundsechzig' }, { val: 70, word: 'siebzig' },
  { val: 76, word: 'sechsundsiebzig' }, { val: 80, word: 'achtzig' },
  { val: 89, word: 'neunundachtzig' }, { val: 90, word: 'neunzig' },
  { val: 95, word: 'fünfundneunzig' }, { val: 100, word: 'hundert' }
];

const HOBBYS = [
  { word: 'lesen', meaning: 'đọc sách', note: 'Ich lese gern.', de: 'Ich lese gern.', img: '📖' },
  { word: 'schwimmen', meaning: 'bơi lội', note: 'Ich schwimme gern.', de: 'Ich schwimme gern.', img: '🏊' },
  { word: 'kochen', meaning: 'nấu ăn', note: 'Ich koche gern.', de: 'Ich koche gern.', img: '🍳' },
  { word: 'reisen', meaning: 'du lịch', note: 'Ich reise gern.', de: 'Ich reise gern.', img: '✈️' },
  { word: 'Fußball spielen', meaning: 'đá bóng', note: 'Ich spiele gern Fußball.', de: 'Ich spiele gern Fußball.', img: '⚽' },
  { word: 'Musik hören', meaning: 'nghe nhạc', note: 'Ich höre gern Musik.', de: 'Ich höre gern Musik.', img: '🎧' },
  { word: 'tanzen', meaning: 'khiêu vũ', note: 'Ich tanze gern.', de: 'Ich tanze gern.', img: '💃' },
  { word: 'singen', meaning: 'hát', note: 'Ich singe gern.', de: 'Ich singe gern.', img: '🎤' },
  { word: 'fotografieren', meaning: 'chụp ảnh', note: 'Ich fotografiere gern.', de: 'Ich fotografiere gern.', img: '📷' },
  { word: 'joggen', meaning: 'chạy bộ', note: 'Ich jogge gern.', de: 'Ich jogge gern.', img: '🏃' },
  { word: 'ins Kino gehen', meaning: 'đi xem phim', note: 'Ich gehe gern ins Kino.', de: 'Ich gehe gern ins Kino.', img: '🎬' }
];

// Preference expressions from textbook page 19
const PREFERENCE_EXPRESSIONS = [
  { de: 'Ja, sehr gern!', vi: 'Vâng, rất thích!', emoji: '😊' },
  { de: 'Ja, gern.', vi: 'Vâng, thích.', emoji: '🙂' },
  { de: 'Es geht so.', vi: 'Cũng bình thường.', emoji: '😐' },
  { de: 'Nein, nicht so gern.', vi: 'Không, không thích lắm.', emoji: '😕' }
];

// Verb conjugation table from textbook page 20 (Verben und Personalpronomen)
const VERB_CONJUGATION = [
  {
    verb: 'kochen', meaning: 'nấu ăn', type: 'regular',
    forms: { ich: 'koche', du: 'kochst', 'er/es/sie': 'kocht', wir: 'kochen', ihr: 'kocht', 'sie/Sie': 'kochen' }
  },
  {
    verb: 'arbeiten', meaning: 'làm việc', type: 'regular (-t-)',
    forms: { ich: 'arbeite', du: 'arbeitest', 'er/es/sie': 'arbeitet', wir: 'arbeiten', ihr: 'arbeitet', 'sie/Sie': 'arbeiten' }
  },
  {
    verb: 'lesen', meaning: 'đọc', type: 'irregular (e→ie)',
    forms: { ich: 'lese', du: 'liest', 'er/es/sie': 'liest', wir: 'lesen', ihr: 'lest', 'sie/Sie': 'lesen' }
  },
  {
    verb: 'sprechen', meaning: 'nói', type: 'irregular (e→i)',
    forms: { ich: 'spreche', du: 'sprichst', 'er/es/sie': 'spricht', wir: 'sprechen', ihr: 'sprecht', 'sie/Sie': 'sprechen' }
  }
];

// Listening exercise data: Audio 1.14-16 from textbook page 18
const LISTENING_HOBBYS = [
  {
    name: 'Emily', label: 'A',
    hobbys: ['schwimmen', 'Musik hören', 'lesen'],
    script: 'Hallo! Ich bin Emily. Ich schwimme gern. Ich höre auch gern Musik und ich lese gern.'
  },
  {
    name: 'Boris', label: 'B',
    hobbys: ['kochen', 'reisen', 'joggen'],
    script: 'Ich heiße Boris. Ich koche sehr gern! Und ich reise gern. Am Wochenende jogge ich gern.'
  },
  {
    name: 'Eva', label: 'C',
    hobbys: ['fotografieren', 'tanzen', 'ins Kino gehen'],
    script: 'Hallo, ich bin Eva. Ich fotografiere gern. Und ich tanze sehr gern! Ich gehe auch gern ins Kino.'
  }
];

const WOCHENTAGE = [
  { day: 'Montag', meaning: 'Thứ Hai', note: 'am Montag', de: 'am Montag' },
  { day: 'Dienstag', meaning: 'Thứ Ba', note: 'am Dienstag', de: 'am Dienstag' },
  { day: 'Mittwoch', meaning: 'Thứ Tư', note: 'am Mittwoch', de: 'am Mittwoch' },
  { day: 'Donnerstag', meaning: 'Thứ Năm', note: 'am Donnerstag', de: 'am Donnerstag' },
  { day: 'Freitag', meaning: 'Thứ Sáu', note: 'am Freitag', de: 'am Freitag' },
  { day: 'Samstag', meaning: 'Thứ Bảy', note: 'am Samstag (Sonnabend)', de: 'am Samstag' },
  { day: 'Sonntag', meaning: 'Chủ Nhật', note: 'am Sonntag', de: 'am Sonntag' }
];

const REVIEW_QUIZ_QUESTIONS = [
  {
    question: 'Số 12 trong tiếng Đức viết là gì?',
    options: ['elf', 'zwölf', 'zwei', 'zwanzig'],
    correct: 1,
    hint: 'zwölf = số 12. eins=1, zwei=2, elf=11, zwanzig=20.',
    de: 'zwölf'
  },
  {
    question: 'Số "siebzehn" tương ứng với số nào?',
    options: ['7', '17', '70', '77'],
    correct: 1,
    hint: 'siebzehn = số 17 (chú ý bỏ đuôi "en" của sieben trước khi thêm zehn).',
    de: 'siebzehn'
  },
  {
    question: 'Số "sechzehn" tương ứng với số nào?',
    options: ['6', '16', '60', '26'],
    correct: 1,
    hint: 'sechzehn = số 16 (chú ý bỏ "s" của sechs trước khi thêm zehn).',
    de: 'sechzehn'
  },
  {
    question: 'Điền giới từ thích hợp: "Ich komme _____ Vietnam."',
    options: ['in', 'aus', 'aus der', 'bei'],
    correct: 1,
    hint: 'Giới từ "aus" chỉ xuất xứ, đi kèm với hầu hết quốc gia không có giống.',
    de: 'Ich komme aus Vietnam.'
  },
  {
    question: 'Điền giới từ thích hợp: "Sie kommt _____ Schweiz."',
    options: ['aus', 'aus der', 'in der', 'aus dem'],
    correct: 1,
    hint: 'Thụy Sĩ (Schweiz) là nước giống cái, nên giới từ chỉ xuất xứ là "aus der Schweiz".',
    de: 'Sie kommt aus der Schweiz.'
  },
  {
    question: 'Điền động từ chia đúng: "Wo _____ du?"',
    options: ['wohnst', 'wohne', 'wohnen', 'wohnt'],
    correct: 0,
    hint: 'Động từ wohnen đi với ngôi du chia thêm đuôi "-st" thành wohnst.',
    de: 'Wo wohnst du?'
  },
  {
    question: 'Điền động từ chia đúng: "Er _____ Deutsch (Anh ấy nói tiếng Đức)."',
    options: ['sprichst', 'spricht', 'spreche', 'sprechen'],
    correct: 1,
    hint: 'Động từ sprechen biến đổi nguyên âm e->i ở ngôi er thành spricht.',
    de: 'Er spricht Deutsch.'
  },
  {
    question: 'Từ để hỏi nào dùng để hỏi xuất xứ (quê quán, đất nước)?',
    options: ['Wo', 'Wie', 'Woher', 'Wer'],
    correct: 2,
    hint: 'Woher = Từ đâu (Hỏi xuất xứ). Ví dụ: Woher kommst du?',
    de: 'Woher'
  },
  {
    question: 'Từ để hỏi nào dùng để hỏi nơi sinh sống hiện tại?',
    options: ['Wo', 'Wie', 'Woher', 'Wer'],
    correct: 0,
    hint: 'Wo = Ở đâu (Hỏi vị trí). Ví dụ: Wo wohnst du?',
    de: 'Wo'
  },
  {
    question: 'Từ để hỏi nào dùng để hỏi họ tên hoặc số điện thoại?',
    options: ['Wo', 'Wie', 'Woher', 'Wer'],
    correct: 1,
    hint: 'Wie = Như thế nào / Cái gì. Ví dụ: Wie heißt du? Wie ist deine Telefonnummer?',
    de: 'Wie'
  },
  {
    question: 'Chia động từ "kommen" với ngôi "Sie" (lịch sự): "Woher _____ Sie?"',
    options: ['kommst', 'kommt', 'kommen', 'komme'],
    correct: 2,
    hint: 'Động từ đi với ngôi Sie (lịch sự) giữ nguyên dạng nguyên mẫu (kommen).',
    de: 'Woher kommen Sie?'
  },
  {
    question: 'Số "zwanzig" tương ứng với số nào?',
    options: ['12', '2', '20', '30'],
    correct: 2,
    hint: 'zwanzig = số 20.',
    de: 'zwanzig'
  },
  {
    question: 'Ngôi "ihr" đi với động từ "haben" chia là gì?',
    options: ['hast', 'hat', 'habt', 'haben'],
    correct: 2,
    hint: 'haben đi với ngôi ihr chia thành habt. Ví dụ: Ihr habt ein Auto.',
    de: 'habt'
  },
  {
    question: 'Số 11 viết bằng tiếng Đức như thế nào?',
    options: ['eins', 'elf', 'zwölf', 'zehn'],
    correct: 1,
    hint: 'elf = số 11.',
    de: 'elf'
  },
  {
    question: 'Điền cụm từ đúng: "Ich spreche Vietnamesisch und ein _____ Deutsch."',
    options: ['gut', 'bisschen', 'sehr', 'deutsch'],
    correct: 1,
    hint: 'ein bisschen = một chút. "Ich spreche ... ein bisschen Deutsch" = Tôi nói một chút tiếng Đức.',
    de: 'Ich spreche Vietnamesisch und ein bisschen Deutsch.'
  }
];

// --- APP STATE ---

let state = {
  currentTab: 'dashboard',
  germanVoice: null,
  reviewQuizActiveQuestion: 0,
  reviewQuizScore: 0,
  reviewQuizAnswers: [],
  reviewQuizCompleted: false,
  reviewDictatTarget: null,
  progress: {
    reviewNumbersVisited: new Set(),
    reviewWFragenVisited: new Set(),
    reviewCountriesVisited: new Set(),
    reviewDictatScore: 0,
    reviewDictatTotal: 0,
    reviewListeningVisited: new Set(),
    numbersVisited: new Set(),
    hobbysVisited: new Set(),
    wochentageVisited: new Set(),
    speakingVisited: new Set()
  }
};

// --- SPEECH SYSTEM (TTS) ---

function initTTS() {
  const statusEl = document.getElementById('ttsStatus');
  
  if (!('speechSynthesis' in window)) {
    if (statusEl) statusEl.innerHTML = '<span class="tts-indicator" style="background-color: #ef4444;"></span> Giọng đọc: Không hỗ trợ';
    return;
  }

  const loadVoices = () => {
    const voices = window.speechSynthesis.getVoices();
    state.germanVoice = voices.find(voice => voice.lang.startsWith('de')) || null;
    
    if (statusEl) {
      if (state.germanVoice) {
        statusEl.innerHTML = `<span class="tts-indicator" style="background-color: #000000;"></span> Giọng Đức chuẩn`;
      } else {
        statusEl.innerHTML = '<span class="tts-indicator" style="background-color: #666666;"></span> Giọng Đức tự động';
      }
    }
  };

  loadVoices();
  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }
}

function speak(text) {
  if (!('speechSynthesis' in window)) return;
  
  window.speechSynthesis.cancel();
  
  const cleanText = text.replace(/…/g, '').replace(/\.\.\./g, '').trim();
  if (!cleanText) return;
  
  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = 'de-DE';
  utterance.rate = 0.85; 
  
  if (state.germanVoice) {
    utterance.voice = state.germanVoice;
  }
  
  window.speechSynthesis.speak(utterance);
}

// Speak slowly for listening exercises
function speakSlowly(text) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'de-DE';
  utterance.rate = 0.65; // Slow rate
  if (state.germanVoice) {
    utterance.voice = state.germanVoice;
  }
  window.speechSynthesis.speak(utterance);
}

// --- NUMBER GENERATOR ENGINE ---

function getGermanNumberWord(num) {
  if (num < 0 || num > 999) return "Ungültige Zahl";
  if (num === 0) return "null";
  
  const units = ["", "ein", "zwei", "drei", "vier", "fünf", "sechs", "sieben", "acht", "neun"];
  const teens = ["zehn", "elf", "zwölf", "dreizehn", "vierzehn", "fünfzehn", "sechzehn", "siebzehn", "achtzehn", "neunzehn"];
  const tens = ["", "zehn", "zwanzig", "dreißig", "vierzig", "fünfzig", "sechzig", "siebzig", "achtzig", "neunzig"];
  
  if (num < 10) {
    if (num === 1) return "eins";
    return units[num];
  }
  
  if (num < 20) {
    return teens[num - 10];
  }
  
  if (num < 100) {
    const unit = num % 10;
    const ten = Math.floor(num / 10);
    
    if (unit === 0) {
      return tens[ten];
    }
    
    return units[unit] + "und" + tens[ten];
  }
  
  const hundred = Math.floor(num / 100);
  const rest = num % 100;
  
  let hundredWord = (hundred === 1 ? "" : units[hundred]) + "hundert";
  if (rest === 0) return hundredWord;
  return hundredWord + getGermanNumberWord(rest);
}

// --- INITIALIZATION ---

function initApp() {
  const savedProgress = localStorage.getItem('deutsch_a3_progress');
  if (savedProgress) {
    try {
      const parsed = JSON.parse(savedProgress);
      state.progress.reviewNumbersVisited = new Set(parsed.reviewNumbersVisited || []);
      state.progress.reviewWFragenVisited = new Set(parsed.reviewWFragenVisited || []);
      state.progress.reviewCountriesVisited = new Set(parsed.reviewCountriesVisited || []);
      state.progress.reviewListeningVisited = new Set(parsed.reviewListeningVisited || []);
      state.progress.reviewDictatScore = parsed.reviewDictatScore || 0;
      state.progress.reviewDictatTotal = parsed.reviewDictatTotal || 0;
      state.progress.numbersVisited = new Set(parsed.numbersVisited || []);
      state.progress.hobbysVisited = new Set(parsed.hobbysVisited || []);
      state.progress.wochentageVisited = new Set(parsed.wochentageVisited || []);
      state.progress.speakingVisited = new Set(parsed.speakingVisited || []);
    } catch (e) {
      console.error("Error loading progress", e);
    }
  }

  initTTS();
  
  // Render Review tab contents
  renderReviewNumbers();
  renderReviewWFragen();
  renderReviewCountries();
  setupReviewDictat();
  setupReviewListening();
  setupReviewQuiz();
  
  // Render Lesson 3 contents
  renderNumbers21();
  setupNumberConstructor();
  renderHobbysAndBerufe();
  renderVerbConjugation();
  renderListeningHobbys();
  renderPreferenceExpressions();
  renderWochentage();
  setupSpeakingBuilder();
  
  updateProgressUI();
  
  // Tab navigation
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const tabId = btn.getAttribute('data-tab');
      if (tabId) {
        e.preventDefault();
        switchTab(tabId);
      }
    });
  });

  // Welcome page button
  document.getElementById('startLearnBtn').addEventListener('click', () => switchTab('review'));
}

function saveProgress() {
  const serialized = {
    reviewNumbersVisited: Array.from(state.progress.reviewNumbersVisited),
    reviewWFragenVisited: Array.from(state.progress.reviewWFragenVisited),
    reviewCountriesVisited: Array.from(state.progress.reviewCountriesVisited),
    reviewListeningVisited: Array.from(state.progress.reviewListeningVisited),
    reviewDictatScore: state.progress.reviewDictatScore,
    reviewDictatTotal: state.progress.reviewDictatTotal,
    numbersVisited: Array.from(state.progress.numbersVisited),
    hobbysVisited: Array.from(state.progress.hobbysVisited),
    wochentageVisited: Array.from(state.progress.wochentageVisited),
    speakingVisited: Array.from(state.progress.speakingVisited)
  };
  localStorage.setItem('deutsch_a3_progress', JSON.stringify(serialized));
  updateProgressUI();
}

function updateProgressUI() {
  // 1. Review Tab Completion calculation
  const revNumPct = Math.round((state.progress.reviewNumbersVisited.size / REVIEW_NUMBERS.length) * 100);
  const revWfPct = Math.round((state.progress.reviewWFragenVisited.size / REVIEW_W_FRAGEN.length) * 100);
  const revCpct = Math.round((state.progress.reviewCountriesVisited.size / REVIEW_COUNTRIES.length) * 100);
  const revDictatPct = Math.min(100, Math.round((state.progress.reviewDictatTotal / 5) * 100)); // Target 5 dictations
  const revListenPct = Math.round((state.progress.reviewListeningVisited.size / 2) * 100); // Herr Klein and Frau Gross
  
  const revPct = Math.round((revNumPct + revWfPct + revCpct + revDictatPct + revListenPct) / 5);

  // 2. Other tabs completion
  const numPct = Math.round((state.progress.numbersVisited.size / SAMPLE_NUMBERS.length) * 100);
  const hobPct = Math.round((state.progress.hobbysVisited.size / HOBBYS.length) * 100);
  const wocPct = Math.round((state.progress.wochentageVisited.size / WOCHENTAGE.length) * 100);
  const spkPct = Math.round((state.progress.speakingVisited.size / 2) * 100); // 2 items inside speaking tab (hobby selection and speak button)
  
  const totalProgress = Math.round((revPct + numPct + hobPct + wocPct + spkPct) / 5);

  document.getElementById('progressReview').textContent = `${revPct}%`;
  document.getElementById('progressNumbers').textContent = `${numPct}%`;
  document.getElementById('progressHobbys').textContent = `${hobPct}%`;
  document.getElementById('progressWochentage').textContent = `${wocPct}%`;
  document.getElementById('progressSpeaking').textContent = `${spkPct}%`;

  const mainBar = document.getElementById('mainProgressBar');
  if (mainBar) {
    mainBar.style.width = `${totalProgress}%`;
  }
  const welcomeProgressText = document.getElementById('welcomeProgressText');
  if (welcomeProgressText) {
    welcomeProgressText.textContent = `Đã hoàn thành ${totalProgress}% bài học Buổi 3`;
  }
}

function switchTab(tabId) {
  state.currentTab = tabId;
  
  document.querySelectorAll('.tab-btn').forEach(btn => {
    if (btn.getAttribute('data-tab') === tabId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  document.querySelectorAll('.tab-content').forEach(content => {
    if (content.id === `${tabId}Tab`) {
      content.classList.add('active');
    } else {
      content.classList.remove('active');
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- 1.1. RENDER REVIEW NUMBERS 0 - 20 ---
function renderReviewNumbers() {
  const container = document.getElementById('reviewNumbersGrid');
  if (!container) return;
  container.innerHTML = '';

  REVIEW_NUMBERS.forEach(item => {
    const card = document.createElement('div');
    card.className = 'letter-card';
    card.style.padding = '0.75rem 0.25rem';
    
    if (state.progress.reviewNumbersVisited.has(item.word)) {
      card.style.borderColor = '#000000';
      card.style.background = 'var(--bg-highlight)';
    }

    card.innerHTML = `
      <div class="chars" style="font-size: 1.4rem;">${item.val}</div>
      <div class="ipa" style="font-size: 0.85rem; font-weight: 700; color: #000;">${item.word}</div>
    `;

    card.addEventListener('click', () => {
      speak(item.word);
      card.style.borderColor = '#000000';
      card.style.background = 'var(--bg-highlight)';
      state.progress.reviewNumbersVisited.add(item.word);
      saveProgress();
    });

    container.appendChild(card);
  });
}

// --- 1.2. RENDER REVIEW W-FRAGEN ---
function renderReviewWFragen() {
  const container = document.getElementById('reviewWFragenContainer');
  if (!container) return;
  container.innerHTML = '';

  REVIEW_W_FRAGEN.forEach(item => {
    const card = document.createElement('div');
    card.className = 'rule-card';
    card.style.cursor = 'pointer';

    if (state.progress.reviewWFragenVisited.has(item.word)) {
      card.style.borderColor = '#000';
    }

    let examplesHTML = '';
    item.examples.forEach(ex => {
      examplesHTML += `
        <div style="margin-top: 0.5rem; padding-left: 0.5rem; border-left: 2px solid #ddd;">
          <div style="font-weight: bold;">Q: ${ex.q}</div>
          <div>A: ${ex.a}</div>
          <div style="font-size: 0.8rem; color: #666;">(${ex.translation})</div>
        </div>
      `;
    });

    card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;">
        <span style="font-size: 1.3rem; font-weight: bold; font-family: var(--font-serif);">${item.word}</span>
        <span style="font-size: 0.85rem; font-weight: bold; background: #000; color: #fff; padding: 0.1rem 0.4rem; border-radius: 2px;">${item.meaning}</span>
      </div>
      <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">Sử dụng: ${item.usage}</div>
      ${examplesHTML}
    `;

    card.addEventListener('click', () => {
      speak(item.word);
      card.style.borderColor = '#000';
      state.progress.reviewWFragenVisited.add(item.word);
      saveProgress();
    });

    container.appendChild(card);
  });
}

// --- 1.3. RENDER REVIEW COUNTRIES ---
function renderReviewCountries() {
  const container = document.getElementById('reviewCountriesGrid');
  if (!container) return;
  container.innerHTML = '';

  REVIEW_COUNTRIES.forEach(item => {
    const card = document.createElement('div');
    card.className = 'phrase-card';
    card.style.cursor = 'pointer';

    if (state.progress.reviewCountriesVisited.has(item.country)) {
      card.classList.add('visited');
    }

    card.innerHTML = `
      <div style="flex-grow: 1;">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <span style="font-size: 1.5rem;">${item.flag}</span>
          <span class="phrase-de" style="font-size: 1.1rem; font-weight: bold; font-family: var(--font-serif);">${item.country}</span>
        </div>
        <div class="phrase-vi" style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.25rem;">Ngôn ngữ: ${item.lang} | Giới từ: <strong>${item.prep}</strong></div>
        <div style="font-size: 0.8rem; font-style: italic; color: #555555; margin-top: 0.5rem;">Ví dụ: "${item.example}"</div>
      </div>
      <button class="phrase-speak-btn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        </svg>
      </button>
    `;

    const speakBtn = card.querySelector('.phrase-speak-btn');
    const triggerSpeak = () => {
      speak(item.example);
      card.classList.add('visited');
      state.progress.reviewCountriesVisited.add(item.country);
      saveProgress();
    };

    card.addEventListener('click', (e) => {
      if (e.target !== speakBtn && !speakBtn.contains(e.target)) {
        triggerSpeak();
      }
    });
    speakBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      triggerSpeak();
    });

    container.appendChild(card);
  });
}

// --- 1.4 A. ZAHLEN DIKTAT GAME ---
function setupReviewDictat() {
  const playBtn = document.getElementById('reviewDictatPlayBtn');
  const checkBtn = document.getElementById('reviewDictatCheckBtn');
  const inputField = document.getElementById('reviewDictatInput');
  const feedbackEl = document.getElementById('reviewDictatFeedback');
  const scoreTextEl = document.getElementById('reviewDictatScoreText');

  if (!playBtn) return;

  playBtn.addEventListener('click', () => {
    // Generate random review number index (0-20)
    const randIdx = Math.floor(Math.random() * REVIEW_NUMBERS.length);
    state.reviewDictatTarget = REVIEW_NUMBERS[randIdx];

    feedbackEl.style.display = 'none';
    inputField.value = '';
    inputField.disabled = false;
    checkBtn.disabled = false;
    inputField.focus();

    speak(state.reviewDictatTarget.word);
  });

  checkBtn.addEventListener('click', () => {
    if (!state.reviewDictatTarget) return;

    const val = inputField.value.trim().toLowerCase();
    const isCorrect = (val === state.reviewDictatTarget.val.toString() || val === state.reviewDictatTarget.word);

    feedbackEl.style.display = 'block';
    state.progress.reviewDictatTotal++;

    if (isCorrect) {
      feedbackEl.className = 'quiz-feedback correct';
      feedbackEl.innerHTML = `Chính xác! Số nghe được là: <strong>${state.reviewDictatTarget.val}</strong> (${state.reviewDictatTarget.word})`;
      state.progress.reviewDictatScore++;
    } else {
      feedbackEl.className = 'quiz-feedback wrong';
      feedbackEl.innerHTML = `Chưa đúng! Đáp án đúng: <strong>${state.reviewDictatTarget.val}</strong> (${state.reviewDictatTarget.word})`;
    }

    scoreTextEl.textContent = `Điểm số: ${state.progress.reviewDictatScore}/${state.progress.reviewDictatTotal}`;
    
    // Disable inputs until next number is requested
    inputField.disabled = true;
    checkBtn.disabled = true;
    
    saveProgress();
  });
}

// --- 1.4 B. TELEFONNUMMER DIKTAT ---
function setupReviewListening() {
  const listenKleinBtn = document.getElementById('reviewListenKleinBtn');
  const listenGrossBtn = document.getElementById('reviewListenGrossBtn');
  const checkBtn = document.getElementById('reviewCheckListeningBtn');
  const resetBtn = document.getElementById('reviewResetListeningBtn');

  if (!listenKleinBtn) return;

  listenKleinBtn.addEventListener('click', () => {
    speakSlowly("Herr Klein. Meine Handynummer ist: null, eins, fünf, sieben, acht, drei, neun, zwei, vier, null, sechs, eins.");
    state.progress.reviewListeningVisited.add('klein');
    saveProgress();
  });

  listenGrossBtn.addEventListener('click', () => {
    speakSlowly("Frau Groß. Meine Handynummer ist: null, eins, sieben, hai, fünf, neun, eins, sáu, drei, acht, bốn, null.");
    // Wait, let's keep it purely German:
    speakSlowly("Frau Groß. Meine Handynummer ist: null, eins, sieben, zwei, fünf, neun, eins, sechs, drei, acht, vier, null.");
    state.progress.reviewListeningVisited.add('gross');
    saveProgress();
  });

  checkBtn.addEventListener('click', () => {
    const inputKlein = document.getElementById('reviewInputKlein');
    const inputGross = document.getElementById('reviewInputGross');
    const fk = document.getElementById('reviewFeedbackKlein');
    const fg = document.getElementById('reviewFeedbackGross');

    const valKlein = inputKlein.value.replace(/\s+/g, '');
    const valGross = inputGross.value.replace(/\s+/g, '');

    // Herr Klein: 0157 8392 4061
    const isKleinCorrect = valKlein === "015783924061";
    fk.style.display = 'block';
    if (isKleinCorrect) {
      fk.className = "quiz-feedback correct";
      fk.innerHTML = "✓ Đúng! Herr Klein: <strong>0157 8392 4061</strong>";
    } else {
      fk.className = "quiz-feedback wrong";
      fk.innerHTML = `✗ Sai! Đúng: <strong>0157 8392 4061</strong>`;
    }

    // Frau Groß: 0172 5916 3840
    const isGrossCorrect = valGross === "017259163840";
    fg.style.display = 'block';
    if (isGrossCorrect) {
      fg.className = "quiz-feedback correct";
      fg.innerHTML = "✓ Đúng! Frau Groß: <strong>0172 5916 3840</strong>";
    } else {
      fg.className = "quiz-feedback wrong";
      fg.innerHTML = `✗ Sai! Đúng: <strong>0172 5916 3840</strong>`;
    }
  });

  resetBtn.addEventListener('click', () => {
    document.getElementById('reviewInputKlein').value = '';
    document.getElementById('reviewInputGross').value = '';
    document.getElementById('reviewFeedbackKlein').style.display = 'none';
    document.getElementById('reviewFeedbackGross').style.display = 'none';
  });
}

// --- 1.5. REVIEW QUIZ LOGIC ---
function setupReviewQuiz() {
  const restartBtn = document.getElementById('reviewQuizRestartBtn');
  const nextBtn = document.getElementById('reviewQuizNextBtn');
  const speakQBtn = document.getElementById('reviewQuizSpeakQ');

  if (restartBtn) {
    restartBtn.addEventListener('click', startReviewQuiz);
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', nextReviewQuizQuestion);
  }
  if (speakQBtn) {
    speakQBtn.addEventListener('click', () => {
      const currentQ = REVIEW_QUIZ_QUESTIONS[state.reviewQuizActiveQuestion];
      if (currentQ && currentQ.de) {
        speak(currentQ.de);
      }
    });
  }

  startReviewQuiz();
}

function startReviewQuiz() {
  state.reviewQuizActiveQuestion = 0;
  state.reviewQuizScore = 0;
  state.reviewQuizAnswers = [];
  state.reviewQuizCompleted = false;

  const qView = document.getElementById('reviewQuizQuestionView');
  const rView = document.getElementById('reviewQuizResultView');
  if (qView) qView.style.display = 'block';
  if (rView) rView.style.display = 'none';

  showReviewQuizQuestion();
}

function showReviewQuizQuestion() {
  const progressEl = document.getElementById('reviewQuizProgress');
  const textEl = document.getElementById('reviewQuizQuestionText');
  const optionsEl = document.getElementById('reviewQuizOptions');
  const feedbackEl = document.getElementById('reviewQuizFeedback');
  const nextBtn = document.getElementById('reviewQuizNextBtn');
  const speakQBtn = document.getElementById('reviewQuizSpeakQ');

  if (feedbackEl) {
    feedbackEl.style.display = 'none';
    feedbackEl.innerHTML = '';
  }
  if (nextBtn) nextBtn.style.display = 'none';

  const currentQ = REVIEW_QUIZ_QUESTIONS[state.reviewQuizActiveQuestion];
  if (!currentQ) return;

  if (progressEl) {
    progressEl.textContent = `Câu ${state.reviewQuizActiveQuestion + 1}/${REVIEW_QUIZ_QUESTIONS.length}`;
  }
  if (textEl) {
    textEl.textContent = currentQ.question;
  }

  if (speakQBtn) {
    if (currentQ.de) {
      speakQBtn.style.display = 'inline-flex';
    } else {
      speakQBtn.style.display = 'none';
    }
  }

  if (optionsEl) {
    optionsEl.innerHTML = '';
    currentQ.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.innerHTML = `<span class="option-icon"></span> ${opt}`;
      btn.addEventListener('click', () => selectReviewQuizOption(idx));
      optionsEl.appendChild(btn);
    });
  }
}

function selectReviewQuizOption(selectedIdx) {
  if (state.reviewQuizAnswers.length > state.reviewQuizActiveQuestion) return;

  const currentQ = REVIEW_QUIZ_QUESTIONS[state.reviewQuizActiveQuestion];
  const optionsEl = document.getElementById('reviewQuizOptions');
  const feedbackEl = document.getElementById('reviewQuizFeedback');
  const nextBtn = document.getElementById('reviewQuizNextBtn');

  if (!optionsEl) return;
  const buttons = optionsEl.querySelectorAll('.option-btn');

  state.reviewQuizAnswers.push(selectedIdx);
  buttons.forEach(btn => btn.disabled = true);
  const isCorrect = (selectedIdx === currentQ.correct);

  if (isCorrect) {
    buttons[selectedIdx].classList.add('correct');
    buttons[selectedIdx].querySelector('.option-icon').innerHTML = '✓ ';
    state.reviewQuizScore++;

    if (feedbackEl) {
      feedbackEl.className = 'quiz-feedback correct';
      feedbackEl.innerHTML = `Chính xác! ${currentQ.hint ? `Gợi ý: ${currentQ.hint}` : ''}`;
    }
  } else {
    buttons[selectedIdx].classList.add('wrong');
    buttons[selectedIdx].querySelector('.option-icon').innerHTML = '✗ ';
    buttons[currentQ.correct].classList.add('correct');
    buttons[currentQ.correct].querySelector('.option-icon').innerHTML = '✓ ';

    if (feedbackEl) {
      feedbackEl.className = 'quiz-feedback wrong';
      feedbackEl.innerHTML = `Chưa đúng! Đáp án đúng là: <strong>${currentQ.options[currentQ.correct]}</strong>.<br>${currentQ.hint ? `Gợi ý: ${currentQ.hint}` : ''}`;
    }
  }

  if (feedbackEl) feedbackEl.style.display = 'block';
  if (nextBtn) {
    nextBtn.textContent = state.reviewQuizActiveQuestion < REVIEW_QUIZ_QUESTIONS.length - 1 ? 'Câu tiếp theo' : 'Hoàn thành';
    nextBtn.style.display = 'block';
  }

  if (currentQ.de) {
    speak(currentQ.de);
  }
}

function nextReviewQuizQuestion() {
  state.reviewQuizActiveQuestion++;
  if (state.reviewQuizActiveQuestion < REVIEW_QUIZ_QUESTIONS.length) {
    showReviewQuizQuestion();
  } else {
    showReviewQuizResults();
  }
}

function showReviewQuizResults() {
  const qView = document.getElementById('reviewQuizQuestionView');
  const rView = document.getElementById('reviewQuizResultView');
  const scoreEl = document.getElementById('reviewQuizFinalScore');
  const feedbackMsgEl = document.getElementById('reviewQuizFeedbackMsg');

  if (qView) qView.style.display = 'none';
  if (rView) rView.style.display = 'block';

  if (scoreEl) scoreEl.textContent = `${state.reviewQuizScore}/${REVIEW_QUIZ_QUESTIONS.length}`;

  const scorePercent = Math.round((state.reviewQuizScore / REVIEW_QUIZ_QUESTIONS.length) * 100);
  let msg = '';
  if (scorePercent === 100) {
    msg = 'Tuyệt vời! Bạn đã trả lời đúng toàn bộ câu hỏi. Hãy bắt đầu học các số hàng chục ở Phần 2!';
  } else if (scorePercent >= 75) {
    msg = 'Rất tốt! Bạn nhớ bài rất vững. Hãy bắt đầu học Phần 2.';
  } else if (scorePercent >= 50) {
    msg = 'Khá tốt! Bạn đã vượt qua bài kiểm tra. Hãy xem kỹ lại các câu sai để ghi nhớ nhé.';
  } else {
    msg = 'Bạn nên mở lại bài học Buổi 2 để ôn lại số đếm và từ để hỏi trước khi tiếp tục.';
  }

  if (feedbackMsgEl) feedbackMsgEl.textContent = msg;

  state.progress.reviewNumbersVisited.add('review_quiz_completed');
  saveProgress();
}

// --- 2. RENDER NUMBERS 21 - 100 ---
function renderNumbers21() {
  const container = document.getElementById('numbersGrid21');
  if (!container) return;
  container.innerHTML = '';

  SAMPLE_NUMBERS.forEach(num => {
    const card = document.createElement('div');
    const isMilestone = (num.val % 10 === 0);
    card.className = 'letter-card' + (isMilestone ? ' number-milestone' : '');
    card.style.padding = '1.25rem 0.5rem';
    card.style.borderRadius = '6px';

    if (state.progress.numbersVisited.has(num.word) && !isMilestone) {
      card.style.borderColor = '#000000';
      card.style.background = 'var(--bg-highlight)';
    }

    card.innerHTML = `
      <div class="play-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
        </svg>
      </div>
      <div class="chars" style="font-size: 1.8rem; font-family: monospace;">${num.val}</div>
      <div class="ipa" style="font-size: 0.75rem; font-weight: 700; font-family: inherit; word-break: break-all; text-align: center; line-height: 1.3; padding: 0 0.25rem;">${num.word}</div>
    `;

    card.addEventListener('click', () => {
      speak(num.word);
      if (!isMilestone) {
        card.style.borderColor = '#000000';
        card.style.background = 'var(--bg-highlight)';
      }
      state.progress.numbersVisited.add(num.word);
      saveProgress();
    });

    container.appendChild(card);
  });
}

function setupNumberConstructor() {
  const input = document.getElementById('numberInput');
  const btn = document.getElementById('numberConvertBtn');
  const outputBox = document.getElementById('numberOutputBox');
  const outputText = document.getElementById('numberOutputText');

  if (!btn) return;

  btn.addEventListener('click', () => {
    const val = parseInt(input.value);
    if (isNaN(val) || val < 21 || val > 99) {
      alert("Vui lòng nhập một số hợp lệ trong khoảng từ 21 đến 99.");
      return;
    }

    const word = getGermanNumberWord(val);
    if (outputText) outputText.textContent = word;
    if (outputBox) outputBox.style.display = 'block';

    speak(word);
    
    // Track numbers visited
    state.progress.numbersVisited.add(word);
    saveProgress();
  });
}

// --- 3. RENDER HOBBYS & BERUFE ---
function renderHobbysAndBerufe() {
  const hContainer = document.getElementById('hobbysGrid');
  const bContainer = document.getElementById('berufeGrid');

  if (hContainer) {
    hContainer.innerHTML = '';
    HOBBYS.forEach(item => {
      const card = document.createElement('div');
      card.className = 'phrase-card';
      
      if (state.progress.hobbysVisited.has(item.word)) {
        card.classList.add('visited');
      }

      card.innerHTML = `
        <div style="flex-grow: 1;">
          <div class="phrase-de" style="font-size: 1.15rem; font-weight: bold; font-family: var(--font-serif);">${item.img ? item.img + ' ' : ''}${item.word}</div>
          <div class="phrase-vi" style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.25rem;">Nghĩa: ${item.meaning}</div>
          <div style="font-size: 0.8rem; font-style: italic; color: #555555; margin-top: 0.5rem;">Ví dụ: "${item.note}"</div>
        </div>
        <button class="phrase-speak-btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          </svg>
        </button>
      `;

      const speakBtn = card.querySelector('.phrase-speak-btn');
      const triggerSpeak = () => {
        speak(item.word);
        card.classList.add('visited');
        state.progress.hobbysVisited.add(item.word);
        saveProgress();
      };
      
      card.addEventListener('click', (e) => {
        if (e.target !== speakBtn && !speakBtn.contains(e.target)) {
          triggerSpeak();
        }
      });
      speakBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        triggerSpeak();
      });

      hContainer.appendChild(card);
    });
  }

}

// --- 4. RENDER WOCHENTAGE ---
function renderWochentage() {
  const container = document.getElementById('wochentageGrid');
  if (!container) return;
  container.innerHTML = '';

  WOCHENTAGE.forEach(item => {
    const card = document.createElement('div');
    card.className = 'letter-card';
    card.style.padding = '1rem 0.25rem';
    
    if (state.progress.wochentageVisited.has(item.day)) {
      card.style.borderColor = '#000000';
      card.style.background = 'var(--bg-highlight)';
    }

    card.innerHTML = `
      <div class="play-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
        </svg>
      </div>
      <div class="chars" style="font-size: 1.4rem; font-family: var(--font-serif);">${item.day}</div>
      <div class="ipa" style="font-size: 0.8rem; font-weight: 700; color: #555;">${item.meaning}</div>
      <div style="font-size: 0.75rem; color: #888; margin-top: 0.25rem;">${item.note}</div>
    `;

    card.addEventListener('click', () => {
      speak(item.day);
      card.style.borderColor = '#000000';
      card.style.background = 'var(--bg-highlight)';
      state.progress.wochentageVisited.add(item.day);
      saveProgress();
    });

    container.appendChild(card);
  });
}

// --- 5. SETUP SPEAKING BUILDER ---
function setupSpeakingBuilder() {
  const inputName = document.getElementById('inputName');
  const inputAge = document.getElementById('inputAge');
  const inputOrigin = document.getElementById('inputOrigin');
  const inputResidence = document.getElementById('inputResidence');
  const selectHobby = document.getElementById('selectHobby');
  const speakBtn = document.getElementById('builderSpeakBtn');
  const previewText = document.getElementById('builderPreviewText');

  if (!speakBtn) return;

  const updatePreview = () => {
    const name = inputName.value.trim() || 'Minh';
    const ageVal = parseInt(inputAge.value) || 25;
    const origin = inputOrigin.value.trim() || 'Vietnam';
    const residence = inputResidence.value.trim() || 'Hanoi';
    const hobbyVal = selectHobby.value;
    
    let ageWord = getGermanNumberWord(ageVal);
    
    let conjugatedHobby = "";
    if (hobbyVal.startsWith("lesen")) {
      conjugatedHobby = "lese ich gern";
    } else if (hobbyVal.startsWith("schwimmen")) {
      conjugatedHobby = "schwimme ich gern";
    } else if (hobbyVal.startsWith("kochen")) {
      conjugatedHobby = "koche ich gern";
    } else if (hobbyVal.startsWith("reisen")) {
      conjugatedHobby = "reise ich gern";
    } else if (hobbyVal.startsWith("spielen")) {
      conjugatedHobby = "spiele ich gern Fußball";
    } else if (hobbyVal.startsWith("hören")) {
      conjugatedHobby = "höre ich gern Musik";
    } else if (hobbyVal.startsWith("tanzen")) {
      conjugatedHobby = "tanze ich gern";
    } else if (hobbyVal.startsWith("singen")) {
      conjugatedHobby = "singe ich gern";
    } else if (hobbyVal.startsWith("fotografieren")) {
      conjugatedHobby = "fotografiere ich gern";
    } else if (hobbyVal.startsWith("joggen")) {
      conjugatedHobby = "jogge ich gern";
    } else if (hobbyVal.startsWith("gehen")) {
      conjugatedHobby = "gehe ich gern ins Kino";
    }

    if (previewText) {
      previewText.innerHTML = `Hallo, ich heiße <span style="font-weight: bold; color: #4338ca;">${name}</span>.<br>` +
        `Ich bin <span style="font-weight: bold; color: #4338ca;">${ageWord}</span> (${ageVal}) Jahre alt.<br>` +
        `Ich komme aus <span style="font-weight: bold; color: #4338ca;">${origin}</span> und ich wohne in <span style="font-weight: bold; color: #4338ca;">${residence}</span>.<br>` +
        `In meiner Freizeit <span style="font-weight: bold; color: #4338ca;">${conjugatedHobby}</span>.`;
    }
  };

  const inputs = [inputName, inputAge, inputOrigin, inputResidence, selectHobby];
  inputs.forEach(input => {
    if (input) {
      input.addEventListener('input', () => {
        updatePreview();
        state.progress.speakingVisited.add('hobby_select'); // Count editing inputs as visited
        saveProgress();
      });
      input.addEventListener('change', () => {
        updatePreview();
        state.progress.speakingVisited.add('hobby_select');
        saveProgress();
      });
    }
  });

  speakBtn.addEventListener('click', () => {
    // Strip parenthesized numbers to prevent TTS from reading both the word and the digits (e.g. "fünfundzwanzig 25")
    const rawText = previewText.innerText.replace(/\s*\(\d+\)\s*/g, ' ');
    speak(rawText);
    state.progress.speakingVisited.add('speak_btn');
    saveProgress();
  });

  updatePreview();
}

// --- 3B. RENDER VERB CONJUGATION TABLE ---
function renderVerbConjugation() {
  const container = document.getElementById('verbConjugationContainer');
  if (!container) return;
  container.innerHTML = '';

  const pronouns = ['ich', 'du', 'er/es/sie', 'wir', 'ihr', 'sie/Sie'];

  VERB_CONJUGATION.forEach(verb => {
    const card = document.createElement('div');
    card.className = 'verb-card';
    card.style.marginBottom = '0';

    let rowsHTML = '';
    pronouns.forEach(p => {
      const form = verb.forms[p];
      // Highlight the stem change
      let displayForm = form;
      if (verb.type.includes('irregular') && (p === 'du' || p === 'er/es/sie')) {
        displayForm = `<strong style="color:#000;">${form}</strong>`;
      }
      rowsHTML += `
        <div class="conjugation-row" onclick="speak('${p.replace('er/es/sie','er')} ${form}')">
          <span class="pronoun">${p}</span>
          <span class="verb-form">${displayForm}</span>
          <span class="row-play">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon></svg>
          </span>
        </div>`;
    });

    card.innerHTML = `
      <div class="verb-header">
        <span class="verb-title">${verb.verb}</span>
        <span class="verb-meaning">${verb.meaning} (${verb.type})</span>
      </div>
      <div class="conjugation-list">${rowsHTML}</div>
    `;

    container.appendChild(card);
  });
}

// --- 3C. RENDER LISTENING EXERCISE (Audio 1.14-16) ---
function renderListeningHobbys() {
  const container = document.getElementById('listeningHobbysContainer');
  if (!container) return;
  container.innerHTML = '';

  LISTENING_HOBBYS.forEach(person => {
    const card = document.createElement('div');
    card.style.cssText = 'background: var(--bg-page); border: 1.5px solid #000; border-radius: var(--radius-sm); padding: 1.25rem;';

    const hobbysCheckboxes = HOBBYS.map(h =>
      `<label style="display:flex;align-items:center;gap:0.35rem;font-size:0.85rem;cursor:pointer;">
        <input type="checkbox" class="listen-hobby-cb" data-person="${person.name}" data-hobby="${h.word}" style="accent-color:#000;">
        ${h.img || ''} ${h.word}
      </label>`
    ).join('');

    card.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.75rem;">
        <div>
          <span style="font-weight:800;font-size:1.1rem;font-family:var(--font-serif);">${person.label} ${person.name}</span>
        </div>
        <button class="btn-primary" style="padding:0.35rem 0.75rem;font-size:0.8rem;" onclick="speak('${person.script.replace(/'/g, "\\'")}')">
          🔊 Nghe (Audio 1.14-16)
        </button>
      </div>
      <p style="font-size:0.8rem;color:var(--text-muted);margin-bottom:0.75rem;">Nghe và đánh dấu các sở thích của ${person.name}:</p>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:0.4rem;">
        ${hobbysCheckboxes}
      </div>
      <div class="listen-feedback" id="feedback_${person.name}" style="display:none;margin-top:0.75rem;padding:0.5rem 0.75rem;font-size:0.85rem;border-radius:var(--radius-sm);"></div>
    `;

    container.appendChild(card);
  });

  // Check button
  const checkBtn = document.getElementById('checkListeningHobbysBtn');
  if (checkBtn) {
    checkBtn.addEventListener('click', () => {
      LISTENING_HOBBYS.forEach(person => {
        const checkboxes = document.querySelectorAll(`input[data-person="${person.name}"]`);
        const feedbackEl = document.getElementById(`feedback_${person.name}`);
        let correct = 0;
        let total = person.hobbys.length;

        checkboxes.forEach(cb => {
          const hobby = cb.getAttribute('data-hobby');
          const isCorrectHobby = person.hobbys.includes(hobby);
          if (cb.checked && isCorrectHobby) correct++;
          if (cb.checked && !isCorrectHobby) correct--;

          // Visual feedback
          const label = cb.parentElement;
          if (isCorrectHobby) {
            label.style.color = '#137333';
            label.style.fontWeight = '700';
            if (!cb.checked) label.style.textDecoration = 'underline';
          } else if (cb.checked) {
            label.style.color = '#c5221f';
            label.style.textDecoration = 'line-through';
          }
        });

        if (feedbackEl) {
          feedbackEl.style.display = 'block';
          const score = Math.max(0, correct);
          if (score === total) {
            feedbackEl.className = 'listen-feedback quiz-feedback correct';
            feedbackEl.innerHTML = `✓ Chính xác! ${person.name}: ${person.hobbys.join(', ')}`;
          } else {
            feedbackEl.className = 'listen-feedback quiz-feedback wrong';
            feedbackEl.innerHTML = `Đáp án: <strong>${person.hobbys.join(', ')}</strong>`;
          }
        }
      });
    });
  }
}

// --- 3D. RENDER PREFERENCE EXPRESSIONS ---
function renderPreferenceExpressions() {
  const container = document.getElementById('preferenceExpContainer');
  if (!container) return;
  container.innerHTML = '';

  PREFERENCE_EXPRESSIONS.forEach(exp => {
    const card = document.createElement('div');
    card.className = 'phrase-card';
    card.style.cursor = 'pointer';

    card.innerHTML = `
      <div style="flex-grow:1;display:flex;align-items:center;gap:0.75rem;">
        <span style="font-size:1.5rem;">${exp.emoji}</span>
        <div>
          <div class="phrase-de" style="font-size:1.05rem;font-weight:bold;font-family:var(--font-serif);">${exp.de}</div>
          <div class="phrase-vi" style="font-size:0.85rem;color:var(--text-muted);margin-top:0.15rem;">${exp.vi}</div>
        </div>
      </div>
      <button class="phrase-speak-btn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        </svg>
      </button>
    `;

    card.addEventListener('click', () => speak(exp.de));
    container.appendChild(card);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  initApp();
});
