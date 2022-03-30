import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Card.styles';

const App = (props) => {

    return (

        <View style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.description}>{props.description}</Text>
            </View>
            <TouchableOpacity style={styles.button_container} onPress={() => { alert('Merhaba ' + props.title) }}>
                <Text style={styles.button_text}>I LIKED</Text>
            </TouchableOpacity>
        </View>


    );

}

export default App;