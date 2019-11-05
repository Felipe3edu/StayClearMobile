import React from 'react'
import {View, StyleSheet, ImageBackground, Image, Text, TextInput} from 'react-native'
import background from '../../assets/BG.jpg'
import profile from '../../assets/PF.png'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialIcons'

function Perfil () {
    return (
        
            <ImageBackground source={background} style={styles.background}>
                
                <Image source={profile} style={styles.image}/>
                <View>
                
                <TextInput placeholder='About Me' placeholderTextColor='#fff' style={styles.input} />
               
                <TouchableOpacity style={styles.button}>
                <Text>     </Text>
                <Icon name="done" color="#fff" style={styles.iconStyle}/>
                </TouchableOpacity>
                
                </View>
                
            </ImageBackground>
        
    )
}
const styles = StyleSheet.create({
   
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',

    },
    image:{
        height:200,
        width:200,
        marginTop: 20,
        borderRadius:70        
    },
    iconStyle:{
        fontSize: 30,
        alignItems: 'center',
        
    },
    button: {
        backgroundColor: '#666',
        padding: 4,
        alignItems: 'center',
        borderRadius:70,
        width:250
    },
    input: {
        width:'100%',
        padding: 0,
        paddingLeft:3,
        borderBottomWidth: 2,
        color: '#666',
    },
})
export default Perfil