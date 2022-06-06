module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'red-logo':'#F33B13',
        'red':'#FF0000',
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