
import './App.css';
import {HashRouter, Route,Routes} from 'react-router-dom';
import Home from './pages/Home.js'
import Content from './pages/Content.js'
import About from './pages/About.js'
import Login from './pages/Login.js'
import Result from './pages/Result_view.js'
import "./assets/css.css";

function App() {
  return (

    <Routes >
    
			<Route path="/" element={<Home/>}/>
      <Route path="/about/*" element={<About/>}/>
      <Route path="/about/:id" element={<About/>}/>
      <Route path="/Content" element={<Content/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/Result/:keyword" element={<Result/>}/>
    </Routes>
  );
}

export default App;



// 리액트는 최상위 태그 하나만 리턴
// {}사용해야 변수 사용가능
// if 조건문 사용 불가
// 컴포넌트 대문자
//rotues - 페이지 단위 