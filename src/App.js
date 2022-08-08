import React, { useState } from 'react';
import './style.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ServiceList from './components/ServiceList.js'
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import ServiceSuccess from './components/ServiceSuccess';
function App() {
  const [params,setParams] = useState([])
  const [forwardFlag,setForwardFlag] = useState(false)
  const [routePath,setRoutePath] = useState("")
  const [type,setType] = useState("")
  const [additional,setAdditional] = useState("")
  const [jobDetails,setJobDetails] = useState("")
  const [progressWidth,setProgressWidth] = useState("25%")
  function changePage(param){
    if(param === "back"){
      window.history.back(-1)
      setForwardFlag(false)
    }
    else if(param === "forward"){
      if(forwardFlag === true){
        window.history.forward()
      }
      else{

      }
    }
    else if (param === "mainPage"){
      window.location.href = "/"
      setForwardFlag(false)
    }
  }
  function showAllConsoles(){
    console.log('%cSelected Service:','color:#2cb34f', params.name)
    console.log("%cType:",'color:#2cb34f', type )
    console.log("%cAdditionalInfo:",'color:#2cb34f', additional)
    console.log("%cJob Details:",'color:#2cb34f', jobDetails)
  }

  function showTopbar(){
    let top_bar = document.getElementById("top_bar")
    if (top_bar.style.visibility === "hidden") {
        top_bar.style.visibility = "visible"
    } 
  }

  function hideTopbar(){
    let top_bar = document.getElementById("top_bar")
    top_bar.style.visibility = "hidden"
  }

  function hideDiscount(){
    let discount_rate = document.getElementById("discount_rate")
    if(discount_rate) {
    discount_rate.style.display="none"
    }
  }

  function showButton(){
    let footer_button = document.getElementById("footer_button")
    if(footer_button){
      if(footer_button.style.display=="none"){
        footer_button.style.display = "table"
    }
    }
  }

  return (  
    <>
      <div className="armut_container">
        <div role="document" className="modal_dialog">
          <div className="modal_content">
            <div className="modal_content_list">
              <div id="top_bar" className="modal_top_bar">
                <div className="modal_top_bar_row">
                  <div onClick={()=>changePage("back")} id="back_button" className="modal_back_button">
                    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display:"table-cell",verticalAlign:"middle"}}>
                      <path fillRule="evenodd" clipRule="evenodd" d="M8.65392 16C8.30964 16 7.96506 15.8789 7.70214 15.6358L0.39423 8.87989C0.142078 8.64649 0 8.33014 0 7.99997C0 7.67006 0.142078 7.35344 0.393931 7.12004L7.70214 0.364398C8.22738 -0.121466 9.07985 -0.121466 9.6051 0.364398C10.1312 0.850539 10.1312 1.6381 9.6051 2.12424L3.24956 7.99997L9.6054 13.8757C10.1315 14.3616 10.1315 15.1494 9.6054 15.6355C9.34278 15.8783 8.9982 16 8.65392 16Z" fill="#111321" />
                    </svg>
                  </div>
                  <div id="service_name" className="modal_service_name" >
                    <span id="service_description" className="modal_service_description">{params.name}</span>
                  </div>
                  <div id="exit_button"  className="modal_exit_button" onClick={()=>changePage("mainPage")} >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M10.5026 12L6.31012 7.80752C5.89663 7.39403 5.89663 6.72362 6.31012 6.31012C6.72362 5.89663 7.39403 5.89663 7.80752 6.31012L12 10.5026L16.1925 6.31012C16.606 5.89663 17.2764 5.89663 17.6899 6.31012C18.1034 6.72362 18.1034 7.39403 17.6899 7.80752L13.4974 12L17.6899 16.1925C18.1034 16.606 18.1034 17.2764 17.6899 17.6899C17.2764 18.1034 16.606 18.1034 16.1925 17.6899L12 13.4974L7.80752 17.6899C7.39403 18.1034 6.72362 18.1034 6.31012 17.6899C5.89663 17.2764 5.89663 16.606 6.31012 16.1925L10.5026 12Z" fill="#111321" />
                    </svg>
                  </div>
                </div>
                <div className="progress_container">
                <div className="progress" style={{width:progressWidth}}/>
              </div>
              </div>
              <Router>
                <Routes>
                  <Route path="/" element={<ServiceList forwardFlag={setForwardFlag}  routePath={setRoutePath} setParams={setParams} hideTopbar={hideTopbar} showButton={showButton}/>}/>

                  <Route path="/job_request/:serviceName/:type/:page" element={<ServiceDetails forwardFlag={setForwardFlag} routePath={setRoutePath} routePathFlag = {routePath}
                  params={params} setType={setType} additional = {setAdditional} jobDetails={setJobDetails} progressWidth={setProgressWidth} showTopbar={showTopbar} hideDiscount={hideDiscount} showButton={showButton}/>}/>
                  
                  <Route path="/job_request/:serviceName/success" element={<ServiceSuccess progressWidth={setProgressWidth} showConsole={showAllConsoles} hideTopbar={hideTopbar}/>} />
                </Routes>
                {
                  forwardFlag === true ? (
                    <Link to={routePath} ><div id="footer_button" className="modal_footer" onClick={() => changePage("forward")} >
                    <p className="modal_footer_text">Devam</p>
                     </div></Link>
                  ):(
                  <div id="footer_button" className="modal_footer">
                    <p className="modal_footer_text">Devam</p>
                     </div>
                  )
                }
              </Router>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
