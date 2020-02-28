import React from "react";
import { FlatList, StyleSheet, View, Button, TextInput} from "react-native";
import film from "../helpers/filmData"
import FilmItem from "./FilmItem";

class Search extends React.Component {
    render() {
        return (
            <View style={ styles.main_container }>
                <TextInput style= { styles.textInput } placeholder="titre du film" />
                <Button  style= {{ height:50 }} title="Rechercher" onPress={ () => {}} />
                <FlatList 
                    data= {film}
                    keyExtractor= {(item) => item.id.toString()}
                    renderItem={({item}) => <FilmItem film={item}/>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({

    main_container: {
        marginTop: 20,
        flex: 1,
    },
    textInput : {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000', 
        borderWidth: 1,
        paddingLeft: 5,
    }
})

export default Search;