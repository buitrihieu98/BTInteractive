import React, {useState} from 'react';
import {View, Text,StyleSheet,Alert, TouchableOpacity} from 'react-native';

const InteractiveComponent = ()=>{
    const [colorArray, setColorArray] = useState(['white'])//mang luu lich su cac mau` da chon
    const [Index, setIndex] = useState(0)//bien luu mau hien tai
    const [redoArray, setRedoArray] = useState([]) //mang luu cac mau` da~ undo, phuc vu viec redo

    //ham thuc hien viec doi mau
    const changeColorArray = (inputColor) =>{
        let i=Index
        let a=colorArray
        setColorArray(a.concat(inputColor))
        setIndex(i+1)
        setRedoArray([])
    }
    //ham thuc hien viec undo: them mau vua undo vao dau` redoarray, sau do xoa mau do khoi colorarray, giam index 1 don vi de hien thi mau truoc do
    const Undo = () => {
        let i=Index
        let a=colorArray
        let r=redoArray
        let newRedoArray=[]
        if (i > 0) {
            setRedoArray(newRedoArray.concat(a[i]).concat(r))
            setColorArray(a.splice(0,i))
            setIndex(i - 1)
        }
    };
    const Redo = () => {
        let i=Index
        let a=colorArray
        let r=redoArray
        if(redoArray.length>0){
            setColorArray(a.concat(r))
            setRedoArray(r.splice(0,r.length-1))
            setIndex(i+1)
        }
    };
    return(
        <View style={{flex:1, justifyContent: 'flex-start'}}>
            <View style={{flex:5, alignSelf:'flex-start',flexDirection: 'row', marginTop: 24}}>
                <TouchableOpacity style={styles.buttonRed} onPress={()=>{changeColorArray('red')}}>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonGreen} onPress={()=>{changeColorArray('green')}}></TouchableOpacity>
                <TouchableOpacity style={styles.buttonBlue} onPress={()=>{changeColorArray('blue')}}></TouchableOpacity>
                <TouchableOpacity style={styles.buttonUndoRedo} onPress={()=>{Undo()}}>
                    <Text>Undo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonUndoRedo} onPress={()=>{Redo()}}>
                    <Text>Redo</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex:6}}>
                <View style={[styles.square, {backgroundColor: colorArray[Index]}]}></View>
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
