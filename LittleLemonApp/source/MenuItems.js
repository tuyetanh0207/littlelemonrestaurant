import { ScrollView, Text, View } from "react-native"
import { StyleSheet } from 'react-native';
export default function MenuItems(second) {
    const menuItemsToDisplay = [
        ' Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta',
    ]
    return (
        <View style={menuStyles.container}>
            <ScrollView
            indicatorStyle={"white"}
            style ={menuStyles.scrollview}
            >
                <Text style={menuStyles.headerText}>
                    View Menu
                </Text>
                <Text style={menuStyles.text}>
                    {menuItemsToDisplay[0]}
                </Text>
            </ScrollView>
        </View>
    )
}

const menuStyles = StyleSheet.create({
    container: {
        flex: 0.75
    },
    scrollview: 
    {
        paddingHorizontal: 40,
        paddingVertical: 40,
        backgroundColor: "black"
    },
    headerText: 
    {
        color: "white", 
        fontSize: 40, 
        flexWrap: 'wrap'
    },
    text: 
    {
        color:  '#F4CE14',
        fontSize: 30
    }
})