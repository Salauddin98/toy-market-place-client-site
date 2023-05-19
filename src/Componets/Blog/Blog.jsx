import image from "../../image/faq.png";

const Blog = () => {
  return (
    <section className="container mx-auto px-10 mt-10 md:mt-32 lg:mt-16 mb-4">
      <div className="flex flex-col md:flex-row gap-10 justify-between items-center mt">
        <div className="flex flex-col gap-6  lg:px-0 w-full lg:w-[50%] mx-auto">
          <div
            tabIndex={0}
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              <h3>
                What is an access token and refresh token? <br /> How do they
                work and where should we store them on the client-side?
              </h3>
            </div>
            <div className="collapse-content">
              <p>
                The React Context API is a tool that allows you to share data
                between components without having to pass the data through props
                manually at every level of the component tree. The Context API
                is especially useful when you have data that is used by many
                components throughout your application.
                <br />
                In general, you should consider using the Context API when you
                have data that needs to be accessed by many components
                throughout your application. However, keep in mind that
                overusing the Context API can make your code harder to read and
                maintain, so it's important to use it judiciously.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              <h3>Compare SQL and NoSQL databases?</h3>
            </div>
            <div className="collapse-content">
              <p>
                In React, a custom hook is a JavaScript function that starts
                with the word "use" and uses React's built-in hooks (such as
                useState or useEffect) to add some custom behavior to a
                component. Custom hooks allow you to reuse stateful logic
                between components and make your code more modular and easier to
                maintain.
                <br />
                Custom hooks can be used to encapsulate any reusable logic that
                involves state or side effects, such as fetching data from an
                API or managing a form's state. By creating custom hooks, you
                can abstract away the implementation details and create a clean,
                reusable API for your components to use.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              <h3>
                What is express js?
                <br /> What is Nest JS
              </h3>
            </div>
            <div className="collapse-content">
              <p>
                useRef is a built-in hook in React that provides a way to create
                a mutable reference to an element or a value that persists
                across renders. It is similar to the ref attribute in class
                components, but it can be used in functional components as well.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              <h1>What is MongoDB aggregate and how does it work?</h1>
            </div>
            <div className="collapse-content">
              <p>
                useMemo is a built-in hook in React that is used to memoize
                expensive computations so that they are only recalculated when
                their dependencies change. It allows you to optimize the
                performance of your application by avoiding unnecessary
                re-renders.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[50%] mx-auto">
          <img className="w-full lg:w-[50%] mx-auto" src={image} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Blog;
