tailwind.config ={
    theme:{
        extend:{
        gridTemplateColumns:{
            'auto':'repeat(auto-fit, minmax(200px,1fr))'
        },
        colors:{
            darkHover: '#2a004a',
            darkTheme: '#11001F'
        },
        boxShadow:{
            'white': '4px 4px 0 #fff',
        }
    }
},
darkMode:'selector'
}