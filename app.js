// German A1 Lesson 1 Learning Application Data & Logic

// --- DATA STRUCTURES ---

const ALPHABET = [
  { char: 'Aa', ipa: '[a:]', example: 'Apfel' },
  { char: 'Bb', ipa: '[be:]', example: 'Ball' },
  { char: 'Cc', ipa: '[tse:]', example: 'Computer' },
  { char: 'Dd', ipa: '[de:]', example: 'Deutschland' },
  { char: 'Ee', ipa: '[e:]', example: 'Elefant' },
  { char: 'Ff', ipa: '[ɛf]', example: 'Fisch' },
  { char: 'Gg', ipa: '[ge:]', example: 'Gitarre' },
  { char: 'Hh', ipa: '[ha:]', example: 'Haus' },
  { char: 'Ii', ipa: '[i:]', example: 'Insel' },
  { char: 'Jj', ipa: '[jɔt]', example: 'Jacke' },
  { char: 'Kk', ipa: '[ka:]', example: 'Kaffee' },
  { char: 'Ll', ipa: '[ɛl]', example: 'Lampe' },
  { char: 'Mm', ipa: '[ɛm]', example: 'Maus' },
  { char: 'Nn', ipa: '[ɛn]', example: 'Nacht' },
  { char: 'Oo', ipa: '[o:]', example: 'Orange' },
  { char: 'Pp', ipa: '[pe:]', example: 'Papier' },
  { char: 'Qq', ipa: '[ku:]', example: 'Qualle' },
  { char: 'Rr', ipa: '[ɛʀ]', example: 'Radio' },
  { char: 'Ss', ipa: '[ɛs]', example: 'Sonne' },
  { char: 'Tt', ipa: '[te:]', example: 'Tee' },
  { char: 'Uu', ipa: '[u:]', example: 'Uhr' },
  { char: 'Vv', ipa: '[fau]', example: 'Vogel' },
  { char: 'Ww', ipa: '[ve:]', example: 'Wasser' },
  { char: 'Xx', ipa: '[iks]', example: 'Xylophon' },
  { char: 'Yy', ipa: '[ˈypsilɔn]', example: 'Yoga' },
  { char: 'Zz', ipa: '[tset]', example: 'Zebra' },
  { char: 'Ää', ipa: '[ɛ:]', example: 'Äpfel' },
  { char: 'Öö', ipa: '[ø:]', example: 'Öl' },
  { char: 'Üü', ipa: '[y:]', example: 'Übung' },
  { char: 'ß', ipa: '[ɛs\'tset]', example: 'Straße' }
];

const CONJUGATIONS = {
  sein: {
    verb: 'sein',
    meaning: 'thì, là, ở (to be)',
    forms: [
      { pronoun: 'Ich', form: 'bin' },
      { pronoun: 'Du', form: 'bist' },
      { pronoun: 'Er / sie / es', form: 'ist' },
      { pronoun: 'Wir', form: 'sind' },
      { pronoun: 'Ihr', form: 'seid' },
      { pronoun: 'Sie / sie', form: 'sind' }
    ]
  },
  haben: {
    verb: 'haben',
    meaning: 'có (to have)',
    forms: [
      { pronoun: 'Ich', form: 'habe' },
      { pronoun: 'Du', form: 'hast' },
      { pronoun: 'Er / es / sie', form: 'hat' },
      { pronoun: 'Wir', form: 'haben' },
      { pronoun: 'Ihr', form: 'habt' },
      { pronoun: 'Sie / sie', form: 'haben' }
    ]
  }
};

const PHRASES = [
  {
    category: 'greeting',
    categoryName: 'Chào hỏi',
    items: [
      { de: 'Hallo!', vi: 'Xin chào!' },
      { de: 'Guten Morgen!', vi: 'Chào buổi sáng!' },
      { de: 'Guten Tag!', vi: 'Chào buổi chiều!' },
      { de: 'Guten Abend!', vi: 'Chào buổi tối!' },
      { de: 'Tschüss!', vi: 'Tạm biệt!' }
    ]
  },
  {
    category: 'name',
    categoryName: 'Hỏi tên',
    items: [
      { de: 'Wie heißt du?', vi: 'Bạn tên gì?' },
      { de: 'Ich heiße …', vi: 'Tôi tên là …' },
      { de: 'Mein Name ist …', vi: 'Tên tôi là …' }
    ]
  },
  {
    category: 'wellbeing',
    categoryName: 'Hỏi thăm',
    items: [
      { de: 'Wie geht’s?', vi: 'Bạn khỏe không?' },
      { de: 'Mir geht’s gut.', vi: 'Tôi khỏe.' },
      { de: 'Sehr gut.', vi: 'Rất tốt.' },
      { de: 'Nicht schlecht.', vi: 'Không tệ.' }
    ]
  },
  {
    category: 'intro',
    categoryName: 'Giới thiệu bản thân',
    items: [
      { de: 'Ich komme aus Vietnam.', vi: 'Tôi đến từ Việt Nam.' },
      { de: 'Ich wohne in Hanoi.', vi: 'Tôi sống ở Hà Nội.' },
      { de: 'Ich bin Student/Schüler.', vi: 'Tôi là sinh viên/học sinh.' },
      { de: 'Ich lerne Deutsch.', vi: 'Tôi học tiếng Đức.' }
    ]
  }
];

const PRONUNCIATIONS = [
  {
    combo: 'sch',
    sound: '/s/ (giống "sh")',
    description: 'Phát âm chu môi dày hơi giống chữ "sh" trong tiếng Anh.',
    examples: [
      { word: 'Schule', meaning: 'trường học' },
      { word: 'Schwester', meaning: 'chị/em gái' },
      { word: 'schnell', meaning: 'nhanh' }
    ]
  },
  {
    combo: 'ch',
    sound: 'âm gió nhẹ /ç/',
    description: 'Âm phát ra bằng cách đẩy nhẹ hơi ở phần vòm họng mềm cổ họng.',
    examples: [
      { word: 'ich', meaning: 'tôi' },
      { word: 'nicht', meaning: 'không' },
      { word: 'Milch', meaning: 'sữa' }
    ]
  },
  {
    combo: 'ei',
    sound: '/ai/',
    description: 'Nguyên âm đôi phát âm giống "ai" hoặc "ay" trong tiếng Việt.',
    examples: [
      { word: 'mein', meaning: 'của tôi' },
      { word: 'heißen', meaning: 'tên là' },
      { word: 'drei', meaning: 'ba' }
    ]
  },
  {
    combo: 'ie',
    sound: '/i:/ (i dài)',
    description: 'Phát âm kéo dài nguyên âm "i".',
    examples: [
      { word: 'Bier', meaning: 'bia' },
      { word: 'vier', meaning: 'bốn' },
      { word: 'Liebe', meaning: 'tình yêu' }
    ]
  },
  {
    combo: 'eu',
    sound: '/oi/',
    description: 'Nguyên âm đôi phát âm giống như vần "ôi" hoặc "oy".',
    examples: [
      { word: 'heute', meaning: 'hôm nay' },
      { word: 'neu', meaning: 'mới' },
      { word: 'Freund', meaning: 'bạn bè' }
    ]
  },
  {
    combo: 'sp',
    sound: '/shp/ (hoặc /ʃp/)',
    description: 'Đọc âm "sch" trước rồi nối nhanh sang âm "p". Thường gặp ở đầu từ.',
    examples: [
      { word: 'Sport', meaning: 'thể thao' },
      { word: 'spielen', meaning: 'chơi' },
      { word: 'Spaß', meaning: 'niềm vui / vui vẻ' }
    ]
  },
  {
    combo: 'st',
    sound: '/sht/ (hoặc /ʃt/)',
    description: 'Đọc âm "sch" trước rồi nối nhanh sang âm "t". Thường gặp ở đầu từ.',
    examples: [
      { word: 'Student', meaning: 'sinh viên' },
      { word: 'Stunde', meaning: 'tiếng đồng hồ / giờ học' },
      { word: 'Straße', meaning: 'đường phố' }
    ]
  }
];

const QUIZ_QUESTIONS = [
  {
    question: 'Động từ "sein" đi với ngôi "Du" chia như thế nào?',
    options: ['bin', 'bist', 'ist', 'sind'],
    correct: 1,
    hint: 'Du + bist'
  },
  {
    question: 'Cụm từ "Guten Abend!" có nghĩa là gì?',
    options: ['Chào buổi sáng!', 'Chào buổi chiều!', 'Chào buổi tối!', 'Tạm biệt!'],
    correct: 2,
    hint: 'Abend có nghĩa là buổi tối.'
  },
  {
    question: 'Từ "Schule" phát âm âm đầu "sch" như thế nào?',
    options: ['Giống âm "s" nhẹ', 'Giống âm "sh" chu môi dày', 'Giống âm "ch"', 'Giống âm "kh"'],
    correct: 1,
    hint: 'sch đọc giống âm sh tiếng Anh.'
  },
  {
    question: 'Động từ "haben" đi với ngôi "Er/es/sie" chia như thế nào?',
    options: ['habe', 'hast', 'hat', 'haben'],
    correct: 2,
    hint: 'Er / es / sie hat.'
  },
  {
    question: '"Ich komme aus Vietnam" nghĩa là gì?',
    options: ['Tôi sống ở Việt Nam.', 'Tôi đến từ Việt Nam.', 'Tôi học tiếng Đức.', 'Tôi là sinh viên.'],
    correct: 1,
    hint: 'komme aus = đến từ.'
  },
  {
    question: 'Từ "heute" phát âm vần "eu" như thế nào?',
    options: ['/ai/', '/i dài/', '/ui/', '/oi/'],
    correct: 3,
    hint: 'eu phát âm giống âm /oi/.'
  },
  {
    question: 'Để hỏi tên một cách thân mật, ta dùng câu nào?',
    options: ['Wie geht’s?', 'Wie heißt du?', 'Ich heiße Hiền.', 'Mein Name ist Hiền.'],
    correct: 1,
    hint: 'Wie heißt du = Bạn tên gì?'
  },
  {
    question: 'Động từ "sein" đi với ngôi "Ihr" chia như thế nào?',
    options: ['sind', 'seid', 'ist', 'bist'],
    correct: 1,
    hint: 'Ihr seid.'
  },
  {
    question: 'Cách phát âm nguyên âm đôi trong từ "mein" và "drei" là gì?',
    options: ['/ie/', '/oi/', '/ai/', '/au/'],
    correct: 2,
    hint: 'ei phát âm thành /ai/.'
  },
  {
    question: 'Từ "Straße" phát âm âm đầu "st" như thế nào?',
    options: ['/st/ bình thường', '/sht/ (cong lưỡi chu môi)', '/ts/', '/s/'],
    correct: 1,
    hint: 'st ở đầu từ đọc giống /sht/.'
  }
];

// --- APP STATE ---

let state = {
  currentTab: 'dashboard',
  selectedPhraseCategory: 'all',
  quizActiveQuestion: 0,
  quizScore: 0,
  quizAnswers: [],
  quizCompleted: false,
  progress: {
    alphabetVisited: new Set(),
    conjugationVisited: false,
    phrasesVisited: new Set(),
    pronunciationVisited: new Set(),
    quizHighscore: 0
  },
  germanVoice: null
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

// --- DOM RENDERING & ATTACHMENTS ---

function initApp() {
  const savedProgress = localStorage.getItem('deutsch_a1_progress');
  if (savedProgress) {
    try {
      const parsed = JSON.parse(savedProgress);
      state.progress.alphabetVisited = new Set(parsed.alphabetVisited || []);
      state.progress.conjugationVisited = parsed.conjugationVisited || false;
      state.progress.phrasesVisited = new Set(parsed.phrasesVisited || []);
      state.progress.pronunciationVisited = new Set(parsed.pronunciationVisited || []);
      state.progress.quizHighscore = parsed.quizHighscore || 0;
    } catch (e) {
      console.error("Error loading progress", e);
    }
  }

  initTTS();
  renderAlphabet();
  renderConjugations();
  renderPhrases();
  renderPronunciations();
  setupQuiz();
  setupExercise();
  updateProgressUI();
  
  // Tab navigation
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const tabId = btn.getAttribute('data-tab');
      switchTab(tabId);
    });
  });

  // Welcome page buttons
  document.getElementById('startLearnBtn').addEventListener('click', () => switchTab('alphabet'));
  document.getElementById('startQuizBtn').addEventListener('click', () => switchTab('quiz'));
}

function saveProgress() {
  const serialized = {
    alphabetVisited: Array.from(state.progress.alphabetVisited),
    conjugationVisited: state.progress.conjugationVisited,
    phrasesVisited: Array.from(state.progress.phrasesVisited),
    pronunciationVisited: Array.from(state.progress.pronunciationVisited),
    quizHighscore: state.progress.quizHighscore
  };
  localStorage.setItem('deutsch_a1_progress', JSON.stringify(serialized));
  updateProgressUI();
}

function updateProgressUI() {
  const alphPct = Math.round((state.progress.alphabetVisited.size / ALPHABET.length) * 100);
  const conjPct = state.progress.conjugationVisited ? 100 : 0;
  
  let totalPhrases = 0;
  PHRASES.forEach(cat => totalPhrases += cat.items.length);
  // add 1 for the custom exercise
  const phrasePct = Math.round((state.progress.phrasesVisited.size / (totalPhrases + 1)) * 100);
  
  const pronPct = Math.round((state.progress.pronunciationVisited.size / PRONUNCIATIONS.length) * 100);
  const totalProgress = Math.round((alphPct + conjPct + phrasePct + pronPct) / 4);
  
  document.getElementById('progressAlphabet').textContent = `${alphPct}%`;
  document.getElementById('progressConjugation').textContent = `${conjPct}%`;
  document.getElementById('progressPhrases').textContent = `${phrasePct}%`;
  document.getElementById('progressPronunciation').textContent = `${pronPct}%`;
  document.getElementById('progressHighscore').textContent = `${state.progress.quizHighscore}/${QUIZ_QUESTIONS.length}`;
  
  const mainBar = document.getElementById('mainProgressBar');
  if (mainBar) {
    mainBar.style.width = `${totalProgress}%`;
  }
  const welcomeProgressText = document.getElementById('welcomeProgressText');
  if (welcomeProgressText) {
    welcomeProgressText.textContent = `Đã hoàn thành ${totalProgress}% bài học`;
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

// 1. RENDER ALPHABET
function renderAlphabet() {
  const container = document.getElementById('alphabetGrid');
  if (!container) return;
  container.innerHTML = '';

  ALPHABET.forEach(item => {
    const card = document.createElement('div');
    card.className = 'letter-card';
    
    if (state.progress.alphabetVisited.has(item.char)) {
      card.style.borderColor = '#000000';
      card.style.background = 'var(--bg-highlight)';
    }

    card.innerHTML = `
      <div class="play-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        </svg>
      </div>
      <div class="chars">${item.char}</div>
      <div class="ipa">${item.ipa}</div>
    `;

    card.addEventListener('click', () => {
      speak(item.char.split('')[0]);
      
      card.style.borderColor = '#000000';
      card.style.background = 'var(--bg-highlight)';
      state.progress.alphabetVisited.add(item.char);
      saveProgress();
    });

    container.appendChild(card);
  });
}

// 2. RENDER CONJUGATIONS
function renderConjugations() {
  const container = document.getElementById('conjugationContainer');
  if (!container) return;
  container.innerHTML = '';

  Object.values(CONJUGATIONS).forEach(verbData => {
    const card = document.createElement('div');
    card.className = 'verb-card';
    
    let rowsHtml = '';
    verbData.forms.forEach(item => {
      rowsHtml += `
        <div class="conjugation-row" data-pronoun="${item.pronoun}" data-form="${item.form}">
          <span class="pronoun">${item.pronoun}</span>
          <span class="verb-form">${item.form}</span>
          <span class="row-play">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            </svg>
          </span>
        </div>
      `;
    });

    card.innerHTML = `
      <div class="verb-header">
        <h3 class="verb-title">${verbData.verb.toUpperCase()}</h3>
        <span class="verb-meaning">${verbData.meaning}</span>
      </div>
      <div class="conjugation-list">
        ${rowsHtml}
      </div>
    `;

    card.querySelectorAll('.conjugation-row').forEach(row => {
      row.addEventListener('click', () => {
        const pronounText = row.getAttribute('data-pronoun').replace(/\s*\/\s*/g, ' oder ').trim();
        const formText = row.getAttribute('data-form');
        
        speak(`${pronounText} ${formText}`);
        
        state.progress.conjugationVisited = true;
        saveProgress();
      });
    });

    container.appendChild(card);
  });
}

// 3. RENDER PHRASES
function renderPhrases() {
  const tabContainer = document.getElementById('phrasesTabs');
  const gridContainer = document.getElementById('phrasesGrid');
  if (!tabContainer || !gridContainer) return;

  tabContainer.innerHTML = `<button class="phrase-tab-btn active" data-cat="all">Tất cả</button>`;
  PHRASES.forEach(cat => {
    tabContainer.innerHTML += `<button class="phrase-tab-btn" data-cat="${cat.category}">${cat.categoryName}</button>`;
  });

  tabContainer.querySelectorAll('.phrase-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      tabContainer.querySelectorAll('.phrase-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.selectedPhraseCategory = btn.getAttribute('data-cat');
      filterAndRenderPhraseGrid();
    });
  });

  filterAndRenderPhraseGrid();
}

function filterAndRenderPhraseGrid() {
  const container = document.getElementById('phrasesGrid');
  if (!container) return;
  container.innerHTML = '';

  PHRASES.forEach(categoryObj => {
    if (state.selectedPhraseCategory !== 'all' && categoryObj.category !== state.selectedPhraseCategory) {
      return;
    }

    categoryObj.items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'phrase-card';
      
      card.innerHTML = `
        <div class="phrase-info">
          <span class="phrase-german">${item.de}</span>
          <span class="phrase-vietnamese">${item.vi}</span>
        </div>
        <button class="phrase-speak-btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          </svg>
        </button>
      `;

      card.addEventListener('click', () => {
        speak(item.de);
        state.progress.phrasesVisited.add(item.de);
        saveProgress();
      });

      container.appendChild(card);
    });
  });
}

// 4. AUFGABE 1: EXERCISE CONTROLS
function setupExercise() {
  const inputName = document.getElementById('inputName');
  const inputFrom = document.getElementById('inputFrom');
  const inputLive = document.getElementById('inputLive');
  const inputJob = document.getElementById('inputJob');
  const inputLang = document.getElementById('inputLang');

  const spanName = document.getElementById('spanName');
  const spanFrom = document.getElementById('spanFrom');
  const spanLive = document.getElementById('spanLive');
  const spanJob = document.getElementById('spanJob');
  const spanLang = document.getElementById('spanLang');

  const exerciseSpeakBtn = document.getElementById('exerciseSpeakBtn');

  if (!inputName || !exerciseSpeakBtn) return;

  const updatePreview = () => {
    spanName.textContent = inputName.value.trim() || '__________';
    spanFrom.textContent = inputFrom.value.trim() || '__________';
    spanLive.textContent = inputLive.value.trim() || '__________';
    spanJob.textContent = inputJob.value.trim() || '__________';
    spanLang.textContent = inputLang.value.trim() || '__________';
  };

  // Add event listeners for inputs
  [inputName, inputFrom, inputLive, inputJob, inputLang].forEach(input => {
    input.addEventListener('input', updatePreview);
  });

  // Speak paragraph button
  exerciseSpeakBtn.addEventListener('click', () => {
    const name = inputName.value.trim() || 'Hiền';
    const country = inputFrom.value.trim() || 'Vietnam';
    const city = inputLive.value.trim() || 'Hanoi';
    const job = inputJob.value.trim() || 'Studentin';
    const language = inputLang.value.trim() || 'Deutsch';

    const fullParagraphText = `Ich heiße ${name}. Ich komme aus ${country}. Ich wohne in ${city}. Ich bin ${job}. Ich lerne ${language}.`;
    speak(fullParagraphText);

    // Save progress
    state.progress.phrasesVisited.add('aufgabe_1_completed');
    saveProgress();
  });

  // Run once to initialize
  updatePreview();
}

// 5. RENDER PRONUNCIATIONS
function renderPronunciations() {
  const container = document.getElementById('rulesContainer');
  if (!container) return;
  container.innerHTML = '';

  PRONUNCIATIONS.forEach(rule => {
    const card = document.createElement('div');
    card.className = 'rule-card';
    
    let examplesHtml = '';
    rule.examples.forEach(ex => {
      examplesHtml += `
        <div class="rule-example-item" data-word="${ex.word}">
          <div>
            <span class="example-word">${ex.word}</span>
            <span class="example-meaning">(${ex.meaning})</span>
          </div>
          <span class="example-speak">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            </svg>
          </span>
        </div>
      `;
    });

    card.innerHTML = `
      <div class="rule-header">
        <span class="rule-combo">${rule.combo}</span>
        <span class="rule-sound">${rule.sound}</span>
      </div>
      <div class="rule-description">${rule.description}</div>
      <div class="rule-examples">
        ${examplesHtml}
      </div>
    `;

    card.querySelectorAll('.rule-example-item').forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        const word = item.getAttribute('data-word');
        speak(word);
        
        state.progress.pronunciationVisited.add(rule.combo);
        saveProgress();
      });
    });

    container.appendChild(card);
  });
}

// 6. QUIZ LOGIC
function setupQuiz() {
  const restartBtn = document.getElementById('quizRestartBtn');
  const nextBtn = document.getElementById('quizNextBtn');
  
  if (restartBtn) restartBtn.addEventListener('click', restartQuiz);
  if (nextBtn) nextBtn.addEventListener('click', nextQuestion);
}

function startQuiz() {
  state.quizActiveQuestion = 0;
  state.quizScore = 0;
  state.quizAnswers = [];
  state.quizCompleted = false;
  
  document.getElementById('quizQuestionView').style.display = 'block';
  document.getElementById('quizResultView').style.display = 'none';
  
  showQuestion();
}

function showQuestion() {
  const currentQ = QUIZ_QUESTIONS[state.quizActiveQuestion];
  
  document.getElementById('quizProgress').textContent = `Câu ${state.quizActiveQuestion + 1}/${QUIZ_QUESTIONS.length}`;
  document.getElementById('quizQuestionText').textContent = currentQ.question;
  
  const optionsContainer = document.getElementById('quizOptions');
  optionsContainer.innerHTML = '';
  
  const feedbackEl = document.getElementById('quizFeedback');
  feedbackEl.style.display = 'none';
  
  const nextBtn = document.getElementById('quizNextBtn');
  nextBtn.style.display = 'none'; 

  currentQ.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `
      <span>${opt}</span>
      <span class="option-icon"></span>
    `;
    
    btn.addEventListener('click', () => selectOption(idx));
    optionsContainer.appendChild(btn);
  });
}

function selectOption(selectedIdx) {
  const currentQ = QUIZ_QUESTIONS[state.quizActiveQuestion];
  const optionsContainer = document.getElementById('quizOptions');
  const buttons = optionsContainer.querySelectorAll('.option-btn');
  const feedbackEl = document.getElementById('quizFeedback');
  const nextBtn = document.getElementById('quizNextBtn');

  buttons.forEach(btn => btn.disabled = true);
  
  state.quizAnswers.push(selectedIdx);

  if (selectedIdx === currentQ.correct) {
    buttons[selectedIdx].classList.add('correct');
    buttons[selectedIdx].querySelector('.option-icon').innerHTML = '✓';
    
    feedbackEl.className = 'quiz-feedback correct';
    feedbackEl.innerHTML = `Chính xác! ${currentQ.hint ? `Gợi ý: ${currentQ.hint}` : ''}`;
    state.quizScore++;
  } else {
    buttons[selectedIdx].classList.add('wrong');
    buttons[selectedIdx].querySelector('.option-icon').innerHTML = '✗';
    buttons[currentQ.correct].classList.add('correct');
    
    feedbackEl.className = 'quiz-feedback wrong';
    feedbackEl.innerHTML = `Chưa đúng! Đáp án đúng là: <strong>${currentQ.options[currentQ.correct]}</strong>.<br>${currentQ.hint ? `Gợi ý: ${currentQ.hint}` : ''}`;
  }
  
  feedbackEl.style.display = 'block';
  
  nextBtn.textContent = state.quizActiveQuestion < QUIZ_QUESTIONS.length - 1 ? 'Câu tiếp theo' : 'Hoàn thành';
  nextBtn.style.display = 'block';
}

function nextQuestion() {
  state.quizActiveQuestion++;
  
  if (state.quizActiveQuestion < QUIZ_QUESTIONS.length) {
    showQuestion();
  } else {
    showQuizResults();
  }
}

function showQuizResults() {
  document.getElementById('quizQuestionView').style.display = 'none';
  document.getElementById('quizResultView').style.display = 'block';
  
  const scorePercent = Math.round((state.quizScore / QUIZ_QUESTIONS.length) * 100);
  document.getElementById('quizFinalScore').textContent = `${state.quizScore}/${QUIZ_QUESTIONS.length}`;
  
  let msg = '';
  if (scorePercent === 100) {
    msg = 'Tuyệt vời! Bạn đã nắm vững toàn bộ kiến thức Buổi 1. Hãy tiếp tục phát huy nhé!';
  } else if (scorePercent >= 80) {
    msg = 'Rất tốt! Bạn hiểu bài rất nhanh, chỉ cần ôn lại một chút thôi.';
  } else if (scorePercent >= 50) {
    msg = 'Khá ổn! Hãy xem lại các phần phát âm hoặc chia động từ và thử lại nhé.';
  } else {
    msg = 'Bạn cần xem lại bài giảng và luyện nghe nhiều hơn. Đừng nản chí nhé!';
  }
  
  document.getElementById('quizFeedbackMsg').textContent = msg;
  
  if (state.quizScore > state.progress.quizHighscore) {
    state.progress.quizHighscore = state.quizScore;
    saveProgress();
  }
}

function restartQuiz() {
  startQuiz();
}

window.addEventListener('DOMContentLoaded', () => {
  initApp();
  
  document.querySelectorAll('.tab-btn').forEach(btn => {
    if (btn.getAttribute('data-tab') === 'quiz') {
      btn.addEventListener('click', startQuiz);
    }
  });
});
