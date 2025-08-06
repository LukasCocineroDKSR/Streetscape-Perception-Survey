// ========================================
// 📚 CITATION
// ========================================
// This survey platform was initially developed for:
// Yang, S., Chong, A., Liu, P., & Biljecki, F. (2025). 
// Thermal comfort in sight: Thermal affordance and its visual assessment for sustainable streetscape design. 
// Building and Environment, 112569. Elsevier.

// ⚠️ CRITICAL: YOU MUST REPLACE THIS WITH YOUR OWN DATA!
// The data below is just an EXAMPLE - replace with your own Supabase URL and image filenames

// 🔧 STEP 1: Replace with YOUR Supabase project URL
// Example format: https://YOUR-PROJECT-ID.supabase.co/storage/v1/object/public/street-images
const SUPABASE_STORAGE_URL = "https://dkeftpvjamrepzpmhbic.supabase.co/storage/v1/object/public/street-images/";

// 🔧 STEP 2: Replace with YOUR actual uploaded image filenames
// Example filenames shown below - replace with your own image names
const imageFilenames = [
    "image_3007.jpg",
    "image_3013.jpg",
    "image_3024.jpg",
    "image_3027.jpg",
    "image_3029.jpg",
    "image_3031.jpg",
    "image_3033.jpg",
    "image_3038.jpg",
    "image_3041.jpg",
    "image_3043.jpg",
    "image_3050.jpg",
    "image_3052.jpg",
    "image_3058.jpg",
    "image_3070.jpg",
    "image_3072.jpg",
    "image_3078.jpg",
    "image_3080.jpg",
    "image_3083.jpg",
    "image_3097.jpg",
    "image_3100.jpg",
    "image_3101.jpg",
    "image_3105.jpg",
    "image_3107.jpg",
    "image_3114.jpg",
    "image_3116.jpg",
    "image_3119.jpg",
    "image_3123.jpg",
    "image_3125.jpg",
    "image_3128.jpg",
    "image_3129.jpg",
    "image_3131.jpg",
    "image_3142.jpg",
    "image_3145.jpg",
    "image_3147.jpg",
    "image_3149.jpg",
    "image_3151.jpg",
    "image_3153.jpg",
    "image_3155.jpg",
    "image_3157.jpg",
    "image_3162.jpg",
    "image_3164.jpg",
    "image_3168.jpg",
    "image_3172.jpg",
    "image_3175.jpg",
    "image_3177.jpg",
    "image_3179.jpg",
    "image_3181.jpg",
    "image_3183.jpg",
    "image_3188.jpg",
    "image_3189.jpg",
    "image_3194.jpg",
    "image_3213.jpg",
    "image_3215.jpg",
    "image_3220.jpg",
    "image_3222.jpg",
    "image_3227.jpg",
    "image_3247.jpg",
    "image_3270.jpg",
    "image_3272.jpg",
    "image_3277.jpg",
    "image_3280.jpg",
    "image_3286.jpg",
    "image_3289.jpg",
    "image_3299.jpg",
    "image_3303.jpg",
    "image_3311.jpg",
    "image_3313.jpg",
    "image_3315.jpg",
    "image_3318.jpg",
    "image_3320.jpg",
    "image_3326.jpg",
    "image_3329.jpg",
    "image_3331.jpg",
    "image_3336.jpg",
    "image_3338.jpg",
    "image_3341.jpg",
    "image_3345.jpg",
    "image_3349.jpg",
    "image_3350.jpg",
    "image_3353.jpg",
    "image_3358.jpg"
]
;


// 🔧 STEP 3: Automatically generate full URLs (no need to edit this part)
export const streetImages = imageFilenames.map(filename => `${SUPABASE_STORAGE_URL}//${filename}`);


// Function to get random images for questions
export function getRandomImages(questionName, count = 4) {
  let images = [...streetImages];
  let result = [];
  
  for (let i = 0; i < Math.min(count, images.length); i++) {
    const randomIndex = Math.floor(Math.random() * images.length);
    const imageUrl = typeof images[randomIndex] === 'string' 
      ? images[randomIndex] 
      : images[randomIndex].url;
    
    const imageName = imageUrl.split('/').pop();
    
    result.push({
      value: imageName,
      imageLink: imageUrl
    });
    
    images.splice(randomIndex, 1);
  }
  
  return result;
} 