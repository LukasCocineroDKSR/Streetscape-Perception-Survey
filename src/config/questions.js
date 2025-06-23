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
      questionImages[`${key}_comparison_${i}`] = [
        ...getRandomImages(`${key}_comparison_${i}`, 2),
        {
          value: "neutral",
          imageLink: "path/to/neutral.png",
          text: "Keine Entscheidung möglich"
        }
      ];
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
    title: "Woher kommen Sie? (Stadt, Land)",
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
  },
  {
    name: "outdoor_activity",
    title: "Wie oft sind Sie draußen unterwegs?",
    type: "radiogroup",
    choices: [
      "Täglich", "Mehrmals pro Woche", "Einmal pro Woche",
      "Mehrmals im Monat", "Selten", "Nie"
    ],
    isRequired: false
  }
];

// === Individual Indicator Pages ===
const buildIndicatorPage = (key, label, index) => ({
  name: `${key}_page`,
  title: `Indikator ${index}/6: ${label}`,
  description: `Wählen Sie jeweils das Bild, das besser zur Beschreibung „${label}“ passt.`,
  elements: Array.from({ length: 10 }, (_, i) => ({
    type: "imagepicker",
    name: `${key}_comparison_${i + 1}`,
    title: `Welches Bild wirkt eher ${label}?`,
    isRequired: true,
    choices: displayedImages[`${key}_comparison_${i + 1}`],
    imageFit: "cover",
    imageHeight: "220px"
  }))
});

const beautifulPage = buildIndicatorPage("beautiful", "Schön", 1);
const boringPage = buildIndicatorPage("boring", "Langweilig", 2);
const depressingPage = buildIndicatorPage("depressing", "Deprimierend", 3);
const safePage = buildIndicatorPage("safe", "Sicher", 4);
const wealthyPage = buildIndicatorPage("wealthy", "Wohlhabend", 5);
const livablePage = buildIndicatorPage("livable", "Lebenswert", 6);

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
