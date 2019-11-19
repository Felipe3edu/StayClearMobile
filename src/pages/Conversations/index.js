import React, { Component } from 'react'
import background from '../../assets/BG.jpg'
import CardConversations from '../../components/Conversations'
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    FlatList,
    Image
} from 'react-native'


const DATA = [
    {
        id: 1,
        avatar: 'https://i.pinimg.com/originals/34/de/e9/34dee9f2651cd97fc1b110e862ea0194.png',
        name: 'Aang',
        msgn: 'Eai',

    },
    {
        id: 2,
        avatar: 'https://upload.wikimedia.org/wikipedia/pt/thumb/f/fb/Katara.png/200px-Katara.png',
        name: 'Katara',
        msgn: 'Opa'
    },
    {
        id: 3,
        avatar: 'https://occ-0-1068-1723.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABdY0I0lNJYeq9VkQ9NDs90ILAqDFto0o39AokT3dLlcNdsOYqAGoJLG5BqnAZwRp6iCnQNpk7xuKygv6aCctd_xqKJmFCHB_EPgYYDaFwOG3qqpc.jpg?r=1ae',
        name: 'Sokka',
        msgn: 'Escrevi e sai correndo'
    },
    {
        id: 4,
        avatar: 'http://images.adagio.com/images2/custom_blends/117831.jpg',
        name: 'Toph',
        msgn: 'Cala boca Sokka'
    }

];
class Conversations extends Component {
    render() {
        return (
            <ImageBackground source={background} style={styles.BGView}>
                <View>
                    <FlatList
                        data={DATA}
                        renderItem={({ item }) => <CardConversations avatar={item.avatar}
                            name={item.name}
                            msgn={item.msgn} />}
                        keyExtractor={item => item.id}
                    />

                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({

    BGView: {
        flex: 1,
        backgroundColor: '#19181F',
    },
    
})
export default Conversations