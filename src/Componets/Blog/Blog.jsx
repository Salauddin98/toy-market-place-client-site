import { useNavigation } from "react-router-dom";
import image from "../../image/faq.png";
import Loading from "../../Loading/Loading";
import useTitle from "../../Hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }
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
                An access token is a credential that is issued by an
                authentication server upon successful authentication. It
                represents the authorization granted to a user or an application
                to access specific resources, APIs, or services. The access
                token is usually a long string of characters that is included in
                the header or body of API requests to prove the authenticity and
                authorization of the requester. It typically has a limited
                lifespan and expires after a certain period of time to enhance
                security.
                <br />
                Access tokens are short-lived and meant to be used frequently.
                It is recommended to store them in memory or a short-term
                storage mechanism on the client-side. Options include storing
                them in a JavaScript variable or using browser session storage.
                Storing the access token securely and encrypted helps prevent
                unauthorized access. Be cautious about storing access tokens in
                browser cookies or local storage, as they may be susceptible to
                cross-site scripting (XSS) attacks.
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
                SQL: SQL databases follow a structured data model known as the
                relational model. Data is organized into tables with predefined
                schemas consisting of rows and columns. Relationships between
                tables are established using primary and foreign keys.
                <br />
                NoSQL: NoSQL databases employ various data models, including
                key-value, document, columnar, and graph. They provide
                flexibility by allowing schema-less or dynamic schema
                structures. Each NoSQL database type handles data differently
                and is optimized for specific use cases.
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
                <br /> What is Next JS?
              </h3>
            </div>
            <div className="collapse-content">
              <p>
                Express.js is a popular and widely used web application
                framework for Node.js. It provides a simple and minimalistic
                approach to building web applications and APIs. Express.js is
                known for its flexibility, robustness, and ease of use, making
                it a popular choice among developers.
              </p>
              <br />
              <p>
                Next.js is a popular open-source framework for building
                server-rendered React applications. It is built on top of React
                and Node.js, providing a powerful toolset for developing modern
                web applications with server-side rendering (SSR), static site
                generation (SSG), and other advanced features.
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
                In MongoDB, the aggregate method is a powerful feature that
                allows for advanced data aggregation and analysis operations. It
                provides a flexible and efficient way to process and transform
                data within a collection. The aggregate method takes an array of
                stages as input, where each stage represents a specific
                operation or transformation to be applied to the data.
              </p>
              <br />
              <p>
                The aggregate method in MongoDB provides a powerful and flexible
                approach to perform complex data analysis, transformations, and
                aggregations within a collection. It allows for the combination
                of multiple operations in a single query and provides efficient
                processing capabilities for large datasets. By leveraging the
                aggregate method, developers can perform advanced computations,
                data manipulations, and aggregations directly within the
                database, reducing the need for extensive post-processing on the
                application side.
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
