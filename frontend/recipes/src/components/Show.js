import React, {Component} from 'react'

class Show extends Component {
  render(){
    return(
      <div className="details">
         <h3>Recipe Info:</h3>
         <hr/>
         <h4> Name:{ this.props.recipe.name }  </h4>
         <h6> Ingredients:{ this.props.recipe.ingredients } </h6>
         <h6> Directions:{ this.props.recipe.directions } </h6>
         <img href={this.props.recipe.image}/>
         <h6> Serving:{ this.props.recipe.serving } </h6>
         <h6><span>Liked:</span>   { this.props.recipe.likes ? 'liked' : 'not liked'} </h6>
       </div>
    )
  }
}

export default Show
