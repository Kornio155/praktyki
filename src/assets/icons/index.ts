import lifting from './lifting.svg';
import therapy from './therapy.svg';
import stretching from './stretching.svg';
import support from './support.svg';
import light_bulb from './light_bulb.svg';
import nutrition from './nutrition.svg';
import waistline from './waistline.svg';
import calculator from './calculator.svg';
import heart from './heart.svg';
import map from './map.svg';

export const icons = {
    lifting,
    therapy,
    stretching,
    support,
    light_bulb,
    nutrition,
    waistline,
    calculator,
    heart,
    map
} as const;

export type IconName = keyof typeof icons;