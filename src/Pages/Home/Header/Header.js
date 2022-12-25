import writter from "../../../assest/write.jpg";
export const Header = () => {
  return (
    <div className="relative flex flex-col-reverse px-4 py-16 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full">
      <div className="z-0 flex justify-center h-full -mx-32 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
        <img
          src={writter}
          className=" w-full h-auto lg:w-auto lg:h-full"
          alt=""
        />
      </div>
      <div className="relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl">
        <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-italic tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Thoughts,
              <br className="hidden md:block" />
              stories and <br />
              <span className="inline-block text-deep-purple-accent-400">
                ideas.
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              “A good novel tells us the truth about its hero; but a bad novel
              tells us the truth about its author.” “The most valuable of all
              talents is that of never using two words when one will do.” “Your
              intuition knows what to write, so get out of the way.” “Easy
              reading is damn hard writing.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
