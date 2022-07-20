import HaikeiWaveTop from "../../public/FooterAssets/HaikeiWaveTop.svg"
import HaikeiWaveBottom from "../../public/FooterAssets/HaikeiWaveBottom.svg"

import FooterMapPin from "../../public/FooterAssets/FooterMapPin.svg"
import HeartIcon from "../../public/FooterAssets/FooterHeartIcon.svg"
import InstagramLogo from "../../public/FooterAssets/FooterInstagramLogo.svg"
import WhatsappLogo from "../../public/FooterAssets/FooterWhatsappLogo.svg"

export function Footer() {
    return (
        <footer className="footer">
            <div>
                <img src={HaikeiWaveTop} alt="" className="wave-top" />
            </div>

           <div className="footer-content">

               <div className="title-sub">
                    <h1 className="footer-title">YesCakes</h1>
                    <p className="footer-subtitle">Sua loja favorita de doces, pacificação e bolos.</p>
                </div>       
            
                <div className="footer-contact">
                    <div className="mappin-container">
                        <img src={FooterMapPin} alt="" className="mappin-image" />
                    </div>
                    
                    <div className="address-container">
                        <p className="find-us">Nos Encontre!</p>
                        <h2 className="address">AV. MORUMBI, 7878 SANTO AMARO CEP 04703-001</h2>
                    </div>

                </div>

                <div className="footer-social">
                    <div className="heart-container">
                        <img src={HeartIcon} alt="" className="heart-image" />                    
                    </div>

                    <div className="social-container">
                        <p className="follow-us">Entre Em Contato!</p>
                    
                        <div className="social-icons-container">
                            <a target="_blank" href="https://www.instagram.com/yescakes/" className="instagram-link">
                                <img src={InstagramLogo} alt="" className="instagram-image" />
                            </a>

                            <a href="tel:555-555-5555" className="whatsapp-link">
                                <img src={WhatsappLogo} alt="" className="whatsapp-image" />
                            </a>

                        </div>
                    </div>
                
                </div>


            </div> 

            <p className="made-with-love">Made With ❤️ By <a className="love-link" href="https://github.com/AtomicFeasT">Thiago</a> & <a className="love-link" href="https://github.com/Buskik">Rodrigo</a> @2022</p>

            <div>
                <img src={HaikeiWaveBottom} alt="" className="wave-bottom" />
            </div>
        </footer>       
    )
}