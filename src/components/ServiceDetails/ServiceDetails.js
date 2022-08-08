import React, { useEffect, useState } from 'react'
import ferforjeQuestionList from '../../modules/399-questions.json'
import balkonQuestionList from '../../modules/262-questions.json'
import ServiceDetailsList from './ServiceDetailsList';
import ServiceDetailsImage from './ServiceDetailsImage';
import JobDetails from './JobDetails';
import { useLocation } from 'react-router-dom';
function ServiceDetails({ forwardFlag, routePath, params, setType,additional,jobDetails,progressWidth,showTopbar,hideDiscount,showButton }) {

    const [questionList, setQuestionList] = useState([])
    var url = window.location.href;
    var pageFind = url.split("/");
    var page = pageFind[6];
    const [pageNumber] = useState(2)
    const location = useLocation();

    if (params.length === 0) {
        window.location.href = "/"
    }
    
    useEffect(() => {
        showTopbar()
    }, [])
    
    useEffect(() => {
        let filteredList
        if (params.serviceId === 262) {
            filteredList = balkonQuestionList.find(item => {
                return item.serviceId == params.serviceId && item.pageNumber == page
            })
            setQuestionList(filteredList)
        }
        else {
            filteredList = ferforjeQuestionList.find(item => {
                return item.serviceId == params.serviceId && item.pageNumber == page
            })
            setQuestionList(filteredList)
        }
    },[location])

      function percentageDetect(text) {
        var percentage = " " + params.discountRateText + " "
        if (text) {
          const pattern = /(^|\W)(%[a-z\d][\w-]*)/ig
          const textComponents = percentage.split(pattern)
          return (
            <>
              {textComponents.map(component => {
                if (component[0] === '%') {
                  return (
                    <span key="percentage_text" className="percentage_text">{" " + component}</span>
                  )
                }
                else {
                  return component;
                }
              })}
            </>
          )
        }
      }
    
    return (
        <div className='service_list_container'>
            <div className='service_list_price_container'>
                <span className='service_list_price_text'>Ortalama fiyat aralığı:</span>
                <strong className='service_list_price_strong'><span className='service_list_price_min'>{params.price.min}<span className="currency">{params.price.currency}</span></span> - <span className='service_list_price_min'>{params.price.max}<span className="currency">{params.price.currency}</span></span></strong>
            </div>
            {
                params.discountRateText !== "" ? (
                    <div id="discount_rate" className="discount_rate_container">
                        <span className="discount_rate_container_text">{percentageDetect(params.discountRateText)}</span>
                    </div>
                ) : (
                    <></>
                )
            }
            <div className="service_job_details">
                <span className='service_job'>{questionList.label}</span>
            </div>
            {
                questionList.typeId === 5  && questionList.pageNumber === parseInt(page)? (
                    <ServiceDetailsImage params={params} questionDetails={questionList.values} setType={setType} forwardFlag={forwardFlag} routePath={routePath} progressWidth={progressWidth} showButton={showButton}/>
                ) : (
                    <></>
                )
            }
            {
                questionList.typeId === 6 && questionList.pageNumber === parseInt(page) ? (
                    <ServiceDetailsList params={params} questionDetails={questionList.values} setType={setType} setAdditional = {additional} routePath={routePath}  forwardFlag={forwardFlag} pageNumber={pageNumber} order={questionList.order} id={questionList.id} progressWidth={progressWidth} hideDiscount={hideDiscount} showButton={showButton}/>
                ) : (
                    <></>
                )
            }
            {
                questionList.typeId === 8 && questionList.pageNumber === parseInt(page) ? (
                    <JobDetails params={params} questionDetails={questionList} routePath={routePath} forwardFlag={forwardFlag} pageNumber={pageNumber} jobDetails={jobDetails} progressWidth={progressWidth} hideDiscount={hideDiscount} showButton={showButton}/>
                ) : (
                    <></>
                )
            }
        </div>
    )
}
export default ServiceDetails