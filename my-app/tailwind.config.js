module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'red-logo':'#F33B13',
        'red':'#FF0000',
        'purple-white' : '#644CF9',
        'bg_table' : '#2D384B',
      },
      backgroundImage: {
        'app':"url('pictures/bgHome.png')",
        'app-tasks':"url('pictures/bgTasks.png')",
        'app-css':"url('../pictures/bgHome.png')",
        'rankingBg': "url('../pictues/rankingBg.png')",
      },
      fontFamily: {
        'anton':['Anton'],
      },
      height:{
        '900' : '900px',
        '1080' : '1080px',
      },
      width:{
        '1300':'1300px',
      },
    },
  },
  plugins: [],
}