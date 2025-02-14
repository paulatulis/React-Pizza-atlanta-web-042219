import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  render() {
    // console.log(this.props.pizzas)
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>

          {this.props.pizzas.map(p => <Pizza pizza={p} key={p.id} handleEdit={this.props.handleEdit}/>)}

        </tbody>
      </table>
    );
  }

}

export default PizzaList;
