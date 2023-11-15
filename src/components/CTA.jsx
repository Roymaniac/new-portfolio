import React from "react";

const CTA = () => {
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span className="block">Have a project in mind?</span>
          <span className="block text-red-600">Contact us today.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-600  px-5 py-3 text-base font-medium text-white hover:bg-red-700"
            >
              Contact Me
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="#skills"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-red-600 hover:bg-opacity-90 hover:shadow-sm"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
