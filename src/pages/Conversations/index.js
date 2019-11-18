import React, { Component } from 'react'
import background from '../../assets/BG.jpg'
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
        
    }
    
];

//Retorna somente uma View
function Item({ avatar, name, msgn }) {
    return (
        <View style={styles.item}>
            <Image  source ={{uri: avatar}} style ={styles.avatar}/>
            <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.msgn}>{msgn}</Text>
            </View>          
            </View>
    );
}

class Conversations extends Component {
    render() {
        return (
            <ImageBackground source={background} style={styles.BGView}>
                <View>
                <FlatList
        data={DATA}
        renderItem={({ item }) => <Item avatar={item.avatar} 
                                          name={item.name} 
                                          msgn={item.msgn}/>}
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
    item: {
        backgroundColor: '#252121',
        padding: 0,
        marginVertical: 9,
        marginHorizontal: 16,
        alignItems:'center',
        borderRadius:40,
        flexDirection:'row'
    },
    avatar: {
        height:74,
        width:79,
        borderRadius:50,
        
    },
    name: {
        fontSize:20,
        color:'#fff',
        marginLeft:6
    },
    msgn:{
        fontSize:15,
        color:'#fff',
        marginLeft: 10
    }
})



export default Conversations