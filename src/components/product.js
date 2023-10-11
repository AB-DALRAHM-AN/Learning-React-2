import Button from "./button";
import StateComp from "./stateComp";
import WelcomeSet from "./setState";

function Product (props){
  return (
    <>
      {/* <h3>Product Name: {props.name}</h3>
      <span>Product Price: {props.price}</span>
      <span>Product Category: {props.category}</span>
      <p>Product Description: {props.description}</p>
      <Button text="Buy Now"/>
      <StateComp/> */
      }
      <WelcomeSet/>
    </>
  )
}

export default Product;