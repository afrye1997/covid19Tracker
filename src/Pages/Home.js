import React from "react";
import CallingAPI from '../Components/APIs/useCovidApi';
// import {Bar} from 'react-chartjs-2';


const Home=()=> {
const countryArray=["China", "USA", "Italy"]

// const stat=[]
var hey={}
hey=CallingAPI(countryArray[0])
console.log(hey)

// countryArray.map(country=>{
//   var hey=CallingAPI(country)
//    console.log("country", country)
  
//    console.log(typeof(hey))
//   stat.push(hey.deaths)
//   return stat
// })






  return (
  <div>
   {/* {stat.map((death, index) => (
     <div key={index}>
        <p>{death}</p>
    </div>
      ))} */}
      hi
  </div>

   
  );
}
export default Home;