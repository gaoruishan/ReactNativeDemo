/**
 * Created by gaoruishan on 16/10/25.
 * 接口:https://api.github.com/search/repositories?q=facebook
 */

//noinspection JSUnresolvedVariable
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';

class Me extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <View style={styles.meView}>
                <Image source={require('../../images/home.png')}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    meView: {
        flex: 1,
    }
})
export  default Me;