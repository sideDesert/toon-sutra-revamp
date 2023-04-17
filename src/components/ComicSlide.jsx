import ComicCard from "./ComicCard";
export default function ComicSlide() {
  return (
    <>
      <div className="">
        <p className="text-center text-3xl py-4">
          Here's a limited preview of the vast online library on Toonsutra
        </p>
      </div>
      <div className=" w-full mx-auto flex flex-nowrap overflow-auto py-6">
        <div className="flex items-center justify-center">
          <div className="px-2 w-64">
            {" "}
            <ComicCard
              coverImage="EmpireofBlood"
              publisher="GraphicIndia"
            />{" "}
          </div>
          <div className="px-2 w-64">
            {" "}
            <ComicCard
              coverImage="EmpireofBlood"
              publisher="GraphicIndia"
            />{" "}
          </div>
          <div className="px-2 w-64">
            {" "}
            <ComicCard
              coverImage="EmpireofBlood"
              publisher="GraphicIndia"
            />{" "}
          </div>
          <div className="px-2 w-64">
            {" "}
            <ComicCard
              coverImage="EmpireofBlood"
              publisher="GraphicIndia"
            />{" "}
          </div>
          <div className="px-2 w-64">
            {" "}
            <ComicCard
              coverImage="EmpireofBlood"
              publisher="GraphicIndia"
            />{" "}
          </div>
          <div className="px-2 w-64">
            {" "}
            <ComicCard
              coverImage="EmpireofBlood"
              publisher="GraphicIndia"
            />{" "}
          </div>
          <div className="px-2 w-64">
            {" "}
            <ComicCard
              coverImage="EmpireofBlood"
              publisher="GraphicIndia"
            />{" "}
          </div>
          <div className="px-2 w-64">
            {" "}
            <ComicCard
              coverImage="EmpireofBlood"
              publisher="GraphicIndia"
            />{" "}
          </div>
          <div className="px-2 w-64">
            {" "}
            <ComicCard
              coverImage="EmpireofBlood"
              publisher="GraphicIndia"
            />{" "}
          </div>
          <div className="px-2 w-64">
            {" "}
            <ComicCard
              coverImage="EmpireofBlood"
              publisher="GraphicIndia"
            />{" "}
          </div>
        </div>
      </div>
      <p className="text-center text-xl py-4 ml-8">
        And <b>hundreds</b> of titles like these
      </p>
      <p className="text-center text-md  mx-auto text-[#EAC338]">
        <a href="/#" className="text-[#EAC338} underline underline-offset-8">
          {" "}
          Learn More
        </a>
      </p>
      <div className="mt-9 sm:block mx-auto bg-gradient-to-r to-[#DA6732] from-[#D93B47] py-2 my-4 sm:px-8 px-4 rounded-full hover:scale-105 h-[50px] transition-all hover:shadow-md sm:w-[291px] w-2/3 text-center">
        <p className=" text-white font-medium top-1 relative">Download App</p>
      </div>
    </>
  );
}
