// Define emotional indicators
const perceptionIndicators = [
  { key: "beautiful", label: "schön" },
  { key: "boring", label: "langweilig" },
  { key: "lively", label: "lebendig" },
  { key: "safe", label: "sicher" },
  { key: "wealthy", label: "wohlhabend" },
  { key: "depressing", label: "deprimierend" }
];

// Define how many comparisons per indicator
const comparisonsPerIndicator = 20;

// Function to get image pairs (replace with actual logic to load your pairs)
const getImagePairs = (indicatorKey, count) =>
  Array.from({ length: count }, (_, i) => ({
    type: "imagepicker",
    name: `${indicatorKey}_pair_${i + 1}`,
    title: `Welche Straße wirkt eher ${indicatorKey}?`,
    isRequired: true,
    choices: getRandomImages(`${indicatorKey}_pair_${i + 1}`, 2),
    imageFit: "cover",
    imageHeight: "220px"
  }));

// Assemble survey pages
export const surveyPages = perceptionIndicators.map(({ key, label }) => ({
  name: `${key}_page`,
  title: `Wahrnehmung: ${label.charAt(0).toUpperCase() + label.slice(1)}`,
  description: `Bitte wählen Sie bei jeder Frage das Bild, das eher ${label} wirkt.`,
  elements: getImagePairs(key, comparisonsPerIndicator)
}));

// Final export
export const surveyJson = {
  title: "Städtebilder und emotionale Wahrnehmung",
  description: "Wählen Sie jeweils das Bild, das auf Sie emotionaler wirkt.",
  pages: surveyPages,
  showQuestionNumbers: "off",
  showProgressBar: "top",
  progressBarType: "pages",
  showPreviewBeforeComplete: "noPreview"
};
