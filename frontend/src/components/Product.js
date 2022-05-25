import Card from 'react-bootstrap/Card'
import Button  from 'react-bootstrap/Button';
import React from 'react'
import { Link } from 'react-router-dom';
import Rating from './Rating';
import { useContext } from 'react';
import { Store } from '../Store';
import axios from 'axios';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Product = (props) => {
    const { product } = props;

    const { state, dispatch: ctxDispatch } = useContext(Store);

    const {
        cart: { cartItems },
    } = state;

    const addToCartHandler = async(item) =>{

      const existItem = cartItems.find((x) => x._id === product._id);
      const quantity = existItem ? existItem.quantity + 1 : 1;
      const { data } = await axios.get(`/api/products/${item._id}`);
      if(data.countInStock < quantity) {
          window.alert('Sorry. Product is out of stock');
          return;
        }
  
  
        ctxDispatch({
          type: 'CART_ADD_ITEM', 
          payload: {...item, quantity },
        });
  }

  return (
    <Card className='product'>
    <Link to ={`/product/${product.slug}`}>
      <img src={product.image} className='card-img-top' alt ={product.name} />
    </Link>
    <Card.Body className='py-4'>
    <Link to ={`/product/${product.slug}`} className='productLink'>
    <Card.Title className='py-4'> {product.name}</Card.Title>
</Link>
<Rating rating={product.rating} numReviews={product.numReviews} />
<Card.Text className='py-4'>
AED {product.price}
</Card.Text>

{ product.countInStock === 0 ? (
<Button variant='light' disabled>Out of stock</Button> ):(
<Button onClick={()=> addToCartHandler(product)} className='cart_btn'>Add To Basket <AddShoppingCartIcon/></Button>
)
}


    </Card.Body>
</Card> 
  );
}

export default Product
