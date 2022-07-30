import "./Resources/Header.css";

const Header = ()=>{

    return(
        <div className="header">
            <img src={require('./Resources/Images/logo.png')} className="header-logo"/>
        </div>
    )
}

export default Header;