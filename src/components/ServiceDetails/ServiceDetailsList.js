import React, { useEffect, useState } from 'react'

function ServiceDetailsList({ params, questionDetails, setType,setAdditional, routePath, forwardFlag, pageNumber, order, id, progressWidth, hideDiscount,showButton }) {

  const [selectedType,setSelectedType] = useState("")

  useEffect(() => {
    hideDiscount()
    showButton()
    forwardFlag(false)
  }, [])

  useEffect(() => {
    if (pageNumber === 2) {
      progressWidth("25%")
      setType(selectedType)
    }
    else {
      progressWidth("50%")
      setAdditional(selectedType)
    }
  },[selectedType])

  if (order) {
    pageNumber = order + 1
  }
  else if(id === 453){
    pageNumber = 4
  }
 
  return (
    <div className="service_items_container">
      {
        questionDetails.map(value => {
          return (
            <label id={value.id} key={value.id} onClick={() => { setSelectedType(value.value); routePath(`/job_request/${params.name}/type/${pageNumber}`); forwardFlag(true) }} className="service_elements" >
              <div className="service_label">
              <input name="radio" type="radio" />
              <span className="service_label_text">{value.value}</span>
              </div>
            </label>
          )
        })
      }
    </div>
  )
}

export default ServiceDetailsList