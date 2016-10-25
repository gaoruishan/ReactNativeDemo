import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

class Header extends Component {
    render() {
        return (
            <View style={styles.homeContainer}>
                <Text style={[styles.homeText, {color: 'red'}]}>网易</Text>
                <Text style={[styles.homeText, {backgroundColor: 'red', color: 'white',padding:1}]}>新闻</Text>
                <Text style={[styles.homeText]}>有态度°</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        backgroundColor: 'white',
        height: 30,
        borderBottomWidth: 2,
        borderBottomColor: 'red',
        justifyContent: 'center',//内部控件水平居中
        flexDirection: 'row',
        alignItems: 'center'//内部控件垂直居中
    },
    homeText: {
        fontSize: 20,
        fontWeight: 'bold'

    }
});

export default Header;