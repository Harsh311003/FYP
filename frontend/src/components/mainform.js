const MainForm = (props)=>{

    return (<>
    
    <div className="container mx-auto">
      <div className="flex justify-center px-6 my-6 ">
        {/* <!-- Col --> */}
        <div className="w-1/2 bg-white px-5 py-2 rounded-lg border ">
          <div className="px-8 mb-4 text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1453/1453625.png"
              className="h-20 w-20 inline-block rounded-full border"
              alt=""
            />
            {/* <!-- 						<p className="mb-4 text-sm text-gray-700">
           Enter your email address below and we'll send you a
            link to reset your password!
          </p>  --> */}
          </div>

          {/* <!-- complain  --> */}
          <div className="px-8 mb-4 text-center">
            <h2 className="pt-4 mb-2 text-2xl leading-tight">Fill Form</h2>
            {/* <!-- 							<p className="mb-4 text-sm text-gray-700">
           Enter your email address below and we'll send you a
            link to reset your password!
          </p> --> */}
          </div>
          <div className="px-8 pt-6 mb-4 bg-white rounded">
            {/* <!-- Enter Title --> */}
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="text"
              >
                Feature 1
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:border-blue-400"
                id="f1"
                placeholder="Enter feature 1 here..."
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="text"
              >
                Feature 2
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:border-blue-400"
                id="f1"
                placeholder="Enter feature 2 here..."
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="text"
              >
                Feature 3
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:border-blue-400"
                id="f1"
                placeholder="Enter feature 3 here..."
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="text"
              >
                Feature 4
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:border-blue-400"
                id="f1"
                placeholder="Enter feature 4 here..."
              />
            </div>

            {/* <!-- Submit button --> */}
            <div className="mb-2 text-center">
              <button
                className="w-1/3 px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline focus:shadow-outline "
                type="button"
              >
                Predict
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>);
}

export default MainForm;