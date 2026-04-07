const INDEPENDENT_VOWELS = {
  short: ["अ", "इ", "उ", "ऋ", "ऌ"],
  long: ["आ", "ई", "ऊ", "ए", "ऐ", "ओ", "औ"]
};

const MATRAS = {
  short: ["ि", "ु", "ृ"],
  long: ["ा", "ी", "ू", "े", "ै", "ो", "ौ"]
};

const HALANT = "्";
const ANUSVARA = "ं";
const VISARGA = "ः";
const DANDA_MARKS = /[।॥\n]+/;

const CONSONANTS = new Set([
  "क", "ख", "ग", "घ", "ङ", "च", "छ", "ज", "झ", "ञ",
  "ट", "ठ", "ड", "ढ", "ण", "त", "थ", "द", "ध", "न",
  "प", "फ", "ब", "भ", "म", "य", "र", "ल", "व",
  "श", "ष", "स", "ह"
]);

const translations = {
  en: {
    heroTitle: "Pingala Prism: where Sanskrit chandas becomes digital logic.",
    heroText: "Explore how Pingala transformed poetic rhythm into a system of pattern, combination, and binary-style thought. This yatra connects shloka, gaṇa, Meru Prastara, and modern computing in one immersive interface.",
    exploreBtn: "Explore Vidya Tabs",
    analyzeBtn: "Open Shloka Analyzer",
    metricEra: "Approximate era of Pingala",
    metricSymbols: "Laghu and Guru symbols",
    metricGana: "Core 3-syllable structures",
    insightTitle: "Modern technology has roots in ancient wisdom.",
    insightText: "Pingala used two-symbol pattern logic in Sanskrit prosody long before electronic computers. What looks like poetry also holds the spark of computation.",
    overview1Title: "A poet-scientist of pattern and rhythm",
    overview1Text: "Pingala, linked with the Chanda Shastra, studied how syllables create structured rhythm. His work turned kavya patterns into a logical system.",
    overview2Title: "How do we list every Laghu-Guru possibility?",
    overview2Text: "Sanskrit meter depends on ordered syllables. Pingala offered ways to generate, organize, and count these combinations with elegant clarity.",
    overview3Title: "A bridge from kavya to computation",
    overview3Text: "The same logic supports gaṇas, Meru Prastara, binary comparison, and the timeless connection between ancient insight and modern systems.",
    tabsHeading: "Deep-dive features, tools, and visual learning",
    binaryTitle: "Convert Pingala patterns into binary",
    binaryText: "Laghu maps to 0 and Guru maps to 1. Enter L/G, Sanskrit symbols, or raw binary to see how ancient chandas speaks the language of computation.",
    numberTitle: "Convert words or numbers into binary and Pingala form",
    numberText: "Enter any decimal number or a short word to view its binary form and its Pingala-style Laghu-Guru expression.",
    timelineTitle: "Why this matters today",
    timelineText: "Pingala's two-state logic, combinatorics, and ordered arrangement echo ideas now seen in data encoding, algorithmic thinking, and computer science.",
    analyzerTitle: "Analyze full Sanskrit shlokas, not just single words",
    analyzerText: "Paste a shloka, half-verse, or a single word. The tool will break it into lines or padas, then classify syllables as Laghu or Guru using chandas rules.",
    meruTitle: "Meru Prastara and combinational brilliance",
    meruText: "Pingala's method also points toward combination counting. For n syllables, the total possible patterns equal 2ⁿ. Meru Prastara anticipates triangular arrangement ideas later compared to Pascal's Triangle."
  },
  hi: {
    heroTitle: "पिंगल प्रिज्म: जहाँ संस्कृत छन्द digital logic में बदलता है।",
    heroText: "देखिए कैसे पिंगल ने काव्य-लय को pattern, combination और binary-जैसी सोच में बदला। यह यात्रा श्लोक, गण, मेरु प्रस्तार और modern computing को एक साथ जोड़ती है।",
    exploreBtn: "विद्या Tabs देखें",
    analyzeBtn: "श्लोक Analyzer खोलें",
    metricEra: "पिंगल का अनुमानित काल",
    metricSymbols: "लघु और गुरु संकेत",
    metricGana: "मुख्य 3-अक्षरी संरचनाएँ",
    insightTitle: "आधुनिक technology की जड़ें प्राचीन wisdom में हैं।",
    insightText: "पिंगल ने संस्कृत छन्द में two-symbol logic का उपयोग electronic computers से बहुत पहले किया। जो कविता दिखती है, उसमें computation की चमक भी छिपी है।",
    overview1Title: "लय और pattern के कवि-विज्ञानी",
    overview1Text: "पिंगल, जो छन्दशास्त्र से जुड़े हैं, उन्होंने देखा कि syllables कैसे सुसंगठित rhythm बनाते हैं। उनका कार्य काव्य को logical system में बदल देता है।",
    overview2Title: "हर लघु-गुरु संभावना को कैसे सूचीबद्ध करें?",
    overview2Text: "संस्कृत छन्द ordered syllables पर आधारित है। पिंगल ने इन combinations को generate, arrange और count करने की सुंदर विधि दी।",
    overview3Title: "काव्य से computation तक का सेतु",
    overview3Text: "यही logic गण, मेरु प्रस्तार, binary comparison और प्राचीन ज्ञान से आधुनिक systems तक का संबंध बनाता है।",
    tabsHeading: "गहन अध्ययन के features, tools और visuals",
    binaryTitle: "पिंगल patterns को binary में बदलें",
    binaryText: "लघु = 0 और गुरु = 1. L/G, संस्कृत संकेत या raw binary डालकर देखें कि ancient chandas computation की भाषा कैसे बोलता है।",
    numberTitle: "संख्या को binary और पिंगल रूप में बदलें",
    numberText: "कोई भी दशमलव संख्या डालिए और उसका modern binary रूप तथा Pingala-style लघु-गुरु रूप देखिए। इससे arithmetic और chandas का संबंध स्पष्ट होता है।",
    timelineTitle: "आज यह क्यों महत्वपूर्ण है",
    timelineText: "पिंगल की two-state logic, combinatorics और ordered arrangement आज data encoding, algorithmic thinking और computer science में गूंजती है।",
    analyzerTitle: "केवल शब्द नहीं, पूरे संस्कृत श्लोक का विश्लेषण",
    analyzerText: "श्लोक, अर्धश्लोक या एक शब्द पेस्ट करें। यह tool उसे lines या पादों में तोड़कर chandas rules के अनुसार लघु-गुरु विश्लेषण करेगा।",
    meruTitle: "मेरु प्रस्तार और संयोजन की प्रतिभा",
    meruText: "पिंगल की विधि combination counting की ओर भी संकेत करती है। n syllables के लिए कुल patterns 2ⁿ होते हैं। मेरु प्रस्तार बाद में Pascal's Triangle से तुलना किए जाने वाले triangular arrangement की पूर्वछाया है।"
  }
};

document.addEventListener("DOMContentLoaded", () => {
  initTabs();
  initPatternConverter();
  initNumberConverter();
  initAnalyzer();
  initCombinationGenerator();
  initThemeToggle();
  initLanguageToggle();
  generateCombinations();
});

function initTabs() {
  const buttons = document.querySelectorAll(".tab-button");
  const panels = document.querySelectorAll(".tab-panel");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.tabTarget;
      buttons.forEach((item) => {
        item.classList.remove("active");
        item.setAttribute("aria-selected", "false");
      });
      panels.forEach((panel) => panel.classList.remove("active"));
      button.classList.add("active");
      button.setAttribute("aria-selected", "true");
      document.getElementById(target)?.classList.add("active");
    });
  });
}

function initThemeToggle() {
  const toggle = document.getElementById("themeToggle");
  const saved = localStorage.getItem("pingala-theme");
  if (saved === "dark") {
    document.body.classList.add("dark-mode");
  }
  updateThemeIcon();
  toggle?.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("pingala-theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
    updateThemeIcon();
  });
}

function updateThemeIcon() {
  const toggle = document.getElementById("themeToggle");
  if (toggle) {
    toggle.textContent = document.body.classList.contains("dark-mode") ? "☀" : "◐";
  }
}

function initLanguageToggle() {
  const toggle = document.getElementById("langToggle");
  const saved = localStorage.getItem("pingala-lang") || "en";
  applyLanguage(saved);
  toggle?.addEventListener("click", () => {
    const next = document.documentElement.lang === "hi" ? "en" : "hi";
    applyLanguage(next);
  });
}

function applyLanguage(lang) {
  const dict = translations[lang] || translations.en;
  document.documentElement.lang = lang;
  localStorage.setItem("pingala-lang", lang);

  Object.entries(dict).forEach(([key, value]) => {
    document.querySelectorAll(`[data-i18n="${key}"]`).forEach((node) => {
      node.textContent = value;
    });
  });

  const toggle = document.getElementById("langToggle");
  if (toggle) {
    toggle.textContent = lang === "hi" ? "EN" : "अ";
  }
}

function initPatternConverter() {
  const input = document.getElementById("patternInput");
  const button = document.getElementById("convertPatternButton");
  const reverseInput = document.getElementById("binaryInput");
  const reverseButton = document.getElementById("reverseConvertButton");
  const laghuButton = document.getElementById("insertLaghuButton");
  const guruButton = document.getElementById("insertGuruButton");

  button?.addEventListener("click", convertPattern);
  reverseButton?.addEventListener("click", reverseConvertPattern);
  laghuButton?.addEventListener("click", () => appendPatternSymbol("।"));
  guruButton?.addEventListener("click", () => appendPatternSymbol("ऽ"));

  input?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      convertPattern();
    }
  });

  reverseInput?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      reverseConvertPattern();
    }
  });

  document.querySelectorAll("[data-pattern-example]").forEach((node) => {
    node.addEventListener("click", () => {
      input.value = decodeHtml(node.dataset.patternExample || "");
      convertPattern();
    });
  });

  document.querySelectorAll("[data-binary-example]").forEach((node) => {
    node.addEventListener("click", () => {
      reverseInput.value = decodeHtml(node.dataset.binaryExample || "");
      reverseConvertPattern();
    });
  });
}

function convertPattern() {
  const input = document.getElementById("patternInput");
  const binaryNode = document.getElementById("patternBinary");
  const meaningNode = document.getElementById("patternMeaning");
  const raw = (input?.value || "").trim();

  if (!raw) {
    binaryNode.textContent = "-";
    meaningNode.textContent = "Enter a pattern";
    return;
  }

  const normalized = normalizePattern(raw);

  if (!normalized) {
    binaryNode.textContent = "Invalid";
    meaningNode.textContent = "Use L/G, ।/ऽ, or 0/1 only.";
    return;
  }

  binaryNode.textContent = normalized;
  meaningNode.textContent = binaryToLG(normalized);
}

function appendPatternSymbol(symbol) {
  const input = document.getElementById("patternInput");
  input.value = `${input.value}${symbol}`;
  input.focus();
  convertPattern();
}

function reverseConvertPattern() {
  const input = document.getElementById("binaryInput");
  const patternNode = document.getElementById("reversePattern");
  const symbolsNode = document.getElementById("reverseSymbols");
  const raw = (input?.value || "").trim().replace(/\s+/g, "");

  if (!raw) {
    patternNode.textContent = "-";
    symbolsNode.textContent = "-";
    return;
  }

  if (!/^[01]+$/.test(raw)) {
    patternNode.textContent = "Invalid";
    symbolsNode.textContent = "Use 0 and 1 only.";
    return;
  }

  patternNode.textContent = binaryToLG(raw);
  symbolsNode.textContent = binaryToSymbols(raw);
}

function initNumberConverter() {
  const input = document.getElementById("numberInput");
  const button = document.getElementById("convertNumberButton");

  button?.addEventListener("click", convertNumber);
  input?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      convertNumber();
    }
  });

  document.querySelectorAll("[data-number-example]").forEach((node) => {
    node.addEventListener("click", () => {
      input.value = node.dataset.numberExample || "";
      convertNumber();
    });
  });
}

function convertNumber() {
  const input = document.getElementById("numberInput");
  const binaryNode = document.getElementById("numberBinary");
  const lgNode = document.getElementById("numberLaghuGuru");
  const symbolsNode = document.getElementById("numberSymbols");
  const bitLengthNode = document.getElementById("numberBitLength");
  const messageNode = document.getElementById("numberMessage");
  const breakdownNode = document.getElementById("numberBreakdown");
  const raw = (input?.value || "").trim();

  if (!raw) {
    resetNumberResults("Type a number or short word to begin.");
    return;
  }

  if (/^\d+$/.test(raw)) {
    const value = Number(raw);
    const binary = value.toString(2);

    binaryNode.textContent = binary;
    lgNode.textContent = binaryToLG(binary);
    symbolsNode.textContent = binaryToSymbols(binary);
    bitLengthNode.textContent = `${binary.length} bits`;
    messageNode.textContent = `${value} in decimal becomes ${binary} in binary and ${binaryToLG(binary)} in Pingala pattern.`;
    breakdownNode.innerHTML = "";
    breakdownNode.classList.add("hidden");
    return;
  }

  const binaryGroups = textToBinaryGroups(raw);
  if (!binaryGroups.length) {
    resetNumberResults("Please enter a valid number or word.");
    return;
  }

  const totalBits = binaryGroups.map((entry) => entry.binary.replace(/\s+/g, "")).join("").length;
  const totalBytes = binaryGroups.reduce((sum, entry) => sum + entry.byteCount, 0);

  binaryNode.textContent = `${binaryGroups.length} chars / ${totalBytes} bytes`;
  lgNode.textContent = "See breakdown below";
  symbolsNode.textContent = "नीचे देखें";
  bitLengthNode.textContent = `${totalBits} bits`;
  messageNode.textContent = `"${raw}" was converted using UTF-8 bytes. Detailed binary, L/G, and Pingala mapping is shown below.`;
  breakdownNode.innerHTML = binaryGroups.map((entry) => `
    <article class="number-breakdown-card">
      <span class="number-breakdown-label">${escapeHtml(entry.label)}</span>
      <strong>${entry.binary}</strong>
      <span>${binaryToLG(entry.binary)}</span>
      <span class="devanagari">${binaryToSymbols(entry.binary)}</span>
    </article>
  `).join("");
  breakdownNode.classList.remove("hidden");
}

function resetNumberResults(message) {
  document.getElementById("numberBinary").textContent = "-";
  document.getElementById("numberLaghuGuru").textContent = "-";
  document.getElementById("numberSymbols").textContent = "-";
  document.getElementById("numberBitLength").textContent = "-";
  document.getElementById("numberMessage").textContent = message;
  document.getElementById("numberBreakdown").innerHTML = "";
  document.getElementById("numberBreakdown").classList.add("hidden");
}

function textToBinaryGroups(text) {
  if (!text) {
    return [];
  }

  const encoder = new TextEncoder();
  return Array.from(text).map((char) => {
    const bytes = Array.from(encoder.encode(char));
    return {
      label: char === " " ? "space" : char,
      byteCount: bytes.length,
      binary: bytes.map((value) => value.toString(2).padStart(8, "0")).join(" ")
    };
  });
}

function initAnalyzer() {
  const input = document.getElementById("sanskritInput");
  const button = document.getElementById("analyzeButton");

  button?.addEventListener("click", analyzeText);
  input?.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
      analyzeText();
    }
  });

  document.querySelectorAll("[data-sanskrit-example]").forEach((node) => {
    node.addEventListener("click", () => {
      input.value = decodeHtml(node.dataset.sanskritExample || "");
      analyzeText();
    });
  });
}

async function transliterateToHindi(text) {
  try {
    const url = `https://inputtools.google.com/request?text=${encodeURIComponent(text)}&itc=hi-t-i0-und&num=1&cp=0&cs=1&ie=utf-8&oe=utf-8&app=demopage`;
    const response = await fetch(url);
    const data = await response.json();
    if (data[0] === 'SUCCESS' && data[1] && data[1][0] && data[1][0][1]) {
      return data[1][0][1][0];
    }
  } catch (error) {
    console.error("Transliteration failed:", error);
  }
  return text;
}

async function analyzeText() {
  const inputNode = document.getElementById("sanskritInput");
  const messageNode = document.getElementById("analyzerMessage");
  const outputNode = document.getElementById("analysisOutput");
  let input = (inputNode?.value || "").trim();

  if (!input) {
    messageNode.textContent = "Please enter Sanskrit text or a full shloka in Devanagari.";
    outputNode.classList.add("hidden");
    return;
  }

  if (/[a-zA-Z]/.test(input)) {
    messageNode.textContent = "Translating English to Devanagari...";
    const parts = input.split(/([|॥।\n\s]+)/);
    const wordsToTranslate = [];
    parts.forEach(part => {
      if (/[a-zA-Z]/.test(part)) {
        wordsToTranslate.push(part);
      }
    });

    const transliteratedWordsMap = {};
    for (let i = 0; i < wordsToTranslate.length; i += 10) {
      const chunk = wordsToTranslate.slice(i, i + 10).join(" ");
      const translatedChunk = await transliterateToHindi(chunk);
      const translatedWords = translatedChunk.split(" ");
      for (let j = 0; j < wordsToTranslate.slice(i, i + 10).length; j++) {
        transliteratedWordsMap[wordsToTranslate[i + j]] = translatedWords[j] || wordsToTranslate[i + j];
      }
    }

    input = parts.map(part => {
      if (/[a-zA-Z]/.test(part)) {
        return transliteratedWordsMap[part];
      }
      return part;
    }).join("");

    inputNode.value = input;
  }

  if (!/[\u0900-\u097F]/.test(input)) {
    messageNode.textContent = "Please use Devanagari script for the analyzer.";
    outputNode.classList.add("hidden");
    return;
  }

  const padas = input
    .split(DANDA_MARKS)
    .map((part) => part.trim())
    .filter(Boolean);

  if (!padas.length) {
    messageNode.textContent = "No valid Sanskrit content was detected.";
    outputNode.classList.add("hidden");
    return;
  }

  const padaAnalyses = padas.map((pada, index) => {
    const syllables = extractSyllables(pada);
    const classifications = syllables.map((syllable) => ({
      syllable,
      ...classifySyllable(syllable)
    }));
    const wordAnalyses = extractWords(pada).map((word) => {
      const wordSyllables = extractSyllables(word);
      const wordClassifications = wordSyllables.map((syllable) => ({
        syllable,
        ...classifySyllable(syllable)
      }));

      return {
        word,
        classifications: wordClassifications,
        pattern: wordClassifications.map((item) => item.symbol).join(" "),
        binary: wordClassifications.map((item) => item.binary).join("")
      };
    }).filter((entry) => entry.classifications.length);

    return {
      index: index + 1,
      text: pada,
      wordAnalyses,
      classifications,
      pattern: classifications.map((item) => item.symbol).join(" "),
      binary: classifications.map((item) => item.binary).join("")
    };
  }).filter((entry) => entry.classifications.length);

  if (!padaAnalyses.length) {
    messageNode.textContent = "The analyzer could not extract syllables from this input.";
    outputNode.classList.add("hidden");
    return;
  }

  const allClassifications = padaAnalyses.flatMap((entry) => entry.classifications);
  document.getElementById("laghuGuruPattern").textContent = allClassifications.map((item) => item.symbol).join(" ");
  document.getElementById("binaryPattern").textContent = allClassifications.map((item) => item.binary).join(" ");
  renderPadaBreakdown(padaAnalyses);
  renderWordAnalysis(padaAnalyses);

  messageNode.textContent = `Analyzed ${padaAnalyses.length} pada${padaAnalyses.length > 1 ? "s" : ""} and ${allClassifications.length} syllables.`;
  outputNode.classList.remove("hidden");
}

function extractWords(text) {
  return text
    .replace(/[।॥]/g, " ")
    .split(/\s+/)
    .map((word) => word.trim())
    .filter(Boolean);
}

function extractSyllables(text) {
  const cleanText = text.replace(/[^\u0900-\u097F\s]/g, " ");
  const syllables = [];
  let i = 0;

  while (i < cleanText.length) {
    let syllable = "";

    if (/\s/.test(cleanText[i])) {
      i += 1;
      continue;
    }

    while (i < cleanText.length && CONSONANTS.has(cleanText[i])) {
      syllable += cleanText[i];
      i += 1;

      if (i < cleanText.length && cleanText[i] === HALANT && i + 1 < cleanText.length && CONSONANTS.has(cleanText[i + 1])) {
        syllable += cleanText[i];
        i += 1;
      } else {
        break;
      }
    }

    if (
      i < cleanText.length &&
      (
        MATRAS.short.includes(cleanText[i]) ||
        MATRAS.long.includes(cleanText[i]) ||
        INDEPENDENT_VOWELS.short.includes(cleanText[i]) ||
        INDEPENDENT_VOWELS.long.includes(cleanText[i])
      )
    ) {
      syllable += cleanText[i];
      i += 1;
    }

    while (i < cleanText.length && CONSONANTS.has(cleanText[i]) && i + 1 < cleanText.length && cleanText[i + 1] === HALANT) {
      syllable += cleanText[i];
      i += 1;
      syllable += cleanText[i];
      i += 1;

      if (i < cleanText.length && CONSONANTS.has(cleanText[i]) && i + 1 < cleanText.length && cleanText[i + 1] === HALANT) {
        break;
      }
    }

    if (i < cleanText.length && (cleanText[i] === ANUSVARA || cleanText[i] === VISARGA)) {
      syllable += cleanText[i];
      i += 1;
    }

    if (!syllable) {
      syllable = cleanText[i];
      i += 1;
    }

    syllables.push(syllable);
  }

  return syllables.filter((item) => /[\u0900-\u097F]/.test(item));
}

function classifySyllable(syllable) {
  let vowelType = "";
  let vowelChar = "";
  let vowelIndex = -1;

  for (let i = 0; i < syllable.length; i += 1) {
    const char = syllable[i];
    if (INDEPENDENT_VOWELS.short.includes(char) || MATRAS.short.includes(char)) {
      vowelType = "short";
      vowelChar = char;
      vowelIndex = i;
      break;
    }
    if (INDEPENDENT_VOWELS.long.includes(char) || MATRAS.long.includes(char)) {
      vowelType = "long";
      vowelChar = char;
      vowelIndex = i;
      break;
    }
  }

  if (!vowelChar) {
    vowelType = "short";
    vowelChar = "अ";
  }

  if (syllable.endsWith(ANUSVARA)) {
    return { type: "Guru", binary: "1", symbol: "ऽ", reason: `Anusvara after ${vowelChar}` };
  }

  if (syllable.endsWith(VISARGA)) {
    return { type: "Guru", binary: "1", symbol: "ऽ", reason: `Visarga after ${vowelChar}` };
  }

  if (vowelType === "short") {
    const afterVowel = vowelIndex >= 0 ? syllable.slice(vowelIndex + 1) : syllable;
    if (afterVowel.includes(HALANT)) {
      return { type: "Guru", binary: "1", symbol: "ऽ", reason: "Short vowel followed by consonant cluster" };
    }
  }

  if (vowelType === "long") {
    return { type: "Guru", binary: "1", symbol: "ऽ", reason: `Long vowel ${vowelChar}` };
  }

  return { type: "Laghu", binary: "0", symbol: "।", reason: `Short vowel ${vowelChar}` };
}

function renderPadaBreakdown(padaAnalyses) {
  const container = document.getElementById("padaBreakdown");
  container.innerHTML = padaAnalyses.map((entry) => `
    <article class="pada-card">
      <h4>Pada ${entry.index}</h4>
      <div class="devanagari">${escapeHtml(entry.text)}</div>
      <div class="pada-pattern">
        <span>Pattern: ${escapeHtml(entry.pattern || "-")}</span>
        <span>Binary: ${escapeHtml(entry.binary || "-")}</span>
      </div>
    </article>
  `).join("");
}

function renderWordAnalysis(padaAnalyses) {
  const container = document.getElementById("wordAnalysis");
  const words = padaAnalyses.flatMap((entry) => entry.wordAnalyses.map((wordEntry, wordIndex) => ({
    padaIndex: entry.index,
    wordIndex: wordIndex + 1,
    ...wordEntry
  })));

  container.innerHTML = words.map((entry) => `
    <article class="word-card">
      <h4 class="devanagari">${escapeHtml(entry.word)}</h4>
      <p class="word-meta">
        <span>Pada ${entry.padaIndex}, Word ${entry.wordIndex}</span>
        <span>Pattern: ${escapeHtml(entry.pattern || "-")}</span>
        <span>Binary: ${escapeHtml(entry.binary || "-")}</span>
      </p>
      <table class="word-table">
        <thead>
          <tr>
            <th>Syllable</th>
            <th>Type</th>
            <th>Reason</th>
          </tr>
        </thead>
        <tbody>
          ${entry.classifications.map((item) => `
            <tr>
              <td class="syllable-main devanagari">${escapeHtml(item.syllable)}</td>
              <td><span class="syllable-badge ${item.type === "Guru" ? "guru-badge" : "laghu-badge"}">${item.type} (${item.binary})</span></td>
              <td>${escapeHtml(item.reason)}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </article>
  `).join("");
}

function initCombinationGenerator() {
  document.getElementById("generateCombinationsButton")?.addEventListener("click", generateCombinations);
}

function generateCombinations() {
  const input = document.getElementById("syllableCount");
  const count = Math.min(12, Math.max(1, Number(input?.value || 3)));
  const total = 2 ** count;
  const countNode = document.getElementById("combinationCount");
  const listNode = document.getElementById("combinationList");

  countNode.textContent = `${count} syllable${count > 1 ? "s" : ""} create ${total} patterns.`;

  const combinations = [];
  for (let value = 0; value < total; value += 1) {
    const binary = value.toString(2).padStart(count, "0");
    const symbols = binaryToSymbols(binary);
    combinations.push(`<span class="combination-chip">${symbols} <strong>${binary}</strong></span>`);
  }

  listNode.innerHTML = combinations.join("");
}

function normalizePattern(raw) {
  const normalized = raw
    .replace(/\s+/g, "")
    .replaceAll("L", "0")
    .replaceAll("l", "0")
    .replaceAll("G", "1")
    .replaceAll("g", "1")
    .replaceAll("।", "0")
    .replaceAll("ऽ", "1");

  return /^[01]+$/.test(normalized) ? normalized : "";
}

function binaryToLG(binary) {
  return binary.split("").map((digit) => (digit === "0" ? "L" : "G")).join("");
}

function binaryToSymbols(binary) {
  return binary.replaceAll("0", "।").replaceAll("1", "ऽ");
}

function decodeHtml(value) {
  const textArea = document.createElement("textarea");
  textArea.innerHTML = value;
  return textArea.value;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
