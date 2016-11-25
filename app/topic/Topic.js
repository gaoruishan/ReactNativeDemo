/**
 * Created by gaoruishan on 16/10/28.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    ListView,
    View,
} from 'react-native';

import Api from '../Api';

class Topic extends Component {

    constructor() {
        super();
        this.state = {
            isFirst: true,
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            })
        }
    }

    componentDidMount() {
        fetch(Api.getTopic())
            .then((res)=>res.json())
            .then((res)=> {
                if (res.data) {
                    this.setState({
                        dataSource: this.state.dataSource.cloneWithRows(res.data),
                        isFirst: false,
                    })
                }
            })
            .done();
    }

    render() {
        if (this.state.isFirst) {
            return <Text style={styles.loading}>加载中....</Text>
        } else {
            return (
                <ListView
                    renderRow={(row)=>this.rowData(row)}
                    dataSource={this.state.dataSource}>
                </ListView>);
        }
    }

    //自定义item
    rowData(row) {
        return (
            <View style={styles.topicItem}>
                <Text style={styles.topicTitle}>{row.title}</Text>
                <View style={styles.topicContent}>
                    <Text style={styles.topicShare}>Share    </Text>
                    <Text>{row.author.loginname}  |  {row.reply_count}回复  |  {row.visit_count}阅读</Text>
                </View>
                <View style={styles.topicLine}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    topicItem:{
        flex:1,
        margin:10
    },
    topicTitle:{
        fontSize:16,
        fontWeight:'bold'
    },
    topicContent:{
        flex:1,
        height: 30,
        flexDirection:'row'
    },
    topicShare:{
        fontSize:15,
        color:'green'
    },
    topicLine:{
        height:1,
        backgroundColor:'#ddd'
    },
    loading: {
        height: 50,
        flex: 1,
        textAlign: 'center',
        marginTop: 20
    },
})
export default Topic;