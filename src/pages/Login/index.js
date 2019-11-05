import React from 'react'
import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'

import background from '../../assets/BG.jpg' //Imagem de fundo
import logo from '../../assets/logo.png'

import Icon from 'react-native-vector-icons/MaterialIcons' 

function Login( props ) {
    console.log( props )
    return(
        <ImageBackground source={background} style={styles.background}>
            <Image source={logo} />
            
            
            
                <View style ={styles.viewLogin}>
                <View>
                <Icon name="email" color="#fff" style={styles.iconStyle}/>
                <TextInput placeholder='Digite seu e-mail' placeholderTextColor='#fff' style={styles.input} />
                </View>
                
                <View style={styles.viewPassword}>
                <Icon name="lock" color="#fff" style={styles.iconStyle}/>
                <TextInput placeholder='Digite sua senha' placeholderTextColor='#fff' style={styles.input} />
                </View>
                
                <TouchableOpacity style={styles.button}>
                <Text>Login</Text>
                <Icon name="arrow-forward" color="#666" style={styles.iconStyle}/>
                </TouchableOpacity>
                 
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Register')}>
                <Text>Cadastrar</Text>
                <Icon name="person-add" color="#666" style={styles.iconStyle}/>
                </TouchableOpacity>



            </View>
        </ImageBackground>
    )
}

//Nossos estilos de páginas
const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewLogin: {
        backgroundColor: '#2F3236',
        width: '90%',
        padding: 15,
        marginTop: 30
    },
    input: {
        width:'100%',
        padding: 0,
        paddingLeft:30,
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
    },
    button: {
        backgroundColor: '#fff',
        marginTop: 15,
        padding: 5,
        alignItems: 'center'
    },
    iconStyle:{
        position:"absolute",
        fontSize: 30,
        left:0
    },
    viewPassword:{
        marginTop: 20,
    }
})

export default Login