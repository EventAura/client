import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import FormattedDate from "../EventOnboarding/utils/FormattedDate";
import axiosInstance from "../../api/axiosInstance";

const UserSuccess = () => {
  const { id } = useParams();
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        // const response = await axios.get(
        //   `https://eventaura-server-api.onrender.com/participant/${id}`
        // );
        const response = await axiosInstance.get(`/participant/${id}`);
        console.log(response.data.paymentData);
        setdata(response.data);
        setloading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
  }, [id]);

  const downloadPDF = (name) => {
    const input = document.getElementById("root"); // Assuming "root" is the id of your root app element
    const inputWidth = input.scrollWidth;
    const inputHeight = input.scrollHeight;

    html2canvas(input, {
      scrollY: -window.scrollY, // Ensure capturing from the top of the page
      windowWidth: inputWidth, // Capture full width of the content
      windowHeight: inputHeight, // Capture full height of the content
      backgroundColor: "#000000", // Pitch black background color
      scale: 2, // Increase scale for better resolution
    })
      .then((canvas) => {
        const pdf = new jsPDF("p", "px", [inputWidth, inputHeight]); // Set PDF dimensions to match captured content
        const imgData = canvas.toDataURL("image/png");
        const imgWidth = pdf.internal.pageSize.getWidth();
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
        pdf.save(`${name.replace(/\s+/g, "_")}.pdf`);
      })
      .catch((err) => {
        console.error("Error generating PDF", err);
      });
  };

  if (loading) {
    return (
      <div className="max-h-screen">
        <div className="mt-7">
          <div role="status" className="animate-pulse">
            <div className="h-2.5 rounded-full bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div>
            <div className="h-2.5 mx-auto rounded-full bg-gray-700 max-w-[540px]"></div>
            <div className="h-2.5 mx-auto rounded-full bg-gray-700 max-w-[500px] mt-2"></div>
            <div className="h-2.5 mx-auto rounded-full bg-gray-700 max-w-[450px] mt-2"></div>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
        <div
          role="status"
          className="max-w md:m-10 m-5 p-4 space-y-4 border divide-y rounded shadow animate-pulse divide-gray-700 md:p-6 border-gray-700"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="h-2.5 rounded-full bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 rounded-full bg-gray-700"></div>
            </div>
            <div className="h-2.5 rounded-full bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 rounded-full bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 rounded-full bg-gray-700"></div>
            </div>
            <div className="h-2.5 rounded-full bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 rounded-full bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 rounded-full bg-gray-700"></div>
            </div>
            <div className="h-2.5 rounded-full bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 rounded-full bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 rounded-full bg-gray-700"></div>
            </div>
            <div className="h-2.5 rounded-full bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 rounded-full bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 rounded-full bg-gray-700"></div>
            </div>
            <div className="h-2.5 rounded-full bg-gray-700 w-12"></div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      {data ? (
        <div className="mx-auto max-w-screen-xl" id="pageContent">
          {data.paymentData?.success &&
          ![
            "PAYMENT_PENDING",
            "PAYMENT_ERROR",
            "INTERNAL_SERVER_ERROR",
            "BAD_REQUEST",
            "AUTHORIZATION_FAILED",
            "INTERNAL_SECURITY_BLOCK_1",
            "INTERNAL_SECURITY_BLOCK_2",
            "INTERNAL_SECURITY_BLOCK_4",
            "INTERNAL_SECURITY_BLOCK_5",
            "INTERNAL_SECURITY_BLOCK_6",
          ].includes(data.paymentData?.code) ? (
            // Payment Success Content
            <>
              <header>
                <div className="px-4 mt-10 py-8 sm:px-6 sm:py-12 lg:px-8">
                  <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="text-center sm:text-left">
                      <h1 className="text-xl font-semibold text-gray-100 sm:text-2xl">
                        You have successfully registered for the{" "}
                        <span className="text-indigo-600">
                          {data?.eventName}
                        </span>{" "}
                        event! 🎉
                      </h1>
                      <p className="mt-1.5 text-sm text-gray-200">
                        Navigate to the page to know more or check your email
                        for detailed information.{" "}
                        <span className="font-semibold text-red-600">
                          Don't forget to download your ticket!
                        </span>
                      </p>
                    </div>
                    <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                      <button
                        onClick={() => downloadPDF(data?.name)}
                        className="inline-flex items-center justify-center gap-1.5 rounded-lg border px-5 py-3 text-gray-100 transition hover:bg-gray-50 hover:border-gray-200 hover:text-gray-900 focus:outline-none focus:ring"
                        type="button"
                      >
                        <span className="text-sm font-semibold">
                          Download Your Ticket
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </header>
              <div className="flow-root rounded-lg border py-3 shadow-sm border-gray-700 mx-7 sm:mx-20">
                <dl className="-my-3 divide-y text-sm divide-gray-700">
                  <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-semibold text-white">Event Name</dt>
                    <dd className="sm:col-span-2 text-gray-100">
                      {data?.eventName}
                    </dd>
                  </div>
                  <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-semibold text-white">Name</dt>
                    <dd className="sm:col-span-2 text-gray-100">
                      {data?.name}
                    </dd>
                  </div>
                  <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-semibold text-white">College</dt>
                    <dd className="sm:col-span-2 text-gray-100">
                      {data.college ? data.college : "Not Provided"}
                    </dd>
                  </div>
                  <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-semibold text-white">Year</dt>
                    <dd className="sm:col-span-2 text-gray-100">
                      {data.year ? data.year : "Not Provided"}
                    </dd>
                  </div>
                  <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-semibold text-white">Phone Number</dt>
                    <dd className="sm:col-span-2 text-gray-100">
                      {data.phoneNumber}
                    </dd>
                  </div>
                  <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-semibold text-white">Email</dt>
                    <dd className="sm:col-span-2 text-gray-100">
                      {data.email}
                    </dd>
                  </div>
                  <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-semibold text-white">Transaction Id</dt>
                    <dd className="sm:col-span-2 text-gray-100">
                      {data?.paymentData?.data?.transactionId
                        ? data.paymentData.data.transactionId
                        : "-NA-"}
                    </dd>
                  </div>
                  <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-semibold text-white">Price</dt>
                    <dd className="sm:col-span-2 text-gray-100">
                      {data.eventPrice === "0" ? "FREE" : data.eventPrice}
                    </dd>
                  </div>
                  <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-semibold text-white">QR Code</dt>
                    <dd className="sm:col-span-2 text-gray-100">
                      <img
                        src={
                          data?.qrCode
                            ? data?.qrCode
                            : "Error Loading, Please Refresh the Page"
                        }
                        alt="qrcode"
                      />
                    </dd>
                  </div>
                </dl>
              </div>
            </>
          ) : (
            // Payment Failure Content
            <div className="flex justify-center items-center py-12">
              <div className="max-w-lg w-full rounded-lg border border-red-600 bg-red-50 shadow-md p-6 text-center">
                <h1 className="mt-4 text-2xl font-semibold text-red-700">
                  Payment Failed ❌
                </h1>
                <p className="mt-2 text-gray-700">
                  Unfortunately, your payment could not be processed. Please try
                  again or contact our support team with the details below for
                  assistance.
                </p>
                <div className="mt-6 bg-white rounded-md shadow p-4 text-left">
                  <p className="text-gray-800 font-medium">
                    <span className="text-red-700 font-semibold">User ID:</span>{" "}
                    {data?._id || "Not Provided"}
                  </p>
                  <p className="mt-2 text-gray-800 font-medium">
                    <span className="text-red-700 font-semibold">
                      Transaction ID:
                    </span>{" "}
                    {data?.paymentData?.data?.transactionId || "Not Available"}
                  </p>
                </div>
                <div className="mt-6 text-gray-800">
                  <p className="font-medium">Need help?</p>
                  <p>
                    Please email us at{" "}
                    <a
                      href="mailto:support@eventaura.tech"
                      className="text-indigo-600 hover:text-indigo-500 underline"
                    >
                      support@eventaura.tech
                    </a>{" "}
                    with the above details for quick resolution.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <>Loading</>
      )}
    </>
  );
};

export default UserSuccess;
