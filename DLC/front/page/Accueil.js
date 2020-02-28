import React from 'react'; 
import {
    View,
    Text,
    Button,
    StyleSheet,
} from 'react-native';

class Accueil extends React.Component{
    render(){
        return(
            <View style={{ marginTop: 40 }}>
                <Text style= {[styles.Title]}>
                    Bienvenue sur DLC
                </Text>
                <View style={[styles.groupeButton]}>
                    <Button style={[styles.button]} title="Réfrigérateur"></Button>
                        <Text>
                            <Button style={[styles.button]} title="Produits Laitiers"></Button>
                            <Button style={[styles.button]} title="Salades Composées"></Button>
                            <Button style={[styles.button]} title="Desserts"></Button>
                            <Button style={[styles.button]} title="Plats Cuisinés"></Button>
                            <Button style={[styles.button]} title="Viandes"></Button>
                            <Button style={[styles.button]} title="Sauces"></Button>
                            <Button style={[styles.button]} title="Poissons"></Button>
                        </Text>
                    <Button style={[styles.button]} title="Epiceries"></Button>
                        <Text>
                            <Button style={[styles.button]} title="Condiments"></Button>
                            <Button style={[styles.button]} title="Huiles/Vinaigres"></Button>
                            <Button style={[styles.button]} title="Conserves Légumes"></Button>
                            <Button style={[styles.button]} title="Graines/Fruits Secs"></Button>
                            <Button style={[styles.button]} title="Conserves Viandes"></Button>
                            <Button style={[styles.button]} title="Préparation Pâticerie"></Button>
                            <Button style={[styles.button]} title="Gateaux"></Button>
                            <Button style={[styles.button]} title="Cafés/Thés"></Button>
                            <Button style={[styles.button]} title="Oeufs"></Button>
                        </Text>
                    <Button style={[styles.button]} title="Salades"></Button>
                    <Button style={[styles.button]} title="Desserts"></Button>
                    <Button style={[styles.button]} title="Epiceries"></Button>
                    <Button style={[styles.button]} title="Fromages"></Button>
                    <Button style={[styles.button]} title="Plats Cuisinés"></Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    groupeButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    },
    button: {
        padding: 10,
        margin: 10, 
    },
    Title: {
        fontSize: 75,
        flexWrap: 'wrap',
        fontWeight: 'bold',

    }
})

export default Accueil;