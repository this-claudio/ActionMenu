import React from 'react';
import { View,Text, StyleSheet, Alert } from 'react-native';
import ActionButton from '../../components/ActionButton/ActionButton';

export default function InitialPage() {
 return (
   <View style={styles.container}>
    <Text>Pagina Inicial</Text>
    <ActionButton 
    button1Func={()=>{Alert.alert('Botao 1')}} 
    button2Func={()=>{Alert.alert('Botao 2')}} 
    icon1={"addfile"} 
    icon2={"edit"}/>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#dadada",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})