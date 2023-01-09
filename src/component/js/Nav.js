function Nav(props) {
    const list = []
    for (let i = 0; i < props.navitemprops.length; i++) {
        let num = props.navitemprops[i];
        list.push(<li key={num.id} className={num.classname}><a href="" className="nav_link"><span
            className="nav_text">{num.title}</span></a></li>)
    }
    return (
        <div className="nav">
            <ul className="nav_list">
                {list}
            </ul>
        </div>
    );
}

export default Nav;
