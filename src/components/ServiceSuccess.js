import React, { useEffect } from 'react'
import confettiEmoji from '../images/confetti_emoji.png'
function ServiceSuccess({ showConsole, hideTopbar }) {

    useEffect(() => {
        let footer_button = document.getElementById("footer_button")
        if (footer_button) {
            footer_button.style.display = "none"
        }
        hideTopbar()
        showConsole()
    })

    return (
        <div className="service_success">
            <div className="service_success_row">
                <div className="service_success_image_container">
                    <img src={confettiEmoji} className="service_success_image" />
                </div>
                <div className="service_success_text">
                    Talebini aldık!
                </div>
            </div>
        </div>
    )
}

export default ServiceSuccess