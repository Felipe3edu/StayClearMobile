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

class Register extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        category: '',
    }
    handleSubmit = async () => {
        await Axios.post('http://10.51.47.65:3000/users', this.state)
    }        
    render() {
        return (
            <ScrollView>
                <ImageBackground source={background} style={styles.background}>
                    <Image source={logo} style={styles.logotipo} />
                    <View style={styles.viewRegister}>
                        <Text>Teste</Text>

                        <TextInput style={styles.input}
                            placeholder="Name"
                            onChangeText={(Name) => this.setState({ name:Name })}
                        />
                        <TextInput style={styles.input}
                            placeholder="E-Mail"
                            onChangeText={(Email) => this.setState({email :Email})}
                        />
                        <TextInput 
                            secureTextEntry={true}
                            style={styles.input}
                            placeholder="Password"
                            onChangeText={(Password) => this.setState({ Password:Password})}
                        />
                        <View style={styles.picker}>
                            <Picker selectedValue={(this.state.category)} onValueChange={(itemValue) =>
                                    this.setState({ category: itemValue })} >
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
        padding: 15

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



