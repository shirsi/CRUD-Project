import React, {Component} from 'react'

class Show extends Component {
  render(){
    return(
      <div className="card"  >
         <img src={this.props.recipe.image}    />
         <div className="card-body">
        <h3 className="card-title">Recipe Info</h3>
         <h4> Name:{ this.props.recipe.name }  </h4>
         <h6> Ingredients:{ this.props.recipe.ingredients } </h6>
         <h6> Directions:<p>{ this.props.recipe.directions }</p> </h6>

         <h6> Serving:{ this.props.recipe.serving } </h6>

       </div>
       </div>
    )
  }
}

export default Show
