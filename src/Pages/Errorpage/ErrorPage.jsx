import React from "react";

import { FaceFrownIcon } from "@heroicons/react/24/solid";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <>
      <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <FaceFrownIcon className="w-28 md:w-40 h-40 text-yellow-500" />
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-light text-2xl md:text-9xl text-yellow-500">
              <span className="sr-only">Error</span>
              {status || 404}
            </h2>
            <p className="text-xl md:text-3xl font-semibold text-red-800 mb-8">
              {error?.message}
            </p>
            <Link
              to="/"
              className="main-btn py-1 px-2 font-light text-xs md:text-base"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
