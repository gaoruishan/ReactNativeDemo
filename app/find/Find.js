/**
 * Created by gaoruishan on 16/10/25.
 */
//noinspection JSUnresolvedVariable
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import FindText from './FindText';

/**
 * 生命周期
 * 1.defaultProps
 * 2,constructor
 * 3,componentWillMount
 * 4,render--->加载内部的View
 * 5,componentDidMount
 * 6,shouldComponentUpdate--->返回true才能更新
 * 7,componentWillUpdate
 * 8,componentDidUpdate
 */
class Find extends Component {

    //1,默认
    static get defaultProps() {
        console.log("Find--defaultProps");
        return ({
            title: 'Find标题'
        })
    }

    //2,构造方法
    constructor(props) {
        super(props);
        console.log("Find--constructor");
        this.state = {
            title: '控件的生命周期',
            text: 'hello world'
        }
    }

    setTextChange() {
        this.setState({
            text: 'changed!!!! '
        })
    }

    //3,将要挂载
    componentWillMount() {
        console.log("Find--componentWillMount");
    }

    //4,入口
    render() {
        console.log("Find--render");
        return (
            <View style={styles.findView}>
                <Text style={{fontSize: 20, marginBottom: 20}}>{this.state.title}</Text>
                <FindText text={this.state.text}/>
                <Text
                    style={styles.textView}
                    onPress={()=> {
                        this.setTextChange()
                    }}>
                    点击更新
                </Text>
            </View>
        )
    }

    //5,已经挂载
    componentDidMount() {
        console.log("Find--componentDidMount");
    }

    //5-6当改变控件属性调用
    componentWillReceiveProps() {
        console.log("Find--componentWillReceiveProps");
    }

    //6,是否更新
    shouldComponentUpdate() {
        console.log("Find--shouldComponentUpdate");
        return 'true';//返回true才能执行下面的两个方法,从而改变数据
    }

    //7,将要更新
    componentWillUpdate() {
        console.log("Find--componentWillUpdate");
    }

    //8,已经更新
    componentDidUpdate() {
        console.log("Find--componentWillUpdate");
    }
}

const styles = StyleSheet.create({
    findView: {
        flex: 1,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textView: {
        width: 100,
        height: 50,
        backgroundColor: 'gray',
        marginTop: 20
    }
})
export default Find;