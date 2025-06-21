import { getRandomImages } from './streetImages.js';

// === Bildgenerierung für 3 Wiederholungen ===
const generateQuestionImages = () => {
  const sets = [1, 2, 3];
  const indicators = ["beautiful", "boring", "lively", "safe", "wealthy", "depressing"];
  const questionImages = {};

  sets.forEach((i) => {
    indicators.forEach((key) => {
      questionImages[`${key}_perception_${i}`] = getRandomImages(`${key}_perception_${i}`, 2);
    });
    questionImages[`comfort_rating_${i}`] = getRandomImages(`comfort_rating_${i}`, 1);
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

// === Wahrnehmungsindikatoren (pairwise)
const perceptionIndicators = [
  { key: "beautiful", label: "schön" },
  { key: "boring", label: "langweilig" },
  { key: "lively", label: "lebendig" },
  { key: "safe", label: "sicher" },
  { key: "wealthy", label: "wohlhabend" },
  { key: "depressing", label: "deprimierend" }
];

// === Teil 2: 3× Paarvergleiche ===
const pairwisePages = [1, 2, 3].map((i) => ({
  name: `pairwise_perception_${i}`,
  title: `Teil 2.${i}: Emotionale Wahrnehmung`,
  description: "Wählen Sie jeweils das Bild aus, das am besten zur Beschreibung passt.",
  elements: perceptionIndicators.map(({ key, label }) => ({
    type: "imagepicker",
    name: `${key}_perception_${i}`,
    title: `${label.charAt(0).toUpperCase() + label.slice(1)}`,
    description: `Welche Straße wirkt auf Sie eher ${label}?`,
    isRequired: true,
    choices: displayedImages[`${key}_perception_${i}`],
    imageFit: "cover",
    imageHeight: "220px"
  }))
}));

// === Likert-Indikatoren ===
const likertIndicators = [
  { value: "greenery_rate", text: "Begrünung (Bäume, Pflanzen, Vegetation)" },
  { value: "shading_area", text: "Beschattung (z. B. durch Bäume oder Überdachungen)" },
  { value: "sun_intensity", text: "Sonneneinstrahlung" },
  { value: "traffic_flow", text: "Verkehrsaufkommen" },
  { value: "material_comfort", text: "Materialkomfort – Wie angenehm wirken die Oberflächen für Aufenthalt oder Bewegung?" },
  { value: "enclosure", text: "Raumgefühl – Wirkt der Straßenraum klar begrenzt (z. B. durch Fassaden oder Bäume)?" },
  { value: "imageability", text: "Einprägsamkeit – Wie wiedererkennbar und markant wirkt der Ort?" },
  { value: "human_scale", text: "Menschlicher Maßstab – Sind Gebäude und Straßen an menschliche Proportionen angepasst?" },
  { value: "transparency", text: "Sichtweite – Wie weit und offen ist der Blick entlang der Straße?" },
  { value: "complexity", text: "Komplexität – Wie detailreich und abwechslungsreich wirkt die Umgebung?" }
];

// === Teil 3: 3× Likert-Bewertungen ===
const likertPages = [1, 2, 3].map((i) => ({
  name: `likert_perception_${i}`,
  title: `Teil 3.${i}: Komfortbewertung`,
  description: "Bewerten Sie die folgenden Aspekte der gezeigten Straße.",
  elements: [
    {
      type: "image",
      name: `likert_image_${i}`,
      imageLink: displayedImages[`comfort_rating_${i}`][0]?.imageLink,
      imageFit: "contain",
      imageHeight: "220px"
    },
    {
      type: "matrix",
      name: `likert_indicators_${i}`,
      title: "Bitte bewerten Sie jeden Aspekt auf einer Skala von 1 (sehr niedrig) bis 5 (sehr hoch)",
      isRequired: true,
      columns: [
        { value: 1, text: "Sehr niedrig" },
        { value: 2, text: "Niedrig" },
        { value: 3, text: "Mittel" },
        { value: 4, text: "Hoch" },
        { value: 5, text: "Sehr hoch" }
      ],
      rows: likertIndicators
    }
  ]
}));

// === Survey-Seiten kombinieren ===
export const surveyPages = [
  {
    name: "demographics",
    title: "Teil 1: Hintergrundinformationen (optional)",
    description: "Bitte erzählen Sie uns etwas über sich.",
    elements: demographicQuestions
  },
  ...pairwisePages,
  ...likertPages
];

// === Export der Umfrage-Definition ===
export const surveyJson = {
  title: "Umfrage zur thermischen Wahrnehmung im Stadtraum",
  description: "Helfen Sie uns zu verstehen, wie Menschen Komfort und Gestaltung im Stadtraum wahrnehmen.",
  pages: surveyPages,
  showQuestionNumbers: "off",
  showProgressBar: "top",
  progressBarType: "questions",
  autoGrowComment: true,
  showPreviewBeforeComplete: "noPreview"
};
