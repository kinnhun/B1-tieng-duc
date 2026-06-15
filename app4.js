// German A1 Lesson 4 (Review & Learning) - logic and data
// This file handles only the dashboard progress display and the new theory lessons.

const state = {
  currentTab: 'dashboard',
  voicesLoaded: false,
  germanVoice: null
};

// --- INIT SYSTEM ---
document.addEventListener('DOMContentLoaded', () => {
  setupTTS();
  setupTabNavigation();
  loadLatestScore();
});

// --- LOAD LATEST SCORE ---
function loadLatestScore() {
  const latestScore = localStorage.getItem('deutsch_buoi4_score_100');
  const latestDate = localStorage.getItem('deutsch_buoi4_score_100_date');
  
  const scoreContainer = document.getElementById('latestScoreContainer');
  const noScoreContainer = document.getElementById('noScoreContainer');
  const scoreVal = document.getElementById('latestScoreVal');
  const scoreDate = document.getElementById('latestScoreDate');
  
  if (latestScore !== null && scoreContainer && noScoreContainer) {
    scoreContainer.style.display = 'block';
    noScoreContainer.style.display = 'none';
    scoreVal.textContent = `${latestScore}/100`;
    
    if (latestDate) {
      scoreDate.textContent = `Vào lúc: ${latestDate}`;
    } else {
      scoreDate.textContent = '';
    }
  }
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

function speak(text) {
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
}

// --- TAB SYSTEM ---
function setupTabNavigation() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const tabId = btn.getAttribute('data-tab');
      if (tabId) {
        e.preventDefault();
        switchTab(tabId);
      }
    });
  });
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

function normalizeString(str) {
  if (!str) return '';
  return str
    .trim()
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "")
    .replace(/\s+/g, " ");
}

// --- THEORY PRACTICE SYSTEM ---
window.checkTheorySection = function(selectClass, inputClass, feedbackId) {
  let correctCount = 0;
  let totalCount = 0;
  
  const selects = document.querySelectorAll('.' + selectClass);
  selects.forEach(sel => {
    totalCount++;
    const userVal = sel.value;
    const correctVal = sel.getAttribute('data-correct');
    if (userVal === correctVal) {
      correctCount++;
      sel.style.border = '2px solid #10b981';
      sel.style.backgroundColor = '#ecfdf5';
    } else {
      sel.style.border = '2px solid #ef4444';
      sel.style.backgroundColor = '#fef2f2';
    }
  });

  const inputs = document.querySelectorAll('.' + inputClass);
  inputs.forEach(inp => {
    totalCount++;
    const userVal = inp.value.trim().toLowerCase();
    const correctVal = inp.getAttribute('data-correct').trim().toLowerCase();
    if (userVal === correctVal) {
      correctCount++;
      inp.style.border = '2px solid #10b981';
      inp.style.backgroundColor = '#ecfdf5';
    } else {
      inp.style.border = '2px solid #ef4444';
      inp.style.backgroundColor = '#fef2f2';
    }
  });

  const feedbackEl = document.getElementById(feedbackId);
  if (feedbackEl) {
    feedbackEl.style.display = 'block';
    if (correctCount === totalCount) {
      feedbackEl.style.backgroundColor = '#ecfdf5';
      feedbackEl.style.color = '#065f46';
      feedbackEl.style.border = '1px solid #10b981';
      feedbackEl.textContent = `🎉 Tuyệt vời! Bạn đã trả lời đúng tất cả (${correctCount}/${totalCount})`;
    } else {
      feedbackEl.style.backgroundColor = '#fef2f2';
      feedbackEl.style.color = '#991b1b';
      feedbackEl.style.border = '1px solid #ef4444';
      feedbackEl.textContent = `✗ Bạn đã làm đúng ${correctCount}/${totalCount} câu. Hãy kiểm tra các ô màu đỏ nhé!`;
    }
  }
};

window.checkTheorySectionText = function(inputClass, feedbackId) {
  let correctCount = 0;
  let totalCount = 0;
  
  const inputs = document.querySelectorAll('.' + inputClass);
  inputs.forEach(inp => {
    totalCount++;
    const userVal = normalizeString(inp.value);
    const correctVal = normalizeString(inp.getAttribute('data-correct'));
    if (userVal === correctVal) {
      correctCount++;
      inp.style.border = '2px solid #10b981';
      inp.style.backgroundColor = '#ecfdf5';
    } else {
      inp.style.border = '2px solid #ef4444';
      inp.style.backgroundColor = '#fef2f2';
    }
  });

  const feedbackEl = document.getElementById(feedbackId);
  if (feedbackEl) {
    feedbackEl.style.display = 'block';
    if (correctCount === totalCount) {
      feedbackEl.style.backgroundColor = '#ecfdf5';
      feedbackEl.style.color = '#065f46';
      feedbackEl.style.border = '1px solid #10b981';
      feedbackEl.textContent = `🎉 Tuyệt vời! Bạn đã trả lời đúng tất cả (${correctCount}/${totalCount})`;
    } else {
      feedbackEl.style.backgroundColor = '#fef2f2';
      feedbackEl.style.color = '#991b1b';
      feedbackEl.style.border = '1px solid #ef4444';
      feedbackEl.textContent = `✗ Bạn đã làm đúng ${correctCount}/${totalCount} câu. Hãy kiểm tra các ô màu đỏ nhé!`;
    }
  }
};

window.speakSelfIntro = function() {
  const text = document.getElementById('selfIntroTextarea').value.trim();
  if (!text) {
    alert('Vui lòng nhập đoạn văn giới thiệu bằng tiếng Đức trước!');
    return;
  }
  speak(text);
};
