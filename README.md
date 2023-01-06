### 2023. 01. 06. React Start with BelugaCurtain
#### React 구성(기본) / 디렉토리 / react-app / 하위목록
<ul>
<li>최상단 기본구성
<ul>
<li>/noe-modules/</li>    
<li>/public/index.html</li>    
<li>/src/
<ul>
<li>index.css</li>
<li>index.js

    import React from 'react';
    import ReactDom from 'react-dom';
    import './index.css'; ----> /public/index.html에 정의
    import App from './App.js'; ----> .js 생략가능
    import * as serviceWorker from './serviceWorker.js';

    ReactDom.render(<App />, document.getElementById('root')); ----> /public/index.html 안에서 찾을 수 있음
    serviceWorker.unregister();
</li>
<li>App.css</li>
<li>App.js

    import React, {Component} from 'react'; ----> 사용자정의 태그인 컴포넌트를 사용할 수 있게 해주는 React 구문
    import Header from "./components/Header";
    
    class App extends Component{
        constructor(props){ ----> state를 사용하기 위해 state의 값의 초기화를 담당한다 , render 함수보다 먼저 실해되어야함
            super(props);
            this.state = {
                header:{title:'gunami header', desc:'Hi React Start'}
            }
        }
        render(){
            return{
                <꼭 최상단 태그 쓸 것>
                    <Header title={this.state.header.title}></Header> ----> 만들어진 Header 컴포넌트 사용 후 state 로 정의된 props 사용
                </꼭 최상단 태그 쓸 것>
            };
        }
    }
    
    export default App; ----> 내가 만든 컴포넌트를 어디에서나 사용 할 수 있게 해주는 구문
</li>
<li>serviceWorker.js</li>
<li>/components/
<ul>
<li>Header.js

    import React, {Componet} from 'react';
    
    class Header extends Component{
        render(){
            return{
                <꼭 최상단 태그 쓸 것>
                    <header>
                        <h1>{this.props.title}</h1>
                        <div>
                            {this.props.desc}
                        </div>
                    </header>
                </꼭 최상단 태그 쓸 것>
            };
        }
    }

    export default Header;
</li>
</ul>
</li>
</ul>            
</li>
</ul>    
</li>
</ul>