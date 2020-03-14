import React from 'react'


/*
********************************************************
          Define
********************************************************
*/

let baseURL = 'http://localhost:3003'

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
     // this.toggleLikes = this.toggleLikes.bind(this)
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
      c

  /*
  ********************************************************
              ADDS NEW RECIPES
  ********************************************************
  // */
  //         handleAddRecipes(){
  //           const copyRecipes = [recipes, ...this.state.recipes]
  //           this.setState({
  //             recipes: copyRecipes
  //           })
  //         }
  //
  //
  //



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
        // async toggleLikes (recipe){
        //   console.log(recipe)
        //   try {
        //     let response = await fetch( `${baseURL}/recipes/${id}`, {
        //       method: PUT,
        //       body: JSON.stringify({likes: !recipe.likes}),
        //       header:{
        //         'Content-type': 'application/json'
        //       }
        //     })
        //
        //     let updatedRecipe =  await response.json()
        //
        //     const foundRecipe = this.state.recipe.findIndex(recipeFound=>
        //       recipeFound._id === recipe._id
        //     )
        //
        //   const copyRecipes = [...this.state.recipes]
        //
        //   copyRecipes[foundRecipe].likes = updatedRecipe.toggleLikes
        //
        //   this.setState({
        //     recipes: copyRecipes
        //   })
        //
        // }catch(e){
        //   console.error(e)
        // }
        // }




/*
********************************************************
           RENDER
********************************************************
*/


  render(){
  return (


    <div className="App">
      <h1>Recipes</h1>
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
