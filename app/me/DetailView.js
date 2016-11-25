/**
 * Created by gaoruishan on 16/10/26.
 */
import React,{Component} from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

class DetailView extends Component{
    render(){
        return(
            <View style={styles.detailView}/>
        );
    }
}
const styles = StyleSheet.create({
    detailView:{
        flex:1,
        backgroundColor:'gray'
    }
})
export default DetailView;