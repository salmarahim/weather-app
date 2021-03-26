import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

export default class App extends React.Component {
constructor(){
  super()
  this.state={
    weather:""
  }
}
getWeather=async()=>{
var url="https://fcc-weather-api.glitch.me/api/current?lat=20&lon=77.59";
await fetch(url)
.then(response=>response.json())
.then(responseJson=>{
  this.setState({weather:responseJson})
})
.catch(error=>{
  console.error(error)
})
}
componentDidMount(){
  this.getWeather()
}



 render(){
   if(this.state.weather===""){
   return(
     <View>
    <Text>Loading...</Text>
     </View>
   )
   }
   else{
     return(
       <View>
       <Text style={{fontSize:25,alignSelf:"center",fontWeight:"bold"}}> Weather App</Text>
      <Image style={{width:200,height:200,alignSelf:"center"}}
      source={require("./forecast.png")}
      />
      <Text style={styles.textStyle}>Temp : {this.state.weather.main.temp}&deg;C</Text>
      <Text style={styles.textStyle}>Min : {this.state.weather.main.temp_min}&deg;C</Text>
      <Text style={styles.textStyle}>Max : {this.state.weather.main.temp_max}&deg;C</Text>
       </View>
     )
   }
 }
}
const styles=StyleSheet.create({
  textStyle:{
    fontSize:20,
    fontWeight:"bold",
    alignSelf:"center"
  }
})
