import { getRandomImages } from './streetImages.js';

// === Bildkonfiguration für 20 Vergleiche pro Indikator ===
const perceptionIndicators = [
  { key: "beautiful", label: "schön" },
  { key: "boring", label: "langweilig" },
  { key: "lively", label: "lebendig" },
  { key: "safe", label: "sicher" },
  { key: "wealthy", label: "wohlhabend" },
  { key: "depressing", label: "deprimierend" }
];

// === Bilder laden: 20 Vergleiche pro Indikator ===
const generateQuestionImages = () => {
  const questionImages = {};

  perceptionIndicators.forEach(({ key }) => {
    for (let i = 1; i <= 20; i++) {
      questionImages[`${key}_perception_${i}`] = getRandomImages(`${key}_perception_${i}`, 2);
    }
  });

  return questionImages;
};

export const displayedImages = generateQuestionImages();

// === Demografische Fragen ===
export const demographicQuestions = [
  {
    name: "age",
    title: "Wie alt sind Sie?",
    type: "radiogroup",
    choices: ["Unter 18", "18–24", "25–34", "35–44", "45–54", "55–64", "65 oder älter"],
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
    choices: ["Unter 25.000 €", "25.000 € – 50.000 €", "50.000 € – 75.000 €", "75.000 € – 100.000 €", "Über 100.000 €", "Keine Angabe"],
    isRequired: false
  },
  {
    name: "education",
    title: "Was ist Ihr höchster Bildungsabschluss?",
    type: "radiogroup",
    choices: ["Haupt-/Realschule oder weniger", "Einige Jahre Studium", "Bachelorabschluss", "Masterabschluss", "Promotion", "Sonstiges"],
    isRequired: false
  },
  {
    name: "outdoor_activity",
    title: "Wie oft sind Sie draußen unterwegs?",
    type: "radiogroup",
    choices: ["Täglich", "Mehrmals pro Woche", "Einmal pro Woche", "Mehrmals im Monat", "Selten", "Nie"],
    isRequired: false
  }
];

// === Paarvergleichsfragen (je 20 pro Indikator) ===
const pairwisePages = perceptionIndicators.flatMap(({ key, label }) =>
  Array.from({ length: 10 }, (_, i) => ({
    name: `${key}_perception_${i + 1}`,
    title: `Emotionale Wahrnehmung: "${label.charAt(0).toUpperCase() + label.slice(1)}"`,
    description: `Welches Bild wirkt eher ${label}?`,
    elements: [
      {
        type: "imagepicker",
        name: `${key}_perception_${i + 1}`,
        isRequired: false,
        choices: displayedImages[`${key}_perception_${i + 1}`],
        imageFit: "cover",
        imageHeight: "220px"
      }
    ]
  }))
);

// === Alle Seiten zusammenführen ===
export const surveyPages = [
  {
    name: "demographics",
    title: "Teil 1: Hintergrundinformationen (optional)",
    description: "Bitte erzählen Sie uns etwas über sich.",
    elements: demographicQuestions
  },
  ...pairwisePages
];

// === Survey Definition ===
export const surveyJson = {
  title: "Umfrage zur emotionalen Wahrnehmung von Straßenräumen",
  description: "Helfen Sie uns zu verstehen, wie Menschen Straßenumgebungen wahrnehmen.",
  pages: surveyPages,
  showQuestionNumbers: "on",
  showProgressBar: "top",
  progressBarType: "pages",
  autoGrowComment: true,
  showPreviewBeforeComplete: "noPreview"
};
