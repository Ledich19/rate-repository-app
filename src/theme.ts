import { TextStyle } from "react-native";

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#fff',

    primary: '#0366d6',
    mainBgColor: '#e1e4e8',
    panelColor: '#24292e',
  },
  fontSizes: {
    body: 14,
    subheading: 18,
    title: 20,
  },
  borders: {
    radius: 5,
  },
  fonts: {
    main: 'System',
  },
  fontWeights: {
    normal: '400' as TextStyle['fontWeight'],
    bold: '700' as TextStyle['fontWeight'],
  },
};

export default theme;
