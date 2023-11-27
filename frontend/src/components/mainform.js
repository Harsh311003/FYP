/** @format */

import { useRef } from "react";

const MainForm = (props) => {
  const sg_ref = useRef();
  const al_ref = useRef();
  const sc_ref = useRef();
  const sod_ref = useRef();
  const hemo_ref = useRef();
  const pcv_ref = useRef();
  const rbcc_ref = useRef();

  const formSubmitHandler = async () => {
    try {
      const sg = sg_ref.current.value;
      const al = al_ref.current.value;
      const sc = sc_ref.current.value;
      const sod = sod_ref.current.value;
      const hemo = hemo_ref.current.value;
      const pcv = pcv_ref.current.value;
      const rbcc = rbcc_ref.current.value;
      if (!sg || !al || !sc || !sod || !hemo || !pcv || !rbcc) {
        alert("Enter all data to proceed.");
        return;
      }
      const data = {
        sg,
        al,
        sc,
        sod,
        hemo,
        pcv,
        rbcc,
      };
      const response = await fetch("http://localhost:5000/result", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      if (response.status === 200) props.showResult(responseData.result);
      else throw Error(response.status);
    } catch (err) {
      alert("Something went wrong. Try again later");
      console.log(err);
    }
  };

  return (
    <>
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
                  htmlFor="f1"
                >
                  Urine specific gravity
                </label>
                <input
                  type="number"
                  step="any"
                  ref={sg_ref}
                  min="0"
                  required
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:border-blue-400"
                  id="f1"
                  placeholder="Enter urine specific gravity level here..."
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="f2"
                >
                  Albumin
                </label>
                <input
                  type="number"
                  step="any"
                  ref={al_ref}
                  min="0"
                  required
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:border-blue-400"
                  id="f2"
                  placeholder="Enter albumin level in g/dL here..."
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="f3"
                >
                  Serum creatinine
                </label>
                <input
                  type="number"
                  step="any"
                  required
                  ref={sc_ref}
                  min="0"
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:border-blue-400"
                  id="f3"
                  placeholder="Enter serum creatinine level in mg/dL here..."
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="f4"
                >
                  Sodium
                </label>
                <input
                  type="number"
                  step="any"
                  required
                  ref={sod_ref}
                  min="0"
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:border-blue-400"
                  id="f4"
                  placeholder="Enter sodium level here..."
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="f5"
                >
                  Hemoglobin
                </label>
                <input
                  type="number"
                  required
                  step="any"
                  min="0"
                  ref={hemo_ref}
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:border-blue-400"
                  id="f5"
                  placeholder="Enter hemoglobin level in g/dL here..."
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="f6"
                >
                  Packed cell volume (PCV)
                </label>
                <input
                  type="number"
                  required
                  ref={pcv_ref}
                  step="any"
                  min="0"
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:border-blue-400"
                  id="f6"
                  placeholder="Enter pcv percentage here..."
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="f7"
                >
                  Red blood cell count (rbcc)
                </label>
                <input
                  type="number"
                  step="any"
                  ref={rbcc_ref}
                  required
                  min="0"
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:border-blue-400"
                  id="f1=7"
                  placeholder="Enter rbcc in mcL here..."
                />
              </div>

              {/* <!-- Submit button --> */}
              <div className="mb-2 text-center">
                <button
                  className="w-1/3 px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline focus:shadow-outline "
                  onClick={formSubmitHandler}
                >
                  Predict
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainForm;
