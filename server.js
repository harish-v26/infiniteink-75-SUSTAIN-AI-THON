const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); 
  }
});

const upload = multer({ storage: storage }); 

app.use(express.static('uploads'));

app.post('/analyze-soil', upload.single('soilImage'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  console.log(`File uploaded: ${req.file.originalname}`);

  
  const analysisResult = "Soil analysis complete: Your soil is healthy!"; 
  res.status(200).json({ message: analysisResult, file: req.file.filename });
});

app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  console.log(`File uploaded: ${req.file.originalname}`);
  res.status(200).json({ message: 'File submitted successfully!', file: req.file.filename });
});

app.post('/analyze-soil', upload.single('soilImage'), (req, res) => {
    console.log('File uploaded:', req.file);
    res.json({ message: 'File uploaded successfully and ready for analysis.' });
  });
  
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});