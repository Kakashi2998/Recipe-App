import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Accordion, Button, List, ListItem, Switch, Text, View } from 'native-base';
import React from 'react';
import { Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import CategoryData from '../Data/dummyCategories';
import Categories from '../Screens/Categories';
import { toggleVeg } from '../Store/Actions/RecipeActions';

const MyDrawer = ({navigation}) => {

    const categories = useSelector(state => state.CategoryReducer.categories);

    // const veg = useSelector(state => state.RecipeReducer.veg);
    const [veg, setVeg] = React.useState(false);

    const changeVeg = () => {
        dispatch(toggleVeg());
        setVeg(veg => !veg);
    }

    const dispatch = useDispatch();

    return (
        <DrawerContentScrollView>
            <Image source={{uri: 'https://image.winudf.com/v2/image/Y29tLnRhc3R5Lm15LnJlY2lwZS5ib29rLmNvb2tib29rLmFwcF9pY29uXzE1MjIyNzQ0ODdfMDUz/icon.png?w=170&fakeurl=1'}}
            style={{width: 150, height: 150, alignSelf: 'center'}}/>
            <View style={{flexDirection: 'row', paddingHorizontal: 30, paddingVertical: 10}}>
                        <Text style={{fontSize: 20}}>Veg only</Text>
                        <Switch value={veg} onValueChange={changeVeg}/>
            </View>
            <List>
                <ListItem>
                    <Button onPress={() => navigation.navigate('Categories')} transparent>
                        <Text>All Recipes</Text>
                    </Button>
                </ListItem>
                <ListItem>
                    <Button onPress={() => navigation.navigate('Favourites')} transparent>
                        <Text>Favourites</Text>
                    </Button>
                </ListItem>
                <ListItem>
                    <Accordion dataArray={[{title: 'Categories', content: 
                        <List>
                            {categories.map(cat => 
                                <ListItem key={cat.id + '1'}> 
                                    <Button transparent 
                                    onPress={() => navigation.navigate('Category Recipes', {...cat})}>
                                        <Text>{cat.title}</Text>
                                    </Button>
                                </ListItem>
                            )}
                        </List>
                    }]}/>
                </ListItem>
            </List>
        </DrawerContentScrollView>
    );
}

export default MyDrawer;