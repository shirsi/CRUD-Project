import React from 'react'
class New extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      ingredients: [],
      directions:'',
      image:'',
      serving:'',
      likes: false
    }
    this.handleChange = this.handleChange.bind(this)
  }//constructor end
  handleChange(event){
    this.setState({
      [event.currentTarget.id]: event.currentTarget.value
    })
  }
  async handleSubmit(event){
    event.preventDefault()
    try{
      let response = await fetch(this.props.baseURL + '/recipes',
      {
        method:'POST',
        body:JSON.stringify({
          name: this.state.name,
          ingredients: this.state.ingredients,
          directions: this.state.directions,
          image: this.state.image,
          serving: this.state.serving,
          likes: this.state.likes
        }),
        header:{
          'Content-Type':'application/json'
        }
      }
    )
    let data = await response.json()
    this.props.handleAddRecipe(data)
    this.setState({
      name: '',
      ingredients: [],
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
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" onChange={this.handleChange} value={this.state.name} placeholder="add a recipe"/><br/>
        <label htmlFor="ingredients">Ingredients</label>
        <input type="text" id="ingredients" name="ingredients" onChange={this.handleChange} value={this.state.ingredients} placeholder="add ingredients"/><br/>
        <label htmlFor="directions">directions</label>
        <input type="text" id="directions" name="directions" onChange={this.handleChange} value={this.state.directions} placeholder="add directions"/><br/>
        <label htmlFor="images">Images</label>
        <input type="text" id="images" name="images" onChange={this.handleChange} value={this.state.images} placeholder="add images"/><br/>
        <label htmlFor="serving">Serving</label>
        <input type="text" id="serving" name="serving" onChange={this.handleChange} value={this.state.serving} placeholder="add serving"/><br/>
        <input type="submit" value="Add a Recipe"/>
      </form>
    )
  }
}

export default New
