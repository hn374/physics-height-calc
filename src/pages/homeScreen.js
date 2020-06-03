import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Text } from "react-native";
import Modal from 'react-native-modal';
import { Button } from 'react-native-paper';

function HomeScreen() {
    const [time, setTime] = useState(0);
    const [milliseconds, setMilliseconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [height, setHeight] = useState(0);
    const [visible, setVisible] = useState(false);

    const millisecondsRef = useRef(milliseconds);
    millisecondsRef.current = milliseconds;

    const timeRef = useRef(time);
    timeRef.current = time;
    
    function showModal() {
        setVisible(true);
    }

    function hideModal() {
        setVisible(false);
    }

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
            <Text style={ styles.time}> { ("0" + time).slice(-2) }:{ ("0" + milliseconds).slice(-2) } seconds </Text>
            <Text style={ styles.heightHeader }>HEIGHT:</Text>
            <Text style={ styles.time }> { height } meters </Text>
            <Modal isVisible={visible}>
                <View style={ styles.modal }>
                    <Text style={ styles.modalText }>Distance = (0.5) * (9.8m/s) * Time&sup2;</Text>
                    <Text style={ styles.modalText }>Drop an object from the height you want to measure. Time it until it hits the bottom!</Text>
                    <Button style={ styles.modalButton } onPress={ hideModal }>HIDE</Button>
                </View>
            </Modal>
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
                <Button style={ styles.startButton }icon="cloud-question" mode="contained" onPress={ showModal }>
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
    modal: {
        height: 250,
        width: 350,
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: '#41C4FC',
        borderRadius: 75
    },
    modalText: {
        fontFamily: 'Avenir-Roman',
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
        fontWeight: '900',
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20
    },
    modalButton: {
        backgroundColor: 'white',
        width: 150,
        marginBottom: 10,
        color: 'white',
        marginTop: 90,
        marginLeft: 100
    }
});

export default HomeScreen;