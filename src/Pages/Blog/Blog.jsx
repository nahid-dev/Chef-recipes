import React, { useState } from "react";
import { useNavigation } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Blog = () => {
  const [loader, setLoader] = useState(false);
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadingSpinner></LoadingSpinner>;
  }

  const downloadPDF = () => {
    const capture = document.querySelector(".blog-area");
    setLoader(true);
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF("p", "mm", "a4");
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save("receipt.pdf");
    });
  };
  return (
    <>
      <div className="secondary-bg pb-4">
        <div className="main-container flex items-end justify-center chef-banner-h text-center px-5 md:px-0">
          <div>
            <h3 className="text-4xl font-extrabold">Food Blog</h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
              magnam.
            </p>
          </div>
        </div>
      </div>
      {/* Generate PDF */}
      <div className="main-container">
        <div className="grid grid-cols-1 text-right my-10 px-5 md:px-0">
          <div>
            <button
              onClick={downloadPDF}
              disabled={!(loader === false)}
              className="logout-btn"
            >
              {loader ? <span>Downloading</span> : <span>Download</span>}
            </button>
          </div>
        </div>
      </div>
      {/* Blog content */}
      <div className="my-20 blog-area">
        <div className="main-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className=" p-5">
              <div>
                <h5 className="font-bold text-xl mb-3">
                  # Tell us the differences between uncontrolled and controlled
                  components.
                </h5>
                <p>
                  Uncontrolled components are external components that do not
                  have their behavior or functionality controlled by the parent
                  system. They are often subject to change without notice,
                  making them unpredictable. They are typically integrated into
                  a system using interfaces or APIs, and their behavior may be
                  difficult to manage. Controlled components, on the other hand,
                  are developed in-house and tightly integrated into the system,
                  with their behavior and interactions defined by the system's
                  architecture. They are subject to the same quality control
                  processes and development practices as the rest of the system,
                  making them more reliable and predictable. In summary,
                  uncontrolled components are external and unpredictable, while
                  controlled components are developed in-house and tightly
                  integrated into the system, providing greater predictability
                  and reliability. The level of control that the system has over
                  a component's behavior and the level of predictability it
                  provides are the main differences between uncontrolled and
                  controlled components.
                </p>
              </div>
            </div>
            <div className=" p-5">
              <div>
                <h5 className="font-bold text-xl mb-3">
                  # How to validate React props using PropTypes
                </h5>
                <p>
                  1. To validate React props using PropTypes, we need to import
                  PropTypes from the 'prop-types' package. 2. We can define the
                  expected props and their data types using PropTypes. For
                  example, PropTypes.string for a string data type. 3. We can
                  then add PropTypes validation to our component by setting the
                  'propTypes' property on the component. 4. When a prop with an
                  invalid data type is passed to the component, React will log a
                  warning in the console. 5. PropTypes is a useful tool for
                  catching bugs and errors early in the development process and
                  ensuring that components are used correctly.
                </p>
              </div>
            </div>
            <div className=" p-5">
              <div>
                <h5 className="font-bold text-xl mb-3">
                  # Tell us the difference between nodejs and express js.
                </h5>
                <p>
                  Node.js is a JavaScript runtime environment for running code
                  outside the browser. Express.js is a web application framework
                  built on top of Node.js. Node.js provides built-in modules for
                  building network applications, while Express.js provides
                  features for building web applications and APIs.
                </p>
              </div>
            </div>
            <div className=" p-5">
              <div>
                <h5 className="font-bold text-xl mb-3">
                  # What is a custom hook, and why will you create a custom
                  hook?
                </h5>
                <p>
                  A custom hook is a reusable function in React that contains
                  common stateful logic that can be shared across components. We
                  create custom hooks to avoid repeating code and promote
                  reusability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
