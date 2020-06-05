import { TextStyle } from 'react-native';
import { color, typography } from '../../../theme';

/**
 * All text will start off looking like this.
 */
const BASE: TextStyle = {
    fontFamily: typography.primary,
    color: color.dark_1,
    fontSize: 15,
    margin: 10
};

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const presets = {
    /**
     * The default text styles.
     */
    default: BASE,

    /**
     * A bold version of the default text.
     */
    bold: {
        ...BASE,
        fontWeight: 'bold',
        backgroundColor: color.accent_2
    } as TextStyle,

    /**
     * Large headers.
     */
    header: { ...BASE, fontSize: 24, fontWeight: 'bold' } as TextStyle,

    /**
     * Field labels that appear on forms above the inputs.
     */
    fieldLabel: { ...BASE, fontSize: 13, color: color.dim } as TextStyle,

    /**
     * A smaller piece of secondard information.
     */
    secondary: { ...BASE, fontSize: 9, color: color.dim } as TextStyle
};

/**
 * A list of preset names.
 */
export type TextPresets = keyof typeof presets;
