import React from "react";

const QuestionAndAnswer = () => {
  return (
    <div className="container my-6 px-14 md:px-32 lg:px-64 py-6 flex justify-between bg-slate-200 mt-16 ">
      <div className="qna-area">
        <div className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            1. Difference between Props and state?
          </div>
          <div className="collapse-content text-start">
            <h2 className="text-2xl font-bold">Props:</h2>
            <li>The Data is passed from one component to another.</li>
            <li>It is Immutable.</li>
            <li>Props can be used with state and functional components.</li>
            <li>Props are read-only.</li>

            <h2 className="text-2xl font-bold">State:</h2>
            <li>The Data is passed within the component only.</li>
            <li>It is Mutable.</li>
            <li>State can be used only with the state components.</li>
            <li>State is both read and write.</li>
          </div>
        </div>
        <div className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            2. How does work useSate?
          </div>
          <div className="collapse-content">
            <p>
              -->useState is React Hook that allows you to add state to a
              functional component. It returns an array with two values: the
              current state and a function to update it. The Hook takes an
              initial state value as an argument and returns an updated state
              value whenever the setter function is called
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            3. What else can UseEffect do besides load data?
          </div>
          <div className="collapse-content">
            <p>
              -->The job of a functional React component is to calculate state or
              props and give an output. If the function has to do any work other
              than giving the output, those works are side-effects of the
              function. And the useEffect() hook is used to implement these
              side-effects, that is, all the work of the side effect has to be
              done within the useEffect() function.
               Some examples of side-effects are :
               <li className="text-start"> data fetching, others</li>
               <li className="text-start"> manual dom
               manipulation</li>
               <li className="text-start">use of timer functions</li>
               <li className="text-start">subscription setup, etc</li> 
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            4.How does work react?
          </div>
          <div className="collapse-content">
            <p>
              -->One of the biggest advantages of using React is that you can
              infuse HTML code with JavaScript. 
              </p>
              <p>
              -->Users can create a
              representation of a DOM node by declaring the Element function in
              React.
            </p>

            <p>
              {/* React.createElement("div", {className: "red" }, "Children Text");
          React.createElement(MyCounter, {count: 3 + 5 }); */}
              -->you may have noticed that the syntax of the HTML code above is
              similar to XML. That said, instead of using the traditional DOM
              class, React uses className.
            </p>

            <p>
              -->JSX tags have a name, children, and attributes. Numeric values
              and expressions must be written inside curly brackets. The
              quotation marks in JSX attributes represent strings, similarly to
              JavaScript.
            </p>
            <p>
              -->In most cases, React is written using JSX instead of standard
              JavaScript to simplify components and keep code clean.
            </p>

            <p>
              -->A React app usually has a single root DOM node. Rendering an
              element into the DOM will change the user interface of the page.
            </p>
            <p>
              -->Whenever a React component returns an element, the Virtual DOM
              will update the real DOM to match.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionAndAnswer;
