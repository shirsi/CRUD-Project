import React from 'react'
class Update extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      ingredient:'',
      directions:'',
      image:'',
      serving:'',
      likes: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }//constructor end
  handleChange(event){
    this.setState({
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  async handleSubmit(event){
    event.preventDefault()
    console.log(this.props.baseURL);
    try{
      let response = await fetch(`${this.props.baseURL}/recipes/${this.props.recipe._id}`,
      {
        method:'PUT',
        body:JSON.stringify({
          name: this.state.name,
          ingredient: this.props.ingredient,
          amount:this.props.amount,
          directions: this.state.directions,
          image: this.state.image,
          serving: this.state.serving,
          likes: this.state.likes
        }),
        headers:{
          'Content-Type':'application/json'
        }
      }
    )
    let data = await response.json()


    this.setState({
      name: '',
      ingredients: '',
      amount:'',
      directions: '',
      image: '',
      serving: '',
      likes: ''
    })
  }catch(e){
      console.error(e)
    }
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name"></label>
        <input type="text" id="name" name="name" onChange={this.handleChange}   value= {this.this.props.recipe.name}/><br/>
        <label htmlFor="ingredients">Ingredients</label>
        <input type="text" id="ingredients" name="ingredients" onChange={this.handleChange} value={this.props.recipe.ingredients} placeholder="add ingredients"/><br/>
        <label htmlFor="directions">directions</label>
        <input type="text" id="directions" name="directions" onChange={this.handleChange} value={this.props.recipe.directions} placeholder="add directions"/><br/>
        <label htmlFor="images">Images</label>
        <input type="text" id="images" name="images" onChange={this.handleChange} value={this.props.recipe.images} placeholder="add images"/><br/>
        <label htmlFor="serving">Serving</label>
        <input type="text" id="serving" name="serving" onChange={this.handleChange} value={this.props.recipeserving} placeholder="add serving"/><br/>
        <input type="submit" value="Add a Recipe"/>
      </form>
    )
  }
}

export default Update
