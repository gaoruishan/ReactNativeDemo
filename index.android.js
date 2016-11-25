/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Navigator,
} from 'react-native';
import Topic from './app/topic/Topic';

export default class ReactNativeDemo extends Component {

    static get defaultProps() {
        return ({
            title: '导航'
        });
    }

    render() {
        return (
            <Navigator
                initialRoute={{
                    title: '导航',
                    component: Topic
                }}

                renderScene={(route, navigator)=>
                    <Topic
                        title={route.title}
                        style={styles.container}/>
                }
            >
            </Navigator>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
});

AppRegistry.registerComponent('ReactNativeDemo', () => ReactNativeDemo);
