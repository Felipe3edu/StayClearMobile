import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Error(props) {
    return (
        <View style={styles.BG}>
            <Text> {props.Text} </Text>
        </View>
    )
}
const styles = StyleSheet.create({

    BG:{
        backgroundColor:'#df0a15',
        alignItems:'center',
        borderRadius:20,
        width:100,       
    },
   
    
})
export default Error
