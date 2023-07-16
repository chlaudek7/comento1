
import Footer from "./components/Footer";
import Header from "./components/Header";
import stImg from '../assets/images/undraw_search_engines_ij7q.svg'
const Home = () =>{
    function goAction(){
        window.location.href = "/Content";
    }
    return (
        <div>
            <Header/>
            <div className="wrap">
                <div className="banner">
                    <p>뉴스 기반 주식 종목 추천</p>
                    <p>
                        사람은 만나본 적 없는 사람과 처음 들어보는 기업도 이름만으로 구분할 수 있습니다. <br></br>
                        과일 Apple과 미국 기업 Apple을 구분하는 것 처럼 뜻은 다르지만 같은 단어를 구분할 수 있습니다.  <br></br> 
                        뉴스에서 기업의 이름이 새로 생기거나, 일부만 인용되면 판단할 수 없었던 기존의 검색엔진 기술과 일반 자연어 인공지능의 한계를 극복하였습니다. <br></br>
                        실제로 사용할만한 뉴스 서비스를 제공하기 위해서는 뉴스가 무엇에 관한 것인지를 정확히 알수 있는 기술이 필요합니다.
                    </p>
                    <button type="button" className="go_btn" onClick={goAction}>체험하러가기</button>
                </div>
                <div id="st1">
                    <div className="content">
                        <div className="flex_box">
                            <div className="st_img">
                                <img src ={stImg} />
                            </div>
                            <div className="st_txt">
                                <p className="strong_tit">정확한 종목 추출을 위한 KoGPT2 모델</p>
                                <p>
                                    한국어와 호환성 향상을 위해 GPT 모델을 fine-tuning한 KoGPT2 모델을 사용했습니다. <br></br>
                                    이 모델은 단순히 가장 많이 등장한 키워드를 종목명으로 선택하지 않습니다. <br></br>
                                    대신, KoGPT2 모델은 입력된 텍스트의 문맥을 고려하여 종목을 선별하고 생성합니다. 
                                </p>
                                <p>
                                    모델 자체가 텍스트의 내용과 관련하여 가장 적합한 종목을 찾아냅니다. <br></br>
                                    KoGPT2는 자연어 처리와 문맥 이해에 강점을 가지고 있습니다.

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="st2">
                    <div className="content">
                          <ul>
                            <li>
                                <p>기술 강점 1.</p>
                                <p className="strong_tit">기존의 뉴스 종목 배정 문제점 개선</p>
                                <p>
                                    기존 포털사이트는 뉴스를 관련 종목에 배정하기 위해  <br></br>
                                    ‘티커’를 사용합니다.  <br></br>
                                    이는 텍스트 기반의 분류 기준으로  <br></br>
                                    뉴스에 언급한 종목명을 타종목에 배정하거나, <br></br>
                                    비상장사에 관련된 종목은 배정하기 어렵습니다.
                                </p>
                            </li>
                            <li>
                                <p>기술 강점 2.</p>
                                <p className="strong_tit">동음이의어가 같이 검색되는 문제점 개선</p>
                                <p>
                                    기존 포털사이트는 검색 키워드를 중심으로 결과가 노출되기 때문에 <br></br>
                                    동음이의어가 같이 검색되는 불편함이 있습니다. <br></br>
                                    종목명과 동일한 단어가 타 기사에 포함된 경우도 함께 검색되기 때문에 <br></br>
                                    유저는 관심있는 종목과 관련된 뉴스만 확인하는데 <br></br>
                                    많은 시간이 소요됩니다.
                                </p>
                            </li>
                        </ul>
                   </div>
                </div>
                
            </div>
            <Footer/>
        </div>
    )
}
export default Home