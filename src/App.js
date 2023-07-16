
import './App.css';
import {HashRouter, Route,Routes} from 'react-router-dom';
import Home from './pages/home.js'
import Content from './pages/content.js'
import About from './pages/about.js'
import Login from './pages/login.js'
import "./assets/css.css";
function App() {
  return (

    <Routes >
    
			<Route path="/" element={<Home/>}/>
      <Route path="/about/*" element={<About/>}/>
      <Route path="/about/:id" element={<About/>}/>
      <Route path="/Content" element={<Content/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
  );
}

export default App;



// 리액트는 최상위 태그 하나만 리턴
// {}사용해야 변수 사용가능
// if 조건문 사용 불가
// 컴포넌트 대문자
//rotues - 페이지 단위 