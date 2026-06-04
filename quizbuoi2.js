// Quiz and Dictation JavaScript for Buổi 2
const ZAHLEN_DIKTAT_QUESTIONS = [
  {
    id: 'z1',
    title: 'Số điện thoại di động (Handynummer)',
    audioText: 'Meine Handynummer ist: null, eins, sieben, zwei, acht, drei, neun, zwei, vier, null, fünf, sechs.',
    correctAnswer: '0172 8392 4056',
    cleanAnswer: '017283924056',
    placeholder: 'Nhập dãy số viết được...',
    note: 'Đáp án: 0172 8392 4056'
  },
  {
    id: 'z2',
    title: 'Số điện thoại bàn (Telefonnummer)',
    audioText: 'Meine Telefonnummer ist: null, acht, neun, fünf, vier, sechs, zwei, sieben, eins, null, neun.',
    correctAnswer: '089 5462 7109',
    cleanAnswer: '08954627109',
    placeholder: 'Nhập dãy số viết được...',
    note: 'Đáp án: 089 5462 7109'
  },
  {
    id: 'z3',
    title: 'Mã bưu điện (Postleitzahl - PLZ) của München',
    audioText: 'Die Postleitzahl ist: acht, null, drei, drei, eins.',
    correctAnswer: '80331',
    cleanAnswer: '80331',
    placeholder: 'Nhập mã bưu điện...',
    note: 'PLZ München: 80331'
  },
  {
    id: 'z4',
    title: 'Mã bưu điện (Postleitzahl - PLZ) của Berlin',
    audioText: 'Die Postleitzahl ist: eins, null, eins, eins, fünf.',
    correctAnswer: '10115',
    cleanAnswer: '10115',
    placeholder: 'Nhập mã bưu điện...',
    note: 'PLZ Berlin: 10115'
  },
  {
    id: 'z5',
    title: 'Chuỗi số đếm ngẫu nhiên',
    audioText: 'Schreiben Sie die Zahlen: zwölf, siebzehn, drei, zwanzig, acht, elf, null, fünfzehn.',
    correctAnswer: '12, 17, 3, 20, 8, 11, 0, 15',
    cleanAnswer: '12,17,3,20,8,11,0,15',
    placeholder: 'Ví dụ: 12, 17, 3...',
    note: 'Đáp án: 12, 17, 3, 20, 8, 11, 0, 15'
  }
];

const SATZ_DIKTAT_QUESTIONS = [
  {
    id: 's1',
    title: 'Câu hỏi nguồn gốc (trang trọng)',
    audioText: 'Woher kommen Sie?',
    correctAnswer: 'Woher kommen Sie?',
    cleanAnswer: 'woher kommen sie?',
    placeholder: 'Nhập câu nghe được...',
    note: 'Dịch nghĩa: Bạn đến từ đâu? (Lịch sự)'
  },
  {
    id: 's2',
    title: 'Câu trả lời nguồn gốc',
    audioText: 'Ich komme aus Vietnam.',
    correctAnswer: 'Ich komme aus Vietnam.',
    cleanAnswer: 'ich komme aus vietnam.',
    placeholder: 'Nhập câu nghe được...',
    note: 'Dịch nghĩa: Tôi đến từ Việt Nam.'
  },
  {
    id: 's3',
    title: 'Câu hỏi nơi sống (thân mật)',
    audioText: 'Wo wohnst du?',
    correctAnswer: 'Wo wohnst du?',
    cleanAnswer: 'wo wohnst du?',
    placeholder: 'Nhập câu nghe được...',
    note: 'Dịch nghĩa: Bạn sống ở đâu?'
  },
  {
    id: 's4',
    title: 'Câu trả lời nơi sống',
    audioText: 'Ich wohne in Hanoi.',
    correctAnswer: 'Ich wohne in Hanoi.',
    cleanAnswer: 'ich wohne in hanoi.',
    placeholder: 'Nhập câu nghe được...',
    note: 'Dịch nghĩa: Tôi sống ở Hà Nội.'
  },
  {
    id: 's5',
    title: 'Câu hỏi ngôn ngữ (thân mật)',
    audioText: 'Welche Sprachen sprichst du?',
    correctAnswer: 'Welche Sprachen sprichst du?',
    cleanAnswer: 'welche sprachen sprichst du?',
    placeholder: 'Nhập câu nghe được...',
    note: 'Dịch nghĩa: Bạn nói tiếng gì?'
  },
  {
    id: 's6',
    title: 'Câu trả lời ngôn ngữ',
    audioText: 'Ich spreche Vietnamesisch und ein bisschen Deutsch.',
    correctAnswer: 'Ich spreche Vietnamesisch und ein bisschen Deutsch.',
    cleanAnswer: 'ich spreche vietnamesisch und ein bisschen deutsch.',
    placeholder: 'Nhập câu nghe được...',
    note: 'Dịch nghĩa: Tôi nói tiếng Việt và một chút tiếng Đức.'
  },
  {
    id: 's7',
    title: 'Câu hỏi số điện thoại (thân mật)',
    audioText: 'Wie ist deine Handynummer?',
    correctAnswer: 'Wie ist deine Handynummer?',
    cleanAnswer: 'wie ist deine handynummer?',
    placeholder: 'Nhập câu nghe được...',
    note: 'Dịch nghĩa: Số điện thoại di động của bạn là gì?'
  }
];

const THEORY_QUESTIONS = [
  {
    question: 'Từ để hỏi nào dùng để hỏi về nguồn gốc (đất nước, quê quán)?',
    options: ['Wie', 'Wo', 'Woher', 'Wer'],
    correctIndex: 2,
    explanation: 'Woher có nghĩa là "từ đâu" (dùng hỏi nguồn gốc, ví dụ: Woher kommst du?).'
  },
  {
    question: 'Từ để hỏi nào dùng để hỏi địa điểm sinh sống hoặc vị trí hiện tại?',
    options: ['Woher', 'Wie', 'Wo', 'Was'],
    correctIndex: 2,
    explanation: 'Wo nghĩa là "ở đâu", thường đi kèm giới từ "in" trong câu trả lời (ví dụ: Wo wohnst du?).'
  },
  {
    question: 'Từ để hỏi nào dùng để hỏi về tên, số điện thoại hoặc trạng thái sức khỏe?',
    options: ['Woher', 'Wie', 'Wo', 'Wer'],
    correctIndex: 1,
    explanation: 'Wie nghĩa là "như thế nào/cái gì", dùng hỏi tên (Wie heißt du?), sức khỏe (Wie geht es dir?) hay số điện thoại.'
  },
  {
    question: 'Giới từ nào đi kèm khi trả lời câu hỏi "Wo wohnst du?" (Bạn sống ở đâu)?',
    options: ['aus', 'in', 'bei', 'nach'],
    correctIndex: 1,
    explanation: 'Giới từ "in" dùng để chỉ vị trí ở trong một thành phố, quốc gia (ví dụ: in Hanoi, in Deutschland).'
  },
  {
    question: 'Giới từ nào đi kèm khi trả lời câu hỏi "Woher kommst du?" (Bạn đến từ đâu) đối với hầu hết các nước?',
    options: ['in', 'nach', 'aus', 'von'],
    correctIndex: 2,
    explanation: 'Giới từ "aus" chỉ xuất xứ, nguồn gốc từ một quốc gia hoặc thành phố (ví dụ: aus Vietnam).'
  },
  {
    question: 'Với quốc gia "Schweiz" (Nước Thụy Sĩ), khi nói "Tôi đến từ Thụy Sĩ", ta phải dùng cụm từ nào?',
    options: ['aus Schweiz', 'in Schweiz', 'aus der Schweiz', 'aus dem Schweiz'],
    correctIndex: 2,
    explanation: '"Schweiz" là danh từ giống cái (die Schweiz), khi đi với giới từ "aus" (đòi hỏi Dativ) sẽ đổi thành "aus der Schweiz".'
  },
  {
    question: 'Chia động từ "wohnen" (sống) với ngôi "du"?',
    options: ['wohne', 'wohnst', 'wohnt', 'wohnen'],
    correctIndex: 1,
    explanation: 'Ngôi "du" thêm đuôi "-st" vào thân động từ: wohn + st = wohnst.'
  },
  {
    question: 'Chia động từ "kommen" (đến) với ngôi trang trọng "Sie" (Ngài / Quý vị)?',
    options: ['komme', 'kommst', 'kommen', 'kommt'],
    correctIndex: 2,
    explanation: 'Ngôi trang trọng "Sie" chia giống như dạng nguyên mẫu của động từ (đuôi -en): kommen.'
  },
  {
    question: 'Động từ bất quy tắc "sprechen" (nói) chia ở ngôi "du" là gì?',
    options: ['sprechst', 'sprichst', 'sprecht', 'sprechen'],
    correctIndex: 1,
    explanation: 'Động từ "sprechen" đổi nguyên âm ở ngôi "du" và "er/sie/es" (e -> i): du sprichst.'
  },
  {
    question: 'Chia động từ "sprechen" ở ngôi "er/sie/es" (anh ấy / cô ấy / nó)?',
    options: ['sprecht', 'spricht', 'sprecht', 'sprechst'],
    correctIndex: 1,
    explanation: 'Động từ "sprechen" đổi nguyên âm ở ngôi "er/sie/es" (e -> i) và thêm đuôi "-t": er/sie/es spricht.'
  },
  {
    question: 'Quốc gia "Österreich" (Nước Áo) sử dụng ngôn ngữ chính thức nào?',
    options: ['Österreichisch', 'Deutsch', 'Englisch', 'Französisch'],
    correctIndex: 1,
    explanation: 'Nước Áo sử dụng tiếng Đức (Deutsch) làm ngôn ngữ chính thức.'
  },
  {
    question: 'Khi giới thiệu "Tôi nói tiếng Việt và một chút tiếng Đức", ta dịch như thế nào?',
    options: [
      'Ich spreche Vietnamesisch und ein bisschen Deutsch.',
      'Ich sprechen Vietnamesisch und ein bisschen Deutsch.',
      'Ich spreche Vietnam und Deutsch.',
      'Ich wohnst in Vietnam und spricht Deutsch.'
    ],
    correctIndex: 0,
    explanation: 'Chia động từ "ich spreche" đi với ngôn ngữ "Vietnamesisch" và "ein bisschen Deutsch" (một chút tiếng Đức).'
  },
  {
    question: 'Quốc gia "Frankreich" (Nước Pháp) tương ứng với ngôn ngữ nói nào dưới đây?',
    options: ['Französisch', 'Spanisch', 'Englisch', 'Deutsch'],
    correctIndex: 0,
    explanation: 'Nước Pháp (Frankreich) nói tiếng Pháp (Französisch).'
  },
  {
    question: 'Chọn câu đúng ngữ pháp khi nói về nguồn gốc của một người đến từ Thổ Nhĩ Kỳ (Türkei):',
    options: [
      'Er kommt aus Türkei.',
      'Er kommt aus der Türkei.',
      'Er kommt in der Türkei.',
      'Er wohnt aus der Türkei.'
    ],
    correctIndex: 1,
    explanation: '"Türkei" là giống cái (die Türkei), khi đi với "aus" chỉ nguồn gốc sẽ chuyển thành "aus der Türkei".'
  },
  {
    question: 'Khi hỏi số điện thoại di động của bạn bè một cách thân mật, ta dùng câu nào?',
    options: ['Wo wohnst du?', 'Wie ist deine Handynummer?', 'Wie ist Ihre Handynummer?', 'Woher kommst du?'],
    correctIndex: 1,
    explanation: 'Dùng tính từ sở hữu "deine" khi hỏi thân mật (du) và danh từ "Handynummer" cho số điện thoại di động.'
  }
];

const state = {
  germanVoice: null,
  scores: {
    zahlen: {},
    saetze: {},
    theory: null
  },
  currentTheoryIndex: 0,
  theoryCorrectCount: 0
};

// Speech synthesis setup
function initTTS() {
  const statusEl = document.getElementById('ttsStatus');
  
  const loadVoice = () => {
    if (!('speechSynthesis' in window)) {
      if (statusEl) {
        statusEl.className = 'tts-status wrong';
        statusEl.innerHTML = '<span class="tts-indicator" style="background-color: #c5221f;"></span> Không hỗ trợ TTS';
      }
      return;
    }
    const voices = window.speechSynthesis.getVoices();
    const deVoice = voices.find(v => v.lang.startsWith('de'));
    if (deVoice) {
      state.germanVoice = deVoice;
      if (statusEl) {
        statusEl.className = 'tts-status correct';
        statusEl.innerHTML = '<span class="tts-indicator" style="background-color: #137333;"></span> Giọng đọc chuẩn Đức đã sẵn sàng';
      }
    } else {
      if (statusEl) {
        statusEl.className = 'tts-status';
        statusEl.innerHTML = '<span class="tts-indicator"></span> Dùng giọng đọc mặc định';
      }
    }
  };

  loadVoice();
  if ('speechSynthesis' in window && window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = loadVoice;
  }
}

function speakText(text) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'de-DE';
  utterance.rate = 0.65; // Slow rate for dictation
  if (state.germanVoice) {
    utterance.voice = state.germanVoice;
  }
  window.speechSynthesis.speak(utterance);
}

// Render dynamic dictation containers
function renderDictation() {
  const zahlenContainer = document.getElementById('zahlenQuestionsContainer');
  const saetzeContainer = document.getElementById('saetzeQuestionsContainer');

  // Render Zahlen-Diktat
  zahlenContainer.innerHTML = ZAHLEN_DIKTAT_QUESTIONS.map((q, idx) => `
    <div class="diktat-card" id="card-${q.id}">
      <div class="diktat-header">
        <span class="diktat-number">Câu hỏi ${idx + 1}</span>
        <span class="badge-listening">Số & điện thoại</span>
      </div>
      <div class="diktat-body">
        <strong style="font-size: 1.1rem;">${q.title}</strong>
        <button class="btn-primary diktat-audio-btn" data-audio="${q.audioText}">
          🔊 Nghe số
        </button>
        <input type="text" id="input-${q.id}" class="form-input" placeholder="${q.placeholder}" style="width: 100%; text-align: center; font-family: monospace; font-size: 1.1rem; letter-spacing: 1px;">
        <div id="feedback-${q.id}" class="quiz-feedback" style="display: none; text-align: left;"></div>
        
        <div class="check-btn-container">
          <button class="btn-primary check-diktat-btn" data-type="zahlen" data-id="${q.id}">Kiểm tra</button>
          <button class="btn-secondary show-diktat-btn" data-type="zahlen" data-id="${q.id}">Xem đáp án</button>
        </div>
      </div>
    </div>
  `).join('');

  // Render Satz-Diktat
  saetzeContainer.innerHTML = SATZ_DIKTAT_QUESTIONS.map((q, idx) => `
    <div class="diktat-card" id="card-${q.id}">
      <div class="diktat-header">
        <span class="diktat-number">Câu hỏi ${idx + 1}</span>
        <span class="badge-listening">Câu giao tiếp</span>
      </div>
      <div class="diktat-body">
        <strong style="font-size: 1.1rem;">${q.title}</strong>
        <button class="btn-primary diktat-audio-btn" data-audio="${q.audioText}">
          🔊 Nghe phát âm
        </button>
        <input type="text" id="input-${q.id}" class="form-input" placeholder="${q.placeholder}" style="width: 100%; font-size: 1.05rem;">
        <div id="feedback-${q.id}" class="quiz-feedback" style="display: none; text-align: left;"></div>
        
        <div class="check-btn-container">
          <button class="btn-primary check-diktat-btn" data-type="saetze" data-id="${q.id}">Kiểm tra</button>
          <button class="btn-secondary show-diktat-btn" data-type="saetze" data-id="${q.id}">Xem đáp án</button>
        </div>
      </div>
    </div>
  `).join('');

  // Add audio events
  document.querySelectorAll('.diktat-audio-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      speakText(btn.getAttribute('data-audio'));
    });
  });

  // Add action events
  document.querySelectorAll('.check-diktat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const type = btn.getAttribute('data-type');
      checkDictationAnswer(type, id);
    });
  });

  document.querySelectorAll('.show-diktat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const type = btn.getAttribute('data-type');
      showDictationAnswer(type, id);
    });
  });
}

// Check answering logic
function checkDictationAnswer(type, id) {
  const qList = type === 'zahlen' ? ZAHLEN_DIKTAT_QUESTIONS : SATZ_DIKTAT_QUESTIONS;
  const q = qList.find(item => item.id === id);
  const inputEl = document.getElementById(`input-${id}`);
  const feedbackEl = document.getElementById(`feedback-${id}`);
  const userVal = inputEl.value.trim();

  feedbackEl.style.display = 'block';

  if (type === 'zahlen') {
    // Clean all spaces, commas, punctuation
    const cleanUser = userVal.replace(/[\s,\-_]+/g, '');
    const isCorrect = cleanUser === q.cleanAnswer;
    
    if (isCorrect) {
      feedbackEl.className = 'quiz-feedback correct';
      feedbackEl.innerHTML = `Chính xác! Đáp án đúng: <strong>${q.correctAnswer}</strong> (${q.note})`;
      state.scores.zahlen[id] = true;
    } else {
      feedbackEl.className = 'quiz-feedback wrong';
      feedbackEl.innerHTML = `Chưa đúng! Đáp án đúng: <strong>${q.correctAnswer}</strong> (${q.note})`;
      state.scores.zahlen[id] = false;
    }
  } else {
    // Satz-Diktat (German sentences require strict checks but we show soft spelling alerts)
    if (!userVal) {
      feedbackEl.className = 'quiz-feedback wrong';
      feedbackEl.innerHTML = 'Vui lòng nhập câu bạn nghe được!';
      return;
    }

    const cleanUser = userVal.toLowerCase().replace(/[.,?!]/g, '').replace(/\s+/g, ' ').trim();
    const cleanCorrect = q.correctAnswer.toLowerCase().replace(/[.,?!]/g, '').replace(/\s+/g, ' ').trim();

    if (cleanUser === cleanCorrect) {
      state.scores.saetze[id] = true;
      // Check if capitalization matches exactly
      if (userVal.replace(/[.,?!]/g, '').trim() === q.correctAnswer.replace(/[.,?!]/g, '').trim()) {
        feedbackEl.className = 'quiz-feedback correct';
        feedbackEl.innerHTML = `Tuyệt vời! Bạn viết đúng chính xác cả từ ngữ và chữ viết hoa: <strong>${q.correctAnswer}</strong><br><small style="color:#666;">${q.note}</small>`;
      } else {
        feedbackEl.className = 'quiz-feedback correct';
        feedbackEl.style.borderColor = '#f2994a';
        feedbackEl.style.color = '#e28743';
        feedbackEl.innerHTML = `Đúng về từ ngữ, nhưng chú ý viết hoa danh từ và chữ đầu câu: <strong>${q.correctAnswer}</strong><br><small style="color:#666;">${q.note}</small>`;
      }
    } else {
      state.scores.saetze[id] = false;
      feedbackEl.className = 'quiz-feedback wrong';
      feedbackEl.innerHTML = `Chưa chính xác! Đáp án đúng:<br><strong>${q.correctAnswer}</strong><br><small style="color:#666;">${q.note}</small>`;
    }
  }

  updateOverallSummary();
}

function showDictationAnswer(type, id) {
  const qList = type === 'zahlen' ? ZAHLEN_DIKTAT_QUESTIONS : SATZ_DIKTAT_QUESTIONS;
  const q = qList.find(item => item.id === id);
  const feedbackEl = document.getElementById(`feedback-${id}`);
  const inputEl = document.getElementById(`input-${id}`);

  inputEl.value = q.correctAnswer;
  feedbackEl.style.display = 'block';
  feedbackEl.className = 'quiz-feedback correct';
  feedbackEl.style.borderColor = '#aaa';
  feedbackEl.style.color = '#333';
  feedbackEl.style.backgroundColor = '#fafafa';
  feedbackEl.innerHTML = `Đáp án đúng: <strong>${q.correctAnswer}</strong><br><small>${q.note}</small>`;
}

// Tab Switching Logic
function setupTabs() {
  const tZahlen = document.getElementById('tabDiktatZahlenBtn');
  const tSaetze = document.getElementById('tabDiktatSaetzeBtn');
  const tTheory = document.getElementById('tabQuizTheoryBtn');

  const sZahlen = document.getElementById('sectionDiktatZahlen');
  const sSaetze = document.getElementById('sectionDiktatSaetze');
  const sTheory = document.getElementById('sectionQuizTheory');

  const tabs = [tZahlen, tSaetze, tTheory];
  const sections = [sZahlen, sSaetze, sTheory];

  function switchTab(activeTab, activeSec) {
    tabs.forEach(t => {
      t.classList.remove('active');
      t.style.fontWeight = '500';
      t.style.color = 'var(--text-light)';
    });
    sections.forEach(s => s.style.display = 'none');

    activeTab.classList.add('active');
    activeTab.style.fontWeight = '700';
    activeTab.style.color = 'var(--text-main)';
    activeSec.style.display = 'block';
  }

  tZahlen.addEventListener('click', () => switchTab(tZahlen, sZahlen));
  tSaetze.addEventListener('click', () => switchTab(tSaetze, sSaetze));
  tTheory.addEventListener('click', () => {
    switchTab(tTheory, sTheory);
    loadTheoryQuestion();
  });
}

// Theory Quiz Logic
function loadTheoryQuestion() {
  if (state.currentTheoryIndex >= THEORY_QUESTIONS.length) {
    showTheoryResults();
    return;
  }

  const q = THEORY_QUESTIONS[state.currentTheoryIndex];
  document.getElementById('theoryProgress').textContent = `Câu ${state.currentTheoryIndex + 1} / ${THEORY_QUESTIONS.length}`;
  document.getElementById('theoryQuestionText').textContent = q.question;
  
  const optionsEl = document.getElementById('theoryOptions');
  optionsEl.innerHTML = q.options.map((opt, idx) => `
    <button class="quiz-option" data-idx="${idx}">${opt}</button>
  `).join('');

  const feedbackEl = document.getElementById('theoryFeedback');
  feedbackEl.style.display = 'none';
  document.getElementById('theoryNextBtn').style.display = 'none';

  document.querySelectorAll('.quiz-option').forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedIdx = parseInt(btn.getAttribute('data-idx'));
      checkTheoryAnswer(selectedIdx);
    });
  });
}

function checkTheoryAnswer(selectedIdx) {
  const q = THEORY_QUESTIONS[state.currentTheoryIndex];
  const options = document.querySelectorAll('.quiz-option');
  
  // Disable all options
  options.forEach(btn => btn.disabled = true);

  const feedbackEl = document.getElementById('theoryFeedback');
  feedbackEl.style.display = 'block';

  if (selectedIdx === q.correctIndex) {
    options[selectedIdx].classList.add('correct');
    feedbackEl.className = 'quiz-feedback correct';
    feedbackEl.innerHTML = `Chính xác! ${q.explanation}`;
    state.theoryCorrectCount++;
  } else {
    options[selectedIdx].classList.add('wrong');
    options[q.correctIndex].classList.add('correct');
    feedbackEl.className = 'quiz-feedback wrong';
    feedbackEl.innerHTML = `Chưa đúng! ${q.explanation}`;
  }

  document.getElementById('theoryNextBtn').style.display = 'inline-block';
}

function showTheoryResults() {
  document.getElementById('theoryQuizCard').style.display = 'none';
  document.getElementById('theoryResultCard').style.display = 'block';
  document.getElementById('theoryScore').textContent = `${state.theoryCorrectCount}/${THEORY_QUESTIONS.length}`;
  
  let msg = '';
  if (state.theoryCorrectCount === THEORY_QUESTIONS.length) {
    msg = 'Tuyệt vời! Bạn đã trả lời đúng toàn bộ câu hỏi lý thuyết.';
  } else if (state.theoryCorrectCount >= Math.round(THEORY_QUESTIONS.length * 0.6)) {
    msg = 'Rất tốt! Bạn nhớ bài lý thuyết rất tốt.';
  } else {
    msg = 'Bạn nên mở lại tab quốc gia & từ để hỏi ở Buổi 2 để ôn kỹ hơn nhé.';
  }
  document.getElementById('theoryResultFeedback').textContent = msg;
  state.scores.theory = state.theoryCorrectCount;

  updateOverallSummary();
}

function restartTheoryQuiz() {
  state.currentTheoryIndex = 0;
  state.theoryCorrectCount = 0;
  document.getElementById('theoryQuizCard').style.display = 'block';
  document.getElementById('theoryResultCard').style.display = 'none';
  loadTheoryQuestion();
}

// Overall Summary Panel
function updateOverallSummary() {
  const zahlenChecked = Object.keys(state.scores.zahlen).length;
  const saetzeChecked = Object.keys(state.scores.saetze).length;

  const showSummary = zahlenChecked === ZAHLEN_DIKTAT_QUESTIONS.length &&
                       saetzeChecked === SATZ_DIKTAT_QUESTIONS.length &&
                       state.scores.theory !== null;

  if (showSummary) {
    const summaryCard = document.getElementById('overallSummaryCard');
    summaryCard.style.display = 'block';

    const zCorrect = Object.values(state.scores.zahlen).filter(v => v).length;
    const sCorrect = Object.values(state.scores.saetze).filter(v => v).length;

    document.getElementById('summaryZahlenPct').textContent = `${Math.round((zCorrect / ZAHLEN_DIKTAT_QUESTIONS.length) * 100)}%`;
    document.getElementById('summarySaetzePct').textContent = `${Math.round((sCorrect / SATZ_DIKTAT_QUESTIONS.length) * 100)}%`;
    document.getElementById('summaryTheoryScore').textContent = `${state.theoryCorrectCount}/${THEORY_QUESTIONS.length}`;

    summaryCard.scrollIntoView({ behavior: 'smooth' });
  }
}

// Initializations
window.addEventListener('DOMContentLoaded', () => {
  initTTS();
  renderDictation();
  setupTabs();

  // Next buttons
  document.getElementById('theoryNextBtn').addEventListener('click', () => {
    state.currentTheoryIndex++;
    loadTheoryQuestion();
  });

  document.getElementById('btnRestartTheory').addEventListener('click', restartTheoryQuiz);
  
  document.getElementById('btnGoToDashboard').addEventListener('click', () => {
    window.location.href = 'buoi2.html';
  });
});
