/** @format */

const Result = (props) => {
    const closeResultPage = ()=>{
      props.closeResult();
    }
    return (
      <>
      <button
        onClick={closeResultPage}
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
      
      <div className=" text-center font-bold mx-6 mt-4 text-3xl fontt-serif ">
      {props.result ? (
        <span className="text-red-600"> You are prone to Chronic Kidney Disease</span>
      ): (
        <>
           <span className="text-green-500"> You are not prone to Chronic Kidney Disease</span>
        </>
      )}
      </div>
    </>
    );
  };
  
  export default Result;

  //{'sg': '1.005', 'al': '4', 'sc': '1', 'sod': '139', 'hemo': '14', 'pcv': '40', 'rbcc': '5'}
  