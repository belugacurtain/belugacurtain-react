function Header(props) {
    return (
        <header id="header">
            <h1>{props.h1title}</h1>
            <div className="header_top">{props.top}</div>
            <div className="header_bottom">{props.bottom}</div>
        </header>
    );
}

export default Header;
