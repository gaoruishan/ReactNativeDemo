/**
 * Created by gaoruishan on 16/10/25.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

class FindChildren extends Component {

    //1,创建或刷新-默认和render都会执行
    static get defaultProps() {
        console.log('FindChildren--defaultProps');
        return ({
            title: 'FindChildren'
        })
    }
    //2,创建-执行构造
    constructor() {
        super();
        console.log('FindChildren--constructor');
        this.state = {
            value: 'hello'
        }
    }
    //3,创建-执行将要挂载
    componentWillMount() {
        console.log('FindChildren--componentWillMount');
    }
    //4,创建或刷新-执行入口
    render() {
        console.log('FindChildren--render');
        //使用props 传递数据
        return (
            <View style={styles.FindChildrenView}>
                <Text>{this.props.text}</Text>
            </View>
        )
    }
    //5,创建-执行已经挂载
    componentDidMount() {
        console.log('FindChildren--componentDidMount');
    }
    //6,刷新-控件属性变化执行
    componentWillReceiveProps() {
        console.log('FindChildren--componentWillReceiveProps');
    }
    //7,创建和判断是否能够更新
    shouldComponentUpdate() {
        console.log('FindChildren--shouldComponentUpdate');
        return true;
    }
    //8,创建或刷新-将要更新
    componentWillUpdate() {
        console.log('FindChildren--constructor');
    }
    //9,创建或刷新-已经更新
    componentDidUpdate() {
        console.log('FindChildren--componentDidUpdate');
    }
}
const styles = StyleSheet.create({
    FindChildrenView: {
        width: 100,
        height: 50,
        backgroundColor: 'green'
    }
})
export default FindChildren;