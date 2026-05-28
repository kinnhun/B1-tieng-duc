// German A1 Lesson 1 Quiz Logic
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
    options: ['Wie geht’s?', 'Wie heißt du?', 'Ich heiße Laura.', 'Mein Name ist Laura.'],
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
    question: 'Động từ "haben" đi với ngôi "Du" chia như thế nào?',
    options: ['habe', 'hast', 'hat', 'haben'],
    correct: 1,
    hint: 'Du + hast.'
  },
  {
    question: 'Từ nào sau đây có nghĩa là "chị/em gái"?',
    options: ['Schule', 'Schwester', 'schnell', 'Straße'],
    correct: 1,
    hint: 'Schwester có nghĩa là chị/em gái.'
  },
  {
    question: 'Ký tự "ß" trong tiếng Đức đọc là gì?',
    options: ['Eszett (phát âm giống s kéo dài)', 'Umlaut', 'Beta', 'Âm câm'],
    correct: 0,
    hint: 'ß được gọi là Eszett.'
  },
  {
    question: 'Động từ "sein" đi với ngôi "Wir" chia như thế nào?',
    options: ['sind', 'seid', 'bin', 'ist'],
    correct: 0,
    hint: 'Wir + sind.'
  },
  {
    question: 'Cụm từ "Guten Morgen!" dùng để chào vào thời gian nào?',
    options: ['Chào buổi sáng', 'Chào buổi trưa', 'Chào buổi chiều', 'Chào buổi tối'],
    correct: 0,
    hint: 'Morgen là buổi sáng.'
  },
  {
    question: 'Từ "Bier" phát âm nguyên âm "ie" như thế nào?',
    options: ['Phát âm giống âm "ai"', 'Phát âm kéo dài giống âm "i"', 'Phát âm giống âm "oi"', 'Phát âm giống âm "uy"'],
    correct: 1,
    hint: 'ie phát âm thành /i:/ dài.'
  },
  {
    question: 'Khi giới thiệu nơi sinh sống hiện tại "Tôi sống ở Hà Nội", ta dùng động từ nào?',
    options: ['komme', 'wohne', 'gehe', 'heiße'],
    correct: 1,
    hint: 'wohnen in + địa điểm (sống ở đâu).'
  },
  {
    question: 'Ngôi lịch sự "Ngài / các Ngài" trong tiếng Đức là đại từ nào và viết như thế nào?',
    options: ['sie (viết thường)', 'ihr (viết thường)', 'Sie (luôn viết hoa chữ S)', 'Du'],
    correct: 2,
    hint: 'Sie lịch sự luôn viết hoa chữ S.'
  },
  {
    question: 'Động từ "haben" đi với ngôi "Ihr" chia như thế nào?',
    options: ['haben', 'habt', 'hast', 'hat'],
    correct: 1,
    hint: 'Ihr + habt.'
  },
  {
    question: '"Wie geht’s?" là câu hỏi dùng để làm gì?',
    options: ['Hỏi tên', 'Hỏi tuổi', 'Hỏi thăm sức khỏe', 'Hỏi quê quán'],
    correct: 2,
    hint: 'Wie geht\'s = Bạn thế nào / khỏe không?'
  },
  {
    question: 'Động từ "sein" đi với ngôi "ich" chia như thế nào?',
    options: ['bist', 'ist', 'sind', 'bin'],
    correct: 3,
    hint: 'Ich + bin.'
  },
  {
    question: '"Tschüss!" có nghĩa là gì trong tiếng Đức giao tiếp?',
    options: ['Xin chào!', 'Chúc ngủ ngon!', 'Hẹn gặp lại!', 'Tạm biệt! (thân mật)'],
    correct: 3,
    hint: 'Tschüss dùng để chào tạm biệt thân mật.'
  },
  {
    question: 'Chữ cái "W" trong bảng chữ cái tiếng Đức đọc là gì?',
    options: ['[ve:]', '[double-u]', '[u:]', '[fau]'],
    correct: 0,
    hint: 'W đọc là [ve:].'
  },
  {
    question: '"Tôi học tiếng Đức" được viết chính xác là:',
    options: ['Ich lerne Deutsch.', 'Ich komme Deutsch.', 'Ich wohne Deutsch.', 'Ich bin Deutsch.'],
    correct: 0,
    hint: 'lerne = học.'
  },
  {
    question: 'Chữ cái "Z" trong bảng chữ cái tiếng Đức phát âm là gì?',
    options: ['[zi:]', '[tset]', '[zed]', '[iks]'],
    correct: 1,
    hint: 'Z phát âm là [tset].'
  },
  {
    question: 'Chia động từ đúng: "Wir ______ một chiếc ô tô (haben)."',
    options: ['habe', 'hast', 'haben', 'habt'],
    correct: 2,
    hint: 'Wir + haben.'
  },
  {
    question: 'Chữ cái "V" trong từ "Vogel" (con chim) được phát âm giống chữ cái nào trong tiếng Việt?',
    options: ['Giống chữ "v"', 'Giống chữ "ph" (âm /f/)', 'Giống chữ "g"', 'Giống chữ "b"'],
    correct: 1,
    hint: 'V trong nhiều từ Đức gốc phát âm giống chữ /f/ (ph).'
  },
  {
    question: 'Động từ "sein" đi với ngôi "Er / sie / es" chia là gì?',
    options: ['bin', 'ist', 'bist', 'sind'],
    correct: 1,
    hint: 'Er/sie/es + ist.'
  }
];

let state = {
  quizActiveQuestion: 0,
  quizScore: 0,
  quizAnswers: [],
  quizCompleted: false,
  quizHighscore: 0
};

// Progress Storage Integration
function loadProgress() {
  const saved = localStorage.getItem('deutsch_a1_progress');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      state.quizHighscore = parsed.quizHighscore || 0;
    } catch (e) {
      console.error("Error loading progress", e);
    }
  }
}

function saveQuizHighscore(newScore) {
  const saved = localStorage.getItem('deutsch_a1_progress');
  let progressObj = {
    alphabetVisited: [],
    conjugationVisited: false,
    phrasesVisited: [],
    pronunciationVisited: [],
    quizHighscore: 0
  };

  if (saved) {
    try {
      progressObj = JSON.parse(saved);
    } catch (e) {
      console.error("Error parsing progress on save", e);
    }
  }

  progressObj.quizHighscore = Math.max(progressObj.quizHighscore || 0, newScore);
  localStorage.setItem('deutsch_a1_progress', JSON.stringify(progressObj));
}

// Speech Status (Visual only in Quiz Header)
function initTTSStatus() {
  const statusEl = document.getElementById('ttsStatus');
  if (!statusEl) return;

  if (!('speechSynthesis' in window)) {
    statusEl.innerHTML = '<span class="tts-indicator" style="background-color: #ef4444;"></span> Giọng đọc: Không hỗ trợ';
    return;
  }

  const loadVoices = () => {
    const voices = window.speechSynthesis.getVoices();
    const germanVoice = voices.find(voice => voice.lang.startsWith('de')) || null;
    if (germanVoice) {
      statusEl.innerHTML = `<span class="tts-indicator" style="background-color: #000000;"></span> Giọng Đức chuẩn`;
    } else {
      statusEl.innerHTML = '<span class="tts-indicator" style="background-color: #666666;"></span> Giọng Đức tự động';
    }
  };

  loadVoices();
  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }
}

// Quiz UI Control
function setupQuiz() {
  const restartBtn = document.getElementById('quizRestartBtn');
  const nextBtn = document.getElementById('quizNextBtn');

  if (restartBtn) restartBtn.addEventListener('click', restartQuiz);
  if (nextBtn) nextBtn.addEventListener('click', nextQuestion);

  startQuiz();
}

function startQuiz() {
  state.quizActiveQuestion = 0;
  state.quizScore = 0;
  state.quizAnswers = [];
  state.quizCompleted = false;

  loadProgress();

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

  if (state.quizScore > state.quizHighscore) {
    state.quizHighscore = state.quizScore;
    saveQuizHighscore(state.quizScore);
  }
}

function restartQuiz() {
  startQuiz();
}

window.addEventListener('DOMContentLoaded', () => {
  initTTSStatus();
  setupQuiz();
});
