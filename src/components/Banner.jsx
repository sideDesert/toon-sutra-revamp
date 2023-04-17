import bannerImage from "../assets/banner.jpg";
import phoneMock from "../assets/PhoneMockup.png";
import ios from "../assets/ios.png";
import android from "../assets/android.png";

export function Banner() {
  return (
    <div className=" sm:h-screen sm:w-full relative flex flex-col justify-center">
      <div className="h-[3rem] w-full" />
      <div
        className="w-full h-full absolute z-10 top-0 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${bannerImage})` }}
      ></div>
      <div className="absolute w-full h-[3rem] bg-gradient-to-t from-backgroundPrimary to-transparent bottom-0 z-30"></div>
      {/* <img src={bannerImage} alt="banner" className="" /> */}
      <div className="relative z-20 w-full">
        <div className="flex sm:flex-row flex-col-reverse items-center sm:justify-center justify-between h-full sm:mt-0 mt-8 sm:px-16">
          <div className="sm:w-1/2 flex flex-col sm:items-start items-center text-[#12181C] sm:px-16 justify-between">
            <div>
              {" "}
              <p className=" font-extrabold sm:text-6xl text-white text-2xl sm:normal-case uppercase text-center sm:text-left sm:w-full w-2/3 mt-8 sm:mt-0">
                HOME OF THE INDIAN WEBTOON
              </p>
              <p
                className=" sm:mt-5 sm:text-xl text-white hidden lg:block
            "
              >
                Experience thousands of webtoon comics from the Toonsutra
                library. With new titles releasing every week!
              </p>
            </div>
            <divs>
              <p className=" sm:mt-8 sm:text-xl text-white">
                Coming soon on Google and Apple
              </p>
              <div className="sm:flex hidden mt-8 space-x-6">
                <img src={android} alt="android" className=" h-12" />
                <img src={ios} alt="ios" className="h-12" />
              </div>
            </divs>
            <div className="sm:hidden block bg-gradient-to-r to-[#DA6732] from-[#D93B47] py-2 px-11 rounded-full hover:scale-105 transition-all hover:shadow-md sm:mt-0 mt-6">
              <p className=" text-backgroundPrimary font-medium">
                Download App
              </p>
            </div>
            <div className="sm:hidden block w-3/5 mx-auto mt-8">
              <p className="text-[10px] text-center">
                ToonSutra now available on IOS and Android.
              </p>
              <div className="flex w-full justify-between">
                <a href="" className="underline">
                  Playstore
                </a>
                <a href="" className="underline">
                  App Store
                </a>
              </div>
            </div>
          </div>
          <div className="sm:w-1/2 w-3/4 flex justify-center">
            <img src={phoneMock} alt="phone" className="w-3/4 max-w-[30rem]" />
          </div>
        </div>
      </div>
    </div>
  );
}
