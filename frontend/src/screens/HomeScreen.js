import React, { useEffect, useReducer } from 'react'
//import { Link } from 'react-router-dom'
import axios from 'axios'
import Product from '../components/Product'
import { Helmet } from 'react-helmet-async'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import { Grid,} from '@mui/material'
import ScrollBar from '../components/ScrollBar'
import { Container } from '@mui/material'
import Footer from '../components/Footer'
import NavigationBar from '../components/NavigationBar'





const reducer =(state, action) => {
  switch(action.type) {
    case 'FETCH_REQUEST':
      return {...state, loading: true};
      case 'FETCH_SUCCESS': 
      return {...state, products: action.payload, loading:false};
      case 'FETCH_FAIL':
        return {...state, loading: false, error: action.payload};
        default:
          return state;
  }
};






const HomeScreen = () => {
  
  
  //const [products, setProducts] = useState([]);

  const [{loading, error, products}, dispatch] = useReducer(reducer, {
    products: [],
    loading: true, 
    error: '',
  });
  
  
  useEffect(() => {
    const fetchData = async () =>{
      dispatch({type: 'FETCH_REQUEST'});

      try {
        const result = await axios.get('/api/products');
        dispatch({type: 'FETCH_SUCCESS', payload: result.data})
      } catch (err) {

        dispatch({type: 'FETCH_FAIL', payload: err.message});
      }

      
     // setProducts(result.data)
    };
    fetchData();
  }, []);
  
  
  return (
    <Container maxWidth=''>
      <Helmet>
        <title>Chateu Des Fluers</title>
      </Helmet>
     
      
     
    
    <div className='products'>
    
  {
    loading? (<LoadingBox />): error ? (<MessageBox variant="danger">{error}</MessageBox>) : (

  <Grid container spacing={{xs:1, md: 3}} columns={{xs:2, sm:8, md:12}}>
    {products.map((product) => (      
      <Grid item xs={2} sm ={4} md={4} key ={product.slug} className='mb-3'>
      <Product product ={product}></Product>
    </Grid>
    
    ))}
    </Grid>
    )}
  </div>


</Container>
  )
}

export default HomeScreen
