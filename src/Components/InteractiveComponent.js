import React from 'react';
import {View, Text,StyleSheet, TouchableOpacity} from 'react-native';

const InteractiveComponent = ()=>{
    return(
        <View style={{flex:1, justifyContent: 'flex-start'}}>
            <View style={{flex:5,alignSelf:'flex-start',flexDirection: 'row', marginTop: 24}}>
                <TouchableOpacity style={styles.buttonRed}></TouchableOpacity>
                <TouchableOpacity style={styles.buttonGreen}></TouchableOpacity>
                <TouchableOpacity style={{height: 40, width: 40, backgroundColor: 'blue'}}></TouchableOpacity>
                <TouchableOpacity style={styles.buttonUndoRedo}>
                    <Text>Undo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonUndoRedo}>
                    <Text>Redo</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex:6}}>
                <View style={styles.square}></View>
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
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 2
    }
})
export default InteractiveComponent;
