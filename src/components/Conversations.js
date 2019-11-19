import React from 'react'
import {View, Image, Text, StyleSheet} from 'react-native'

function CardConversation({ avatar, name, msgn }) {
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
const styles = StyleSheet.create({
    item: {
        backgroundColor: '#252121',
        padding: 0,
        marginVertical: 8,
        marginHorizontal: 13,
        alignItems: 'center',
        borderRadius: 40,
        flexDirection: 'row'
    },
    avatar: {
        height: 74,
        width: 79,
        borderRadius: 50,

    },
    name: {
        fontSize: 20,
        color: '#fff',
        marginLeft: 10
    },
    msgn: {
        fontSize: 18,
        color: '#fff',
        marginLeft: 10
    }
})
export default CardConversation