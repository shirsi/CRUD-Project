import React from 'react'
import New from './components/New'
/*
********************************************************
          Define
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

   constructor(props){
     super(props)
     this.state = {
       recipes:[],
       recipe : null
     }
     this.getRecipes = this.getRecipes.bind(this)
     this.getRecipe = this.getRecipe.bind(this)
     // this.deleteRecipe = this.deleteRecipe.bind(this)
     this.toggleLikes = this.toggleLikes.bind(this)
     this.handleAddRecipe = this.handleAddRecipe.bind(this)
   }






   /*
   ********************************************************
       WAITS FOR BROWSER BEFORE GRABS INFO FROM SERVER
   ********************************************************
   */

      componentDidMount(){
     this.getRecipes()
   }





   /*
  ********************************************************
             GRABS RECIPES FROM SERVER
  ********************************************************
  */
      async  getRecipes(){
        try{
          let response = await fetch( `${baseURL}/recipes`)

          let data =  await response.json()
          console.log(data)

          this.setState({
            recipes: data
          })
        } catch(e){
          console.error(e)
        }
      }


  /*
  ********************************************************
              ADDS NEW RECIPES
  ********************************************************
  */
          handleAddRecipe(recipe){
            const copyRecipes = [recipe, ...this.state.recipes]
            this.setState({
              recipes: copyRecipes,
              name: '',
              ingredients: [],
              directions: '',
              image: '',
              serving: '',
              likes: ''
            })
          }






/*
********************************************************
          GET HOLIDAY FOR SHOW PAGE
********************************************************
*/

        getRecipe(recipe){
          this.setState({
            recipe: recipe
          })
          console.log(recipe);
        }






  /*
********************************************************
          Delete RECIPES
********************************************************
*/

      //   async deleteRecipe(id){
      // console.log(`I made a delete rquest to here: ${baseURL}/recipes/${id}`)
      //
      //
      //     try{
      //       let response = await fetch(`${baseURL}/recipes/${id}`, {
      //
      //         method: 'DELETE'
      //       })
      //
      //         let data =  await response.json()
      //
      //         const deletedRecipe = this.state.recipes.findIndex(recipe =>
      //         recipe._id === id)
      //
      //         const copyRecipes =[...this.state.recipes]
      //
      //         copyRecipes.splice(deletedRecipe, 1)
      //
      //         this.setState({
      //           recipes: copyRecipes
      //         })
      //
      //
      //       } catch(e){
      //         console.error(e)
      //     }
      //   }
      //
      //



/*
********************************************************
           UPDATE RECIPES
********************************************************
*/
        async toggleLikes (recipe){
          console.log(recipe)
          try {
            let response = await fetch( `${baseURL}/recipes/${recipe._id}`, {
              method: 'PUT',
              body: JSON.stringify({likes: !recipe.likes}),
              headers:{
                'Content-type': 'application/json'
              }
            })

              console.log({likes: !recipe.likes});
            let updatedRecipe =  await response.json()

            console.log(updatedRecipe)

            const foundRecipe = this.state.recipes.findIndex(recipeFound=>
              recipeFound._id === recipe._id
            )
            console.log(foundRecipe);

          const copyRecipes = [...this.state.recipes]

          copyRecipes[foundRecipe].likes = updatedRecipe.likes

          console.log(updatedRecipe);
          this.setState({
            recipes: copyRecipes
          })

        }catch(e){
          console.error(e)
        }
        }




/*
********************************************************
           RENDER
********************************************************
*/


  render(){
  return (


    <div className="App">
      <h1>Recipes</h1>
      <New baseURL={baseURL} handleAddRecipe={this.state.handleAddRecipe}/>
      <table>
      <tbody>
        {
          this.state.recipes.map(recipe =>{
            return(
              <tr key ={recipe._id}>
                <td onMouseOver = { () => {
                    this.getRecipe(recipe)}}>
                    {recipe.name}
                  </td>
                  <td onClick = {() => {
                    this.toggleLikes(recipe)
                  }}> {
                    recipe.likes? 'likes': 'no likes'
                  }
                  </td>

              </tr>



            )
          })
        }




      </tbody>
      </table>
    </div>
  )

}
}

export default App;
