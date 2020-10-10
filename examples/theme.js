import { theme } from '@chakra-ui/core';

// Let's say you want to add custom colors
export default {
  ...theme,
  'colors': {
    ...theme.colors,
    primary: {
      0: "rgba(0,0,0,0.3)",
      50: "#F5E6CC",
      100: "#EED5AA",
      200: "#EACD99",
      300: "#E7C488",
      400: "#E3BC78",
      500: "#7C57F5",
      600: "#DCAB56",
      700: "#D9A345",
      800: "#D59A34",
      900: "#CB902A",
    },
    'input': '#828282',
    'base': '#F5F5F5',
    'base-inverted': '#000',
    'brand': {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac'
    }
  },
  'name': 'cyberpunk',
  'text': {
    'colorBase': '#F5F5F5',
    'shadow': '0px 0px 8px #6031FC'
  },
  'border': {
    'color': '#7C57F5',
    'colorGradientFade': '#060F1A'
  },
  'navigation': {
    'selectedItem': {
      'colorBase': '#CECECE',
      'colorMark': '#7C57F5',
      'shadow': '0px 0px 8px #6031FC'
    },
  },
  'content': {
    'pages': {
      'home': {
        'navigationIcon': 'icon-music-note-streamline',
        'backgroundImage': './main-background.png'
      },
      'tavern': {
        'navigationIcon': 'icon-music-note-streamline',
        'backgroundImage': './main-background.png'
      },
      'campaign': {
        'navigationIcon': 'icon-like-love-streamline',
        'backgroundImage': './main-background.png'
      },
      'friends': {
        'navigationIcon': 'icon-settings-streamline-1',
        'backgroundImage': './friends-background.jpg'
      },
      'character': {
        'navigationIcon': 'icon-crown-king-streamline',
        'backgroundImage': './main-background.png'
      },
      'library': {
        'navigationIcon': 'icon-crown-king-streamline',
        'backgroundImage': './main-background.png'
      },
      'config': {
        'navigationIcon': 'icon-crown-king-streamline',
        'backgroundImage': './main-background.png'
      }
    },

    'backgroundImage': './main-background.png',
    'backgroundColor': 'rgba(0, 0, 0, 0.3)',
    'backgroundBlur': '10px',
    'borderRadius': '10px'
  }
};
