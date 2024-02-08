import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./style";

export default function Login(){
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    return(
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.title}>Login</Text>
            </View>
            <View style={styles.box}>
                <TextInput style={styles.inputBox} placeholder="User" onChangeText={setUser} value={user}></TextInput>
            </View>
            <View style={styles.box}>
                <TextInput style={styles.inputBox} placeholder="Password" onChangeText={setPass} value={pass} secureTextEntry={true}></TextInput>
            </View>
            <View style={styles.box}>
                <TouchableOpacity style={styles.button} onPress={()=>{console.log("User: ", user), console.log("Password: ", pass)}}>
                    <Text style={{color:'#ffffff', fontSize:15}}>OK</Text>
                </TouchableOpacity>
            </View>
        </View>
    )       
}
