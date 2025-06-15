// Full Survey Configuration with Demographics + Perceptions

import { getRandomImages } from './streetImages.js';

// Generate Images for Each Question
const generateQuestionImages = () => {
  const questionImages = {
    // Pairwise comparisons
    beautiful_perception: getRandomImages("beautiful_perception", 2),
    boring_perception: getRandomImages("boring_perception", 2),
    lively_perception: getRandomImages("lively_perception", 2),
    safe_perception: getRandomImages("safe_perception", 2),
    wealthy_perception: getRandomImages("wealthy_perception", 2),
    depressing_perception: getRandomImages("depressing_perception", 2),

    // Likert block (one image, many ratings)
    comfort_rating: getRandomImages("comfort_rating", 1)
  };

  return questionImages;
};

export const displayedImages = generateQuestionImages();

// Demographic Questions
export const demographicQuestions = [
  {
    name: "age",
    title: "What is your age group?",
    type: "radiogroup",
    choices: [
      "Under 18",
      "18-24",
      "25-34",
      "35-44",
      "45-54",
      "55-64",
      "65 or older"
    ],
    isRequired: false
  },
  {
    name: "location",
    title: "Where are you from? (City, Country)",
    type: "text",
    isRequired: false
  },
  {
    name: "income",
    title: "What is your household income level?",
    type: "radiogroup",
    choices: [
      "Under €25,000",
      "€25,000 - €50,000",
      "€50,000 - €75,000",
      "€75,000 - €100,000",
      "Over €100,000"
    ],
    isRequired: false
  },
  {
    name: "education",
    title: "What is your highest level of education?",
    type: "radiogroup",
    choices: [
      "High school or less",
      "Some college",
      "Bachelor's degree",
      "Master's degree",
      "Doctoral degree",
      "Other"
    ],
    isRequired: false
  },
  {
    name: "outdoor_activity",
    title: "How often do you engage in outdoor activities?",
    type: "radiogroup",
    choices: [
      "Daily",
      "Several times a week",
      "Once a week",
      "Several times a month",
      "Rarely",
      "Never"
    ],
    isRequired: false
  }
];

// Pairwise Perception Questions (Part 2)
const pairwisePerceptionPage = {
  name: "pairwise_perception",
  title: "Part 2: Perception Preferences",
  description: "Choose the street environment that best represents each perception.",
  elements: [
    "beautiful", "boring", "lively", "safe", "wealthy", "depressing"
  ].map((indicator) => ({
    type: "imagepicker",
    name: `${indicator}_perception`,
    title: `${indicator.charAt(0).toUpperCase() + indicator.slice(1)} Perception`,
    description: `Which street looks more ${indicator.toUpperCase()}?`,
    isRequired: true,
    choices: displayedImages[`${indicator}_perception`],
    imageFit: "cover",
    multiSelect: false
  }))
};

// Likert Perception Ratings (Part 3)
const likertPerceptionPage = {
  name: "likert_perception",
  title: "Part 3: Comfort Ratings",
  description: "Rate the following aspects of the street scene.",
  elements: [
    {
      type: "image",
      name: "likert_image",
      imageLink: displayedImages.comfort_rating[0]?.imageLink,
      imageFit: "cover",
      imageHeight: "300px",
      imageWidth: "100%"
    },
    {
      type: "matrix",
      name: "likert_indicators",
      title: "Please rate each aspect on a scale of 1 to 5",
      isRequired: true,
      columns: [
        { value: 1, text: "Very Low" },
        { value: 2, text: "Low" },
        { value: 3, text: "Medium" },
        { value: 4, text: "High" },
        { value: 5, text: "Very High" }
      ],
      rows: [
        { value: "greenery_rate", text: "Greenery (trees, plants, vegetation)" },
        { value: "shading_area", text: "Shaded areas (awnings, trees, etc.)" },
        { value: "sun_intensity", text: "Sunlight exposure" },
        { value: "traffic_flow", text: "Traffic activity or flow" },
        { value: "material_comfort", text: "Comfort of surface materials (pavement, ground)" },
        { value: "enclosure", text: "How enclosed the space feels" },
        { value: "imageability", text: "How memorable the place is" },
        { value: "human_scale", text: "Human-scale design (building size vs people)" },
        { value: "transparency", text: "Visibility of surroundings or behind structures" },
        { value: "complexity", text: "Visual richness and complexity" }
      ]
    }
  ]
};

// Combine All Survey Pages
export const surveyPages = [
  {
    name: "demographics",
    title: "Part 1: Background Information (Optional)",
    description: "Please tell us a bit about yourself. All questions are optional.",
    elements: demographicQuestions
  },
  pairwisePerceptionPage,
  likertPerceptionPage
];

// Export Final Survey Structure
export const surveyJson = {
  title: "Urban Thermal Perception Survey",
  description: "Help us understand how people perceive comfort and design in city streets.",
  pages: surveyPages,
  showQuestionNumbers: "off",
  showProgressBar: "top",
  progressBarType: "questions",
  autoGrowComment: true,
  showPreviewBeforeComplete: "noPreview"
};
