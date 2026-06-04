// German A1 Lesson 2 Learning Application Data & Logic

// --- DATA STRUCTURES ---

const REVIEW_ALPHABET = [
  { char: 'Aa', ipa: '[a:]' }, { char: 'Bb', ipa: '[be:]' }, { char: 'Cc', ipa: '[tse:]' },
  { char: 'Dd', ipa: '[de:]' }, { char: 'Ee', ipa: '[e:]' }, { char: 'Ff', ipa: '[ɛf]' },
  { char: 'Gg', ipa: '[ge:]' }, { char: 'Hh', ipa: '[ha:]' }, { char: 'Ii', ipa: '[i:]' },
  { char: 'Jj', ipa: '[jɔt]' }, { char: 'Kk', ipa: '[ka:]' }, { char: 'Ll', ipa: '[ɛl]' },
  { char: 'Mm', ipa: '[ɛm]' }, { char: 'Nn', ipa: '[ɛn]' }, { char: 'Oo', ipa: '[o:]' },
  { char: 'Pp', ipa: '[pe:]' }, { char: 'Qq', ipa: '[ku:]' }, { char: 'Rr', ipa: '[ɛʀ]' },
  { char: 'Ss', ipa: '[ɛs]' }, { char: 'Tt', ipa: '[te:]' }, { char: 'Uu', ipa: '[u:]' },
  { char: 'Vv', ipa: '[fau]' }, { char: 'Ww', ipa: '[ve:]' }, { char: 'Xx', ipa: '[iks]' },
  { char: 'Yy', ipa: '[ˈypsilɔn]' }, { char: 'Zz', ipa: '[tset]' }, 
  { char: 'Ää', ipa: '[ɛ:]' }, { char: 'Öö', ipa: '[ø:]' }, { char: 'Üü', ipa: '[y:]' }, 
  { char: 'ß', ipa: "[ɛs'tset]" }
];

const NUMBERS = [
  { val: 0, word: 'null' }, { val: 1, word: 'eins' }, { val: 2, word: 'zwei' },
  { val: 3, word: 'drei' }, { val: 4, word: 'vier' }, { val: 5, word: 'fünf' },
  { val: 6, word: 'sechs' }, { val: 7, word: 'sieben' }, { val: 8, word: 'acht' },
  { val: 9, word: 'neun' }, { val: 10, word: 'zehn' }, { val: 11, word: 'elf' },
  { val: 12, word: 'zwölf' }, { val: 13, word: 'dreizehn' }, { val: 14, word: 'vierzehn' },
  { val: 15, word: 'fünfzehn' }, { val: 16, word: 'sechzehn' }, { val: 17, word: 'siebzehn' },
  { val: 18, word: 'achtzehn' }, { val: 19, word: 'neunzehn' }, { val: 20, word: 'zwanzig' }
];

const W_FRAGEN = [
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
    usage: 'Hỏi về vị trí, địa điểm hiện tại (trả lời thường đi với giới từ "in").',
    examples: [
      { q: 'Wo wohnst du?', a: 'Ich wohne in Hanoi.', translation: 'Bạn sống ở đâu? - Tôi sống ở Hà Nội.' },
      { q: 'Wo bist du?', a: 'Ich bin im Supermarkt.', translation: 'Bạn đang ở đâu? - Tôi đang ở siêu thị.' },
      { q: 'Wo ist das Buch?', a: 'Das Buch ist hier.', translation: 'Cuốn sách ở đâu? - Cuốn sách ở đây.' }
    ]
  },
  {
    word: 'Woher',
    meaning: 'Từ đâu',
    usage: 'Hỏi về nguồn gốc, xuất xứ (trả lời thường đi với giới từ "aus").',
    examples: [
      { q: 'Woher kommst du?', a: 'Ich komme aus Vietnam.', translation: 'Bạn đến từ đâu? - Tôi đến từ Việt Nam.' },
      { q: 'Woher kommen Sie?', a: 'Ich komme aus Deutschland.', translation: 'Ngài đến từ đâu? - Tôi đến từ nước Đức.' }
    ]
  }
];

const COUNTRIES = [
  { flag: '🇻🇳', country: 'Vietnam', lang: 'Vietnamesisch', prep: 'aus', example: 'Ich komme aus Vietnam und spreche Vietnamesisch.' },
  { flag: '🇩🇪', country: 'Deutschland', lang: 'Deutsch', prep: 'aus', example: 'Er kommt aus Deutschland und spricht Deutsch.' },
  { flag: '🇦🇹', country: 'Österreich', lang: 'Deutsch', prep: 'aus', example: 'Wir kommen aus Österreich und sprechen Deutsch.' },
  { flag: '🇨🇭', country: 'Schweiz', lang: 'Deutsch / Französisch / Italienisch', prep: 'aus der', example: 'Sie kommt aus der Schweiz và nói tiếng Đức.' }, // note "aus der Schweiz"
  { flag: '🇬🇧', country: 'England', lang: 'Englisch', prep: 'aus', example: 'Ich komme aus England und spreche Englisch.' },
  { flag: '🇫🇷', country: 'Frankreich', lang: 'Französisch', prep: 'aus', example: 'Sie kommen aus Frankreich und sprechen Französisch.' },
  { flag: '🇪🇸', country: 'Spanien', lang: 'Spanisch', prep: 'aus', example: 'Ihr kommt aus Spanien und sprecht Spanisch.' },
  { flag: '🇮🇹', country: 'Italien', lang: 'Italienisch', prep: 'aus', example: 'Mein Freund kommt aus Italien und spricht Italienisch.' },
  { flag: '🇯🇵', country: 'Japan', lang: 'Japanisch', prep: 'aus', example: 'Kenji kommt aus Japan und spricht Japanisch.' },
  { flag: '🇨🇳', country: 'China', lang: 'Chinesisch', prep: 'aus', example: 'Sie kommt aus China und spricht Chinesisch.' }
];

const REVIEW_QUIZ_QUESTIONS = [
  {
    question: 'Cách chào "Chào buổi sáng" trong tiếng Đức là gì?',
    options: ['Guten Morgen!', 'Guten Tag!', 'Guten Abend!', 'Gute Nacht!'],
    correct: 0,
    hint: 'Guten Morgen! là Chào buổi sáng (thường từ sáng sớm đến 11h trưa).',
    de: 'Guten Morgen!'
  },
  {
    question: 'Cách chào "Chào ngày mới / Chào buổi chiều lịch sự" là gì?',
    options: ['Guten Morgen!', 'Guten Tag!', 'Guten Abend!', 'Tschüss!'],
    correct: 1,
    hint: 'Guten Tag là Chào buổi chiều / Chào ngày mới (từ 11h sáng đến 6h tối).',
    de: 'Guten Tag!'
  },
  {
    question: 'Cách chào "Chào buổi tối" trong tiếng Đức là gì?',
    options: ['Guten Morgen!', 'Guten Tag!', 'Guten Abend!', 'Tschüss!'],
    correct: 2,
    hint: 'Guten Abend! là Chào buổi tối (thường từ 6h tối trở đi).',
    de: 'Guten Abend!'
  },
  {
    question: 'Điền từ đúng: "Ich _____ Laura (Tôi tên là Laura)."',
    options: ['wohne', 'bin', 'komme', 'heiße'],
    correct: 3,
    hint: 'heiße đi kèm động từ heißen để giới thiệu tên.',
    de: 'Ich heiße Laura.'
  },
  {
    question: 'Điền từ đúng: "Ich _____ aus Vietnam."',
    options: ['wohne', 'bin', 'komme', 'heiße'],
    correct: 2,
    hint: 'komme aus = đến từ.',
    de: 'Ich komme aus Vietnam.'
  },
  {
    question: 'Điền từ đúng: "Ich _____ in Hanoi."',
    options: ['komme', 'wohne', 'bin', 'heiße'],
    correct: 1,
    hint: 'wohne in = sinh sống ở.',
    de: 'Ich wohne in Hanoi.'
  },
  {
    question: 'Điền từ đúng: "Ich _____ Studentin (Tôi là nữ sinh viên)."',
    options: ['heiße', 'wohne', 'komme', 'bin'],
    correct: 3,
    hint: 'động từ sein đi với ich chia thành bin.',
    de: 'Ich bin Studentin.'
  },
  {
    question: 'Câu hỏi "Wie geht es dir?" dùng để hỏi về điều gì?',
    options: ['Hỏi tên', 'Hỏi quê quán', 'Hỏi thăm sức khỏe', 'Hỏi nghề nghiệp'],
    correct: 2,
    hint: 'Wie geht es dir? có nghĩa là Bạn khỏe không?',
    de: 'Wie geht es dir?'
  },
  {
    question: 'Chia động từ "sein": "Du _____ rất thân thiện (Du _____ nett)."',
    options: ['bist', 'bin', 'ist', 'sind'],
    correct: 0,
    hint: 'Đại từ "du" đi với động từ sein chia thành "bist".',
    de: 'Du bist nett.'
  },
  {
    question: 'Chia động từ "sein": "Er _____ Lehrer (Anh ấy là giáo viên)."',
    options: ['bist', 'bin', 'ist', 'sind'],
    correct: 2,
    hint: 'Đại từ ngôi thứ ba số ít "er" đi với động từ sein chia thành "ist".',
    de: 'Er ist Lehrer.'
  },
  {
    question: 'Chia động từ "sein": "Wir _____ Schüler (Chúng tôi là học sinh)."',
    options: ['bist', 'seid', 'ist', 'sind'],
    correct: 3,
    hint: 'Đại từ số nhiều "wir" đi với động từ sein chia thành "sind".',
    de: 'Wir sind Schüler.'
  },
  {
    question: 'Chia động từ "haben": "Ich _____ ein Handy (Tôi có điện thoại di động)."',
    options: ['hast', 'haben', 'habe', 'hat'],
    correct: 2,
    hint: 'Đại từ "ich" đi với động từ haben chia thành "habe".',
    de: 'Ich habe ein Handy.'
  },
  {
    question: 'Chia động từ "haben": "Du _____ ein Auto (Bạn có một chiếc ô tô)."',
    options: ['hast', 'haben', 'habe', 'hat'],
    correct: 0,
    hint: 'Đại từ "du" đi với động từ haben chia thành "hast".',
    de: 'Du hast ein Auto.'
  },
  {
    question: 'Chia động từ "haben": "Sie _____ Geld (Họ có tiền)."',
    options: ['hast', 'haben', 'habe', 'hat'],
    correct: 1,
    hint: 'Đại từ số nhiều "sie" (họ) đi với động từ haben chia thành "haben".',
    de: 'Sie haben Geld.'
  },
  {
    question: 'Chia động từ "haben": "Ihr _____ Glück (Các bạn gặp may mắn)."',
    options: ['hast', 'haben', 'habt', 'hat'],
    correct: 2,
    hint: 'Đại từ "ihr" (các bạn) đi với động từ haben chia thành "habt".',
    de: 'Ihr habt Glück.'
  }
];

// --- APP STATE ---

let state = {
  currentTab: 'dashboard',
  germanVoice: null,
  dictatTargetNumber: null,
  reviewQuizActiveQuestion: 0,
  reviewQuizScore: 0,
  reviewQuizAnswers: [],
  reviewQuizCompleted: false,
  progress: {
    reviewAlphabetVisited: new Set(),
    numbersVisited: new Set(),
    wFragenVisited: new Set(),
    countriesVisited: new Set(),
    listeningVisited: new Set(),
    dictatScore: 0,
    dictatTotal: 0
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

// --- INITIALIZATION ---

function initApp() {
  const savedProgress = localStorage.getItem('deutsch_a2_progress');
  if (savedProgress) {
    try {
      const parsed = JSON.parse(savedProgress);
      state.progress.reviewAlphabetVisited = new Set(parsed.reviewAlphabetVisited || []);
      state.progress.numbersVisited = new Set(parsed.numbersVisited || []);
      state.progress.wFragenVisited = new Set(parsed.wFragenVisited || []);
      state.progress.countriesVisited = new Set(parsed.countriesVisited || []);
      state.progress.listeningVisited = new Set(parsed.listeningVisited || []);
      state.progress.dictatScore = parsed.dictatScore || 0;
      state.progress.dictatTotal = parsed.dictatTotal || 0;
    } catch (e) {
      console.error("Error loading progress", e);
    }
  }

  initTTS();
  renderReviewAlphabet();
  renderNumbers();
  renderWFragen();
  renderCountries();
  setupDictatGame();
  setupCountryBuilder();
  setupReviewQuiz();
  setupListeningExercises();
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
    reviewAlphabetVisited: Array.from(state.progress.reviewAlphabetVisited),
    numbersVisited: Array.from(state.progress.numbersVisited),
    wFragenVisited: Array.from(state.progress.wFragenVisited),
    countriesVisited: Array.from(state.progress.countriesVisited),
    listeningVisited: Array.from(state.progress.listeningVisited),
    dictatScore: state.progress.dictatScore,
    dictatTotal: state.progress.dictatTotal
  };
  localStorage.setItem('deutsch_a2_progress', JSON.stringify(serialized));
  updateProgressUI();
}

function updateProgressUI() {
  const revPct = Math.round((state.progress.reviewAlphabetVisited.size / (REVIEW_ALPHABET.length + 1)) * 100);
  const numPct = Math.round((state.progress.numbersVisited.size / NUMBERS.length) * 100);
  const dictatAttemptPct = Math.min(100, Math.round((state.progress.dictatTotal / 5) * 100)); // Target is at least 5 attempts to get 100%
  const wfPct = Math.round((state.progress.wFragenVisited.size / W_FRAGEN.length) * 100);
  const cPct = Math.round((state.progress.countriesVisited.size / COUNTRIES.length) * 100);
  const listenPct = Math.round((state.progress.listeningVisited.size / 5) * 100); // 5 listening elements (Klein, Gross, Max, Anna, Bea)
  
  const totalProgress = Math.round((revPct + numPct + dictatAttemptPct + wfPct + cPct + listenPct) / 6);

  document.getElementById('progressReview').textContent = `${revPct}%`;
  document.getElementById('progressNumbers').textContent = `${numPct}%`;
  
  const dictatLabelEl = document.getElementById('progressDictatLabel');
  if (dictatLabelEl) {
    dictatLabelEl.textContent = `${dictatAttemptPct}%`;
  }
  
  document.getElementById('progressWFragen').textContent = `${wfPct}%`;
  document.getElementById('progressCountries').textContent = `${cPct}%`;

  const listenLabelEl = document.getElementById('progressListening');
  if (listenLabelEl) {
    listenLabelEl.textContent = `${listenPct}%`;
  }
  
  // Dictat Highscore Display
  const dictatScoreEl = document.getElementById('progressDictat');
  if (dictatScoreEl) {
    dictatScoreEl.textContent = `${state.progress.dictatScore}/${state.progress.dictatTotal || 0}`;
  }

  const mainBar = document.getElementById('mainProgressBar');
  if (mainBar) {
    mainBar.style.width = `${totalProgress}%`;
  }
  const welcomeProgressText = document.getElementById('welcomeProgressText');
  if (welcomeProgressText) {
    welcomeProgressText.textContent = `Đã hoàn thành ${totalProgress}% bài học Buổi 2`;
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

// 1. RENDER REVIEW TAB ALPHABET
function renderReviewAlphabet() {
  const container = document.getElementById('reviewAlphabetGrid');
  if (!container) return;
  container.innerHTML = '';

  REVIEW_ALPHABET.forEach(item => {
    const card = document.createElement('div');
    card.className = 'letter-card';
    card.style.padding = '0.75rem 0.25rem';
    
    if (state.progress.reviewAlphabetVisited.has(item.char)) {
      card.style.borderColor = '#000000';
      card.style.background = 'var(--bg-highlight)';
    }

    card.innerHTML = `
      <div class="chars" style="font-size: 1.4rem;">${item.char}</div>
      <div class="ipa">${item.ipa}</div>
    `;

    card.addEventListener('click', () => {
      speak(item.char.split('')[0]);
      card.style.borderColor = '#000000';
      card.style.background = 'var(--bg-highlight)';
      state.progress.reviewAlphabetVisited.add(item.char);
      saveProgress();
    });

    container.appendChild(card);
  });
}

// 2. RENDER NUMBERS 0 - 20
function renderNumbers() {
  const container = document.getElementById('numbersGrid');
  if (!container) return;
  container.innerHTML = '';

  NUMBERS.forEach(num => {
    const card = document.createElement('div');
    card.className = 'letter-card'; // Reuse style.css class
    card.style.padding = '1.25rem 0.25rem';

    if (state.progress.numbersVisited.has(num.word)) {
      card.style.borderColor = '#000000';
      card.style.background = 'var(--bg-highlight)';
    }

    card.innerHTML = `
      <div class="play-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
        </svg>
      </div>
      <div class="chars" style="font-size: 2.2rem; font-family: monospace;">${num.val}</div>
      <div class="ipa" style="font-size: 0.95rem; font-weight: 700; color: #000000; font-family: inherit;">${num.word}</div>
    `;

    card.addEventListener('click', () => {
      speak(num.word);
      card.style.borderColor = '#000000';
      card.style.background = 'var(--bg-highlight)';
      state.progress.numbersVisited.add(num.word);
      saveProgress();
    });

    container.appendChild(card);
  });
}

// GAME: ZAHLEN DIKTAT
function setupDictatGame() {
  const playBtn = document.getElementById('dictatPlayBtn');
  const checkBtn = document.getElementById('dictatCheckBtn');
  const inputField = document.getElementById('dictatInput');
  const feedbackEl = document.getElementById('dictatFeedback');
  const scoreText = document.getElementById('dictatScoreText');

  if (!playBtn) return;

  state.dictatChecked = false;

  const selectNewNumber = () => {
    const randIdx = Math.floor(Math.random() * NUMBERS.length);
    state.dictatTargetNumber = NUMBERS[randIdx];
    inputField.value = '';
    feedbackEl.style.display = 'none';
    feedbackEl.className = 'quiz-feedback';
    inputField.disabled = false;
    checkBtn.disabled = false;
    setTimeout(() => inputField.focus(), 50);
  };

  playBtn.addEventListener('click', () => {
    if (state.dictatTargetNumber === null || state.dictatChecked === true) {
      selectNewNumber();
      state.dictatChecked = false;
    }
    speak(state.dictatTargetNumber.word);
  });

  checkBtn.addEventListener('click', () => {
    if (state.dictatTargetNumber === null || state.dictatChecked === true) return;
    
    const userVal = inputField.value.trim();
    if (!userVal) return;

    inputField.disabled = true;
    checkBtn.disabled = true;
    state.progress.dictatTotal++;
    state.dictatChecked = true;

    const isCorrect = (parseInt(userVal) === state.dictatTargetNumber.val) || 
                      (userVal.toLowerCase() === state.dictatTargetNumber.word.toLowerCase());

    if (isCorrect) {
      state.progress.dictatScore++;
      feedbackEl.className = 'quiz-feedback correct';
      feedbackEl.innerHTML = `Chính xác! <strong>${state.dictatTargetNumber.val}</strong> là <strong>${state.dictatTargetNumber.word}</strong>.`;
    } else {
      feedbackEl.className = 'quiz-feedback wrong';
      feedbackEl.innerHTML = `Chưa đúng! Đáp án đúng là <strong>${state.dictatTargetNumber.val}</strong> (tiếng Đức đọc là <strong>${state.dictatTargetNumber.word}</strong>).`;
    }

    feedbackEl.style.display = 'block';
    scoreText.textContent = `Điểm số: ${state.progress.dictatScore}/${state.progress.dictatTotal}`;
    
    saveProgress();
  });
  
  // Enter key trigger
  inputField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      checkBtn.click();
    }
  });
}

// 3. RENDER W-FRAGEN
function renderWFragen() {
  const container = document.getElementById('wFragenContainer');
  if (!container) return;
  container.innerHTML = '';

  W_FRAGEN.forEach(wf => {
    const card = document.createElement('div');
    card.className = 'rule-card'; // Reuse style.css class
    
    let examplesHtml = '';
    wf.examples.forEach(ex => {
      examplesHtml += `
        <div class="rule-example-item" data-q="${ex.q}" style="margin-bottom: 0.5rem; display: flex; flex-direction: column; align-items: stretch; text-align: left; padding: 0.6rem 0.8rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
            <div>
              <strong style="color: #000000; font-size: 0.95rem;">${ex.q}</strong><br>
              <span style="font-size: 0.9rem; color: #555555;">&rarr; ${ex.a}</span>
            </div>
            <span class="example-speak">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 12px; height: 12px;">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              </svg>
            </span>
          </div>
          <div style="font-size: 0.8rem; color: var(--text-light); margin-top: 0.25rem; font-style: italic;">
            ${ex.translation}
          </div>
        </div>
      `;
    });

    card.innerHTML = `
      <div class="rule-header">
        <span class="rule-combo" style="font-size: 1.7rem; font-family: var(--font-serif);">${wf.word}</span>
        <span class="rule-sound" style="background: #000000; color: #ffffff;">${wf.meaning}</span>
      </div>
      <div class="rule-description" style="font-size: 0.85rem; margin-bottom: 0.75rem;">
        <strong>Sử dụng:</strong> ${wf.usage}
      </div>
      <div class="rule-examples" style="border-top: 1px solid var(--border-light); padding-top: 0.75rem;">
        ${examplesHtml}
      </div>
    `;

    card.querySelectorAll('.rule-example-item').forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        const qText = item.getAttribute('data-q');
        // Speak question then answer
        const exObj = wf.examples.find(x => x.q === qText);
        speak(`${exObj.q} ... ${exObj.a}`);
        
        state.progress.wFragenVisited.add(wf.word);
        saveProgress();
      });
    });

    container.appendChild(card);
  });
}

// 4. RENDER COUNTRIES & LANGUAGES
function renderCountries() {
  const container = document.getElementById('countriesGrid');
  if (!container) return;
  container.innerHTML = '';

  COUNTRIES.forEach(item => {
    const card = document.createElement('div');
    card.className = 'phrase-card'; // Reuse style.css class
    card.style.cursor = 'pointer';
    
    card.innerHTML = `
      <div class="phrase-info" style="gap: 0.2rem;">
        <span class="phrase-german" style="font-size: 1.1rem; display: flex; align-items: center; gap: 0.5rem;">
          <span style="font-size: 1.5rem;">${item.flag}</span> ${item.country}
        </span>
        <span class="phrase-vietnamese" style="color: #000000; font-size: 0.85rem;">
          Ngôn ngữ: <strong>${item.lang}</strong>
        </span>
        <span style="font-size: 0.75rem; color: var(--text-light); font-style: italic; margin-top: 0.25rem;">
          Ví dụ: ${item.example.split(' và ')[0]}
        </span>
      </div>
      <button class="phrase-speak-btn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        </svg>
      </button>
    `;

    card.addEventListener('click', () => {
      speak(item.example);
      state.progress.countriesVisited.add(item.country);
      saveProgress();
    });

    container.appendChild(card);
  });
}

// COUNTRY BUILDER TỔNG HỢP
function setupCountryBuilder() {
  const selectCountry = document.getElementById('selectCountry');
  const spanFlag = document.getElementById('spanFlag');
  const spanCountry = document.getElementById('spanCountry');
  const spanLanguage = document.getElementById('spanLanguage');
  const spanPrep = document.getElementById('spanPrep');
  const builderSpeakBtn = document.getElementById('builderSpeakBtn');

  if (!selectCountry) return;

  // Populate select options
  selectCountry.innerHTML = '';
  COUNTRIES.forEach((item, idx) => {
    const opt = document.createElement('option');
    opt.value = idx;
    opt.textContent = `${item.flag} ${item.country}`;
    selectCountry.appendChild(opt);
  });

  const updateBuilder = () => {
    const idx = selectCountry.value;
    const item = COUNTRIES[idx];
    
    spanFlag.textContent = item.flag;
    spanCountry.textContent = item.country;
    spanLanguage.textContent = item.lang;
    spanPrep.textContent = item.prep;
  };

  selectCountry.addEventListener('change', updateBuilder);

  builderSpeakBtn.addEventListener('click', () => {
    const idx = selectCountry.value;
    const item = COUNTRIES[idx];
    
    const introText = `Ich komme ${item.prep} ${item.country}. Ich spreche ${item.lang.split(' / ')[0]}.`;
    speak(introText);
  });

  // Init
  updateBuilder();
}

// --- REVIEW QUIZ SYSTEM ---

function setupReviewQuiz() {
  const restartBtn = document.getElementById('reviewQuizRestartBtn');
  const nextBtn = document.getElementById('reviewQuizNextBtn');
  const speakQBtn = document.getElementById('reviewQuizSpeakQ');

  if (restartBtn) restartBtn.addEventListener('click', startReviewQuiz);
  if (nextBtn) nextBtn.addEventListener('click', nextReviewQuizQuestion);
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
  const currentQ = REVIEW_QUIZ_QUESTIONS[state.reviewQuizActiveQuestion];
  if (!currentQ) return;

  const progressEl = document.getElementById('reviewQuizProgress');
  const textEl = document.getElementById('reviewQuizQuestionText');
  const speakQBtn = document.getElementById('reviewQuizSpeakQ');
  const optionsContainer = document.getElementById('reviewQuizOptions');
  const feedbackEl = document.getElementById('reviewQuizFeedback');
  const nextBtn = document.getElementById('reviewQuizNextBtn');

  if (progressEl) progressEl.textContent = `Câu ${state.reviewQuizActiveQuestion + 1}/${REVIEW_QUIZ_QUESTIONS.length}`;
  if (textEl) textEl.textContent = currentQ.question;
  
  if (speakQBtn) {
    if (currentQ.de) {
      speakQBtn.style.display = 'inline-block';
    } else {
      speakQBtn.style.display = 'none';
    }
  }

  if (optionsContainer) {
    optionsContainer.innerHTML = '';
    currentQ.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.innerHTML = `
        <span>${opt}</span>
        <span class="option-icon"></span>
      `;
      btn.addEventListener('click', () => selectReviewQuizOption(idx));
      optionsContainer.appendChild(btn);
    });
  }

  if (feedbackEl) {
    feedbackEl.style.display = 'none';
    feedbackEl.className = 'quiz-feedback';
  }

  if (nextBtn) nextBtn.style.display = 'none';
}

function selectReviewQuizOption(selectedIdx) {
  const currentQ = REVIEW_QUIZ_QUESTIONS[state.reviewQuizActiveQuestion];
  if (!currentQ) return;

  const optionsContainer = document.getElementById('reviewQuizOptions');
  if (!optionsContainer) return;
  const buttons = optionsContainer.querySelectorAll('.option-btn');
  const feedbackEl = document.getElementById('reviewQuizFeedback');
  const nextBtn = document.getElementById('reviewQuizNextBtn');

  buttons.forEach(btn => btn.disabled = true);
  state.reviewQuizAnswers.push(selectedIdx);

  const isCorrect = (selectedIdx === currentQ.correct);

  if (isCorrect) {
    buttons[selectedIdx].classList.add('correct');
    buttons[selectedIdx].querySelector('.option-icon').innerHTML = '✓';
    state.reviewQuizScore++;

    if (feedbackEl) {
      feedbackEl.className = 'quiz-feedback correct';
      feedbackEl.innerHTML = `Chính xác! ${currentQ.hint ? `Gợi ý: ${currentQ.hint}` : ''}`;
    }
  } else {
    buttons[selectedIdx].classList.add('wrong');
    buttons[selectedIdx].querySelector('.option-icon').innerHTML = '✗';
    buttons[currentQ.correct].classList.add('correct');

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

  // Play audio of the German phrase if applicable
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
    msg = 'Tuyệt vời! Bạn đã hoàn thành xuất sắc bài ôn tập. Bạn đã sẵn sàng học Buổi 2!';
  } else if (scorePercent >= 75) {
    msg = 'Rất tốt! Bạn nhớ bài rất tốt. Hãy tiến hành học các phần tiếp theo của Buổi 2.';
  } else if (scorePercent >= 50) {
    msg = 'Khá ổn! Tuy nhiên bạn nên xem lại bảng chữ cái hoặc đại từ ở Buổi 1 nếu gặp khó khăn.';
  } else {
    msg = 'Bạn nên mở lại tab học Buổi 1 để ôn tập kỹ hơn trước khi tiếp tục Buổi 2 nhé.';
  }

  if (feedbackMsgEl) feedbackMsgEl.textContent = msg;

  // Save progress
  state.progress.reviewAlphabetVisited.add('review_quiz_completed');
  saveProgress();
}

function setupListeningExercises() {
  const listenKleinBtn = document.getElementById('listenKleinBtn');
  const listenGrossBtn = document.getElementById('listenGrossBtn');
  const listenMaxBtn = document.getElementById('listenMaxBtn');
  const listenAnnaBtn = document.getElementById('listenAnnaBtn');
  const listenBeaBtn = document.getElementById('listenBeaBtn');
  
  const checkBtn = document.getElementById('checkListeningBtn');
  const resetBtn = document.getElementById('resetListeningBtn');

  if (!listenKleinBtn) return;

  const speakSlowly = (text) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'de-DE';
    utterance.rate = 0.65; // Speak slowly for listening dictation
    if (state.germanVoice) {
      utterance.voice = state.germanVoice;
    }
    window.speechSynthesis.speak(utterance);
  };

  listenKleinBtn.addEventListener('click', () => {
    speakSlowly("Herr Klein. Meine Handynummer ist: null, eins, fünf, sieben, acht, drei, neun, zwei, vier, null, sechs, eins.");
    state.progress.listeningVisited.add('klein');
    saveProgress();
  });

  listenGrossBtn.addEventListener('click', () => {
    speakSlowly("Frau Groß. Meine Handynummer ist: null, eins, sieben, zwei, fünf, neun, eins, sechs, drei, acht, vier, null.");
    state.progress.listeningVisited.add('gross');
    saveProgress();
  });

  listenMaxBtn.addEventListener('click', () => {
    speakSlowly("Max. Meine Handynummer ist: null, eins, fünf, eins, acht, neun, neun, vier, vier, fünf, acht, drei.");
    state.progress.listeningVisited.add('max');
    saveProgress();
  });

  listenAnnaBtn.addEventListener('click', () => {
    speakSlowly("Anna. Meine Handynummer ist: null, eins, sieben, eins, drei, vier, eins, zwei, zwei, sechs, sechs, neun, eins.");
    state.progress.listeningVisited.add('anna');
    saveProgress();
  });

  listenBeaBtn.addEventListener('click', () => {
    speakSlowly("Mein Nachname ist Kretschmar: k, r, e, t, s, c, h, m, a, r.");
    state.progress.listeningVisited.add('bea');
    saveProgress();
  });

  checkBtn.addEventListener('click', () => {
    const inputKlein = document.getElementById('inputKlein');
    const inputGross = document.getElementById('inputGross');
    const inputMax = document.getElementById('inputMax');
    const inputAnna = document.getElementById('inputAnna');
    const inputBea = document.getElementById('inputBea');

    const fk = document.getElementById('feedbackKlein');
    const fg = document.getElementById('feedbackGross');
    const fm = document.getElementById('feedbackMax');
    const fa = document.getElementById('feedbackAnna');
    const fb = document.getElementById('feedbackBea');

    const valKlein = inputKlein.value.replace(/\s+/g, '');
    const valGross = inputGross.value.replace(/\s+/g, '');
    const valMax = inputMax.value.replace(/\s+/g, '');
    const valAnna = inputAnna.value.replace(/\s+/g, '');
    const valBea = inputBea.value.trim().toLowerCase();

    // Herr Klein: 0157 8392 4061
    const isKleinCorrect = valKlein === "015783924061";
    fk.style.display = 'block';
    if (isKleinCorrect) {
      fk.className = "quiz-feedback correct";
      fk.innerHTML = "Chính xác! Herr Klein: <strong>0157 8392 4061</strong>";
    } else {
      fk.className = "quiz-feedback wrong";
      fk.innerHTML = `Chưa đúng! Đáp án đúng: <strong>0157 8392 4061</strong>`;
    }

    // Frau Groß: 0172 5916 3840
    const isGrossCorrect = valGross === "017259163840";
    fg.style.display = 'block';
    if (isGrossCorrect) {
      fg.className = "quiz-feedback correct";
      fg.innerHTML = "Chính xác! Frau Groß: <strong>0172 5916 3840</strong>";
    } else {
      fg.className = "quiz-feedback wrong";
      fg.innerHTML = `Chưa đúng! Đáp án đúng: <strong>0172 5916 3840</strong>`;
    }

    // Max: 0151 89944583
    const isMaxCorrect = valMax === "015189944583";
    fm.style.display = 'block';
    if (isMaxCorrect) {
      fm.className = "quiz-feedback correct";
      fm.innerHTML = "Chính xác! Max: <strong>0151 8994 4583</strong>";
    } else {
      fm.className = "quiz-feedback wrong";
      fm.innerHTML = `Chưa đúng! Đáp án đúng: <strong>0151 8994 4583</strong>`;
    }

    // Anna: 0171 341226691
    const isAnnaCorrect = valAnna === "0171341226691";
    fa.style.display = 'block';
    if (isAnnaCorrect) {
      fa.className = "quiz-feedback correct";
      fa.innerHTML = "Chính xác! Anna: <strong>0171 3412 26691</strong>";
    } else {
      fa.className = "quiz-feedback wrong";
      fa.innerHTML = `Chưa đúng! Đáp án đúng: <strong>0171 3412 26691</strong>`;
    }

    // Bea Kretschmar
    const isBeaCorrect = valBea === "kretschmar";
    fb.style.display = 'block';
    if (isBeaCorrect) {
      fb.className = "quiz-feedback correct";
      fb.innerHTML = "Chính xác! Họ của Bea: <strong>Kretschmar</strong>";
    } else {
      fb.className = "quiz-feedback wrong";
      fb.innerHTML = `Chưa đúng! Đáp án đúng: <strong>Kretschmar</strong>`;
    }
  });

  resetBtn.addEventListener('click', () => {
    document.getElementById('inputKlein').value = '';
    document.getElementById('inputGross').value = '';
    document.getElementById('inputMax').value = '';
    document.getElementById('inputAnna').value = '';
    document.getElementById('inputBea').value = '';

    document.getElementById('feedbackKlein').style.display = 'none';
    document.getElementById('feedbackGross').style.display = 'none';
    document.getElementById('feedbackMax').style.display = 'none';
    document.getElementById('feedbackAnna').style.display = 'none';
    document.getElementById('feedbackBea').style.display = 'none';
  });
}

window.addEventListener('DOMContentLoaded', () => {
  initApp();
});
