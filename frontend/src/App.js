import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import { TextField, Tooltip } from '@mui/material';
import Button from '@mui/material/Button'
import { Zoom } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap'
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav'
import { useContext } from 'react';
import { Store } from './Store';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SignupScreen from './screens/SignupScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import logo from '../src/logo_preview.png';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import InfoIcon from '@mui/icons-material/Info';
import SearchIcon from '@mui/icons-material/Search';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Cart4, PersonPlus} from 'react-bootstrap-icons';
import ProfileScreen from './screens/ProfileScreen';
import { Popper } from '@mui/material';
import { Box } from '@mui/system';
import { Fade } from '@mui/material';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';






function App() {



  const {state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () =>{
    ctxDispatch({type: 'USER_SIGNOUT'});
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('PaymentMethod');
    window.location.href = '/signin';
  }

    
    const [open, setOpen]=React.useState(false);
    const [anchorEl, setAnchorEl]= React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
      setOpen((previousOpen) => !previousOpen);
    };
  
    const canBeOpen = open && Boolean(anchorEl);
    const id = canBeOpen ? 'transition-popper' : undefined; 
  
  
  
  


  return (
    <BrowserRouter>
  
    <div className="d-flex flex-column site-container">
      <ToastContainer position="bottom-center" limit={1} />
 <header>

   <Navbar className='header' variant='dark' expand='lg' sticky='top'>    
     
       <LinkContainer to='/'>
       <Navbar.Brand><img className='img img-fluid header_img' src={logo}  alt={'logo'}/></Navbar.Brand>
       </LinkContainer>
       
   </Navbar>   
   <div>



 <Nav className="nav_items" id='nav_side'>
   
 <Button className='nav-link'  variant='standard'  >

 <Tooltip title='search' arrow>

           <SearchIcon className='nav_icon' size={'1.8rem'} aria-describedby={id} onClick={handleClick}/>
           </Tooltip>
           <Popper id={id} open={open} anchorEl={anchorEl} transition>
             {({TransitionProps}) => (
               <Fade{...TransitionProps} timeout={350}>
               <Box sx={{ bgcolor: 'white', color: 'gold', }}>
                 
                   <TextField id='Outlined' label='Search' variant ='standard' focused />
                 
               </Box>
               </Fade>
             )}

           </Popper>
            </Button>
            
      <Link className='nav-link' to="/">
           <LocalFloristIcon className='nav_icon' size={'1.6rem'}/>
            </Link>
          <Link to='/cart' className='nav-link'>
          <Cart4 className='nav_icon' size={'1.5rem'}/>
              {
                cart.cartItems.length > 0 && (
                  <Badge className='badge' pill bg='danger'>
                    {cart.cartItems.reduce((a, c) => a + c.quantity, 0)} 
                  </Badge>
                )
              }
          </Link>
          {userInfo ? (
            <NavDropdown title={<AccountCircleIcon />} id="basic-nav-dropdown">
              <LinkContainer to='/profile'>
                <NavDropdown.Item>User Profle</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to='/orderhistory'>
                <NavDropdown.Item>Order History</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
                <Link className='dropdown-item' to='#signout' onClick={signoutHandler}>
                  Sign Out
                </Link>
            </NavDropdown>
          ) : (
            <Link className='nav-link' to="/signin">
           <PersonPlus className='nav_icon' size={'1.6rem'}/>
            </Link>
          )}
          <Link className='nav-link' to="/">
           <WifiCalling3Icon className='nav_icon' size={'1.6rem'}/>
            </Link>

            <Link className='nav-link' to="/">
           <EmailIcon className='nav_icon' size={'1.6rem'}/>
            </Link>
            
            <Link className='nav-link' to="/">
           <InfoIcon className='nav_icon' size={'1.6rem'}/>
            </Link>

       </Nav>
       
       </div>
 </header>
      <div>      
            <NavigationBar />
      </div>

 <main>


  <div>
 <Nav className="nav_items navigation">


 
 <Button className='nav-link' variant='contined' >
 <Tooltip title='search' arrow>
           <SearchIcon className='nav_icon' size={'1.8rem'} onClick={handleClick}/>
           </Tooltip>
           <Popper id={id} open={open} anchorEl={anchorEl} transition>
             {({TransitionProps}) => (
               <Fade{...TransitionProps} timeout={350}>
               <Box sx={{ bgcolor: 'background.paper'}}>
                 
               </Box>
               </Fade>
             )}

           </Popper>
            </Button>


      <Link className='nav-link' to="/">
      <Tooltip TrasitionComponent={Zoom} title='view shop' arrow>
           <LocalFloristIcon className='nav_icon' size={'1.6rem'}/>
           </Tooltip>
            </Link>
          <Link to='/cart' className='nav-link'>
          <Tooltip TrasitionComponent={Zoom} title='view cart' arrow>
          <Cart4 className='nav_icon' size={'1.5rem'}/>
          </Tooltip>
              {
                cart.cartItems.length > 0 && (
                  <Badge pill bg='danger'>
                    {cart.cartItems.reduce((a, c) => a + c.quantity, 0)} 
                  </Badge>
                )
              }
              
          </Link>
          {userInfo ? (
            <NavDropdown title={<AccountCircleIcon />} id="basic-nav-dropdown">
              <LinkContainer to='/profile'>
                <NavDropdown.Item>User Profle</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to='/orderhistory'>
                <NavDropdown.Item>Order History</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
                <Link className='dropdown-item' to='#signout' onClick={signoutHandler}>
                  Sign Out
                </Link>
            </NavDropdown>
          ) : (
            <Link className='nav-link' to="/signin">
              <Tooltip TrasitionComponent={Zoom} title='log-in' arrow>
           <PersonPlus className='nav_icon' size={'1.6rem'}/>
           </Tooltip>
            </Link>
          )}
          <a href='tel:+256782144414' className='nav-link'>
          <Tooltip TrasitionComponent={Zoom} title='call us now' arrow>
            
           <WifiCalling3Icon className='nav_icon' size={'1.6rem'}/>
         
           </Tooltip>
           </a>

         <a href='mailto:mervynstunner@gmail.com' className='nav-link'>
            <Tooltip TrasitionComponent={Zoom} title='Email us' arrow>
           <EmailIcon className='nav_icon' size={'1.6rem'}/>
           </Tooltip>
           </a>
            
            <Link className='nav-link' to="/">
            <Tooltip TrasitionComponent={Zoom} title='About us' arrow>
           <InfoIcon className='nav_icon' size={'1.6rem'}/>
           </Tooltip>
            </Link>

       </Nav>
       </div>
 

   <Container className='mt-2'>

    <Routes>
      <Route path='/product/:slug' element={<ProductScreen />} />
      <Route path='/cart' element={<CartScreen /> } />
      <Route path='/signin' element={<SigninScreen /> } /> 
      <Route path='/signup' element={<SignupScreen /> } />
      <Route path='/Profile' element={<ProfileScreen /> } />
      <Route path="/order/:id" element={<OrderScreen />}></Route>
      <Route path='/placeorder' element={<PlaceOrderScreen /> } />
      <Route path='/shipping' element={<ShippingAddressScreen /> } />
      <Route path='/payment' element={<PaymentMethodScreen /> } />
      <Route path ='orderhistory' element={<OrderHistoryScreen />}/>
      <Route path='/' element={<HomeScreen /> } />
    </Routes>
   </Container> 

   </main>
 
    </div>
<div className='footer'>
<Footer />
</div>



<div className="footertwo">
  
  <p>All Rights Reserved.</p>
    
</div>
<ul className='footerlist'>
    <li><a href='#' />FACEBOOK</li>
    <li><a href='#' />INSTAGRAM</li>
    <li><a href='#' />PINTEREST</li>
    <li><a href='#' />YOUTUBE</li>
  </ul>



    </BrowserRouter>
  );
}

export default App;
