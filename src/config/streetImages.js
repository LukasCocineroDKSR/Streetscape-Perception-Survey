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
  "image_3804.jpg",
  "image_3805.jpg",
  "image_3806.jpg",
  "image_3807.jpg",
  "image_3808.jpg",
  "image_3809.jpg",
  "image_3810.jpg",
  "image_3811.jpg",
  "image_3812.jpg",
  "image_3813.jpg",
  "image_3814.jpg",
  "image_3815.jpg",
  "image_3816.jpg",
  "image_3817.jpg",
  "image_3818.jpg",
  "image_3819.jpg",
  "image_3820.jpg",
  "image_3821.jpg",
  "image_3822.jpg",
  "image_3823.jpg",
  "image_3824.jpg",
  "image_3825.jpg",
  "image_3826.jpg",
  "image_3827.jpg",
  "image_3828.jpg",
  "image_3829.jpg",
  "image_3830.jpg",
  "image_3831.jpg",
  "image_3832.jpg",
  "image_3833.jpg",
  "image_3834.jpg",
  "image_3835.jpg",
  "image_3836.jpg",
  "image_3837.jpg",
  "image_3838.jpg",
  "image_3839.jpg",
  "image_3840.jpg",
  "image_3841.jpg",
  "image_3842.jpg",
  "image_3843.jpg",
  "image_3844.jpg",
  "image_3845.jpg",
  "image_3846.jpg",
  "image_3847.jpg",
  "image_3848.jpg",
  "image_3849.jpg",
  "image_3850.jpg",
  "image_3851.jpg",
  "image_3852.jpg",
  "image_3853.jpg",
  "image_3854.jpg",
  "image_3855.jpg",
  "image_3856.jpg",
  "image_3857.jpg",
  "image_3858.jpg",
  "image_3859.jpg",
  "image_3860.jpg",
  "image_3861.jpg",
  "image_3862.jpg",
  "image_3863.jpg",
  "image_3864.jpg",
  "image_3865.jpg",
  "image_3866.jpg",
  "image_3867.jpg",
  "image_3868.jpg",
  "image_3869.jpg",
  "image_3870.jpg",
  "image_3871.jpg",
  "image_3872.jpg",
  "image_3873.jpg",
  "image_3874.jpg",
  "image_3875.jpg",
  "image_3876.jpg",
  "image_3877.jpg",
  "image_3878.jpg",
  "image_3879.jpg",
  "image_3880.jpg",
  "image_3881.jpg",
  "image_3882.jpg",
  "image_3883.jpg",
  "image_3884.jpg",
  "image_3885.jpg",
  "image_3886.jpg",
  "image_3887.jpg",
  "image_3888.jpg",
  "image_3889.jpg",
  "image_3890.jpg",
  "image_3891.jpg",
  "image_3892.jpg",
  "image_3893.jpg",
  "image_3894.jpg",
  "image_3895.jpg",
  "image_3896.jpg",
  "image_3897.jpg",
  "image_3898.jpg",
  "image_3899.jpg",
  "image_3900.jpg",
  "image_3901.jpg",
  "image_3902.jpg",
  "image_3903.jpg",
  "image_3904.jpg",
  "image_3905.jpg",
  "image_3906.jpg",
  "image_3907.jpg",
  "image_3908.jpg",
  "image_3909.jpg",
  "image_3910.jpg",
  "image_3911.jpg",
  "image_3912.jpg",
  "image_3913.jpg",
  "image_3914.jpg",
  "image_3915.jpg",
  "image_3916.jpg",
  "image_3917.jpg",
  "image_3918.jpg",
  "image_3919.jpg",
  "image_3920.jpg",
  "image_3921.jpg",
  "image_3922.jpg",
  "image_3923.jpg",
  "image_3924.jpg",
  "image_3925.jpg",
  "image_3926.jpg",
  "image_3927.jpg",
  "image_3928.jpg",
  "image_3929.jpg",
  "image_3930.jpg",
  "image_3931.jpg",
  "image_3932.jpg",
  "image_3933.jpg",
  "image_3934.jpg",
  "image_3935.jpg",
  "image_3936.jpg",
  "image_3937.jpg",
  "image_3938.jpg",
  "image_3939.jpg",
  "image_3940.jpg",
  "image_3941.jpg",
  "image_3942.jpg",
  "image_3943.jpg",
  "image_3944.jpg",
  "image_3945.jpg",
  "image_3946.jpg",
  "image_3947.jpg",
  "image_3948.jpg",
  "image_3949.jpg",
  "image_3950.jpg",
  "image_3951.jpg",
  "image_3952.jpg",
  "image_3953.jpg",
  "image_3954.jpg",
  "image_3955.jpg",
  "image_3956.jpg",
  "image_3957.jpg",
  "image_3958.jpg",
  "image_3959.jpg",
  "image_3960.jpg",
  "image_3961.jpg",
  "image_3962.jpg",
  "image_3963.jpg",
  "image_3964.jpg",
  "image_3965.jpg",
  "image_3966.jpg",
  "image_3967.jpg",
  "image_3968.jpg",
  "image_3969.jpg",
  "image_3970.jpg",
  "image_3971.jpg",
  "image_3972.jpg",
  "image_3973.jpg",
  "image_3974.jpg",
  "image_3975.jpg",
  "image_3976.jpg",
  "image_3977.jpg",
  "image_3978.jpg",
  "image_3979.jpg",
  "image_3980.jpg",
  "image_3981.jpg"
];


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