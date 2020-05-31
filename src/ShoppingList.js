import React from 'react';

class ShoppingList extends React.Component{
  
 render(){
    
    return(
      <React.Fragment>
        <p className="items">Items</p>
          <ol className="item-list">
            {this.props.items.map((item, index) => <li key={index}>{item}</li>)}
          </ol>
   	 </React.Fragment>
    )
 }
}

export default ShoppingList;