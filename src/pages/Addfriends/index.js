import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Perfil from '../../assets/BG.jpg'
import { TextInput } from 'react-native-gesture-handler'

class AddFriends extends Component {
    render() {
        return (

            <View style={styles.BG}>
                <View style={styles.Card}>
                    <Image source={Perfil} style={styles.Perfil}>

                    </Image>
                    <View style={styles.UserInfo}>
                        <Text style={styles.Name}>
                            Felipe
                    </Text>

                      
                           <Text>
                               Hello World 
                           </Text>
              
                    </View>
                </View>
                <View style={styles.BGB}>
                    <TouchableOpacity>
                   <Icon name="done" color="#666" style={styles.Icon}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Icon name="undo" color="#666" style={styles.Icon}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Icon name="clear" color="#666" style={styles.Icon}/>
                    </TouchableOpacity>

                </View>
            </View>


        )
    }
}

const styles = StyleSheet.create({
    BG: {
        flex: 3,
        alignItems: 'center',
        backgroundColor: '#8542DA',
    },
    Card: {
        height: 350,
        width: 330,
        backgroundColor: '#C4C4C4',
        marginTop: 20,
        borderRadius: 30
    },
    BGB: {
        height: 40,
        width: 330,
        backgroundColor: '#C4C4C4',
        marginTop: 40,
        borderRadius: 30,
        marginTop: 240,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    Icon: {
        fontSize: 30,
        color: '#666',
      
        
    },
    Perfil: {
        width: '100%',
        height: 260,
        alignItems: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    Name: {
        fontSize: 18,
        color: '#666'
    },
    Bio: {
        fontSize: 12,
        color: '#666',
    },
    UserInfo: {
        alignItems: 'center'
    },
   
})
export default AddFriends