/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
      'backgroundDesrcp': 'url(".//assets/mainDescrpImage.jpg")',
    
        'backgroundDescrpButton': 'url(".//assets/backroundButton.png")',
        'backgroundModalDesign': 'url(".//assets/modalDesign.png")',
        'backgroundChatDesign': 'url(".//assets/chatDesign.jpg")',
        'backgroundConsultDesign': 'url(".//assets/consultDesign.jpg")',
      
      },
    
    },
  },
  plugins: [],
}

