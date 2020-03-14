import React from 'react'
import New from './components/New'

/*
********************************************************
        set up connection to backend
********************************************************
*/

let baseURL = process.env.REACT_APP_BASEURL

if(process.env.NODE_ENV === 'development'){
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'https://fathomless-sierra-68956.herokuapp.com'
}
  console.log(baseURL);

/*
********************************************************
           BEGIN OF CLASS
********************************************************
*/

 class App extends React.Component {
   /*
   ********************************************************
       WAITS FOR BROWSER BEFORE GRABS INFO FROM SERVER
   ********************************************************
   */



   /*
  ********************************************************
             GRABS RECIPES FROM SERVER
  ********************************************************
  */





  /*
  ********************************************************
              ADDS NEW RECIPES
  ********************************************************
  */




  /*
********************************************************
          Delete RECIPES
********************************************************
*/





/*
********************************************************
           UPDATE RECIPESS
********************************************************
*/






/*
********************************************************
           RENDER
********************************************************
*/


  render(){
  return (
    <div className="App">
      <h1>hi</h1>
      <New baseURL={baseURL} handleAddRecipe={this.handleAddRecipe}/>
    </div>
  )

}
}

export default App;
