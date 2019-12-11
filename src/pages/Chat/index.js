import React, { Component } from 'react'
import { View, StyleSheet, Text, Flatlist } from 'react-native'

const DATA = [
    {
        id: 1,
        idUser: 2,
        msng: 'Oi Amiginhuu ! !'
    },
    {
        id: 2,
        idUser: 1,
        msng: 'Eai Otaku ! !'
    },
    {
        id: 1,
        idUser: 2,
        msng: 'Tudo bem man ?'
    },
    {
        id: 2,
        idUser: 1,
        msng: 'Não'
    },
    {
        id: 1,
        idUser: 2,
        msng: 'Prq?'
    },
    {
        id: 1,
        idUser: 2,
        msng: 'Narutin acabo cara'
    },
]
 
class Chat extends Component {
    render() {
        return (
            <View style={styles.backgroundView} >
                <Flatlist
                    data={DATA}
                    renderItem={({ item }) =>
                        <React.Fragment>
                            {
                                item.idUser === 1 ? (
                                    <View style={styles.friend}>
                                        <Text style={styles.colorText}>{item.msng}</Text>
                                    </View>
                                ) : (
                                        <View style ={styles.my}>
                                            <Text style={styles.colorText}>{item.msng}</Text>
                                        </View>
                                    )

                            }
                        </React.Fragment>
                    }
                    keyExtractor={iten =>item.id}
                />
            </View >
        )
    }
}
const styles = StyleSheet.create({
     backgroundView:{
         flex: 1,
         backgroundColor:'#19181F',
         padding:20
     },
     friend:{
        padding: 20,
        width: 150,
        borderRadius: 20,
        backgroundColor: 'red'
     },
     my:{
         right:100,
         padding: 20,
         width: 150,
         borderRadius:20,
         backgroundColor:'blue'
     },
     colorText:{
         color : '#fff'
}
})
export default Chat