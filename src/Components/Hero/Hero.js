import FlatFaceLogo from '../../Assets/FlatFaceLogo.svg';
import './Hero.css';

function Hero() {
    return (
        <div className="container mt-20">
            <div className="m-auto">
                <img src={FlatFaceLogo} alt="Flat Face Logo" className="w-32 m-auto"></img>
                <div className="mt-5 text-6xl text-center">
                    Hi, I'm <span style={{ color: '#ADFFD2'}}>Matt</span>
                </div>
                <div className="font-extralight text-2xl text-center">
                    A Front-End Developer based in Cleveland, OH
                </div>
                <div className="mt-48 flex">
                    <div className="mx-auto flex gap-3">
                        <i class="social-icon lab la-github la-2x"></i>
                        <i class="social-icon lab la-instagram la-2x"></i>
                        <i class="social-icon lab la-linkedin-in la-2x"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;