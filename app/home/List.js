import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

class List extends Component {
    constructor() {
        super();
        this.state = {}
    }

    static get defaultProps() {
        return {
            title: 'item'
        }
    }

    render() {
        return (
            <View style={styles.homeList}>
                <Text style={styles.homeTitle}>{this.props.title}</Text>
                <View style={styles.homeLine}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    homeList: {
        flex: 1,
        marginLeft:10,
        marginRight:10
    },
    homeLine:{
        height:1,
        backgroundColor:'#ddd',
    },
    homeTitle:{
        fontSize:17,
        marginBottom:8,
        marginTop:16//两被的距离
    }
})
export default List;