/* eslint-disable global-require */
export const icons = {
    home: require('./home.png'),
    settings: require('./settings.png'),
    back: require('./back.png'),
    map: require('./map.png'),
    content: require('./content.png'),
    profile: require('./profile.png'),
    explorer: require('./explorer.png'),
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
    map_restoration: require('./map_restoration.png')
};

export type IconTypes = keyof typeof icons;
