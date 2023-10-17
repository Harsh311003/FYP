/** @format */

const About = (props) => {
  const closeAboutPage = () => {
    props.closeAbout();
  };
  return (
    <>
      <button
        onClick={closeAboutPage}
        className=" my-2 ml-4 py-1 px-3 rounded-xl font-[Lato]  flex flex-row items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2"
          height="2em"
          viewBox="0 0 448 512"
        >
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
        </svg>
        <span className="text-xl">Go to main page</span>{" "}
      </button>
      <hr />
      <div className=" mx-6 mt-4 text-xl font-[Roboto]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
    </>
  );
};

export default About;
