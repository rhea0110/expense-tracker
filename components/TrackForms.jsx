import React from 'react';
import Dropdown from './Dropdown';

const TrackForms = () => {
    return (
      <div className="w-full h-full ">
        <div className="w-full h-full text-black">
          <form>
            <div className="w-full gap-x-10 gap-y-10 items-center justify-center flex flex-wrap">
              <div className="flex  flex-col w-[30%] space-y-1">
                <label className="text-center">
                  Expense Name
                  <span className="text-red-700 text-lg font-semibold">*</span>
                </label>
                <input
                  type="text"
                  required={true}
                  className="bg-transparent px-5 border h-10 border-black  rounded-sm"
                />
              </div>
              <div className="flex flex-col w-[30%] space-y-1">
                <label className="text-center">
                  Date of Expenditure
                  <span className="text-red-700 text-lg font-semibold">*</span>
                </label>
                <input
                  type="date"
                  required={true}
                  className="bg-transparent px-5 border border-black h-10 rounded-sm"
                />
              </div>{" "}
              <div className="flex flex-col w-[30%] space-y-1">
                <label className="text-center">
                  Type of Expenditure
                  <span className="text-red-700 text-lg font-semibold">*</span>
                </label>
            {/*     <select className="bg-transparent bg-white px-5 border  border-black h-10 rounded-sm">
                  <option>Family</option>
                  <option>Personal</option>
                </select> */}
                <Dropdown />
              </div>
              <div className="flex flex-col w-[30%] space-y-1">
                <label className="text-center">
                  Amount Spent
                  <span className="text-red-700 text-lg font-semibold">*</span>
                </label>
                <input
                  required={true}
                  type="text"
                  className="bg-transparent px-5 border border-black h-10 rounded-sm"
                />
              </div>{" "}
              <div className="flex flex-col w-[30%] space-y-1">
                <label className="text-center">Total Savings Left</label>
                <input
                  type="text"
                  className="bg-transparent px-5 border border-black h-10 rounded-sm"
                />
              </div>{" "}
              <div className="flex flex-col w-[30%] space-y-1">
                <label className="text-center">Comments (If any)</label>
                <input
                  type="text"
                  className="bg-transparent px-5 border border-black h-10 rounded-sm"
                />
              </div>
            </div>
            <div className="py-4 px-3 flex items-center justify-center mt-7">
              <button
                type="submit"
                className=" py-2 px-4 bg-blue-600 rounded text-white"
              >
                Add Expenditure 
              </button>
            </div>
          </form>
        </div>
      </div>
    );
}

export default TrackForms;