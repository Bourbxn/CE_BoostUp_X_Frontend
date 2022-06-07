module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screen: {
      'mobile':'414px',
      'tablet':'1024px',
    },
    extend: {
      colors: {
        'red-logo':'#F33B13',
        'red':'#FF0000',
      },
      backgroundImage: {
        'app':"url('pictures/bgHome.png')",
        'app-tasks':"url('pictures/bgTasks.png')",
        'app-home':"url('pictures/bgHomeNoPlanet.png')",
        'app-css':"url('../pictures/bgHome.png')",
      },
      fontFamily: {
        'anton':['Anton'],
      },
      keyframes: {
        star: {
          '0%,100%': {width: '10px',height: '10px',opacity: '0'},
          '50%': {width: '30px',height: '30px',opacity: '1' },
        },
      },
      animation: {
        'star-amplify': 'star 2s linear infinite',
      },
    },
  },
  plugins: [],
}