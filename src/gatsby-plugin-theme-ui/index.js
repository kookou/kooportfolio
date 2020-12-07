import  novelaTheme  from  '@narative/gatsby-theme-novela/src/gatsby-plugin-theme-ui' ; 

export default {
    ...novelaTheme,
    initialColorMode: `dark`,
    colors: {
      ...novelaTheme.colors,
      primary: '#ffffff',
      secondary: '#ffffff',
      accent: '#ffffff',
      grey: '#ffffff',
      background: '#fff',
    },
  };
