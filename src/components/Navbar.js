import {Container, Navbar, Nav, Button, Dropdown, DropdownButton} from 'react-bootstrap';
import { useNavigate, Link} from 'react-router-dom'
import { useState, useContext, useEffect } from 'react';
import React from 'react';


import Logo from '../assets/logo.png'
import User from '../assets/user.png'
import Cart from  '../assets/cart.png'
import LoginForm from '../components/LoginForm'
import RegisterForm from './RegisterForm';
import Profile from '../assets/profile.png'
import Logout from '../assets/logout.png'
import Person from '../assets/maan.jpg'
import TopingIcon from '../assets/TopingIcon.svg'
import ProductIcon from '../assets/ProductIcon.svg'
import CartIn from '../assets/CartInn.png'
import CartOc from '../assets/cartOc.png'
import { UserContext } from '../context/UserContext';
import { API } from '../config/api';
import { useQuery } from 'react-query';

export default function NavbarList() {

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const [dropdown, setDropdown] = useState(false)
    const [state, dispatch] = useContext(UserContext)
    const [status, setStatus] = useState("user")
    const [cartStatus, setCartStatus] = useState(false)
    

    // let { data: carts } = useQuery('cartsCache', async () => {
    //     const response = await API.get('/cart');
    //     return response.data.data;
    // });

    let userStatusLogin = state.status

    // useEffect(()=>{
    //     let cartsLength = carts?.length
    //     if(cartsLength > 0 ){
    //         setCartStatus(true)
    //     }
       
    // },[carts])
    
    const navigate = useNavigate()

    const transactions = true
    let userStatus = state.status
    const isLogin = state.isLogin

    const handleClose = () => setShow(false);
    const handleClose2 = () => setShow2(false);
    const handleClose3 = () => setDropdown(false);

    const clickRegister = () => {
        setShow2(true)
    }

    const clickLogin = () => {
        setShow(true)
    }

    const imgClick = () => {
        setDropdown(true)
        navigate('/myCart')
    }

    const addProduct = () => {
        navigate('/addProduct')
    }

    const addToping = () => {
        navigate('/addToping')
    }

    const profile = () => {
        navigate('/profile')
    }

    const logout = () => {
        console.log(state)
        // mengisi state melalui dispatch yang nantinya akan diakses di auth
        dispatch({
            type: "LOGOUT"
        })
    }
    
    

    const handleUser = () => {
        if(!isLogin){
            return(
            <Nav style={{display:'flex', width:'17%', marginTop:'15px', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <button onClick={() => clickLogin()} style={{cursor:'pointer', color:'rgba(189, 7, 7, 1)', border:'2px solid rgba(189, 7, 7, 1)', backgroundColor:'transparent',width:'6rem', height:'30px', fontWeight:'550', borderRadius:'5px'}}>Login</button>
                <button onClick={() => clickRegister()} style={{ border:'1px solid rgba(189, 7, 7, 1)', backgroundColor:'rgba(189, 7, 7, 1)', color:'white', width:'6rem', height:'32px', fontWeight:'550', borderRadius:'5px'}}>Register</button>
            </Nav>)
        }
        else if(isLogin){
            if(userStatusLogin === "user" || status === '') {
                return(
                    <Nav style={{display:'flex', width:'8%', marginTop:'15px', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        {cartStatus?
                        <div>
                            <img onClick={imgClick} src={Cart} style={{cursor:'pointer', width:'30px', height:'30px'}} alt="" />
                            <img src={CartOc} style={{position:'absolute', marginTop:'2px', marginLeft:'-10px'}}/>
                        </div>
                        :
                        <img onClick={imgClick} src={Cart} style={{cursor:'pointer', width:'30px', height:'30px'}} alt="" />
                        }
                        <Dropdown>
                            <Dropdown.Toggle style={{backgroundImage:`url(${Person})`, backgroundSize:'cover', backgroundPosition:'center', objectFit:'cover', backgroundColor:'black', borderStyle:'none', width:'50px', borderRadius:'60%', height:'50px' }} align="end">
                                {/* <img  style={{backgroundColor:'grey', marginRight:'10rem', marginBottom:'90px', objectFit:'cover', width:'30px', borderRadius:'60%', height:'30px'  }} alt="" /> */}
                            </Dropdown.Toggle>

                            <Dropdown.Menu  align="end" style={{marginTop:'10px', height:'12rem', width:'16rem', }}>
                                <Dropdown.Item onClick={() => profile()} style={{height:'45%', display:'flex', fontSize:'24px', fontWeight:'600', alignItems:'center'}} href="#">
                                    <img style={{width:'28px', height:'28px', marginRight:'9px', marginTop:'3x'}} src={User}/>
                                    Profile
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item onClick={() => logout()} style={{height:'45%', paddingLeft:'20px', display:'flex', fontSize:'24px', fontWeight:'600', alignItems:'center'}} href="#">
                                    <img style={{width:'28px', height:'28px', marginRight:'9px', marginTop:'3px'}} src={Logout}/>
                                    Logout
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                )
            }
            else  {
                return(
                    <Nav style={{display:'flex', width:'10%', marginTop:'15px', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        <Dropdown>
                            <Dropdown.Toggle aria-hidden='true' style={{backgroundImage:`url(${Profile})`, backgroundSize:'cover', backgroundPosition:'center', objectFit:'cover', backgroundColor:'black', borderStyle:'none', width:'50px', borderRadius:'60%', height:'50px' }} align="end">
                                {/* <img src="" style={{backgroundColor:'grey', marginRight:'10rem', marginBottom:'90px', objectFit:'cover', width:'30px', borderRadius:'60%', height:'30px'  }} alt="" /> */}
                            </Dropdown.Toggle>

                            <Dropdown.Menu  align="end" style={{marginTop:'10px', height:'12rem', width:'16rem', }}>
                               
                                <Dropdown.Item onClick={() => addProduct()} style={{height:'30%', display:'flex', fontSize:'24px', fontWeight:'600', alignItems:'center'}}>
                                    <img style={{width:'28px', height:'28px', marginRight:'9px', marginTop:'3px'}} src={ProductIcon}/>
                                    Add Product
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => addToping()} style={{height:'30%', display:'flex', fontSize:'24px', fontWeight:'600', alignItems:'center'}}>
                                    <img style={{width:'28px', height:'28px', marginRight:'9px', marginTop:'3px'}} src={TopingIcon}/>
                                    Add Toping
                                </Dropdown.Item>

                                <Dropdown.Divider />
                                <Dropdown.Item onClick={() => logout()} style={{height:'30%', paddingLeft:'20px', display:'flex', fontSize:'24px', fontWeight:'600', alignItems:'center'}} href="#">
                                    <img style={{width:'28px', height:'28px', marginRight:'9px', marginTop:'3px'}} src={Logout}/>
                                    Logout
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                )
            }
        }
    }
    
    const handleHome = () => {
        if(state.status === 'admin'){
            return '/transaction'
        } else return '/'
    } 
    
    
    return (
        <div>
           <Navbar style={styles.navbarStyle}>
                 <Link as={Link}style={{textDecoration:'none', marginTop:'1rem'}} to={handleHome()}>
                    <Navbar.Brand  style={{textDecoration:'none'}}>
                        <img src={Logo} style={{weight:'60px', height:'60px'}} alt="" />
                    </Navbar.Brand>
                </Link>
                    {handleUser()}
        </Navbar>
        <LoginForm show={show}  handleClose={handleClose} setStatus={setStatus}/>
        <RegisterForm show={show2} handleClose={handleClose2} setStatus={setStatus}/>
        </div>
    )
}

const styles = {
    navbarStyle : {
        display:'flex',
        width:'100%',
        height:'5rem', 
        flexDirection:'row', 
        justifyContent:'space-between',
        paddingLeft:'4rem', paddingRight:'4rem', 
        alignItems:'center',
    }
}