module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'red-logo':'#F33B13',
        'red':'#FF0000',
        'purple-joker':'#644CF9',
        'gray-mission-box':'#55656F',
        'black-mission-box':'#0A0E21',
        'purple-search':'#08303C',
      },
      backgroundImage: {
        'app':"url('pictures/bgHome.png')",
        'app-tasks':"url('pictures/bgTasks.png')",
        'app-css':"url('../pictures/bgHome.png')",
      },
      fontFamily: {
        'anton':['Anton'],
      }
    },
  },
  plugins: [],
}