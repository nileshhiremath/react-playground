import { useEffect, useState } from "react";
import { LOGO_URL } from "../utility/Constants";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnName, setBtnName] = useState('Log In');

    useEffect(() => {
        console.log('header useEffect called')
    }, [btnName])

    console.log('---- Header component rendered ----')
    return (
        <div className='header'>
            <div className='logoContainer'>
                <img className='logo' src={LOGO_URL} />
            </div>
            <div className='nav-items'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="loginBtn" onClick={() => {
                        if (btnName == 'Log In')
                            setBtnName('Log Out');
                        else
                            setBtnName('Log In')
                        console.log('----button----', btnName);
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;