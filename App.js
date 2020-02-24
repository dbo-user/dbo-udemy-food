import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const navigator = createStackNavigator({
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen
}, {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
        title: 'Business Search', 
        headerTitleAlign: 'center'
    }
}); // end const navigator

// show App on screen
export default createAppContainer(navigator);
