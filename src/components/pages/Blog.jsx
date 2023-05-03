import React, { useRef } from "react";
import ReactPrint from "react-to-print";

const Blog = () => {
  const ref = useRef();
  return (
    <>
      <ReactPrint trigger={() => <button className="bg-green-400 px-4 py-2 rounded-md fixed right-4">Print</button>} content={()=>ref.current}></ReactPrint>
      <div ref={ref} className="bg-white w-5/6 mx-auto p-4 mt-3 relative">
        <h5 className="font-bold text-lg">
          Q1. Tell us difference between uncontrolled and controlled components.
        </h5>
        <div className="flex gap-4 px-2 mb-4">
          <span className="font-bold text-lg">Ans:</span>
          <p>
            <span className="font-semibold">Controlled Component:</span>
            <br />
            Unlike the uncontrolled component, the input form element in the
            controlled component is handled by the component rather than the
            DOM. It takes its current value through props. The changes are
            notified through callbacks.
          </p>
          <p>
            <span className="font-semibold">Uncontrolled component:</span>
            <br />
            Similar to the traditional HTML form inputs, the uncontrolled
            component can be written using a ref to get form values from the
            DOM. Thus there is no need to write an event handler for every state
            update and the HTML elements maintain their own state that will be
            updated when the input value changes.
          </p>
        </div>
        <h5 className="font-bold text-lg">
          Q2. How to validate React props using PropTypes?
        </h5>
        <div className="gap-4 px-2 mb-4">
          <p>
            <span className="font-bold text-lg">Ans:</span> propTypes is used to
            verify the input type for props in react. If you try to put any
            other type, then it will give you warning in console. In react,
            there are some validators are available like propTypes.any,
            propTypes.array, propTypes.bool etc. With React props, you can send
            data to a component when you call on that component, including
            numbers, strings, functions, objects, and arrays. If you have
            multiple components, you can pass data from one component to
            another.
          </p>
        </div>
        <h5 className="font-bold text-lg">
          Q3. Tell us the difference between nodejs and express js.
        </h5>
        <div className="gap-4 px-2 mb-4">
          <div className="flex px-2">
            <span className="font-bold text-lg">Ans:</span>
            <tbody className="border border-black ms-4">
              <tr>
                <th className="border border-black">Parameter</th>
                <th className="border border-black">Node.js</th>
                <th className="border border-black">Express.js</th>
              </tr>
              <tr>
                <td className="border border-black">Coding time</td>
                <td className="border border-black">
                  More coding time as compared to Express
                </td>
                <td className="border border-black">Very less coding time</td>
              </tr>
              <tr>
                <td className="border border-black">Building block</td>
                <td className="border border-black">
                  Its built on Google V8 Engine
                </td>
                <td className="border border-black">Built on Node.js</td>
              </tr>
              <tr>
                <td className="border border-black">Requirement</td>
                <td className="border border-black">
                  Express is not required for Node
                </td>
                <td className="border border-black">
                  Node is essential to run Express
                </td>
              </tr>
              <tr>
                <td className="border border-black">Written in</td>
                <td className="border border-black">C, C++, JavaScript</td>
                <td className="border border-black">JavaScript</td>
              </tr>
              <tr>
                <td className="border border-black">Controllers</td>
                <td className="border border-black">
                  Controllers are not provided
                </td>
                <td className="border border-black">
                  Controllers are provided
                </td>
              </tr>
              <tr>
                <td className="border border-black">View model</td>
                <td className="border border-black">Does not support Node</td>
                <td className="border border-black">Supports view model</td>
              </tr>
              <tr>
                <td className="border border-black">Routing</td>
                <td className="border border-black">Not provided</td>
                <td className="border border-black">Is provided</td>
              </tr>
            </tbody>
          </div>
        </div>
        <h5 className="font-bold text-lg">
          Q4. What is a Custom Hook? Why will you create a Custom Hook?
        </h5>
        <div className="gap-4 px-2">
          <p>
            <span className="font-bold text-lg">Ans:</span> Custom Hook is a
            JavaScript function which we create by ourselves, when we want to
            share logic between other JavaScript functions. It allows you to
            reuse some piece of code in several parts of your app.
          </p>
        </div>
      </div>
    </>
  );
};

export default Blog;
