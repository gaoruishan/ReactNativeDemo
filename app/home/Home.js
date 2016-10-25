/**
 * Created by gaoruishan on 16/10/25.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import Header from './Header';
import List from './List';
import TextBox from './TextBox';

class Home extends Component {

    render() {
        return (
            <View style={styles.homeView}>
                <Header/>
                <List title='但是考虑到结束了大家'/>
                <List title='但是考虑到结束了大家'/>
                <List title='但是考虑到结束了大家'/>
                <List title='但是考虑到结束了大家'/>
                <List title='但是考虑到结束了大家'/>
                <Text style={styles.news}>今日要闻</Text>
                <TextBox>
                    <Text>的事实来看</Text>
                    <Text>的事实来看</Text>
                    <Text>的事实来看</Text>
                    <Text>的事实来看</Text>
                </TextBox>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    homeView: {
        flex: 1,
    },
    home_title: {
        fontSize: 20,
        justifyContent: 'center',
        textAlign: 'center',
        margin: 10
    },
    text_content: {
        fontSize: 16,
    },
    news: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red',
        margin: 10,
        paddingTop: 20
    }
})

export default Home;