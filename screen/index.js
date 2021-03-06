import Loginscreen from './Login';
import Signupscreen from './SignUp';
import Main from './Home';
import Detail from './Detail';
import Userscreen from './User';
import { CardStyleInterpolators } from '@react-navigation/stack';

export default [
    {
        name: 'Login',
        component: Loginscreen,
        options: { headerShow: false },
    },
    {
        name: 'SignUp',
        component: Signupscreen,
        options: { headerShow: false },
    },
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