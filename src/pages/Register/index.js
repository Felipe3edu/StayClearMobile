import React, { Component } from 'react'
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    TextInput,
    Image,
    TouchableOpacity,
    Picker,
    ScrollView,
    Alert
    } from 'react-native'
import background from '../../assets/BG.jpg'
import logo from '../../assets/logo.png'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Axios from 'axios'
import Error from '../../components/Error'

class Register extends Component {
    state = {
        user :{
            name:      '',
            email:     '',
         password:     '',
         category:     '',
     }, 
            errorText: '',
            error:     false,          
     }
            

    handleSubmit = async () => {
        const {data} = await Axios.post('http://10.51.47.65:3000/users', this.state)
        
        //Verifica erros no
        if (data.error){
            this.setState({error:true, errorText:data.error})
        }
        console.log(response)
    }

    render() {
        const {error,errorText}=this.state
        return (
            <ScrollView>
                <ImageBackground source={background} style={styles.background}>
                    <Image source={logo} style={styles.logotipo} />
                        {/* NOSSO COMPONENTE ERRO*/}
                        {
                            error&&
                            <Error Text={errorText}/>
                        }
                    <View style={styles.viewRegister}>
                        <TextInput style={styles.input}
                            placeholder="Name"
                            onChangeText={(Name) => this.setState({ user:{...this.state.user, name:Name }})}
                        />
                        <TextInput style={styles.input}
                            placeholder="E-Mail"
                            onChangeText={(Email) => this.setState({ user:{...this.state.user, email:Email }})}
                        />
                        <TextInput 
                            secureTextEntry={true}
                            style={styles.input}
                            placeholder="Password"
                            onChangeText={(Password) => this.setState({user:{...this.state.user, password:Password }})}
                        />
                        <View style={styles.picker}>
                            <Picker selectedValue={(this.state.category)} onValueChange={(itemValue) =>
                                    this.setState({ user:{...this.state.user, category: itemValue}})}>
                                < Picker.Item label="Desenvolvedor" value="desenvolvedor"
                               
                                />
                                <Picker.Item label="Professor" value="professor"
                                    
                                />
                                <Picker.Item label="Outros" value="outros"
                                    
                                />
                            </Picker>
                        </View>
                        <TouchableOpacity style={styles.button} onPress={()=> this.handleSubmit()}>
                            <Text style={styles.textRegister}>
                                Register
    </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Login')}>
                            <Icon name="arrow-back" color="#fff" style={styles.iconStyle} />
                        </TouchableOpacity>

                    </View>
                </ImageBackground>
            </ScrollView>

        )
    }
}

const styles = StyleSheet.create({

    background: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },

    viewRegister: {
        width: '90%',
    },
    input: {
        borderBottomColor: '#2f3236',
        borderBottomWidth: 1,
        textAlign: 'center'

    },
    button: {
        marginTop: 20,
        backgroundColor: '#2f3236',
        alignItems: 'center',
        borderRadius: 5,
        padding: 14

    },
    picker: {
        marginTop: 10,
        borderColor: '#000000',
        borderWidth: 1,
        backgroundColor: '#fff',
        borderRadius: 5,

    },
    textRegister: {
        color: '#fff',
        alignItems: 'center'
    },
    iconStyle: {
        fontSize: 20,
    },

})
export default Register



