import React from 'react'
import { View, Text } from 'react-native'
import {SearchBar} from 'react-native-elements'
export default function Discover(props){
    state = {
        search: '',
    };
    updateSearch = search => {
        this.setState({ search });
    };
    render () {
        const { search } = this.state;
    return ( 
        <View>
             <SearchBar
                style= {{
                    top: 0,
                    flex: 1,
                    justifyContent: 'center',
                }}
                placeholder = "Search Notes Here..."
                onChangeText={this.updateSearch}
                value={search}
                />
            <Text
            style = {{
                flex: 1,
                backgroundColor: "#fff",
                alignItems: 'center',
                justifyContent: 'center',
            }}
            >This is Jack editing and testing </Text>
        </View>
    );
};
}