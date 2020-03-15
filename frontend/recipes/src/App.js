import React from 'react'
import New from './components/New'
import Show from './components/Show'
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
     this.deleteRecipe = this.deleteRecipe.bind(this)
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
              ingredients: '',
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

        async deleteRecipe(id){
      console.log(`I made a delete rquest to here: ${baseURL}/recipes/${id}`)


          try{
            let response = await fetch(`${baseURL}/recipes/${id}`, {

              method: 'DELETE'
            })

              let data =  await response.json()

              const deletedRecipe = this.state.recipes.findIndex(recipe =>
              recipe._id === id)

              const copyRecipes =[...this.state.recipes]

              copyRecipes.splice(deletedRecipe, 1)

              this.setState({
                recipes: copyRecipes
              })


            } catch(e){
              console.error(e)
          }
        }





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

    <div className="App .container">
      <header> <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link> </header>
      <div className = ' main'>
      <h1>Recipes</h1>
      <div className='recipe-container'>
      <New baseURL={baseURL} handleAddRecipe={this.handleAddRecipe}/>
      <table>
      <tbody>
        {
          this.state.recipes.map(recipe =>{
            return(
              <tr key ={recipe._id}>
                <td onMouseOver = { () => {
                    this.getRecipe(recipe)}}>
                  <h4>  {recipe.name}</h4>
                  </td>
                  <td className= 'hearts' heart onClick = {() => {
                    this.toggleLikes(recipe)
                  }}> {
                    recipe.likes? '❤️': '🤍'
                  }
                  </td>
                  <td><button className="btn btn-danger" onClick = {
                    () => {
                      this.deleteRecipe(recipe._id)
                    }
                  }> Delete
                </button></td>

              </tr>
            )
          })
        }
      </tbody>
      </table>
      {
        this.state.recipe
        ? <Show recipe={this.state.recipe}/>
        : null
      }
      </div>
      <footer> Recipes</footer>
    </div>

    </div>
  )

}
}

export default App;
