import React from 'react'
class New extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      ingredient:'',
      directions:'',
      image:'',
      serving:'',
      likes: false
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
      let response = await fetch(this.props.baseURL + '/recipes',
      {
        method:'POST',
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

    this.props.handleAddRecipe(data)
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

        <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control"  id="name" name="name" onChange={this.handleChange} value={this.state.name} placeholder="add a recipe"/>
        </div>


        <div className="form-group">
          <label htmlFor="ingredients">Ingredients</label>
          <input type="text" id="ingredients" name="ingredients" className="form-control"  onChange={this.handleChange} value={this.state.ingredients} placeholder="add ingredients"/>
          </div>

        <div className="form-group">
          <label htmlFor="directions">directions</label>
          <input type="text" id="directions" name="directions"  className="form-control"  onChange={this.handleChange} value={this.state.directions} placeholder="add directions"/>
        </div>

        <div className="form-group">
        <label htmlFor="image">Images</label>
        <input className="form-control"  type="text" id="image" name="image" onChange={this.handleChange} value={this.state.image} placeholder="add image"/>
        </div>

        <div className="form-group">
          <label htmlFor="serving">Serving</label>
          <input  className="form-control"  type="text" id="serving" name="serving" onChange={this.handleChange} value={this.state.serving} placeholder="add serving"/>
          <input type="submit" className="btn btn-success" value="Add a Recipe"/>
        </div>
      </form>
    )
  }
}

export default New
