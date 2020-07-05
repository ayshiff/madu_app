import { ViewStyle, TextStyle } from 'react-native';
import { color, spacing } from '../../../theme';

/**
 * All text will start off looking like this.
 */
const BASE_VIEW: ViewStyle = {
    paddingVertical: spacing[2],
    paddingHorizontal: spacing[2],
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    alignSelf: 'stretch'
};

const BASE_TEXT: TextStyle = {
    paddingHorizontal: spacing[3],
    textTransform: 'uppercase'
};

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const viewPresets = {
    /**
     * A smaller piece of secondard information.
     */
    primary: {
        ...BASE_VIEW,
        backgroundColor: color.palette.primary_active,
        height: 50
    } as ViewStyle
};

export const textPresets = {
    primary: {
        ...BASE_TEXT,
        fontSize: 15,
        // fontWeight: 500,
        color: color.palette.white
    } as TextStyle
};

/**
 * A list of preset names.
 */
export type ButtonPresetNames = keyof typeof viewPresets;
