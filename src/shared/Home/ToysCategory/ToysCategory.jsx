import { useEffect, useState } from "react";
import ToysDetails from "./ToysDetails";
import { Tab, Tabs, TabList } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ToysCategory = () => {
  const [toys, setToys] = useState([]);
  const [category, setCategory] = useState("Math Toys");
  useEffect(() => {
    fetch("https://toys-server-site-salauddin98.vercel.app/allToys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  useEffect(() => {
    fetch(
      `https://toys-server-site-salauddin98.vercel.app/ToysCategory/${category}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setToys(data);
      });
  }, [category]);
  // useEffect(() => {
  //   fetch("https://toys-server-site-salauddin98.vercel.app/allJobs")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const filterResult = data?.filter((res) => res.status === activeTab);
  //       setJob(filterResult);
  //       // console.log(data);
  //     });
  // }, [activeTab]);

  const handleCategory = (event) => {
    setCategory(event);
  };
  return (
    <section className="bg-[url('image/pattern-home.jpg')] bg-no-repeat mt-20">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold py-8">
        OUR TOYS CATEGORY
        <hr className="w-28 mt-2 border-[3px] mx-auto border-orange-500" />
      </h1>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10">
          <Tabs>
            <div className="sm:text-base md:text-lg font-bold bg-[#ff6799] text-white rounded-md ">
              <TabList>
                <Tab onClick={() => handleCategory("Math Toys")}>Math Toys</Tab>
                <Tab onClick={() => handleCategory("Engineering Toys")}>
                  Engineering Toys
                </Tab>
                <Tab onClick={() => handleCategory("Science Toys")}>
                  Science Toys
                </Tab>
              </TabList>
            </div>

            {/* <TabPanel>
              <h2>Any content 1</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel> */}
          </Tabs>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10"
          data-aos="zoom-in"
        >
          {toys.map((toy) => (
            <ToysDetails key={toy._id} toy={toy}></ToysDetails>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToysCategory;
