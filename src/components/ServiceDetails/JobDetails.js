import React, { useEffect, useState } from 'react'

function JobDetails({ params, questionDetails, routePath, forwardFlag, jobDetails, progressWidth,hideDiscount,showButton }) {

  const [text, setText] = useState("")
  let textarea = document.getElementById("textarea")
  useEffect(() => {
    progressWidth("75%")
    hideDiscount()
    showButton()
    let warning_area = document.getElementById("jobDetails_warning_area")
    let warning_message = document.getElementById("warning_message")
    if (textarea) {
      if (text.length < 26) {
        warning_area.className = "warning_message"
        textarea.className = "jobDetails_textarea_error"
        warning_message.innerText = "Hizmet verenlerimizin neye ihtiyacın olduğunu anlamaları için daha fazla detay yaz!"
        forwardFlag(false)
      }
      else {
        jobDetails(text)
        forwardFlag(true)
        routePath(`/job_request/${params.name}/success`)
        if (text.length >= 26 && text.length < 100) {
          warning_area.className = "warning_message"
          textarea.className = "jobDetails_textarea_warning"
          warning_message.innerText = "Eksik bir şey var mı?"
        }
        else {
          warning_area.className = "jobDetails_warning_success"
          textarea.className = "jobDetails_textarea_success"
          warning_message.innerText = "Teşekkürler."
        }
      }
    }
  }, [text])

  return (
    <div className="service_items_container">
      <textarea id="textarea" className="jobDetails_textarea" onChange={(e) => setText(e.target.value)} placeholder={questionDetails.placeHolder} />
      <div id="jobDetails_warning_area" className="warning_message">
        <span id="warning_message"></span>
      </div>
    </div>
  )
}

export default JobDetails