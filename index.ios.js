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
    NavigatorIOS,
    Navigator,
} from 'react-native';

import Home from './app/home/Home';
import Find from './app/find/Find';
import Me from './app/me/Me';

export default class ReactNativeDemo extends Component {
    //构造
    constructor() {
        super();
        this.state = {
            tab: 'home',
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
                    <NavigatorIOS
                        style={styles.container}
                        initialRoute={{
                            title: '控件的生命周期',
                            component: Find
                        }}/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    icon={require('./images/me.png')}
                    onPress={this.select.bind(this, 'me')}
                    selected={this.state.tab === 'me'}
                    title="我的">
                    {/*<Navigator*/}
                        {/*style={styles.container}*/}
                        {/*configureScene={(route) => {*/}
                            {/*return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;*/}
                        {/*}}*/}
                        {/*initialRoute={{*/}
                            {/*title: '控件的生命周期',*/}
                            {/*component: Me*/}
                        {/*}}*/}
                        {/*renderScene={(route, navigator) => {*/}
                            {/*let Component = route.component;*/}
                            {/*//这个语法是把 routes.params 里的每个key作为props的一个属性，在下个页面即可用this. props.id调用*/}
                            {/*//navigator对象在导航容器跳转时一直存在*/}
                            {/*return <Component {...route.params} navigator={navigator} />*/}
                        {/*}}*/}
                    {/*/>*/}
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
