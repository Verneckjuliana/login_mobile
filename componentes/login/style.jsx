import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#10002b',
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        color: '#ffffff'
    },
    box:{
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
    },
    inputBox:{
        color: '#ffffff',
        borderColor: '#5a189a',
        borderWidth: 2,
        borderRadius: 5,
        marginTop: 20,
        width: '75%',
        height: 33,
        padding: 3,
    },
    button:{
        marginTop: 15,
        width: '30%',
        height: 35,
        borderWidth: 1,
        borderColor: '#5a189a',
        borderRadius: 5,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#5a189a'
    },
    box2:{
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
    },
})

export default styles