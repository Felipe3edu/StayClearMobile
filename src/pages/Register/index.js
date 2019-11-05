import React from 'react'
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

function Register(props) {
    return (
        <ScrollView>
            <ImageBackground source={background} style={styles.background}>
                <Image source={logo} style={styles.logotipo} />
                <View style={styles.viewRegister}>




    <TextInput style={styles.input} placeholder="Name" />
    <TextInput style={styles.input} placeholder="E-Mail" />
    <TextInput style={styles.input} placeholder="Password" />
    <View style={styles.picker}>
    <Picker>
    <Picker.Item label="Desenvolvedor" value="desenvolvedor" />
    <Picker.Item label="Professor" value="professor" />
    <Picker.Item label="Outros" value="outros" />
    </Picker>
    </View>
    <TouchableOpacity style={styles.button}>
    <Text style={styles.textRegister}>
        Register
    </Text>
    </TouchableOpacity>               
    <TouchableOpacity style={styles.button}>
        <Text>Return</Text>
        <Icon name="arrow-back" color="#666" style={styles.iconStyle}/>
    </TouchableOpacity>

    </View>
    </ImageBackground>
    </ScrollView>

    )
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
        padding: 20

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
    }

})
export default Register



// GIT