import React, { useState } from "react";
import EventEULA from "../EULA/EventEULA";
import EventOnboardingForm from "./EventOnboardingForm";

const EventBoarding = () => {
  const [isAgreed, setIsAgreed] = useState(false);
  const [checkBox, setCheckBox] = useState(false);

  const handleEULAForm = () => {
    setIsAgreed(true);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {isAgreed ? (
        <EventOnboardingForm />
      ) : (
        <div>
          <h1 className="mx-16 mt-5 font-bold space-y-6 text-xl">
            Terms of Services To Host Your Event
          </h1>

          {/* Scrollable EULA */}
          <div className="mx-16 my-5 h-[500px] overflow-y-auto border border-indigo-600  p-4 rounded-lg">
            <EventEULA />
          </div>
          <div className="px-20">
            <div className="py-5">
              <input
                id="termsOfService"
                checked={checkBox}
                type="checkbox"
                onChange={() => setCheckBox(!checkBox)}
              />
              <label className="px-3" htmlFor="termsOfService">
                Acknowledge Terms of Service
              </label>
            </div>
            {checkBox ? (
              <button
                className="py-2 px-4 rounded-md bg-indigo-600 text-white hover:scale-105"
                onClick={handleEULAForm}
              >
                Acknowledge Terms of Service
              </button>
            ) : (
              <button
                className="py-2 px-4 rounded-md bg-indigo-600 text-white disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-800"
                disabled
              >
                Acknowledge Terms of Service
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default EventBoarding;
