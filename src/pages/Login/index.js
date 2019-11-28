import React,{Component} from 'react'
import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'

//Imagem de fundo
import background from '../../assets/BG.jpg' 
import Error from '../../components/Error'

import logo from '../../assets/logo.png' 
import Icon from 'react-native-vector-icons/MaterialIcons'  

class Login extends Component{

    state ={
        Login:'',
        Password:''
    }

    handleSubmit =() =>{
        console.log(this.state)
    }

  render(){
    return(
        <ImageBackground source={background} style={styles.background}>
            <Image source={logo} />
            
            
            
                <View style ={styles.viewLogin}>
                <View>
                <Icon name="email" color="#fff" style={styles.iconStyle} />
                <TextInput placeholder='E-mail ' 
                placeholderTextColor='#fff' style={styles.input} 
                onChangeText ={(Text) => this.setState({email:text})}
                />
                </View>
                
                <View style={styles.viewPassword}>
                <Icon name="lock" color="#fff" style={styles.iconStyle}/>
                <TextInput placeholder='Password' 
                placeholderTextColor='#fff' style={styles.input} 
                onChangeText ={(Text) => this.setState({Password:text})}
                />
                </View>
                
                <TouchableOpacity style={styles.button} onPress={() => this.handleSubmit()}>
                <Text>Login</Text>
                </TouchableOpacity>
                 
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Register')}>
                <Text>Register</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
        )
    }
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