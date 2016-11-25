/**
 * Created by gaoruishan on 16/10/25.
 * 接口:
 * 1,https://api.github.com/search/repositories?q=facebook
 * 2,https://cnodejs.org/api/v1/topics
 * 3,https://cnodejs.org/api/v1/topic/57de1b15b11d78e3659db5b0
 */

//noinspection JSUnresolvedVariable
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    ListView,
} from 'react-native';

import MeItem from './MeItem';
import Api from '../Api';


class Me extends Component {

    constructor() {
        super();
        //创建listView
        this.state = {
            isFirst: true,
            //初始化数据
            dataSource: new ListView.DataSource({
                //如果返回Boolean类型,直接使用r1 !== r2
                rowHasChanged: (r1, r2) => r1 !== r2
            })
        }
    }

    render() {
        if (this.state.isFirst) {
            var content =
                <Text style={styles.loading}>正在加载中.....</Text>
        } else {
            var content = <ListView
                dataSource={this.state.dataSource}
                renderRow={(rawData) =>this.renderRow(rawData)}
            />
        }
        return (
            <View style={styles.meView}>
                <TextInput
                    style={styles.meTextInput}
                    placeholder='请输入关键字'
                    onEndEditing={(e)=>this.goSearchContent(e)}/>
                <View>{content}</View>
            </View>
        )
    }

    //挂载完加载数据
    componentDidMount() {
        this.getNetDatas(Api.buildSearch('facebook'));
    }

    //搜索数据
    goSearchContent(e) {
        var s = e.nativeEvent.text.toLowerCase().trim();
        var url = Api.buildSearch(encodeURIComponent(s));//编码处理
        this.getNetDatas(url);
    }

    getNetDatas(url) {
        console.log(url);
        fetch(url)
            .then((response)=>response.json())
            .then((responseData)=> {
                console.log(responseData);
                if (responseData.items) {
                    this.setState({
                        dataSource: this.state.dataSource.cloneWithRows(responseData.items),
                        isFirst: false
                    });
                }
            })
            .done();
    }

    //自定义item
    renderRow(rawData) {
        return (<MeItem rawData={rawData}/>);
    }
}
const styles = StyleSheet.create({
    meView: {
        flex: 1,
        margin: 10,
    },
    meTextInput: {
        marginTop: 20,
        height: 30,
        backgroundColor: '#eaeaea',
        borderRadius: 3,
        paddingLeft: 5,
        fontSize: 14,
    },
    loading: {
        height: 50,
        flex: 1,
        textAlign: 'center',
        marginTop: 20
    },
});

export  default Me;