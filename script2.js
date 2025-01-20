const analyzeBtn = document.getElementById('analyzeBtn');
    const outputDiv = document.getElementById('output');
    const resultParagraph = document.getElementById('result');
    const loadingDiv = document.getElementById('loading');

    analyzeBtn.addEventListener('click', () => {
      const soilColor = document.getElementById('soil-color').value;
      const soilAppearance = document.getElementById('soil-appearance').value;

      outputDiv.style.display = 'none';
      loadingDiv.style.display = 'block';

      
      setTimeout(() => {
        loadingDiv.style.display = 'none'; 

        let result = '';

        
        if (soilColor === 'black' && soilAppearance === 'sticky') {
          result = 'Your soil is Clayey with high water retention. Ideal crops: Rice, Sugarcane. Add nitrogen-rich fertilizers.';
        } else if (soilColor === 'red' && soilAppearance === 'loose') {
          result = 'Your soil is Sandy with low fertility. Ideal crops: Peanuts, Millets. Add organic compost for better yields.';
        } else if (soilColor === 'yellow' && soilAppearance === 'crumbly') {
          result = 'Your soil is Loamy, fertile and well-draining. Ideal crops: Wheat, Corn, Vegetables.';
        } else if (soilColor === 'brown' && soilAppearance === 'dry') {
          result = 'Your soil is Alluvial with rich minerals. Ideal crops: Paddy, Wheat, Sugarcane. Maintain moisture.';
        } else if (soilColor === 'gray' && soilAppearance === 'wet') {
          result = 'Your soil is Marshy and acidic. Ideal crops: Coconut, Jute. Ensure proper drainage.';
        } else {
          result = 'Unknown soil type. Please consult a local expert for better guidance.';
        }

        resultParagraph.textContent = result;
        outputDiv.style.display = 'block';
      }, 3000); 
    });
