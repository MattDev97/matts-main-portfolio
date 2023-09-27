import FlatFaceLogo from '../../Assets/FlatFaceLogo.svg';
import './Hero.css';

function Hero() {
    return (
        <div className="container md:mt-20 mt-2">
            <div className="m-auto">
                <img src={FlatFaceLogo} alt="Flat Face Logo" className="md:w-32 w-44 m-auto"></img>
                <div className="mt-5 text-6xl font-bold text-center">
                    Hi, I'm <span style={{ color: '#ADFFD2'}}>Matt</span>
                </div>
                <div className="font-extralight md:text-1xl text-2xl text-center">
                    A Front-End Developer based in Cleveland, OH
                </div>
                <div className="md:mt-48  mt-72 flex">
                    <div className="mx-auto flex gap-3">
                        <a href="https://github.com/MattDev97" target="_blank">
                            <i class="social-icon lab la-github la-2x"></i>
                        </a>
                        <a href="https://github.com/MattDev97" target="_blank">
                            <i class="social-icon lab la-instagram la-2x"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/matthew-muenzberg-225311162/" target="_blank">
                            <i class="social-icon lab la-linkedin-in la-2x"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;