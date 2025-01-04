import { Colors } from 'constants/colors';
import { configureFonts, MD3LightTheme } from 'react-native-paper';

const baseFont = {
  fontFamily: 'Poppins-Regular',
} as const;

const baseVariants = configureFonts({ config: baseFont });

// Then, define custom fonts for different variants

const customVariants = {
  // Customize individual base variants:
  displayMedium: {
    ...baseVariants.displayMedium,
    fontFamily: 'Poppins-Bold',
  },
  titleMedium: {
    ...baseVariants.titleMedium,
    fontFamily: 'Poppins-Bold',
  },

  // Add own tokens if required:
  bold: {
    ...baseVariants.bodyMedium,
    fontFamily: 'Poppins-Bold',
  },
  italic: {
    ...baseVariants.bodyMedium,
    fontFamily: 'Poppins-Italic',
  },
  boldItalic: {
    ...baseVariants.bodyMedium,
    fontFamily: 'Poppins-BoldItalic',
  },
} as const;

const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: Colors.primary,
    surface: Colors.primary,
    secondary: Colors.secondary,
    surfaceVariant: Colors.white,
  },
};

const fonts = configureFonts({
  config: {
    ...baseVariants,
    ...customVariants,
  },
});

export { theme, fonts };
