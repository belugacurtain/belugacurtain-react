function Header(props) {
    return (
        <header id="header">
            <h1>{props.h1title}</h1>
            <div className="header_top">{props.top}</div>
            <div className="header_bottom">{props.bottom}</div>
        </header>
    );
}

function Container(props) {
    return (
        <div id="container">
            <main className={props.mainclass}>
                <div className={props.rowgroup1class}>
                    <h2>Rowgroup1 class name is .rowgroup1</h2>
                </div>
            </main>
        </div>
    );
}
function Footer(props) {
    return (
        <footer id="footer">
            <div className={props.footerboxclass}>
                <h2>footer_box class name is .footer_box</h2>
            </div>
        </footer>
    );
}
function Nav(props) {
    const list = []
    for (let i = 0; i < props.navitemprops.length; i++) {
        let num = props.navitemprops[i];
        list.push(<li key={num.id} className={num.classname}><a href="" className="nav_link">{num.title}</a></li>)
    }
    return (
        <div className="nav">
            <ul className="nav_list">
                {list}
            </ul>
        </div>
    );
}
function App() {
    const navitemlength = [
        {id:'1', classname: 'nav_item nav_item1', title: 'nav link 1'},
        {id:'2', classname: 'nav_item nav_item2', title: 'nav link 2'},
        {id:'3', classname: 'nav_item nav_item3', title: 'nav link 3'},
        {id:'4', classname: 'nav_item nav_item4', title: 'nav link 4'},
        {id:'5', classname: 'nav_item nav_item5', title: 'nav link 5'}
    ]
    return (
        <div className="beluga_layout">
            <Header h1title="h1 title is Beluga Start React" top="beluga-header-top"
                    bottom="beluga-header-bottom"></Header>
            <Nav navitemprops={navitemlength}></Nav>
            <Container mainclass="main" rowgroup1class="rowgroup1"></Container>
            <Footer footerboxclass="footer_box"></Footer>
        </div>
    );
}
export default App;
