const fs = require('fs');
const path = require('path');

const dirs = [
  path.join(__dirname, 'src', 'components'),
  path.join(__dirname, 'src', 'pages')
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Reduce padding Y
  content = content.replace(/py-20/g, 'py-10');
  content = content.replace(/py-24/g, 'py-12');
  content = content.replace(/py-28/g, 'py-12');
  content = content.replace(/py-32/g, 'py-16');
  
  // Reduce margin Top
  content = content.replace(/mt-20/g, 'mt-10');
  content = content.replace(/mt-24/g, 'mt-12');
  content = content.replace(/mt-32/g, 'mt-16');
  content = content.replace(/mt-40/g, 'mt-16');
  
  // Reduce margin Bottom
  content = content.replace(/mb-20/g, 'mb-10');
  content = content.replace(/mb-24/g, 'mb-12');
  content = content.replace(/mb-32/g, 'mb-16');
  
  // Reduce gap
  content = content.replace(/gap-20/g, 'gap-10');
  content = content.replace(/gap-24/g, 'gap-12');
  
  // Reduce minimum heights
  content = content.replace(/min-h-\[70vh\]/g, 'min-h-[40vh]');
  content = content.replace(/min-h-\[75vh\]/g, 'min-h-[40vh]');
  content = content.replace(/min-h-\[80vh\]/g, 'min-h-[50vh]');
  content = content.replace(/min-h-\[40vh\]/g, 'min-h-[20vh]');
  content = content.replace(/min-h-screen/g, 'min-h-[50vh]');
  
  fs.writeFileSync(filePath, content, 'utf-8');
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      processFile(fullPath);
    }
  }
}

dirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    walkDir(dir);
  }
});

console.log("Successfully removed additional spaces across all components and pages.");
