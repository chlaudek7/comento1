
import './App.css';
import {HashRouter, Route,Routes, useFetcher} from 'react-router-dom';
import Home from './pages/Home.js'
import Content from './pages/Content.js'
import About from './pages/About.js'
import Login from './pages/Login.js'
import Result from './pages/Result_view.js'
import "./assets/css.css";
import { useEffect,useState } from 'react';
import AuthRoute from './routes/Auth';
function App() {
  const [authenticated] = useState(!!sessionStorage.getItem("token"));
  console.log(authenticated)
  return (
    
    <Routes >
    
			<Route path="/" element={<Home/>}/>
      <Route path="/about/*" element={<About/>}/>
      <Route path="/about/:id" element={<About/>}/>
      <Route path="/Content" element={<AuthRoute authenticated={authenticated} component={<Content/>}/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/Result" element={<AuthRoute authenticated={authenticated} component={<Result/>}/>}/>
    </Routes>
  );
}

export default App;



// 리액트는 최상위 태그 하나만 리턴
// {}사용해야 변수 사용가능
// if 조건문 사용 불가
// 컴포넌트 대문자
//rotues - 페이지 단위 