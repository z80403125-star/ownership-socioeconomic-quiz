"use strict";

const questions = [
  {
    text: "Экономикалық мағынадағы меншікті қай анықтама дәл сипаттайды?",
    options: [
      "Тауарларды иемдену және оларды пайдалану шарттарына қатысты адамдар арасындағы қатынастар",
      "Қазіргі кезде затты жай ғана иелену",
      "Тек құжаттарда жазылған заттардың тізімі"
    ],
    correct: 0
  },
  {
    text: "Меншік құқығына дәстүрлі түрде қандай үш өкілеттік кіреді?",
    options: [
      "Өндіріс, бөлу және тұтыну",
      "Иелену, пайдалану және билік ету",
      "Сатып алу, айырбастау және мұрагерлік"
    ],
    correct: 1
  },
  {
    text: "Мүлікті сату немесе сыйға тарту сияқты оның заңды тағдырын анықтауға қай өкілеттік мүмкіндік береді?",
    options: ["Пайдалану", "Иелену", "Билік ету"],
    correct: 2
  },
  {
    text: "Жеке азаматқа немесе ұйымға тиесілі меншік нысаны қалай аталады?",
    options: ["Жеке", "Мемлекеттік", "Коммуналдық"],
    correct: 0
  },
  {
    text: "Қай мысал мемлекеттік меншікке қатысты?",
    options: [
      "Азаматтың жеке пәтері",
      "Қазақстан Республикасына тиесілі мүлік",
      "Жеке компания сатып алған жабдық"
    ],
    correct: 1
  },
  {
    text: "Коммуналдық меншік кімге тиесілі?",
    options: [
      "Тек республикалық мемлекеттік органдарға",
      "Тек коммерциялық ұйымдар үшін",
      "Муниципалитеттер"
    ],
    correct: 2
  },
  {
    text: "Өндіріс құралдарына не жатады?",
    options: [
      "Тауар жасау үшін қолданылатын еңбек құралдары мен заттары",
      "Дүкенде тек дайын өнімдер",
      "Ақша тек жеке сатып алуға арналған"
    ],
    correct: 0
  },
  {
    text: "Меншік қатынастары мен әлеуметтік-экономикалық жүйе қалай байланысты?",
    options: [
      "Меншік адамдардың күнделікті әдеттеріне ғана әсер етеді",
      "Ресурстарды иелену және бөлу нысандары көбінесе экономика мен қоғамның құрылымын анықтайды",
      "Олардың арасында айтарлықтай байланыс жоқ"
    ],
    correct: 1
  },
  {
    text: "Меншікті экономикалық тұрғыдан іске асыру нені білдіреді?",
    options: [
      "Меншік құқығын тек мемлекеттік реестрде тіркеу",
      "Мүлікті пайдаланудан түскен кірістің немесе басқа пайданың нақты түсуі",
      "Меншік иесінің мүлікті пайдалануына тыйым салу"
    ],
    correct: 1
  },
  {
    text: "Кооперативтік меншікке қандай белгі тән?",
    options: [
      "Мүлікті қатысушылар бірлескен қызмет үшін біріктіреді және кооперативке жатады",
      "Барлық мүлік, ерекшеліксіз, мемлекетке тиесілі",
      "Әрбір қатысушы тек басқа адамдардың жеке заттарына иелік етеді"
    ],
    correct: 0
  },
  {
    text: "Нарықтық экономикадағы жеке меншіктің рөлі қандай?",
    options: [
      "Ол өндірушілер арасындағы алмасуды толығымен жояды",
      "Ол кәсіпкерлікті, инвестицияны және ресурстарды тиімдірек пайдалануды ынталандыра алады",
      "Мемлекет экономикаға мүлде араласпайды"
    ],
    correct: 1
  },
  {
    text: "Жеке және ортақ меншік нысандарының негізгі айырмашылығы неде?",
    options: [
      "Жеке меншік бір азаматқа не ұйымға, ал ортақ меншік бірнеше тұлғаға тиесілі болады",
      "Жеке меншік тек мемлекетке, ал ортақ меншік тек жергілікті әкімдікке тиесілі",
      "Бұл ұғымдарды кез келген контексте қолдануда айырмашылықтар жоқ"
    ],
    correct: 0
  },
  {
    text: "Жекешелендіру дегеніміз не?",
    options: [
      "Жеке меншікті мемлекеттің тегін пайдалануға беруі",
      "Мемлекеттік немесе муниципалдық мүлікті белгіленген тәртіппен жеке меншікке беру",
      "Барлық жеке кәсіпорындарды бір мемлекеттік кәсіпорынға біріктіру"
    ],
    correct: 1
  },
  {
    text: "Ұлттандыру деген не?",
    options: [
      "Заң негізінде және белгіленген кепілдіктерді сақтай отырып, жеке меншікті мемлекет меншігіне беру",
      "Азаматтар арасында жеке пәтерлерді ерікті түрде айырбастау",
      "Азаматтың жеке компанияның акцияларын сатып алуы"
    ],
    correct: 0
  },
  {
    text: "Меншік нысандарының әртүрлілігі нені білдіреді?",
    options: [
      "Экономикада меншіктің бір ғана нысаны болуы мүмкін",
      "Сонымен қатар, меншіктің әртүрлі нысандары бар, мысалы, жеке, мемлекеттік және муниципалдық",
      "Кез келген мүлік барлық азаматтар арасында тең бөлінуі керек"
    ],
    correct: 1
  },
  {
    text: "Төмендегілердің қайсысы ортақ үлестік меншікке мысал болып табылады?",
    options: [
      "Жеке меншік ғимарат",
      "Үлестері белгіленген қатысушылардың ортақ мүлкі",
      "Ұйым тек уақытша жалға алатын жабдық"
    ],
    correct: 1
  },
  {
    text: "Шектеулі ресурстар мүліктік қатынастарға қалай әсер етеді?",
    options: [
      "Ережелер кімнің, қандай жағдайда ресурстарға қол жеткізе алатынын және оларды пайдалану туралы шешім қабылдайтынын анықтау үшін қажет.",
      "Әрбір ресурс автоматты түрде иесіз болады",
      "Тауарларды бөлу мәселесі өзектілігін жоғалтады"
    ],
    correct: 0
  },
  {
    text: "Меншік қоғамның әлеуметтік құрылымына қалай әсер ете алады?",
    options: [
      "Ешқандай жол жоқ: мүліктік жағдай адамдардың мүмкіндіктеріне байланысты емес",
      "Меншік пен табысты бөлу әлеуметтік топтардың экономикалық мүмкіндіктері мен жағдайына әсер етуі мүмкін",
      "Ол тек халықтың жасын анықтайды"
    ],
    correct: 1
  },
  {
    text: "Нарықтық экономикада меншік құқығын қорғау нені білдіреді?",
    options: [
      "Меншік иесі мүлікті кез келген жолмен, тіпті заңды бұза отырып пайдалануға құқылы",
      "Заң меншік иесінің құқықтарын таниды және қорғайды, сонымен бірге шектеулер мен жауапкершіліктерді белгілейді",
      "Мемлекет меншік иесіне кез келген мүліктен пайда табуға кепілдік береді"
    ],
    correct: 1
  },
  {
    text: "Меншік нысандары тұрғысынан аралас экономиканы қалай сипаттауға болады?",
    options: [
      "Онда жеке, мемлекеттік және басқа секторлар қатар өмір сүреді, ал мемлекет экономиканы реттейді",
      "Оған тек мемлекеттік меншікке рұқсат етіледі",
      "Оған айырбас, кәсіпкерлік және құқықтық нормалар жетіспейді"
    ],
    correct: 0
  }
];

const totalQuestions = questions.length;
const answerLetters = ["А", "Б", "В"];
let currentQuestion = 0;
let score = 0;
let answered = false;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const feedbackElement = document.getElementById("feedback");
const nextButton = document.getElementById("next-button");
const scoreElement = document.getElementById("score");
const progressLabel = document.getElementById("progress-label");
const progressPercent = document.getElementById("progress-percent");
const progressFill = document.getElementById("progress-fill");
const progressTrack = document.getElementById("progress-track");
const quizElement = document.getElementById("quiz");
const resultElement = document.getElementById("result");

function renderQuestion() {
  const question = questions[currentQuestion];
  const questionNumber = currentQuestion + 1;
  const percent = Math.round((questionNumber / totalQuestions) * 100);

  answered = false;
  progressLabel.innerHTML = `Сұрақ <strong>${questionNumber}</strong> / ${totalQuestions}`;
  progressPercent.textContent = `${percent}%`;
  progressFill.style.width = `${percent}%`;
  progressTrack.setAttribute("aria-valuenow", String(questionNumber));
  questionElement.textContent = question.text;
  feedbackElement.textContent = "";
  feedbackElement.className = "feedback";
  nextButton.hidden = true;
  answersElement.replaceChildren();

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer";
    button.setAttribute("aria-label", `${answerLetters[index]}. ${option}`);

    const letter = document.createElement("span");
    letter.className = "answer-letter";
    letter.setAttribute("aria-hidden", "true");
    letter.textContent = answerLetters[index];

    const text = document.createElement("span");
    text.textContent = option;
    button.append(letter, text);
    button.addEventListener("click", () => selectAnswer(index));
    answersElement.append(button);
  });
}

function selectAnswer(selectedIndex) {
  if (answered) return;
  answered = true;

  const question = questions[currentQuestion];
  const buttons = answersElement.querySelectorAll(".answer");
  buttons.forEach((button, index) => {
    button.disabled = true;
    if (index === question.correct) button.classList.add("correct");
  });

  if (selectedIndex === question.correct) {
    score += 1;
    scoreElement.textContent = String(score);
    feedbackElement.textContent = "Дұрыс! Тамаша жұмыс.";
    feedbackElement.classList.add("is-correct");
  } else {
    buttons[selectedIndex].classList.add("incorrect");
    feedbackElement.textContent = `Қате. Дұрыс жауап: ${question.options[question.correct]}`;
    feedbackElement.classList.add("is-incorrect");
  }

  nextButton.innerHTML = currentQuestion === totalQuestions - 1
    ? "Нәтижені көру <span aria-hidden=\"true\">→</span>"
    : "Келесі сұрақ <span aria-hidden=\"true\">→</span>";
  nextButton.hidden = false;
  nextButton.focus();
}

function getAssessment(finalScore) {
  if (finalScore >= 18) {
    return {
      title: "Тамаша!",
      note: "Сіз меншік және экономикалық құрылым тақырыбын сенімді түрде түсінесіз."
    };
  }
  if (finalScore >= 15) {
    return {
      title: "Жақсы!",
      note: "Сізде мықты білім бар. Белгілі бір тұжырымдамаларды қайталаңыз - бұл одан да жақсы болады."
    };
  }
  if (finalScore >= 10) {
    return {
      title: "Қанағаттанарлық.",
      note: "Негіздері таныс. Материалды қарап шығыңыз және тестті қайталап көріңіз."
    };
  }
  return {
    title: "Материалды қайталау керек.",
    note: "Көңіліңізді түсірмеңіз: қайталау тақырыпты түсінуге және нәтижелерді жақсартуға көмектеседі."
  };
}

function showResult() {
  const assessment = getAssessment(score);
  quizElement.hidden = true;
  resultElement.hidden = false;
  resultElement.replaceChildren();

  const icon = document.createElement("div");
  icon.className = "result-icon";
  icon.setAttribute("aria-hidden", "true");
  icon.textContent = score >= 15 ? "🏆" : "📘";

  const title = document.createElement("h2");
  title.textContent = assessment.title;

  const resultScore = document.createElement("p");
  resultScore.className = "result-score";
  resultScore.append(document.createTextNode(String(score)));
  const total = document.createElement("span");
  total.textContent = ` / ${totalQuestions} ұпай`;
  resultScore.append(total);

  const note = document.createElement("p");
  note.className = "result-note";
  note.textContent = assessment.note;

  const restartButton = document.createElement("button");
  restartButton.className = "primary-button";
  restartButton.type = "button";
  restartButton.innerHTML = "Қайтадан өтіңіз <span aria-hidden=\"true\">↻</span>";
  restartButton.addEventListener("click", restartQuiz);

  resultElement.append(icon, title, resultScore, note, restartButton);
  restartButton.focus();
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  scoreElement.textContent = "0";
  resultElement.hidden = true;
  quizElement.hidden = false;
  renderQuestion();
  document.getElementById("page-title").focus();
}

nextButton.addEventListener("click", () => {
  if (!answered) return;
  if (currentQuestion === totalQuestions - 1) {
    showResult();
    return;
  }
  currentQuestion += 1;
  renderQuestion();
  questionElement.focus();
});

renderQuestion();
