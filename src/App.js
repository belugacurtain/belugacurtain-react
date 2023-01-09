import Header from "./component/js/Header";
import Nav from "./component/js/Nav";
import Container from "./component/js/Container";
import Footer from "./component/js/Footer";
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
            <Header h1title="h1 title is Beluga Start React" top="beluga-header-top" bottom="beluga-header-bottom"></Header>
            <Nav navitemprops={navitemlength}></Nav>
            <Container mainclass="main" rowgroup1class="rowgroup1"></Container>
            <Footer footerboxclass="footer_box"></Footer>
        </div>
    );
}
export default App;
