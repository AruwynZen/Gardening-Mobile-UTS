import Main from './Home';
import Detail from './Detail';
import Userscreen from './User';
import { CardStyleInterpolators } from '@react-navigation/stack';

export default [
    {
        name: 'Home',
        component: Main,
        options: { headerShow: false},
    },
    {
        name: 'Detail',
        component: Detail,
        options: { headerShow: false },
    },
    {
        name: 'User',
        component: Userscreen,
        options: { 
            headerShow: false ,
            gestureEnabled: true,
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
        },
    },
];