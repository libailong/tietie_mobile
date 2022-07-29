import { StyleSheet, Text, View , FlatList,ListRenderItem} from 'react-native'
import CardView from './CardView'
import React from 'react'
import Card from '../../components/Card';
import SearchBar from '../../components/SearchBar'

type Props = {}

type Card = {
      username:string;
      image:string;
      date:string;
      content:string;
}

// static uri, should be changed in different localhost
const staticImage = "/Users/hanyiyu/Documents/code/tietie_mobile/screens/homepage/images/icon-192x192.png";

const cardValue : Card[]= [

      {username:"tietie用户",image:staticImage,date:"Sun Jun 26 2022",content:"这课真有意思啊"},
      {username:"tietie用户",image:staticImage,date:"Sun Jun 26 2022",content:"这课真有意思啊"},
      {username:"tietie用户",image:staticImage,date:"Sun Jun 26 2022",content:"这课真有意思啊"},
      {username:"tietie用户",image:staticImage,date:"Sun Jun 26 2022",content:"这课真有意思啊"},
      {username:"tietie用户",image:staticImage,date:"Sun Jun 26 2022",content:"这课真有意思啊"},
];




const HomepageScreen = (props: Props) => {
      const onSubmit =  (searchText: string) => {};
      
      return (
            <>
               <SearchBar  onSubmit={onSubmit}></SearchBar>
               <FlatList 
                numColumns={2}
                data={cardValue}
                renderItem={ ({item }:{item:Card}) => ( 
                
                   <View style={{
                        width:'50%',
                        paddingTop:5,
                        paddingLeft:3,
                        paddingRight:3
                  }}>
                        <CardView card={item}/>
                  </View>
                 
                 
                  
                )}
               >   
               </FlatList>
            </>
      )
}

export default HomepageScreen

const styles = StyleSheet.create({})