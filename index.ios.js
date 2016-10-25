/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    TabBarIOS,
    ScrollView,
    View,
    Text,
    Image,
} from 'react-native';

import Home from './app/home/Home';
import Find from './app/find/Find';
import Me from './app/me/Me';

export default class ReactNativeDemo extends Component {
    //构造
    constructor() {
        super();
        this.state = {
            tab: 'home'
        };
    }

    //切换tab方法
    select(tabName) {
        this.setState({
            tab: tabName
        })
    }

    //入口
    render() {
        return (
            <TabBarIOS style={styles.container}>
                <TabBarIOS.Item
                    icon={require('./images/me.png')}
                    onPress={this.select.bind(this, 'home')}
                    selected={this.state.tab === 'home'}
                    selectedIcon={require('./images/me-select.png')}
                    title="首页">
                    <ScrollView><Home/></ScrollView>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    icon={require('./images/me.png')}
                    onPress={this.select.bind(this, 'find')}
                    selected={this.state.tab === 'find'}
                    title="发现">
                    <ScrollView><Find/></ScrollView>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    icon={require('./images/me.png')}
                    onPress={this.select.bind(this, 'me')}
                    selected={this.state.tab === 'me'}
                    title="我的">
                    <ScrollView><Me/></ScrollView>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

AppRegistry.registerComponent('ReactNativeDemo', () => ReactNativeDemo);
