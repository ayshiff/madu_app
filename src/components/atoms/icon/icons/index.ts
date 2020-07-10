/* eslint-disable global-require */
export const icons = {
    home: require('./home.png'),
    home_active: require('./home_active.png'),
    crown: require('./crown.png'),
    crown_active: require('./crown_active.png'),
    active_ellipse: require('./active_ellipse.png'),
    settings: require('./settings.png'),
    back: require('./back.png'),
    map: require('./map.png'),
    user: require('./user.png'),
    user_active: require('./user_active.png'),
    explore: require('./explore.png'),
    explore_active: require('./explore_active.png'),
    close: require('./close.png'),
    phone: require('./phone.png'),
    pin: require('./pin.png'),
    website: require('./website.png'),
    logout: require('./logout.png'),
    like: require('./like.png'),
    like2: require('./like2.png'),
    // Map icons
    map_bar: require('./map_bar.png'),
    map_experience: require('./map_experience.png'),
    map_shop: require('./map_shop.png'),
    map_restoration: require('./map_restoration.png'),
    challenge_done: require('./challenge_done.png')
};

export type IconTypes = keyof typeof icons;
