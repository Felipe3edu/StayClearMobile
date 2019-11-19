import React,{Component}from 'react'
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    TextInput,
    Image,
    TouchableOpacity,
    Picker,
    ScrollView
} from 'react-native'
import background from '../../assets/BG.jpg'
import logo from '../../assets/logo.png'
import Icon from 'react-native-vector-icons/MaterialIcons'

class Register extends Component {
    state = {
        name:     '',
        email:    '',
        password: '',
        category: '',
    }
    render() {
        return (
            <ScrollView>
                <ImageBackground source={background} style={styles.background}>
                    <Image source={logo} style={styles.logotipo} />
                    <View style={styles.viewRegister}>

                        <TextInput style={styles.input} 
                        placeholder="Name" 
                        onChangeText ={(Text) => this.setState({name:text})}
                        />
                        <TextInput style={styles.input} 
                        placeholder="E-Mail" 
                        onChangeText ={(Text) => this.setState({email:text})}
                        />
                        <TextInput style={styles.input} 
                        placeholder="Password" 
                        onChangeText ={(Text) => this.setState({Password:text})}
                        />
                        <View style={styles.picker}>
                            <Picker>
                                <Picker.Item label="Desenvolvedor" value="desenvolvedor" 
                                onChangeText ={(Text) => this.setState({category:text})}
                                />
                                <Picker.Item label="Professor" value="professor" 
                                onChangeText ={(Text) => this.setState({category:text})}
                                />
                                <Picker.Item label="Outros" value="outros" 
                                onChangeText ={(Text) => this.setState({category:text})}
                                />
                            </Picker>
                        </View>
                        <TouchableOpacity style={styles.button}>
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



