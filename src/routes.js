import {
    createAppContainer, 
    createSwitchNavigator} 
    from'react-navigation';

    import{ createStackNavigator } 
    from 'react-navigation-stack';



//Routes
import Login from './pages/Login'
import Register from './pages/Register'
import Perfil from './pages/Perfil'
import AddFriends from './pages/Addfriends'
import Conversations from './pages/Conversations'
import Chat from './pages/Chat'

const routes = createAppContainer(
    createSwitchNavigator({
        Perfil,
        Login,
        Register,
        AddFriends,
        Conversations,
        Chat
    },{
        initialRouteName :'Chat'
    })
    
)

export default routes