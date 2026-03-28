import fs from 'fs';
import path from 'path';

function replaceInFile(filePath, search, replacement) {
  const fullPath = path.join(process.cwd(), filePath);
  if (!fs.existsSync(fullPath)) return;
  let content = fs.readFileSync(fullPath, 'utf8');
  content = content.replace(search, replacement);
  fs.writeFileSync(fullPath, content, 'utf8');
}

// 1. Fix about page
replaceInFile(
  'app/about/page.tsx', 
  /Driven by <br \/>\s*<span className="text-secondary shimmer-text">Quality<\/span>/, 
  'About Wave Solution Gold Coast <br />\n              <span className="text-secondary shimmer-text">Cleaning Experts</span>'
);
replaceInFile(
  'app/about/layout.tsx',
  /title: "About WaveSolution \| Gold Coast Cleaning and Pest Control Since 2010"/,
  'title: "About Wave Solution | Gold Coast Cleaning Experts"'
);

// 2. Fix gallery page
replaceInFile(
  'app/gallery/page.tsx',
  /Our <br \/>\s*<span className="text-secondary shimmer-text">Gallery<\/span>/,
  'Cleaning Gallery <br />\n\t\t\t\t\t\t<span className="text-secondary shimmer-text">Gold Coast</span>'
);
replaceInFile(
  'app/gallery/layout.tsx',
  /description: "View our gallery of professional cleaning transformations across Gold Coast\. Before & after photos from home cleaning, office cleaning, deep cleaning & end of lease cleaning projects in Gold Coast & Southport\."/,
  'description: "View our gallery of professional cleaning transformations across Gold Coast. Before & after photos from home, office, and bond cleaning projects."'
);

// 3. Fix testimonials page
replaceInFile(
  'app/testimonials/page.tsx',
  /Stories of <br \/>\s*<span className="text-secondary shimmer-text">Brilliance<\/span>/,
  'Customer Testimonials <br />\n              <span className="text-secondary shimmer-text">Gold Coast</span>'
);
replaceInFile(
  'app/testimonials/layout.tsx',
  /title: "Customer Testimonials \| Gold Coast Cleaning and Pest Control Feedback"/,
  'title: "Customer Testimonials | Gold Coast Cleaning"'
);

// 4. Fix register
replaceInFile(
  'app/register/page.tsx',
  /Join the Elite Circle of <span className="text-secondary">Pristine<\/span> Living\./,
  'Create an Account | <span className="text-secondary">Wave Solution</span>'
);

// 5. Fix login
replaceInFile(
  'app/login/page.tsx',
  /Experience a New Level of <span className="text-secondary">Clarity<\/span> and Service\./,
  'Login to Wave Solution <span className="text-secondary">Gold Coast</span>'
);

// 6. Fix blog/cleaning-tips
replaceInFile(
  'app/blog/cleaning-tips/page.tsx',
  /10 Essential Tips for a <span className="text-secondary">Sparkling Home<\/span>/,
  '10 House Cleaning Tips for <span className="text-secondary">Gold Coast Homes</span>'
);
replaceInFile(
  'app/blog/cleaning-tips/page.tsx',
  /title: "10 House Cleaning Tips for Gold Coast Homes \| Expert Cleaning Guide"/,
  'title: "10 House Cleaning Tips for Gold Coast Homes"'
);
replaceInFile(
  'app/blog/cleaning-tips/page.tsx',
  /description: "Expert house cleaning tips from Gold Coast"/,
  'description: "Expert house cleaning tips for Gold Coast homes. Learn how to maintain your property between professional cleans."'
);

// 7. Fix blog/eco-friendly
replaceInFile(
  'app/blog/eco-friendly/page.tsx',
  /Effective <span className="text-secondary">Eco-Friendly<\/span> Cleaning Solutions/,
  'Eco-Friendly Cleaning Solutions <span className="text-secondary">Gold Coast</span>'
);
replaceInFile(
  'app/blog/eco-friendly/page.tsx',
  /title: "Eco-Friendly Cleaning Products & Methods \| Green Cleaning Gold Coast"/,
  'title: "Eco-Friendly Cleaning Methods | Gold Coast"'
);
replaceInFile(
  'app/blog/eco-friendly/page.tsx',
  /description: "Discover eco-friendly cleaning solutions for Gold Coast homes\. Non-toxic, child & pet-safe natural cleaning methods\. WaveSolution uses green cleaning products across all Gold Coast suburbs\. Sustainable cleaning guide\."/,
  'description: "Discover eco-friendly cleaning solutions for Gold Coast homes. Safe, non-toxic green cleaning methods for all suburbs."'
);

// 8. Fix blog/office-cleaning
replaceInFile(
  'app/blog/office-cleaning/page.tsx',
  /Office <span className="text-secondary">Cleaning<\/span>: Strategic Frequency & Methods/,
  'Office <span className="text-secondary">Cleaning Guide</span> Gold Coast'
);
replaceInFile(
  'app/blog/office-cleaning/page.tsx',
  /title: "Office Cleaning Guide Gold Coast \| How Often Should You Clean Your Office\?"/,
  'title: "Office Cleaning Guide Gold Coast | Wave Solution"'
);
replaceInFile(
  'app/blog/office-cleaning/page.tsx',
  /description: "Expert guide on office cleaning frequency & best practices for Gold Coast businesses\. Daily, weekly & monthly cleaning schedules\. Learn how a clean workspace boosts productivity by 15%\. Tips from Gold Coast"/,
  'description: "Expert guide on office cleaning frequency & best practices for Gold Coast businesses. Daily, weekly & monthly cleaning schedules."'
);

// 9. Fix layout descriptions
replaceInFile(
  'app/layout.tsx',
  /title: {\n    default: "Cleaning Services Gold Coast \| House, Office, Bond & Commercial Cleaning",/,
  'title: {\n    default: "Cleaning Services Gold Coast | Wave Solution",'
);
replaceInFile(
  'app/layout.tsx',
  /description:\n    "Professional services across the Gold Coast including house cleaning, office cleaning, bond cleaning, end of lease cleaning, move-in cleaning, after builders cleaning, deep cleaning, commercial cleaning, carpet cleaning, and pest control\.",/g,
  'description:\n    "Professional cleaning services across the Gold Coast including house, office, bond, and end of lease cleaning. Fast quote today.",'
);

replaceInFile(
  'app/services/page.tsx',
  /description: "Explore Wave Solution services in the Gold Coast including house cleaning, office cleaning, bond cleaning, end of lease cleaning, move-in cleaning, after builders cleaning, commercial cleaning, deep cleaning, carpet cleaning, and pest control\."/,
  'description: "Explore professional cleaning services in the Gold Coast including house cleaning, office cleaning, bond cleaning, and deep cleaning."'
);

console.log("SEO updates applied successfully.");
