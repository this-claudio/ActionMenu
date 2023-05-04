import React, {useState, useEffect} from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { MotiView, AnimatePresence, useAnimationState } from 'moti'
import { AntDesign } from '@expo/vector-icons'

export default function ActionButton({button1Func, button2Func, icon1, icon2}) {
    
    const [OpenMenu, setOpenMenu] = useState(false);

    const animationState = useAnimationState({
        open: {
            transform: [{rotate: '45deg'}]
        },
        close: {
            transform: [{rotate: '0deg'}]
        },
      });

    useEffect(() => {
        if (OpenMenu === true) {
          animationState.transitionTo('open');
        } else {
          animationState.transitionTo('close');
        }
      }, [OpenMenu]);

 return (
   <View style={styles.container}>

    <AnimatePresence exitBeforeEnter>
        { 
        <MotiView style={styles.ActionView}
            state={animationState}>
            
            <TouchableHighlight style={styles.OpenButton}
            onPress={()=>{setOpenMenu(!OpenMenu)}}>
                <AntDesign name="plus" size={36} color="white" />
            </TouchableHighlight>

        </MotiView>}
    </AnimatePresence>


    <AnimatePresence exitBeforeEnter>
        { OpenMenu && 
        <MotiView style={styles.ActionView}

        from={{translateY: 100, opacity: 0}}
        animate={{translateY: 0, opacity: 1}}
        //</AnimatePresence>transition={{type: 'timing', duration: 500, delay:100}}
        exit={{translateY: 100, opacity: 0}}>   

            
            <TouchableHighlight style={styles.ActionButtons}
            onPress={button1Func}>
                <AntDesign name={icon1} size={20} color="white" />
            </TouchableHighlight>

            <TouchableHighlight style={styles.ActionButtons}
            onPress={button2Func}>
                <AntDesign name={icon2}  size={20} color="white" />
            </TouchableHighlight>

        </MotiView> }
    </AnimatePresence>       
            


   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        //backgroundColor: "#ff0000",
        position: "absolute",
        bottom: 80,
        right: 10,
        flexDirection: "column-reverse",
        gap: 10,
        alignItems: "center"
    },
    OpenButton:{
        width:80,
        height:80,
        borderRadius:99,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#124C49",
        zIndex:99
    },
    ActionButtons:{
        width:50,
        height:50,
        borderRadius:99,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#124C49",
    },
    ActionView:{
        gap: 10,
        flexDirection: "column-reverse",
    }
})