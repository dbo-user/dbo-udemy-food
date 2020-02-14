import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator({
    Search: SearchScreen
}, {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
        title: 'Restaurant Search',
        headerTitleAlign: 'center'
    }
}); // end const navigator

export default createAppContainer(navigator);
