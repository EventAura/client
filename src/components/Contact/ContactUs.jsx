import React, { useState, useRef, useEffect } from "react";

const ContactUs = () => {
  const [isMessage, setMessage] = useState(false);
  const messageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage(true); // Set the message to true to show the modal or message
    // Add any additional logic for form submission here
  };
  useEffect(() => {
    if (isMessage && messageRef.current) {
      messageRef.current.focus(); // Focus on the popup
    }
  }, [isMessage]);

  return (
    <>
      <main className="py-14 flex items-center justify-center min-h-screen">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-100 md:px-8">
          <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none text-center">
            <div className="max-w-lg space-y-3 mx-auto">
              <h3 className="text-indigo-600 font-semibold">Contact</h3>
              <p className="text-gray-100 text-3xl font-semibold sm:text-4xl">
                Let us know how we can help
              </p>
              <p>
                We’re here to help and answer any question you might have. We
                look forward to hearing from you! Please fill out the form, or
                use the contact information below.
              </p>
              <div>
                <ul className="mt-6 flex flex-col gap-y-6 items-center">
                  <li className="flex items-center gap-x-3">
                    <div className="flex-none text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                    </div>
                    {/* <!-- Updated email address to include a mailto link --> */}
                    <p>
                      <a href="mailto:support@eventaura.tech">
                        Support@eventaura.tech
                      </a>
                    </p>
                  </li>
                  <li className="flex items-center gap-x-3">
                    <div className="flex-none text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>
                    </div>
                    <p>+91 91826-63484 (Sindhu Ravuri)</p>
                  </li>
                  <li className="flex items-center gap-x-3">
                    <div className="flex-none text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>
                    </div>
                    <p>+91 90306-84781 (Varun Harinath)</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <main className="relative py-28 ">
        {isMessage && (
          <div
            role="alert"
            className="rounded-xl border border-gray-100 bg-white p-4 mx-16 mb-5"
            ref={messageRef}
            tabIndex="-1"
          >
            <div className="flex items-start gap-4">
              <span className="text-red-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v2m0 4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
                  />
                </svg>
              </span>

              <div className="flex-1">
                <strong className="block font-medium text-gray-900">
                  404 Error
                </strong>
                <p className="mt-1 text-sm text-gray-700">
                  Can't Process Your Request, Please Contact us directly.
                </p>
              </div>

              <button
                onClick={() => setMessage(false)}
                className="text-gray-500 transition hover:text-gray-600"
              >
                <span className="sr-only">Dismiss popup</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
        

        <div
          className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
          style={{
            background:
              "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
          }}
        ></div>
      </main>

    </>
  );
};

export default ContactUs;
