import { TIMELINES } from "@/constants";

const Timeline = () => {
  const Row = ({ reverse = false, text = "", title = "", index = 0 }) => {
    return (
      <>
        <div
          className={`xl:flex hidden lg:gap-6 xl:gap-20 items-end ${
            reverse ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <div
            data-aos="fade-right"
            className={`py-4 ${reverse ? "text-start" : "text-end"} flex-1`}
          >
            <h3 className="text-pink font-bold text-[22px]">{title}</h3>
            <p dangerouslySetInnerHTML={{ __html: text }} />
          </div>
          <div className="w-[100px] h-max gap-4 flex flex-col items-center justify-center">
            <div className="min-h-[100px] bg-line-gradient w-[3px]" />
            <div className="w-[60px] flex items-center rounded-full h-[60px] bg-line-gradient text-black justify-center">
              <span className="font-bold  text-white text-[24px]">{index}</span>
            </div>
          </div>
          <div data-aos="fade-right" className="py-4 flex-1">
            <h3
              className={`text-pink font-bold text-[22px] ${
                reverse ? "text-end" : "text-start"
              }`}
            >
              November 18,2023
            </h3>
          </div>
        </div>

        <div className={`flex xl:hidden gap-2 md:gap-4`}>
          <div className="w-max lg:w-[100px]  gap-2 lg:gap-4 flex flex-col justify-between items-center">
            <div className="min-h-[60px] flex-1 lg:min-h-[100px] bg-line-gradient w-[3px]" />
            <div
              data-aos="zoom-in"
              className=" w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[60px] flex items-center rounded-full lg:h-[60px] bg-line-gradient text-black justify-center"
            >
              <span className="font-bold  text-white lg:text-[20px]">{index}</span>
            </div>
          </div>
          <div
            data-aos="fade-up-right"
            className={`flex flex-col justify-between py-1 md:py-2 flex-1`}
          >
            <div>
              <h3 className="text-pink font-bold text-[16.5px] lg:text-[22px]">
                {title}
              </h3>
              <p className="text-[14px]" dangerouslySetInnerHTML={{ __html: text }} />
            </div>
            <h3 className={`text-pink font-bold text-[16.5px] lg:text-[22px]`}>
              November 18,2023
            </h3>
          </div>
        </div>
      </>
    );
  };
  return (
    <section data-aos="fade-up" className="relative scroll-m-[150px] py-20" id="timeline">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center space-y-4 lg:space-y-6">
          <h2 className="text-[32px] font-bold">Timeline</h2>
          <p className="px-6">
            Here is the breakdown of the time we anticipate{" "}
            <br className="hidden lg:block" /> using for the upcoming event.
          </p>
        </div>
        <div className="py-2 lg:py-10 w-full mx-auto my-4 lg:my-6">
          <div className="space-y-4 px-6 md:px-10 lg:px-4">
            {TIMELINES.map((item, index) => {
              return (
                <Row
                  key={item.title}
                  text={item.text}
                  title={item.title}
                  reverse={index % 2 === 1}
                  index={index + 1}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
