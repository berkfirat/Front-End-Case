import React, { useEffect } from 'react'

function ServiceDetailsImage({ params,questionDetails ,setType, progressWidth, forwardFlag,routePath,showButton }) {
  useEffect(() => {
    let discount_rate = document.getElementById("discount_rate")
    if(discount_rate){
    discount_rate.style.display="table"
    }
    showButton()
    forwardFlag(false)
    progressWidth("25%")
  },[])
  return (
    <div className="service_details_grid_container">
      {
        questionDetails.map(questions => (
          <label key={questions.id} className="service_details_grid_item" onClick={()=>{ forwardFlag(true); routePath(`/job_request/${params.name}/type/2`);setType(questions.value)}}>
            <div className="service_details_image_container">
              <img src={questions.valueImageUrl}  className="service_details_image"/>
            </div>
            <div className="service_details_table_label">
              <div className="service_details_tablecell_label">
              <input type = "radio" name="radio_button" className="service_details_radio_button" />
              <label className="service_details_label">{questions.value}</label> 
            </div>
            </div>
          </label>
      ))}

    </div>

)}

export default ServiceDetailsImage