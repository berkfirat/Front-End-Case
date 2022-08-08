import React, { useEffect } from 'react'
import services from '../modules/services.json'
function ServiceList({ forwardFlag, routePath, setParams,hideTopbar,showButton}) {

    useEffect(() => {
        hideTopbar()
        showButton()
    }, [])

    return (
        <div className="service_list_container">
            <div className="service_list_header_container">
                <span className="service_list_header_description">Hangi Hizmeti Arıyorsun ?</span>
            </div>
            <div className="service_items_container">
                {
                    services.map(service => {
                        function isSelected() {
                            forwardFlag(true)
                            setParams(service)
                            if (service.serviceId === 399) {
                                routePath(`/job_request/${service.name}/type/0`)
                            }
                            else {
                                routePath(`/job_request/${service.name}/type/1`)
                            }  
                        }
                        return (
                            <label key={service.serviceId} onClick={() => { isSelected() }} className="service_elements" id={service.serviceId}>
                                 <div className="service_label">
                                <input type="radio" id={service.name} name="radio" value={service.name} />
                                <span className='service_label_text'>{service.name}</span>
                                </div>
                            </label>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default ServiceList