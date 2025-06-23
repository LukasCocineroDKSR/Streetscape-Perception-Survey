// 📸 Generate images for 6 indicators, 10 comparisons each
import { getRandomImages } from './streetImages.js';

const indicators = [
  { key: "beautiful", label: "Schön" },
  { key: "boring", label: "Langweilig" },
  { key: "depressing", label: "Deprimierend" },
  { key: "safe", label: "Sicher" },
  { key: "wealthy", label: "Wohlhabend" },
  { key: "livable", label: "Lebenswert" }
];

const generateQuestionImages = () => {
  const questionImages = {};
  indicators.forEach(({ key }) => {
    for (let i = 1; i <= 10; i++) {
      questionImages[`${key}_comparison_${i}`] = getRandomImages(`${key}_comparison_${i}`, 2);
    }
  });
  return questionImages;
};

export const displayedImages = generateQuestionImages();

// === Demographic Questions ===
export const demographicQuestions = [
  {
    name: "age",
    title: "Wie alt sind Sie?",
    type: "radiogroup",
    choices: [
      "Unter 18", "18–24", "25–34", "35–44", "45–54", "55–64", "65 oder älter"
    ],
    isRequired: false
  },
  {
    name: "gender",
    title: "Was ist Ihr Geschlecht?",
    type: "radiogroup",
    choices: [
      "weiblich", "männlich", "divers"
    ],
    isRequired: false
  },
  {
    name: "location",
    title: "In welcher Stadt leben Sie?",
    type: "text",
    isRequired: false
  },
  {
    name: "income",
    title: "Wie hoch ist Ihr Haushaltsnettoeinkommen?",
    type: "radiogroup",
    choices: [
      "Unter 25.000 €", "25.000 € – 50.000 €", "50.000 € – 75.000 €",
      "75.000 € – 100.000 €", "Über 100.000 €"
    ],
    isRequired: false
  },
  {
    name: "education",
    title: "Was ist Ihr höchster Bildungsabschluss?",
    type: "radiogroup",
    choices: [
      "Kein Schulabschluss", "Haupt-/Realschule", "Berufsausbildung",
      "Bachelorabschluss", "Masterabschluss", "Promotion", "Sonstiges"
    ],
    isRequired: false
  }
];

// === Individual Indicator Pages ===
const beautifulPage = {
  name: "beautiful_page",
  title: "Indikator 1/6: Schön",
  description: "Wählen Sie jeweils das Bild, das besser zur Beschreibung „Schön“ passt. Wenn Sie sich nicht entscheiden können, überspringen Sie den Vergleich.",
  elements: Array.from({ length: 10 }, (_, i) => ({
    type: "imagepicker",
    name: `beautiful_comparison_${i + 1}`,
    title: "Welches Bild wirkt eher schön?",
    isRequired: false,
    choices: displayedImages[`beautiful_comparison_${i + 1}`],
    imageFit: "cover",
    imageHeight: "420px"
  }))
};

const boringPage = {
  name: "boring_page",
  title: "Indikator 2/6: Langweilig",
  description: "Wählen Sie jeweils das Bild, das besser zur Beschreibung „Langweilig“ passt. Wenn Sie sich nicht entscheiden können, überspringen Sie den Vergleich.",
  elements: Array.from({ length: 10 }, (_, i) => ({
    type: "imagepicker",
    name: `boring_comparison_${i + 1}`,
    title: "Welches Bild wirkt eher langweilig?",
    isRequired: false,
    choices: displayedImages[`boring_comparison_${i + 1}`],
    imageFit: "cover",
    imageHeight: "420px"
  }))
};

const depressingPage = {
  name: "depressing_page",
  title: "Indikator 3/6: Deprimierend",
  description: "Wählen Sie jeweils das Bild, das besser zur Beschreibung „Deprimierend“ passt. Wenn Sie sich nicht entscheiden können, überspringen Sie den Vergleich.",
  elements: Array.from({ length: 10 }, (_, i) => ({
    type: "imagepicker",
    name: `depressing_comparison_${i + 1}`,
    title: "Welches Bild wirkt eher deprimierend?",
    isRequired: false,
    choices: displayedImages[`depressing_comparison_${i + 1}`],
    imageFit: "cover",
    imageHeight: "420px"
  }))
};

const safePage = {
  name: "safe_page",
  title: "Indikator 4/6: Sicher",
  description: "Wählen Sie jeweils das Bild, das besser zur Beschreibung „Sicher“ passt. Wenn Sie sich nicht entscheiden können, überspringen Sie den Vergleich.",
  elements: Array.from({ length: 10 }, (_, i) => ({
    type: "imagepicker",
    name: `safe_comparison_${i + 1}`,
    title: "Welches Bild wirkt eher sicher?",
    isRequired: false,
    choices: displayedImages[`safe_comparison_${i + 1}`],
    imageFit: "cover",
    imageHeight: "420px"
  }))
};

const wealthyPage = {
  name: "wealthy_page",
  title: "Indikator 5/6: Wohlhabend",
  description: "Wählen Sie jeweils das Bild, das besser zur Beschreibung „Wohlhabend“ passt. Wenn Sie sich nicht entscheiden können, überspringen Sie den Vergleich.",
  elements: Array.from({ length: 10 }, (_, i) => ({
    type: "imagepicker",
    name: `wealthy_comparison_${i + 1}`,
    title: "Welches Bild wirkt eher wohlhabend?",
    isRequired: false,
    choices: displayedImages[`wealthy_comparison_${i + 1}`],
    imageFit: "cover",
    imageHeight: "420px"
  }))
};

const livablePage = {
  name: "livable_page",
  title: "Indikator 6/6: Lebenswert",
  description: "Wählen Sie jeweils das Bild, das besser zur Beschreibung „Lebenswert“ passt. Wenn Sie sich nicht entscheiden können, überspringen Sie den Vergleich.",
  elements: Array.from({ length: 10 }, (_, i) => ({
    type: "imagepicker",
    name: `livable_comparison_${i + 1}`,
    title: "Welches Bild wirkt eher lebenswert?",
    isRequired: false,
    choices: displayedImages[`livable_comparison_${i + 1}`],
    imageFit: "cover",
    imageHeight: "420px"
  }))
};

export const surveyPages = [
  {
    name: "demographics",
    title: "Teil 1: Hintergrundinformationen (optional)",
    description: "Bitte erzählen Sie uns etwas über sich.",
    elements: demographicQuestions
  },
  beautifulPage,
  boringPage,
  depressingPage,
  safePage,
  wealthyPage,
  livablePage
];

export const surveyJson = {
  title: "Umfrage zur Wahrnehmung von Straßenräumen",
  description: "Diese Umfrage hilft uns zu verstehen, wie Menschen verschiedene Straßenumgebungen wahrnehmen. Ihre Teilnahme unterstützt eine menschzentrierte Stadtplanung.",
  pages: surveyPages,
  showQuestionNumbers: "off",
  showProgressBar: "top",
  progressBarType: "questions",
  autoGrowComment: true,
  showPreviewBeforeComplete: "noPreview"
};

// === Optional-Skip-Validation: Maximal 6 überspringbare Bildvergleiche ===
export function attachSkipLimitValidation(survey) {
  const maxSkipsAllowed = 6;

  survey.onComplete.add((sender, options) => {
    const skippedCount = Object.entries(sender.data).filter(
      ([key, value]) => key.endsWith("_comparison_1") || key.includes("_comparison_") && !value
    ).length;

    if (skippedCount > maxSkipsAllowed) {
      options.allowComplete = false;
      alert(`Sie haben ${skippedCount} Bildvergleiche übersprungen. Bitte beantworten Sie mindestens ${120 - maxSkipsAllowed} der 120 Paare.`);
    }
  });
}

