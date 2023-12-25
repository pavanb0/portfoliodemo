import './Social.css'

import Instagram from './assets/logos/Instagram.png'
import Github from './assets/logos/Github.png'
import linkedin from './assets/logos/Linkedin.png'
const Social = () => {
    return (

        <section id="social">
            <div className='custom-card'>
                <div className="social-links">
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} ></img>
                        
                    </a>
                    <a href="mailto:pavanbagwe16@gmail.com">
                        
                        <img src={Github} ></img>
                    </a>
                    <a href="https://www.linkedin.com/in/bagwepavan/" target="_blank" rel="noopener noreferrer">
                        
                        <img src={Instagram} ></img>
                    </a>

                </div>
            </div>
        </section>

    )
}
export default Social;