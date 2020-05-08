import React, {useState} from 'react';
import {View, Text,StyleSheet, TouchableOpacity} from 'react-native';

const InteractiveComponent = ()=>{
    const [color, setColor] = useState('white')

    return(
        <View style={{flex:1, justifyContent: 'flex-start'}}>
            <View style={{flex:5,alignSelf:'flex-start',flexDirection: 'row', marginTop: 24}}>
                <TouchableOpacity style={styles.buttonRed} onPress={()=>{
                    setColor('red')
                }}>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonGreen} onPress={()=>{
                    setColor('green')
                }}></TouchableOpacity>
                <TouchableOpacity style={styles.buttonBlue} onPress={()=>{
                    setColor('blue')
                }}></TouchableOpacity>
                <TouchableOpacity style={styles.buttonUndoRedo}>
                    <Text>Undo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonUndoRedo}>
                    <Text>Redo</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex:6}}>
                <View style={[styles.square, {backgroundColor: color}]}></View>
            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    buttonRed:{
        height: 40,
        width: 40,
        backgroundColor: 'red'
    },
    buttonGreen:{
        height: 40,
        width: 40,
        backgroundColor: 'green'
    },
    buttonBlue:{
        height: 40,
        width: 40,
        backgroundColor: 'blue'
    },
    buttonUndoRedo:{
        justifyContent: 'center',
        alignItems: 'center',
        height: 40, width: 40,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 2
    },
    square:{
        alignSelf:'center',
        height: 120,
        width: 120,
        borderColor: 'black',
        borderWidth: 2
    }
})
export default InteractiveComponent;
