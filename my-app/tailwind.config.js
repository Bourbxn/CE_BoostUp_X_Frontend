module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      'md': '960px',
      'mb': {'max': '420px'},
      'tb': {'min': '421px','max': '1024px'},
      'pc2': {'min': '1025px','max': '1450px'},
      'pc': {'min': '1451px'},
    },
    extend: {
      colors: {
        'red-logo':'#F33B13',
        'red':'#FF0000',
      },
      backgroundImage: {
        'app':"url('pictures/bgHome.png')",
        'app-tasks':"url('pictures/bgTasks.png')",
        'app-home':"url('pictures/bgHome.png')",
        'app-home-mobile':"url('pictures/bgHome(mobile).jpg')",
        'app-home-tablet':"url('pictures/bgHome(tablet).jpg')",
        'app-css':"url('../pictures/bgHome.png')",
      },
      fontFamily: {
        'anton':['Anton'],
      },
      keyframes: {
        star: {
          '0%' :{transform: 'scale(1, 1)',opacity: '0'},   
          '50%' :{transform: 'scale(3, 3)',opacity: '1'},
          '100%' :{transform: 'scale(1, 1)',opacity: '0'},
        },
      },
      animation: {
        'star1': 'star 2s linear infinite',
        'star2': 'star 2s linear 1s infinite',
        'star3': 'star 2s linear 0.5s infinite'
      },
    },
  },
  plugins: [],
}