/**
 * Created by gaoruishan on 16/10/25.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

class FindText extends Component {

    //1,创建或刷新-默认和render都会执行
    static get defaultProps() {
        console.log('FindText--defaultProps');
        return ({
            title: 'FindText'
        })
    }
    //2,创建-执行构造
    constructor() {
        super();
        console.log('FindText--constructor');
        this.state = {
            value: 'hello'
        }
    }
    //3,创建-执行将要挂载
    componentWillMount() {
        console.log('FindText--componentWillMount');
    }
    //4,创建或刷新-执行入口
    render() {
        console.log('FindText--render');
        //使用props 传递数据
        return (
            <View style={styles.findTextView}>
                <Text>{this.props.text}</Text>
            </View>
        )
    }
    //5,创建-执行已经挂载
    componentDidMount() {
        console.log('FindText--componentDidMount');
    }
    //6,刷新-控件属性变化执行
    componentWillReceiveProps() {
        console.log('FindText--componentWillReceiveProps');
    }
    //7,创建和判断是否能够更新
    shouldComponentUpdate() {
        console.log('FindText--shouldComponentUpdate');
        return true;
    }
    //8,创建或刷新-将要更新
    componentWillUpdate() {
        console.log('FindText--constructor');
    }
    //9,创建或刷新-已经更新
    componentDidUpdate() {
        console.log('FindText--componentDidUpdate');
    }
}
const styles = StyleSheet.create({
    findTextView: {
        width: 100,
        height: 50,
        backgroundColor: 'green'
    }
})
export default FindText;