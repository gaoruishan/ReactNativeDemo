/**
 * Created by gaoruishan on 16/10/26.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableWithoutFeedback,
} from 'react-native';

import DetailView from './DetailView';

class MeItem extends Component {

    selectedCell(rawData) {
        console.log("rawData=" + rawData.full_name);
        this.props.navigator.push({
            title:'详情',
            component:DetailView
        });
    }

    render() {
        var raw = this.props.rawData;
        return (
            <View style={styles.meItem}>
                <TouchableWithoutFeedback onPress={()=>this.selectedCell(raw)}>
                    <View style={styles.meItemContent}>
                        <Image style={styles.meImage} source={{uri: raw.owner.avatar_url}}/>
                        <View style={styles.meItemText}>
                            <Text style={styles.meTitle}>{raw.full_name}</Text>
                            <Text style={styles.meText}>{raw.description}</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.meLine}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    meItem: {
        flex: 1,
        height: 60,
    },
    meItemContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    meItemText: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 8
    },
    meImage: {
        height: 45,
        width: 45,
    },
    meTitle: {
        fontSize: 16,
        textAlignVertical: 'center',

    },
    meText: {
        fontSize: 13
    },
    meLine: {
        height: 1,
        backgroundColor: '#ddd',
    }
})

export default MeItem;