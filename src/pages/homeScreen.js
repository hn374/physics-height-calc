import React, { useState, useEffect, useRef } from "react";
import { Button } from 'react-native-paper';
import { StyleSheet, View, Text } from "react-native";

function HomeScreen() {
    const [time, setTime] = useState(0);
    const [milliseconds, setMilliseconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [height, setHeight] = useState(0);

    const millisecondsRef = useRef(milliseconds);
    millisecondsRef.current = milliseconds;

    const timeRef = useRef(time);
    timeRef.current = time;

    function stopButtonPressed() {
        setIsActive(false);

        const timeToBottom = time + (milliseconds / 100);
        const distance = (0.5) * (9.8) * (timeToBottom) * (timeToBottom);

        setHeight(distance.toFixed(2));
    }

    function startButtonPressed() {
        setIsActive(true);
    }

    function resetButtonPressed() {
        setTime(0);
        setMilliseconds(0);
        setHeight(0);
    }

    function checkTime() {
    }

    useEffect(() => {
        let interval = null;

        if (isActive) {
            interval = setInterval(() => {
                if (milliseconds == 99) {
                    setTime(timeRef.current + 1);
                    setMilliseconds(0);
                } else {
                    setMilliseconds(millisecondsRef.current + 1);
                }
            }, 10);
        } else if (!isActive && time !== 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    });

    return(
        <View>
            <Text style={ styles.timeHeader }>TIME:</Text>
            {/* <Text style={ styles.time}> { time }:{ milliseconds } </Text> */}
            <Text style={ styles.time}> { ("0" + time).slice(-2) }:{ ("0" + milliseconds).slice(-2) } seconds </Text>
            <Text style={ styles.heightHeader }>HEIGHT:</Text>
            <Text style={ styles.time }> { height } meters </Text>
            <View style= { styles.buttonContainer }>
                {isActive
                ? <Button style={ styles.startButton }icon="timer" mode="contained" onPress={ stopButtonPressed }>
                    Stop
                </Button>
                : <Button style={ styles.startButton }icon="timer" mode="contained" onPress={ startButtonPressed }>
                    Start
                </Button>
                }
                <Button style={ styles.startButton }icon="alarm" mode="contained" onPress={ resetButtonPressed }>
                    Reset
                </Button>
                <Button style={ styles.startButton }icon="cloud-question" mode="contained" onPress={ checkTime }>
                    How To Use
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    timeHeader: {
        fontSize: 52,
        fontFamily: 'Avenir-Roman',
        color: 'white',
        fontWeight: '900',
        textAlign: 'center',
    },
    heightHeader: {
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
        marginBottom: 15,
    },
    height: {
        fontSize: 52,
        fontFamily: 'Avenir-Roman',
        color: 'white',
        fontWeight: '900',
        textAlign: 'center',
        marginBottom: 25,
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