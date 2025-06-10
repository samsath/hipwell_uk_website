module.exports = {
  theme: {
    extend: {
      colors: {
        'electric-green': '#00ff06',
        'cyber-blue': '#00c9ff',
        'bold-orange': '#ff8004',
      },
      fontFamily: {
        'display': ['Josefin Sans', 'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
        'header': ['Raleway', 'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif']
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'float-reverse': 'float 6s ease-in-out infinite reverse',
        'float-slow': 'float 10s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-30px) rotate(2deg)' },
          '66%': { transform: 'translateY(20px) rotate(-1deg)' },
        }
      },
      boxShadow: {
        'brutal-green': '12px 12px 0 #00ff06',
        'brutal-blue': '12px 12px 0 #00c9ff',
        'brutal-orange': '12px 12px 0 #ff8004',
        'brutal-black': '12px 12px 0 #000000',
        'brutal-white': '12px 12px 0 #ffffff',
        'brutal-green-lg': '20px 20px 0 #00ff06',
        'brutal-blue-lg': '20px 20px 0 #00c9ff',
        'brutal-orange-lg': '20px 20px 0 #ff8004',
        'brutal-black-lg': '20px 20px 0 #000000',
        'brutal-white-lg': '20px 20px 0 #ffffff',
        'text-black': '8px 8px 0 #000000',
        'text-white': '6px 6px 0 #ffffff',
        'text-black-sm': '4px 4px 0 #000000',
      },
      textShadow: {
        'brutal-black': '8px 8px 0 #000000',
        'brutal-black-sm': '4px 4px 0 #000000',
        'brutal-white': '6px 6px 0 #ffffff',
        'brutal-black-lg': '-8px 8px 0 #000000',
      }
    }
  }
};
