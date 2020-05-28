import React, { useState } from "react";
import { Button } from 'react-native-paper';
import { StyleSheet, View, Text } from "react-native";

function HomeScreen() {
    const [time, setTime] = useState(0);
    const [milliseconds, setMilliseconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    function timeButtonPressed() {
        setIsActive(!isActive);
        let timer = setInterval(tick, 10);
    }

    function resetButtonPressed() {
        console.log('Reset');
        // clearInterval(time);
        // clearInterval(milliseconds);
    }

    function tick() {
        if (milliseconds == 99) {
            setTime(time + 1);
        }
        else {
            setMilliseconds(milliseconds + 1);
        }
    }

    return(
        <View>
            <Text style={ styles.header }>TIME:</Text>
            <Text style={ styles.time}> { time }:{ milliseconds } </Text>
            <View style= { styles.buttonContainer }>
                <Button style={ styles.startButton }icon="timer" mode="contained" onPress={ timeButtonPressed }>
                    { isActive ? 'Start' : 'Stop' }
                </Button>
                <Button style={ styles.startButton }icon="alarm" mode="contained" onPress={ resetButtonPressed }>
                    Reset
                </Button>
                <Button style={ styles.startButton }icon="cloud-question" mode="contained" onPress={ resetButtonPressed }>
                    How To Use
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        fontSize: 52,
        fontFamily: 'Avenir-Roman',
        color: 'white',
        fontWeight: '900',
        textAlign: 'center',
    },
    time: {
        fontSize: 52,
        fontFamily: 'Avenir-Roman',
        color: 'white',
        fontWeight: '900',
        textAlign: 'center',
        marginBottom: 50,
    },
    buttonContainer: {
        alignItems: 'center',
    },
    startButton: {
        backgroundColor: '#186CB3',
        width: 250,
        marginBottom: 10,
    },
});

export default HomeScreen;