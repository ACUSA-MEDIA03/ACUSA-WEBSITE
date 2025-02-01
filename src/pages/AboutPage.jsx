import NavBar from "../components/NavBar/NavBar";
import BannerImg from "/Banner/banner.jpg";
import Button from "../components/Button/Button";

function AboutPage() {
    return (
        <>

            {/* Navbar */}
            <NavBar />

            <div className={`lg:h-[100vh] grid bg-no-repeat bg-cover bg-center`}
                style={{ backgroundImage: `url(${BannerImg})` }} >

                <div className="overlay flex justify-center flex-col lg:p-17.5 px-6 py-30 text-white ">
                    <div className="lg:space-y-6 space-y-4" >
                        <div className="font-grotesk lg:text-3xl text-sm ">
                            <p>Who we are at ACUSA </p>
                            <p className="lg:text-4xl text-3xl lg:w-4xl place-content-center font-rubik-dirt font-[100] lg:leading-24 "> Ajayi Crowther Student Assembly pursuing Excellence in our endevaours </p>

                            <div className="border lg:w-[15%] w-[40%] grid mt-2">
                            <Button  text={'Read More ...'}/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AboutPage