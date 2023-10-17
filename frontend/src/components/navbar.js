/** @format */


const Navbar = (props) => {

  const openAboutPage = ()=>{
    props.openAbout();
  }
  return (<>
    <div className="bg-red-600 h-20 flex flex-row justify-center items-center">
      <span className=" py-2 px-4 font-bold text-3xl text-white font-[Lato]">
      CKD Predictor
      </span>
    </div>
    <div className="bg-red-600 mt-[-20px] flex flex-row justify-end items-center space-x-4 px-4"> 
      <button className="py-1 pr-4 text-xl text-white font-[Laila]"
      onClick={openAboutPage}
      >About</button>
    </div>
  </>);
};

export default Navbar;
