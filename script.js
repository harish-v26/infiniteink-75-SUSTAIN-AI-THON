const progressText = document.getElementById('progress-text');
const mainContent = document.getElementById('main-content');
const loader = document.getElementById('loader');

let progressStates = ['[|          ]', '[||         ]', '[|||        ]', '[||||       ]', '[|||||      ]', '[||||||     ]', '[|||||||    ]', '[||||||||   ]', '[|||||||||  ]', '[||||||||||]'];
let currentIndex = 0;

const interval = setInterval(() => {
  if (currentIndex < progressStates.length) {
    progressText.innerText = progressStates[currentIndex];
    currentIndex++;
  } else {
    clearInterval(interval);
    loader.style.display = 'none'; 
    mainContent.style.display = 'block'; 
  }
}, 300);

const translations = {
    en: {
      welcome: "Welcome to Soil Saviour",
      slogan: "Your Smart Farming Companion",
      home: "Home",
      soilAnalysis: "Soil Analysis",
      community: "Community",
      marketplace: "Marketplace",
      Name1:"Name",
      Name2:"Email",
      namePlaceholder: "Enter your name",
      emailPlaceholder: "Enter your email",
      soilAnalysisTitle:"Soil Analysis",
      uploadSoilText:"Upload a Soil Image to get suggestions",
      communityTitle:"Community",
      communityCaption:"share your farming experience with others",
      marketplaceTitle:"Marketplace",
      marketplacecaption:"Buy and sell products from the marketplace",
      availableproducts:"Available Products",
      sellproducts:"Sell Products",
      productNAME:"Product Name:",
      productCategory:"Category",
      productName3:"Enter product name",
      Price:"Price:",
      productPrice:"Enter Price",
      saveDetails: "Save Details",
      uploadSoil: "Upload a soil image to get suggestions:",
      analyzeSoil: "Analyze Soil",
    },
    ta: {
      welcome: "மண் மீட்பவர் வரவேற்கின்றேன்",
      slogan: "உங்கள் ஸ்மார்ட் விவசாய துணை",
      home: "முகப்பு",
      soilAnalysis: "மண் பகுப்பாய்வு",
      community: "சமூகத்துடன் இணைப்பு",
      marketplace: "கடை",
      Name1:"பெயர்",
      Email1:"மின்னஞ்சல்",
      namePlaceholder: "உங்கள் பெயரை உள்ளிடவும்",
      emailPlaceholder:"உங்கள் மின்னஞ்சலை உள்ளிடவும்",
      soilAnalysisTitle:"மண் பகுப்பாய்வு",
      uploadSoilText:"பரிந்துரையைப் பெற மண் படத்தைப் பதிவேற்றவும்",
      communityTitle:"சமூகம்",
      communityCaption:"உங்களின் விவசாய அனுபவத்தை மற்றவர்களுடன் பகிர்ந்து கொள்ளுங்கள்",
      marketplaceTitle:"சந்தை",
      marketplacecaption:"சந்தையில் பொருட்களை வாங்கவும் விற்கவும்:",
      availableproducts:"கிடைக்கும் பொருட்கள்",
      sellproducts:"உங்கள் தயாரிப்புகளை விற்க",
      productNAME:"தயாரிப்பு பெயர்",
      productCategorY:"வகை",
      productName3:"தயாரிப்பு பெயரை உள்ளிடவும்",
      Price:"விலை",
      productPrice:"விலை உள்ளிடவும்",
      saveDetails: "விவரங்களை சேமிக்கவும்",
      uploadSoil: "மண் படத்தை பதிவேற்றவும் மற்றும் பரிந்துரை பெறவும்:",
      analyzeSoil: "மண் பகுப்பாய்வு செய்யவும்",
    },
  };
  
  function switchLanguage(lang) {
    document.getElementById("welcome").innerText = translations[lang].welcome;
    document.getElementById("slogan").innerText = translations[lang].slogan;
    document.getElementById("homeLink").innerText = translations[lang].home;
    document.getElementById("soilAnalysisLink").innerText = translations[lang].soilAnalysis;
    document.getElementById("communityLink").innerText = translations[lang].community;
    document.getElementById("marketplaceLink").innerText = translations[lang].marketplace;
    document.getElementById("Name1").innerText = translations[lang].Name1;
    document.getElementById("Email1").innerText = translations[lang].Email1;
    document.getElementById("name").placeholder = translations[lang].namePlaceholder;
    document.getElementById("email").placeholder = translations[lang].emailPlaceholder;
    document.getElementById("soilAnalysisTitle").innerText = translations[lang].soilAnalysisTitle;
    document.getElementById("uploadSoilText").innerText = translations[lang].uploadSoilText;
    document.getElementById("communityTitle").innerText = translations[lang].communityTitle;
    document.getElementById("communityCaption").innerText = translations[lang].communityCaption;
    document.getElementById("marketplaceTitle").innerText = translations[lang].marketplaceTitle;
    document.getElementById("marketplacecaption").innerText = translations[lang].marketplacecaption;
    document.getElementById("availableproducts").innerText = translations[lang].availableproducts;
    document.getElementById("sellproducts").innerText = translations[lang].sellproducts;
    document.getElementById("productNAME").innerText = translations[lang].productNAME;
    document.getElementById("productCategorY").innerText = translations[lang].productCategorY;
    document.getElementById("Price").innerText = translations[lang].Price;
    document.getElementById("saveDetailsBtn").innerText = translations[lang].saveDetails;
    document.getElementById("uploadSoilText").innerText = translations[lang].uploadSoil;
    document.getElementById("analyzeSoilBtn").innerText = translations[lang].analyzeSoil;
  }
  
  function showSection(sectionId) {
    document.querySelectorAll(".section").forEach((section) => section.classList.remove("active"));
    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
      sectionToShow.classList.add("active");
    } else {
      console.error(`Section with ID '${sectionId}' not found.`);
    }
  }
  
  function submitExperience() {
    const experience = document.getElementById("experience").value;
    if (experience) {
      document.getElementById("communityMessage").innerText = "Thank you for sharing your experience!";
    } else {
      alert("Please write something before submitting.");
    }
  }
  
  function uploadProduct() {
    const productName = document.getElementById("productName").value;
    const productCategory = document.getElementById("productCategory").value;
    const productPrice = document.getElementById("productPrice").value;
  
    if (productName && productCategory && productPrice) {
      alert("Product uploaded successfully!");
      document.getElementById("uploadMessage").innerText = `${productName} ($${productPrice}) added to ${productCategory}.`;
    } else {
      alert("Please fill out all fields.");
    }
  }
  
  function performSearch() {
    const searchQuery = document.getElementById("searchBar").value.toLowerCase();
    if (searchQuery.includes("soil")) {
      alert("You searched for soil!");
    }
  }
  function analyzeSoil() {
    const fileInput = document.getElementById('soilImage');
    const file = fileInput.files[0];
  
    if (!file) {
      document.getElementById('analysisResult').innerText = "Please select a soil image first.";
      return;
    }
  
    const formData = new FormData();
    formData.append('soilImage', file);
  
    fetch('http://localhost:3000/analyze-soil', {
      method: 'POST',
      body: formData,
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Soil analysis failed');
        }
        return response.json();
      })
      .then(data => {
        document.getElementById('analysisResult').innerText = 
          `Analysis Complete: ${data.result}`;
        console.log('Soil Analysis Result:', data);
      })
      .catch(error => {
        document.getElementById('analysisResult').innerText = 
          "Soil analysis failed. Please try again.";
        console.error('Error:', error);
      });
  }