// Vollständige Umfragekonfiguration mit Demografie + Wahrnehmung

import { getRandomImages } from './streetImages.js';

// Bilder für jede Frage generieren
const generateQuestionImages = () => {
  const questionImages = {
    // Paarweise Vergleiche
    beautiful_perception: getRandomImages("beautiful_perception", 2),
    boring_perception: getRandomImages("boring_perception", 2),
    lively_perception: getRandomImages("lively_perception", 2),
    safe_perception: getRandomImages("safe_perception", 2),
    wealthy_perception: getRandomImages("wealthy_perception", 2),
    depressing_perception: getRandomImages("depressing_perception", 2),

    // Likert-Block (ein Bild, mehrere Bewertungen)
    comfort_rating: getRandomImages("comfort_rating", 1)
  };

  return questionImages;
};

export const displayedImages = generateQuestionImages();

// Demografische Fragen
export const demographicQuestions = [
  {
    name: "age",
    title: "Wie alt sind Sie?",
    type: "radiogroup",
    choices: [
      "Unter 18",
      "18–24",
      "25–34",
      "35–44",
      "45–54",
      "55–64",
      "65 oder älter"
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
      "Unter 25.000 €",
      "25.000 € – 50.000 €",
      "50.000 € – 75.000 €",
      "75.000 € – 100.000 €",
      "Über 100.000 €",
      "Keine Angabe"
    ],
    isRequired: false
  },
  {
    name: "education",
    title: "Was ist Ihr höchster Bildungsabschluss?",
    type: "radiogroup",
    choices: [
      "Haupt-/Realschule oder weniger",
      "Einige Jahre Studium (kein Abschluss)",
      "Bachelorabschluss",
      "Masterabschluss",
      "Promotion/PhD",
      "Sonstiges"
    ],
    isRequired: false
  },
  {
    name: "outdoor_activity",
    title: "Wie oft sind Sie draußen (z. B. zu Fuß, Radfahren, Spazierengehen)?",
    type: "radiogroup",
    choices: [
      "Täglich",
      "Mehrmals pro Woche",
      "Einmal pro Woche",
      "Mehrmals im Monat",
      "Selten",
      "Nie"
    ],
    isRequired: false
  }
];

// Paarweise Wahrnehmungsfragen (Teil 2)
const pairwisePerceptionPage = {
  name: "pairwise_perception",
  title: "Teil 2: Wahrnehmungsvergleiche",
  description: "Wählen Sie die Straße, die am besten zu jeder Beschreibung passt.",
  elements: [
    "schöner", "langweiliger", "lebenswerter", "sicherer", "wohlhabender", "depremierender"
  ].map((indicator) => ({
    type: "imagepicker",
    name: `${indicator}_perception`,
    title: `${indicator.charAt(0).toUpperCase() + indicator.slice(1)}-Wahrnehmung`,
    description: `Welche Straße wirkt auf Sie ${indicator.toUpperCase()}?`,
    isRequired: true,
    choices: displayedImages[`${indicator}_perception`],
    imageFit: "cover",
    imageHeight: "220px",
    imageWidth: "auto",
    contentMode: "image"
  }))
};

// Likert-Bewertungen (Teil 3)
const likertPerceptionPage = {
  name: "likert_perception",
  title: "Teil 3: Komfortbewertungen",
  description: "Bewerten Sie die folgenden Aspekte der gezeigten Straße. Einige Begriffe werden kurz erklärt.",
  elements: [
    {
      type: "image",
      name: "likert_image",
      imageLink: displayedImages.comfort_rating[0]?.imageLink,
      imageFit: "contain",
      imageHeight: "220px",
      imageWidth: "100%"
    },
    {
      type: "matrix",
      name: "likert_indicators",
      title: "Bitte bewerten Sie jeden Aspekt auf einer Skala von 1 (sehr niedrig) bis 5 (sehr hoch)",
      isRequired: true,
      columns: [
        { value: 1, text: "Sehr niedrig" },
        { value: 2, text: "Niedrig" },
        { value: 3, text: "Mittel" },
        { value: 4, text: "Hoch" },
        { value: 5, text: "Sehr hoch" }
      ],
      rows: [
        { value: "greenery_rate", text: "Begrünung (Bäume, Pflanzen, Vegetation)" },
        { value: "shading_area", text: "Beschattete Bereiche (z. B. durch Bäume, Vordächer)" },
        { value: "sun_intensity", text: "Sonneneinstrahlung" },
        { value: "traffic_flow", text: "Verkehrsaufkommen oder -fluss" },
        { value: "material_comfort", text: "Bodenbeschaffenheit und -komfort (z. B. Pflasterung)" },
        { value: "enclosure", text: "Raumgefühl – Wie geschlossen wirkt der Raum? (z. B. eng stehende Gebäude)" },
        { value: "imageability", text: "Einprägsamkeit – Wie markant oder wiedererkennbar ist der Ort?" },
        { value: "human_scale", text: "Maßstab – Wirken Gebäude und Straßen menschenfreundlich skaliert?" },
        { value: "transparency", text: "Transparenz – Wie gut ist die Sicht durch und um Gebäude herum?" },
        { value: "complexity", text: "Komplexität – Wie vielfältig und detailreich wirkt das Bild?" }
      ]
    }
  ]
};

// Umfrageseiten kombinieren
export const surveyPages = [
  {
    name: "demographics",
    title: "Teil 1: Hintergrundinformationen (optional)",
    description: "Bitte erzählen Sie uns etwas über sich. Alle Fragen sind freiwillig.",
    elements: demographicQuestions
  },
  pairwisePerceptionPage,
  likertPerceptionPage
];

// Export der finalen Umfragelogik
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
