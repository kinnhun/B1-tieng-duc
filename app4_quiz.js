// German A1 Lesson 4 (Review & Test) - Quiz Page Logic (100 Questions)

const state = {
  isSubmitted: false,
  timeLeft: 3600, // 60 minutes
  timerInterval: null,
  germanVoice: null
};

// --- QUESTION DATABASES ---

const WRITING_QUESTIONS = [
  {
    id: 'w1',
    cue: 'Guten Morgen! / Wie / gehen / es / Ihnen / ?',
    correct: [
      'Guten Morgen! Wie geht es Ihnen?',
      'Guten Morgen Wie geht es Ihnen?'
    ]
  },
  {
    id: 'w2',
    cue: 'Ich / heißen / Minh / und / sein / 25 / Jahre / alt',
    correct: [
      'Ich heiße Minh und ich bin 25 Jahre alt',
      'Ich heisse Minh und ich bin 25 Jahre alt',
      'Ich heiße Minh und bin 25 Jahre alt',
      'Ich heisse Minh und bin 25 Jahre alt'
    ]
  },
  {
    id: 'w3',
    cue: 'Sie / wohnen / in / Berlin / ?',
    correct: [
      'Wohnen Sie in Berlin?',
      'Wohnen Sie in Berlin'
    ]
  },
  {
    id: 'w4',
    cue: 'wir / kommen / aus / Vietnam / und / sprechen / Vietnamesisch',
    correct: [
      'Wir kommen aus Vietnam und sprechen Vietnamesisch',
      'Wir kommen aus Vietnam und wir sprechen Vietnamesisch'
    ]
  },
  {
    id: 'w5',
    cue: 'du / sprechen / welche / Sprachen / ?',
    correct: [
      'Welche Sprachen sprichst du?',
      'Welche Sprachen sprichst du'
    ]
  },
  {
    id: 'w6',
    cue: 'Ich / wohnen / in / München / und / lerne / Deutsch',
    correct: [
      'Ich wohne in München und lerne Deutsch',
      'Ich wohne in Muenchen und lerne Deutsch',
      'Ich wohne in München und ich lerne Deutsch',
      'Ich wohne in Muenchen und ich lerne Deutsch'
    ]
  },
  {
    id: 'w7',
    cue: 'Tschüss! / Auf / Wiedersehen',
    correct: [
      'Tschüss! Auf Wiedersehen',
      'Tschuess! Auf Wiedersehen',
      'Tschüss Auf Wiedersehen',
      'Tschüss! Bis bald',
      'Tschuess! Bis bald',
      'Auf Wiedersehen! Bis bald'
    ]
  },
  {
    id: 'w8',
    cue: 'Frau / Hien / wohnen / in / Hanoi / und / sie / sein / Lehrerin',
    correct: [
      'Frau Hiền wohnt in Hanoi und sie ist Lehrerin',
      'Frau Hien wohnt in Hanoi und sie ist Lehrerin',
      'Frau Hiền wohnt in Hanoi und ist Lehrerin',
      'Frau Hien wohnt in Hanoi und ist Lehrerin'
    ]
  },
  {
    id: 'w9',
    cue: 'Hallo! / Wer / sein / du / ?',
    correct: [
      'Hallo! Wer bist du?',
      'Hallo Wer bist du'
    ]
  },
  {
    id: 'w10',
    cue: 'Er / kommen / aus / Deutschland / und / sprechen / Deutsch',
    correct: [
      'Er kommt aus Deutschland und spricht Deutsch',
      'Er kommt aus Deutschland und er spricht Deutsch'
    ]
  },
  {
    id: 'w11',
    cue: 'Wer / sein / das / ? / - / das / sein / Peter',
    correct: [
      'Wer ist das? - Das ist Peter',
      'Wer ist das? Das ist Peter',
      'Wer ist das Das ist Peter'
    ]
  },
  {
    id: 'w12',
    cue: 'Wie / sein / dein / Name / ? / - / mein / Name / sein / Laura',
    correct: [
      'Wie ist dein Name? - Mein Name ist Laura',
      'Wie ist dein Name? Mein Name ist Laura',
      'Wie heisst du? - Ich heisse Laura',
      'Wie heißt du? - Ich heiße Laura',
      'Wie heisst du? Ich heisse Laura',
      'Wie heißt du? Ich heiße Laura'
    ]
  },
  {
    id: 'w13',
    cue: 'wer / sein / das / ? / - / das / sein / Frau / Gross',
    correct: [
      'Wer ist das? - Das ist Frau Gross',
      'Wer ist das? Das ist Frau Gross',
      'Wer ist das? - Das ist Frau Groß',
      'Wer ist das? Das ist Frau Groß'
    ]
  },
  {
    id: 'w14',
    cue: 'Ich / kommen / aus / Vietnam / und / wohnen / in / Hanoi',
    correct: [
      'Ich komme aus Vietnam und wohne in Hanoi',
      'Ich komme aus Vietnam und ich wohne in Hanoi'
    ]
  },
  {
    id: 'w15',
    cue: 'Wie / gehen / es / dir / ? / - / danke / , / gut',
    correct: [
      'Wie geht es dir? - Danke, gut',
      'Wie geht es dir? Danke, gut'
    ]
  }
];

const W_FRAGEN_QUESTIONS = [
  { id: 'q1', question: '_____ heißen Sie? - Ich heiße Thomas.', correct: 'Wie' },
  { id: 'q2', question: '_____ wohnen Sie? - Ich wohne in Berlin.', correct: 'Wo' },
  { id: 'q3', question: '_____ kommen Sie? - Ich komme aus Vietnam.', correct: 'Woher' },
  { id: 'q4', question: '_____ sprechen Sie? - Ich spreche Deutsch und Englisch.', correct: 'Was' },
  { id: 'q5', question: '_____ Sprachen sprechen Sie? - Vietnamesisch und etwas Deutsch.', correct: 'Welche' },
  { id: 'q6', question: '_____ ist das? - Das ist Herr Land.', correct: 'Wer' },
  { id: 'q7', question: '_____ ist das? - Das ist ein Stift.', correct: 'Was' },
  { id: 'q8', question: '_____ geht es Ihnen? - Danke, rất tốt.', correct: 'Wie' },
  { id: 'q9', question: '_____ wohnst du? - In Hanoi.', correct: 'Wo' },
  { id: 'q10', question: '_____ kommt er? - Er kommt aus Deutschland.', correct: 'Woher' },
  { id: 'q11', question: '_____ bist du von Beruf? - Ich bin Lehrer.', correct: 'Was' },
  { id: 'q12', question: '_____ alt bist du? - Ich bin 18 Jahre alt.', correct: 'Wie' },
  { id: 'q13', question: '_____ ist deine Telefonnummer? - 0123456789.', correct: 'Wie' },
  { id: 'q14', question: '_____ bist du? - Ich bin Minh.', correct: 'Wer' },
  { id: 'q15', question: '_____ macht er? - Er kocht Suppe.', correct: 'Was' },
  { id: 'q16', question: '_____ arbeitet Frau Hien? - Sie arbeitet in Berlin.', correct: 'Wo' },
  { id: 'q17', question: '_____ heißt dein Vater? - Er heißt Peter.', correct: 'Wie' },
  { id: 'q18', question: '_____ Sprachen sprichst du? - Deutsch.', correct: 'Welche' },
  { id: 'q19', question: '_____ wohnt in München? - Peter wohnt dort.', correct: 'Wer' },
  { id: 'q20', question: '_____ kommen deine Eltern? - Sie kommen aus Vietnam.', correct: 'Woher' }
];

const NUMBERS_READING_QUESTIONS = [
  { id: 'nr1', word: 'null', correct: '0' },
  { id: 'nr2', word: 'drei', correct: '3' },
  { id: 'nr3', word: 'sieben', correct: '7' },
  { id: 'nr4', word: 'elf', correct: '11' },
  { id: 'nr5', word: 'zwölf', correct: '12' },
  { id: 'nr6', word: 'fünfzehn', correct: '15' },
  { id: 'nr7', word: 'zwanzig', correct: '20' },
  { id: 'nr8', word: 'fünfundzwanzig', correct: '25' },
  { id: 'nr9', word: 'dreißig', correct: '30' },
  { id: 'nr10', word: 'siebenunddreißig', correct: '37' },
  { id: 'nr11', word: 'vierzig', correct: '40' },
  { id: 'nr12', word: 'neunundvierzig', correct: '49' },
  { id: 'nr13', word: 'fünfzig', correct: '50' },
  { id: 'nr14', word: 'dreiundsechzig', correct: '63' },
  { id: 'nr15', word: 'hundert', correct: '100' }
];

const NUMBERS_LISTENING_QUESTIONS = [
  { id: 'nl1', word: 'eins', correct: '1' },
  { id: 'nl2', word: 'fünf', correct: '5' },
  { id: 'nl3', word: 'zehn', correct: '10' },
  { id: 'nl4', word: 'dreizehn', correct: '13' },
  { id: 'nl5', word: 'siebzehn', correct: '17' },
  { id: 'nl6', word: 'achtzehn', correct: '18' },
  { id: 'nl7', word: 'neunzehn', correct: '19' },
  { id: 'nl8', word: 'einundzwanzig', correct: '21' },
  { id: 'nl9', word: 'vierunddreißig', correct: '34' },
  { id: 'nl10', word: 'fünfundvierzig', correct: '45' },
  { id: 'nl11', word: 'achtundfünfzig', correct: '58' },
  { id: 'nl12', word: 'siebzig', correct: '70' },
  { id: 'nl13', word: 'dreiundachtzig', correct: '83' },
  { id: 'nl14', word: 'vierundneunzig', correct: '94' },
  { id: 'nl15', word: 'neunundneunzig', correct: '99' }
];

const VERB_QUESTIONS = [
  { id: 'v1', sentence: 'Ich _____ in Hanoi. (wohnen)', correct: 'wohne' },
  { id: 'v2', sentence: 'Du _____ aus Vietnam. (kommen)', correct: 'kommst' },
  { id: 'v3', sentence: 'Er _____ Student. (sein)', correct: 'ist' },
  { id: 'v4', sentence: 'Wir _____ ein Auto. (haben)', correct: 'haben' },
  { id: 'v5', sentence: 'Ihr _____ Suppe. (kochen)', correct: 'kocht' },
  { id: 'v6', sentence: 'Frau Hien _____ in Berlin. (arbeiten)', correct: 'arbeitet' },
  { id: 'v7', sentence: 'Peter und Laura _____ Deutsch. (sprechen)', correct: 'sprechen' },
  { id: 'v8', sentence: 'Er _____ ein Buch. (lesen)', correct: 'liest' },
  { id: 'v9', sentence: 'Du _____ Deutsch. (sprechen)', correct: 'sprichst' },
  { id: 'v10', sentence: 'Ich _____ Arzt. (sein)', correct: 'bin' },
  { id: 'v11', sentence: 'Wir _____ in München. (wohnen)', correct: 'wohnen' },
  { id: 'v12', sentence: 'Ihr _____ aus Deutschland. (kommen)', correct: 'kommt' },
  { id: 'v13', sentence: 'Du _____ ein Kind. (haben)', correct: 'hast' },
  { id: 'v14', sentence: 'Laura _____ heute Nudeln. (kochen)', correct: 'kocht' },
  { id: 'v15', sentence: 'Ich _____ bei Siemens. (arbeiten)', correct: 'arbeite' },
  { id: 'v16', sentence: 'Du _____ gern Romane. (lesen)', correct: 'liest' },
  { id: 'v17', sentence: 'Er _____ kein Geld. (haben)', correct: 'hat' },
  { id: 'v18', sentence: 'Wir _____ Lehrer. (sein)', correct: 'sind' },
  { id: 'v19', sentence: 'Frau Gross _____ Spanisch. (sprechen)', correct: 'spricht' },
  { id: 'v20', sentence: 'Ihr _____ in der Schule. (arbeiten)', correct: 'arbeitet' },
  { id: 'v21', sentence: 'Ich _____ Kartoffeln. (kochen)', correct: 'koche' },
  { id: 'v22', sentence: 'Du _____ in Berlin. (wohnen)', correct: 'wohnst' },
  { id: 'v23', sentence: 'Peter und Thomas _____ aus Berlin. (kommen)', correct: 'kommen' },
  { id: 'v24', sentence: 'Wir _____ ein Buch. (lesen)', correct: 'lesen' },
  { id: 'v25', sentence: 'Ihr _____ hungrig. (sein)', correct: 'seid' },
  { id: 'v26', sentence: 'Er _____ Pizza. (kochen)', correct: 'kocht' },
  { id: 'v27', sentence: 'Du _____ bei Bosch. (arbeiten)', correct: 'arbeitest' },
  { id: 'v28', sentence: 'Ich _____ zwei Hunde. (haben)', correct: 'habe' },
  { id: 'v29', sentence: 'Wir _____ Vietnamesisch. (sprechen)', correct: 'sprechen' },
  { id: 'v30', sentence: 'Ihr _____ viele Bücher. (lesen)', correct: 'lest' },
  { id: 'v31', sentence: 'Frau Müller _____ nett. (sein)', correct: 'ist' },
  { id: 'v32', sentence: 'Herr Land _____ in Frankfurt. (wohnen)', correct: 'wohnt' },
  { id: 'v33', sentence: 'Woher _____ du? (kommen)', correct: 'kommst' },
  { id: 'v34', sentence: 'Was _____ ihr heute? (kochen)', correct: 'kocht' },
  { id: 'v35', sentence: 'Welche Sprachen _____ er? (sprechen)', correct: 'spricht' }
];

// --- INIT SYSTEM ---

document.addEventListener('DOMContentLoaded', () => {
  setupTTS();
  renderAllQuestions();
  startTimer();
  setupFormProgressListeners();
  
  document.getElementById('submitTestBtn').addEventListener('click', submitTest);
  document.getElementById('restartTestBtn').addEventListener('click', restartTest);
});

// --- SHUFFLE UTILITY ---

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// --- NORMALIZATION UTILITY ---

function normalizeString(str) {
  if (!str) return '';
  return str
    .trim()
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "")
    .replace(/ß/g, "ss")
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/\s+/g, " ");
}

// --- TTS (TEXT TO SPEECH) SUPPORT ---

function setupTTS() {
  const synth = window.speechSynthesis;
  const updateVoices = () => {
    const voices = synth.getVoices();
    state.germanVoice = voices.find(voice => voice.lang.startsWith('de-')) || null;
    const statusIndicator = document.querySelector('.tts-indicator');
    const statusText = document.getElementById('ttsStatus');
    if (state.germanVoice && statusText) {
      if (statusIndicator) statusIndicator.classList.add('ready');
      statusText.innerHTML = '<span class="tts-indicator ready"></span> Giọng phát âm chuẩn sẵn sàng';
      statusText.title = `Giọng đọc mẫu: ${state.germanVoice.name} (${state.germanVoice.lang})`;
    }
  };
  
  updateVoices();
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = updateVoices;
  }
}

window.speak = function(text) {
  if (!text) return;
  if (!window.speechSynthesis) {
    alert('Trình duyệt của bạn không hỗ trợ phát âm.');
    return;
  }
  
  window.speechSynthesis.cancel();
  
  const cleanText = text
    .replace(/❓|➔|➔|➔|➔|➔|➔|➔/g, '')
    .replace(/\(.*?\)/g, '')
    .trim();
  
  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = 'de-DE';
  utterance.rate = 0.85;
  if (state.germanVoice) {
    utterance.voice = state.germanVoice;
  }
  window.speechSynthesis.speak(utterance);
};

// --- RENDER FUNCTIONS ---

function renderAllQuestions() {
  renderWritingQuestions();
  renderWFragenQuestions();
  renderNumbersReadingQuestions();
  renderNumbersListeningQuestions();
  renderVerbsQuestions();
}

function renderWritingQuestions() {
  const container = document.getElementById('writingQuestionsContainer');
  if (!container) return;
  container.innerHTML = '';

  const shuffled = shuffleArray(WRITING_QUESTIONS);

  shuffled.forEach((q, idx) => {
    const card = document.createElement('div');
    card.className = 'question-card';
    card.innerHTML = `
      <div class="question-number">Câu hỏi ${idx + 1} / 15</div>
      <div class="cue-box">${q.cue}</div>
      <div class="form-group">
        <input type="text" class="form-input writing-input" data-id="${q.id}" placeholder="Gõ câu trả lời tiếng Đức tại đây..." autocomplete="off">
      </div>
      <div class="correct-answer-display" id="correct-w-${q.id}">
        <strong>Đúng!</strong> Giọng đọc mẫu: 
        <button class="phrase-speak-btn" onclick="speak('${q.correct[0].replace(/'/g, "\\'")}')" style="display:inline-flex; vertical-align:middle; margin-left:5px;">🔊 Listen</button>
      </div>
      <div class="wrong-answer-display" id="wrong-w-${q.id}">
        <strong>Chưa chính xác!</strong> Đáp án đúng là: <span class="correct-text">${q.correct[0]}</span>
        <button class="phrase-speak-btn" onclick="speak('${q.correct[0].replace(/'/g, "\\'")}')" style="display:inline-flex; vertical-align:middle; margin-left:5px;">🔊 Listen</button>
      </div>
    `;
    container.appendChild(card);
  });
}

function renderWFragenQuestions() {
  const container = document.getElementById('wFragenQuestionsContainer');
  if (!container) return;
  container.innerHTML = '';

  const shuffled = shuffleArray(W_FRAGEN_QUESTIONS);

  shuffled.forEach((q, idx) => {
    const card = document.createElement('div');
    card.className = 'question-card';

    card.innerHTML = `
      <div class="question-number">Câu hỏi ${idx + 1} / 20</div>
      <div class="question-prompt" style="font-family: var(--font-serif); font-size: 1.15rem; font-style: italic;">
        ${q.question.replace('_____', '<span style="border-bottom: 2px solid #000; padding: 0 10px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>')}
      </div>
      <div class="form-group" style="margin-top: 0.75rem;">
        <input type="text" class="form-input wfragen-input" data-id="${q.id}" placeholder="Gõ từ để hỏi..." style="width: 200px;" autocomplete="off">
      </div>
      <div class="correct-answer-display" id="correct-q-${q.id}">
        <strong>Chính xác!</strong> Từ để hỏi là: <strong>${q.correct}</strong>
      </div>
      <div class="wrong-answer-display" id="wrong-q-${q.id}">
        <strong>Sai rồi!</strong> Đáp án đúng là: <strong>${q.correct}</strong>
      </div>
    `;
    container.appendChild(card);
  });
}

function renderNumbersReadingQuestions() {
  const container = document.getElementById('numbersReadingContainer');
  if (!container) return;
  container.innerHTML = '';

  const shuffled = shuffleArray(NUMBERS_READING_QUESTIONS);

  shuffled.forEach((q, idx) => {
    const card = document.createElement('div');
    card.className = 'question-card';
    card.style.marginBottom = '0';
    card.innerHTML = `
      <div class="question-number">Câu ${idx + 1} / 15</div>
      <div class="question-prompt" style="font-size: 1.2rem;">${q.word}</div>
      <div class="form-group">
        <input type="text" class="form-input num-read-input" data-id="${q.id}" placeholder="Nhập số (vd: 15)..." style="width: 100%; font-weight:700;" autocomplete="off">
      </div>
      <div class="correct-answer-display" id="correct-nr-${q.id}">✓ Đúng! (${q.correct})</div>
      <div class="wrong-answer-display" id="wrong-nr-${q.id}">✗ Sai! Đáp án: <strong>${q.correct}</strong></div>
    `;
    container.appendChild(card);
  });
}

function renderNumbersListeningQuestions() {
  const container = document.getElementById('numbersListeningContainer');
  if (!container) return;
  container.innerHTML = '';

  const shuffled = shuffleArray(NUMBERS_LISTENING_QUESTIONS);

  shuffled.forEach((q, idx) => {
    const card = document.createElement('div');
    card.className = 'question-card';
    card.style.marginBottom = '0';
    card.innerHTML = `
      <div class="question-number">Câu ${idx + 1} / 15</div>
      <div style="display:flex; align-items:center; gap: 1rem; margin-bottom: 0.75rem;">
        <button class="btn-primary" onclick="speak('${q.word}')" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;">
          🔊 Nghe số
        </button>
        <span style="font-size: 0.85rem; color: var(--text-muted);">Bấm để nghe</span>
      </div>
      <div class="form-group">
        <input type="text" class="form-input num-listen-input" data-id="${q.id}" placeholder="Nhập số bạn nghe..." style="width: 100%; font-weight:700;" autocomplete="off">
      </div>
      <div class="correct-answer-display" id="correct-nl-${q.id}">✓ Đúng! (Nghe: ${q.word} = ${q.correct})</div>
      <div class="wrong-answer-display" id="wrong-nl-${q.id}">✗ Sai! Đúng: <strong>${q.correct}</strong> (${q.word})</div>
    `;
    container.appendChild(card);
  });
}

function renderVerbsQuestions() {
  const container = document.getElementById('verbsQuestionsContainer');
  if (!container) return;
  container.innerHTML = '';

  const shuffled = shuffleArray(VERB_QUESTIONS);

  shuffled.forEach((q, idx) => {
    const card = document.createElement('div');
    card.className = 'question-card';
    card.innerHTML = `
      <div class="question-number">Câu hỏi ${idx + 1} / 35</div>
      <div class="question-prompt" style="font-family: monospace; font-size: 1.1rem;">
        ${q.sentence.replace('_____', `<input type="text" class="form-input verb-input" data-id="${q.id}" placeholder="chia..." style="width: 135px; display:inline-block; padding: 0.2rem 0.5rem; text-align:center; font-weight:700;" autocomplete="off">`)}
      </div>
      <div class="correct-answer-display" id="correct-v-${q.id}">
        ✓ Đúng! <strong>${q.correct}</strong>
      </div>
      <div class="wrong-answer-display" id="wrong-v-${q.id}">
        ✗ Sai! Đáp án đúng: <strong>${q.correct}</strong>
      </div>
    `;
    container.appendChild(card);
  });
}

// --- REAL-TIME PROGRESS TRACKING ---

function setupFormProgressListeners() {
  const inputs = document.querySelectorAll('.writing-input, .wfragen-input, .num-read-input, .num-listen-input, .verb-input');
  
  const updateProgress = () => {
    let filledCount = 0;
    inputs.forEach(el => {
      if (el.value.trim() !== '') {
        filledCount++;
      }
    });

    const percent = Math.round((filledCount / 100) * 100);
    const progressBar = document.getElementById('testProgressBar');
    const progressText = document.getElementById('testProgressText');

    if (progressBar) progressBar.style.width = `${percent}%`;
    if (progressText) progressText.textContent = `Đã làm: ${filledCount}/100 (${percent}%)`;
  };

  inputs.forEach(inp => {
    inp.addEventListener('input', updateProgress);
  });

  updateProgress(); // initial execution
}

// --- TIMER SYSTEM ---

function startTimer() {
  if (state.timerInterval) return;
  
  state.timeLeft = 3600;
  updateTimerUI();

  state.timerInterval = setInterval(() => {
    if (state.timeLeft <= 0) {
      clearInterval(state.timerInterval);
      state.timerInterval = null;
      alert('Hết giờ làm bài! Hệ thống sẽ tự động nộp bài kiểm tra.');
      submitTest();
    } else {
      state.timeLeft--;
      updateTimerUI();
    }
  }, 1000);
}

function updateTimerUI() {
  const timerEl = document.getElementById('countdownTimer');
  if (!timerEl) return;
  
  const minutes = Math.floor(state.timeLeft / 60);
  const seconds = state.timeLeft % 60;
  const pad = (num) => num.toString().padStart(2, '0');
  
  timerEl.textContent = `${pad(minutes)}:${pad(seconds)}`;

  if (state.timeLeft < 300) {
    timerEl.style.color = '#ef4444';
  } else {
    timerEl.style.color = '#ffffff';
  }
}

// --- TEST SUBMISSION ---

function submitTest() {
  if (state.isSubmitted) return;
  state.isSubmitted = true;

  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }

  let score1 = 0; // Writing
  let score2 = 0; // W-Fragen
  let score3 = 0; // Numbers
  let score4 = 0; // Verbs

  // Disable all inputs
  document.querySelectorAll('.writing-input, .wfragen-input, .num-read-input, .num-listen-input, .verb-input').forEach(el => {
    el.disabled = true;
  });

  // 1. Validate Writing Questions (15 pts)
  WRITING_QUESTIONS.forEach(q => {
    const inputEl = document.querySelector(`.writing-input[data-id="${q.id}"]`);
    const val = inputEl ? inputEl.value.trim() : '';
    const normVal = normalizeString(val);
    
    const isCorrect = q.correct.some(ans => normalizeString(ans) === normVal);
    
    if (isCorrect) {
      score1++;
      if (inputEl) inputEl.classList.add('correct');
      const corrEl = document.getElementById(`correct-w-${q.id}`);
      if (corrEl) corrEl.style.display = 'block';
    } else {
      if (inputEl) inputEl.classList.add('wrong');
      const wrongEl = document.getElementById(`wrong-w-${q.id}`);
      if (wrongEl) wrongEl.style.display = 'block';
    }
  });

  // 2. Validate W-Fragen Questions (20 pts)
  W_FRAGEN_QUESTIONS.forEach(q => {
    const inputEl = document.querySelector(`.wfragen-input[data-id="${q.id}"]`);
    const val = inputEl ? inputEl.value.trim() : '';
    const normVal = normalizeString(val);
    const normCorrect = normalizeString(q.correct);

    if (normVal === normCorrect) {
      score2++;
      if (inputEl) inputEl.classList.add('correct');
      const corrEl = document.getElementById(`correct-q-${q.id}`);
      if (corrEl) corrEl.style.display = 'block';
    } else {
      if (inputEl) inputEl.classList.add('wrong');
      const wrongEl = document.getElementById(`wrong-q-${q.id}`);
      if (wrongEl) wrongEl.style.display = 'block';
    }
  });

  // 3. Validate Numbers Reading (15 pts) and Listening (15 pts)
  NUMBERS_READING_QUESTIONS.forEach(q => {
    const inputEl = document.querySelector(`.num-read-input[data-id="${q.id}"]`);
    const val = inputEl ? inputEl.value.replace(/\s+/g, '') : '';
    
    if (val === q.correct) {
      score3++;
      if (inputEl) inputEl.classList.add('correct');
      const corrEl = document.getElementById(`correct-nr-${q.id}`);
      if (corrEl) corrEl.style.display = 'block';
    } else {
      if (inputEl) inputEl.classList.add('wrong');
      const wrongEl = document.getElementById(`wrong-nr-${q.id}`);
      if (wrongEl) wrongEl.style.display = 'block';
    }
  });

  NUMBERS_LISTENING_QUESTIONS.forEach(q => {
    const inputEl = document.querySelector(`.num-listen-input[data-id="${q.id}"]`);
    const val = inputEl ? inputEl.value.replace(/\s+/g, '') : '';
    
    if (val === q.correct) {
      score3++;
      if (inputEl) inputEl.classList.add('correct');
      const corrEl = document.getElementById(`correct-nl-${q.id}`);
      if (corrEl) corrEl.style.display = 'block';
    } else {
      if (inputEl) inputEl.classList.add('wrong');
      const wrongEl = document.getElementById(`wrong-nl-${q.id}`);
      if (wrongEl) wrongEl.style.display = 'block';
    }
  });

  // 4. Validate Verbs Questions (35 pts)
  VERB_QUESTIONS.forEach(q => {
    const inputEl = document.querySelector(`.verb-input[data-id="${q.id}"]`);
    const val = inputEl ? inputEl.value.trim() : '';
    const normVal = normalizeString(val);
    const normCorrect = normalizeString(q.correct);

    if (normVal === normCorrect) {
      score4++;
      if (inputEl) inputEl.classList.add('correct');
      const corrEl = document.getElementById(`correct-v-${q.id}`);
      if (corrEl) corrEl.style.display = 'block';
    } else {
      if (inputEl) inputEl.classList.add('wrong');
      const wrongEl = document.getElementById(`wrong-v-${q.id}`);
      if (wrongEl) wrongEl.style.display = 'block';
    }
  });

  // Display Total Score
  const totalScore = score1 + score2 + score3 + score4;
  
  const resultsCard = document.getElementById('resultsSummaryCard');
  if (resultsCard) resultsCard.style.display = 'block';
  
  document.getElementById('resultsTotalScore').textContent = `${totalScore} / 100`;
  document.getElementById('scoreWriting').textContent = `${score1} / 15`;
  document.getElementById('scoreQuestions').textContent = `${score2} / 20`;
  document.getElementById('scoreNumbers').textContent = `${score3} / 30`;
  document.getElementById('scoreVerbs').textContent = `${score4} / 35`;

  // Provide custom feedback message
  let feedback = '';
  if (totalScore >= 90) {
    feedback = '🎉 Tuyệt vời! Bạn có kiến thức cực kỳ vững chắc, sẵn sàng tiến bước sang các bài học nâng cao hơn.';
  } else if (totalScore >= 75) {
    feedback = '👍 Khá tốt! Bạn đã nắm vững các kiến thức cơ bản. Xem kỹ các câu sai để cải thiện thêm nhé.';
  } else if (totalScore >= 50) {
    feedback = '📖 Đạt yêu cầu! Bạn đã nắm được trên trung bình các chủ điểm, nhưng hãy ôn tập kỹ hơn các động từ và từ vựng số.';
  } else {
    feedback = '⚠️ Cần cải thiện nhiều! Bạn nên xem lại lý thuyết của Buổi 1, 2 và thực hiện luyện tập lại.';
  }
  document.getElementById('resultsFeedbackMsg').textContent = feedback;

  // Hide global timer and submit sections
  document.getElementById('globalTimerContainer').style.display = 'none';
  document.getElementById('submitSection').style.display = 'none';

  // Scroll to results summary card
  if (resultsCard) resultsCard.scrollIntoView({ behavior: 'smooth' });

  // Save progress locally
  const now = new Date();
  const dateStr = `${now.getDate().toString().padStart(2, '0')}/${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear()} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
  
  localStorage.setItem('deutsch_buoi4_score_100', totalScore);
  localStorage.setItem('deutsch_buoi4_score_100_date', dateStr);
}

// --- RESTART TEST SYSTEM ---

function restartTest() {
  if (!confirm('Bạn có chắc chắn muốn làm lại bài test từ đầu? Tất cả câu trả lời cũ sẽ bị xóa.')) return;

  state.isSubmitted = false;
  state.timeLeft = 3600;

  // Reset inputs and validation classes
  document.querySelectorAll('.writing-input, .wfragen-input, .num-read-input, .num-listen-input, .verb-input').forEach(el => {
    el.value = '';
    el.disabled = false;
    el.classList.remove('correct', 'wrong');
  });

  // Hide displays
  document.querySelectorAll('.correct-answer-display, .wrong-answer-display').forEach(el => {
    el.style.display = 'none';
  });

  // Re-render questions in a fresh shuffled order
  renderAllQuestions();

  // Show timer and submit sections
  document.getElementById('globalTimerContainer').style.display = 'flex';
  document.getElementById('submitSection').style.display = 'block';
  document.getElementById('resultsSummaryCard').style.display = 'none';

  // Recalculate progress stats
  setupFormProgressListeners();

  // Start a new timer
  startTimer();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
