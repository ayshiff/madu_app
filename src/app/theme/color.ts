import { palette } from './palette';

/**
 * Roles for colors.  Prefer using these over the palette.  It makes it easier
 * to change things.
 *
 * The only roles we need to place in here are the ones that span through the app.
 *
 * If you have a specific use-case, like a spinner color.  It makes more sense to
 * put that in the <Spinner /> component.
 */
export const color = {
    /**
     * The palette is available to use, but prefer using the name.
     */
    palette,
    /**
     * A helper for making something see-thru. Use sparingly as many layers of transparency
     * can cause older Android devices to slow down due to the excessive compositing required
     * by their under-powered GPUs.
     */
    transparent: 'rgba(0, 0, 0, 0)',
    /**
     * The screen background.
     */
    background: palette.light_bg,
    /**
     * The main tinting color.
     */
    primary_active: palette.primary_active,
    /**
     * The main tinting color, but darker.
     */
    accent_1: palette.accent_1,
    /**
     * A subtle color used for borders and lines.
     */
    accent_2: palette.accent_2,
    /**
     * The default color of text in many components.
     */
    primary_disable: palette.primary_disable,
    /**
     * Secondary information.
     */
    dark_1: palette.dark_1,
    /**
     * Error messages and icons.
     */
    dark_2: palette.dark_2,

    /**
     * Storybook background for Text stories, or any stories where
     * the text color is color.text, which is white by default, and does not show
     * in Stories against the default white background
     */
    light_grey_1: palette.light_grey_1,

    /**
     * Storybook text color for stories that display Text components against the
     * white background
     */
    light_grey_2: palette.light_grey_2,
    white: palette.white
};
