import React, { Component } from 'react'
import { View, StyleSheet, ImageBackground, Image, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import background from '../../assets/BG.jpg'
import profile from '../../assets/PF.png'
import Icon from 'react-native-vector-icons/MaterialIcons'
import ImagePicker from 'react-native-image-picker'
import Axios from 'axios'
import AssyncStorege from '@react-native-community/async-storage'

// State
class Perfil extends React.Component {
    state = {
        //Armazenar o caminho do nosso avatar
        photo: '',
        description: '',
        id: '',
        token: ''
    }

    async componentDidMount() {
        const user = await AssyncStorege.getItem('user')

        //String to Object
        const { userExists,token } = JSON.parse(user)
        //Set User ID in State
        this.setState({ id: userExists.id, token: token })
    }

    // Imagen de Perfil
    ChooseAvatar() {
        ImagePicker.showImagePicker((response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = response.uri
                console.log(source)

                this.setState({
                    photo: source
                })
            }
        });

    }

    async handleSubmit() {
        const { id, token } = this.state
        const { data } = await Axios.put(`http://10.51.53.137:3000/users/${id}`, this.state,{
        Headers: {Authorization: "Bearer " + token}    
    })
    }

    render() {
        //Pegando avatar do State
        const { photo } = this.state

        console.log(photo)

        return (

            <ImageBackground source={background} style={styles.background} >
                <TouchableOpacity onPress={() => this.ChooseAvatar()}>
                    {
                        photo ?
                            <Image source={photo} style={styles.image} />
                            :
                            <Image source={profile} style={styles.image} />
                    }

                </TouchableOpacity>

                <Text>
                    ------------Profile------------
                </Text>
                <View style={styles.textAreaContainer} >
                    <TextInput
                        style={styles.textArea}
                        underlineColorAndroid="black"
                        onChangeText={(text) => this.setState({ description: text })}
                        placeholder=""
                        placeholderTextColor="grey"
                        numberOfLines={15}
                        multiline={true}
                    />
                </View>

                <View>
                    <TouchableOpacity style={styles.button} onPress={() => this.handleSubmit()}>
                        <Icon name="done" color="#fff" style={styles.iconStyle} />
                    </TouchableOpacity>
                </View>

            </ImageBackground>

        )
    }
}

const styles = StyleSheet.create({

    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',

    },
    image: {
        height: 200,
        width: 200,
        marginTop: 20,
        borderRadius: 60
    },
    iconStyle: {
        fontSize: 30,
        alignItems: 'center',
        marginBottom: 10,
        color: '#fff'

    },
    button: {
        backgroundColor: '#666',
        padding: 1,
        alignItems: 'center',
        borderRadius: 30,
        width: 250
    },
    input: {
        width: '100%',
        padding: 0,
        paddingLeft: 3,
        borderBottomWidth: 0,
        color: '#666',
    },
    textAreaContainer: {
        width: '100%',
    },
    textArea: {
        width: '100%'
    }

})

export default Perfil