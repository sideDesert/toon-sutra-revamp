import webtoonsPrev from "../assets/webtoonsPrev.png";

export default function Webtoons() {
  return (
    <div className="w-full flex sm:justify-center justify-center py-8 sm:h-screen h-96">
      <div className="flex flex-col sm:w-[95%] w-full rounded-l-lg justify-between">
        <div className="sm:w-full relative">
          <h1 className="sm:text-[40px] text-center leading-12 font-medium sm:mt-0 mt-10 text-textPrimary sm:text-center pb-8 pt-14">
            What are Webtoons?
          </h1>
        </div>
        <div className="sm:w-full sm:h-full h-2/3 w-full bg-black"></div>
      </div>
    </div>
  );
}
