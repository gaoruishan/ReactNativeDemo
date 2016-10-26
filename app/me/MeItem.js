/**
 * Created by gaoruishan on 16/10/26.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
} from 'react-native';

class MeItem extends Component {

    render() {
        var rawData = this.props.rawData;
        return (
            <View style={styles.meItem}>
                <View style={styles.meItemContent}>
                    <Image style={styles.meImage} source={{uri: rawData.owner.avatar_url}}/>
                    <View style={styles.meItemText}>
                        <Text style={styles.meTitle}>{rawData.full_name}</Text>
                        <Text style={styles.meText}>rawData.description}</Text>
                    </View>
                </View>
                <View style={styles.meLine}/>
            </View>
        )
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
        height: 40,
        width: 40,
    },
    meTitle: {
        fontSize: 16,
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