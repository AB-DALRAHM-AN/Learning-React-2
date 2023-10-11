function Product (props){
  return (
    <>
      <h3>Product Name: {props.name}</h3>
      <span>Product Price: {props.price}</span>
      <span>Product Category: {props.category}</span>
      <p>Product Description: {props.description}</p>
    </>
  )
}

export default Product;