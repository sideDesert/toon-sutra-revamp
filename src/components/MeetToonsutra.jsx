import meetToon from "../assets/meetToon.png";

export default function MeetToonsutra() {
  return (
    <div className="w-full flex sm:justify-center justify-center p-0 m-0 h-auto">
      <div className="grow flex sm:flex-row flex-col-reverse bg-[#2323235E] sm:w-[96%] w-11/12 rounded-l-lg justify-between p-10 h-fit">
        <div className="sm:w-3/5 flex flex-col justify-center items-center text-textPrimary gap-[3rem]">
          <h1 className="sm:text-[24px] text-[20px] font-medium mt-8 flex height-[10rem]">
            Meet Toonsutra
          </h1>
          <div className="sm:grid grid-cols-2 grid-rows-2 grid-flow-col sm:px-0 px-5 grow-[0.8]">
            <div className="flex flex-row p-7 gap-5">
              <h1 className=" font-extralight sm:text-[5em] text-6xl text-glow -translate-y-[18%]">
                1.
              </h1>
              <p className=" sm:w-72  leading-8 grow">
                TOONSUTRA is India's premiere Webtoon platform and new
                storytelling home for disruptive creators across the country to
                experiment, innovate and create engaging webtoon comic stories.
              </p>
            </div>
            <div className="flex flex-row p-7 gap-5">
              <h1 className=" font-extralight sm:text-[5em] text-6xl text-glow  -translate-y-[18%]">
                2.
              </h1>
              <p className=" sm:w-56 leading-8 grow">
                Toonsutra has a massive library of International and Indian IP's
                along with Graphic India's vast library of high-quality comics.
              </p>
            </div>
            <div className="flex flex-row p-7 gap-5">
              <h1 className=" font-extralight sm:text-[5em] text-6xl  text-glow  -translate-y-[18%]">
                3.
              </h1>
              <p className=" sm:w-72 leading-8 groe">
                TOONSUTRA is India's premiere Webtoon platform and new
                storytelling home for disruptive creators across the country to
                experiment, innovate and create engaging webtoon comic stories.
              </p>
            </div>
            <div className="flex sm:flex-row flex-row p-7 gap-5">
              <h1 className=" font-extralight sm:text-[5em] text-6xl  text-glow  -translate-y-[18%]">
                4.
              </h1>
              <p className=" sm:w-72 leading-8 grow">
                Fall in love with emerging rising star creators across India as
                we give them a home to tell their stories.
              </p>
            </div>
          </div>
        </div>
        <div className="sm:w-2/5 w-full flex justify-center sm:h-full h-screen sm:rounded-none rounded-t-lg sm:bg-center sm:bg-cover bg-center">
          <img src={meetToon} alt="meet us" />
        </div>
      </div>
    </div>
  );
}
