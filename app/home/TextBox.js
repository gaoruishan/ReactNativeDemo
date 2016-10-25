import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

class TextBox extends Component {

    clickChildren() {
        alert("点击了");
    }

    render() {
        return (
            <View >{
                React.Children.map(this.props.children, (text, position)=> {
                    return (
                        <Text style={styles.homeBox} onPress={()=>this.clickChildren()}>{position},{text}</Text>
                    )
                })
            }</View>
        );
    }
}
const styles = StyleSheet.create({
        homeBox: {
            margin: 5,
            color: 'gray',
        }
    }
);
export default TextBox;