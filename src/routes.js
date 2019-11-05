import {
    createAppContainer, 
    createSwitchNavigator} 
    from'react-navigation';

    import{ createStackNavigator } 
    from 'react-navigation-stack';



//Routes
import Login from './pages/Login'
import Register from './pages/Register'

const routes = createAppContainer(
    createSwitchNavigator({
        Login,
        Register,
    })
)
export default routes