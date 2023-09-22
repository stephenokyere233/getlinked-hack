import SectionLayout from "@/layout/section.layout";
import React from "react";

const Timeline = () => {
  const list = [
    {
      title: "Hackathon Announcement",
      text: `The getlinked tech hackathon 1.0 is formally announced <br class="hidden xl:block"/>
to the general public and teams begin to get ready to register`,
    },
    {
      title: "Teams Registration begins",
      text: `Interested teams can now show their interest in the <br class="hidden xl:block"/>
getlinked tech hackathon 1.0 2023 by proceeding to register`,
    },
    {
      title: "Teams Registration ends",
      text: `Interested Participants are no longer Allowed to <br class="hidden lg:block"/>
register`,
    },
    {
      title: `Announcement of the accepted teams and ideas`,
      text: `All teams whom idea has been accepted into getlinked tech <br class="hidden xl:block"/>
hackathon 1.0 2023 are formally announced`,
    },
    {
      title: "Getlinked Hackathon 1.0 Offically Begins",
      text: `Accepted teams can now proceed to build their <br class="hidden xl:block"/>
ground breaking skill driven solutions`,
    },
    {
      title: `Demo Day`,
      text: `Teams get the opportunity to pitch their projects to judges. <br class="hidden xl:block"/>
The winner of the hackathon will also be announced on <br class="hidden lg:block"/>
this day`,
    },
  ];
  const Row = ({ reverse = false, text = "", title = "", index = 0 }) => {
    return (
      <>
        <div
          className={`xl:flex hidden lg:gap-6 xl:gap-20 items-end ${
            reverse ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <div className={`py-4 ${reverse ? "text-start" : "text-end"} flex-1`}>
            <h3 className="text-pink font-bold text-[22px]">{title}</h3>
            <p dangerouslySetInnerHTML={{ __html: text }} />
          </div>
          <div className="w-[100px] h-max gap-4 flex flex-col items-center justify-center">
            <div className="min-h-[100px] bg-line-gradient w-[3px]" />
            <div className="w-[60px] flex items-center rounded-full h-[60px] bg-line-gradient text-black justify-center">
              <span className="font-bold  text-white text-[24px]">{index}</span>
            </div>
          </div>
          <div className="py-4 flex-1">
            <h3
              className={`text-pink font-bold text-[22px] ${
                reverse ? "text-end" : "text-start"
              }`}
            >
              November 18,2023
            </h3>
          </div>
        </div>

        <div className={`flex xl:hidden gap-2 md:gap-4   border`}>
          <div className="w-max lg:w-[100px]  gap-2 lg:gap-4 flex flex-col justify-between items-center">
            <div className="min-h-[80px] flex-1 lg:min-h-[100px] bg-line-gradient w-[3px]" />
            <div className=" w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[60px] flex items-center rounded-full lg:h-[60px] bg-line-gradient text-black justify-center">
              <span className="font-bold  text-white lg:text-[20px]">{index}</span>
            </div>
          </div>
          <div className={`flex flex-col justify-between py-2 flex-1`}>
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
    <section className=" relative py-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center space-y-6">
          <h2 className="text-[32px] font-bold">Timeline</h2>
          <p>
            Here is the breakdown of the time we anticipate <br /> using for the upcoming
            event.
          </p>
        </div>
        <div className="py-10 w-full mx-auto my-6">
          <div className="space-y-4 px-4">
            {list.map((item, index) => {
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
