import { useEffect, useState } from "react";
import Card from "./components/card";
import Shimmer from "./components/Shimmer";

var data = [
  {
    name: "Rahul Baghla",
    gender: "Male",
    designation: "Team Lead, software engineer",
    rating: 3.5,
  },
  {
    name: "Sohan Singh",
    gender: "Male",
    designation: "software engineer",
    rating: 4,
  },
  {
    name: "Tarun",
    gender: "Male",
    designation: " software engineer",
    rating: 4.5,
  },
  {
    name: "Manish Kumar Goud",
    gender: "Male",
    designation: "software engineer",
    rating: 4.5,
  },
  {
    name: "Vinod",
    gender: "Male",
    designation: "Team Lead, software engineer",
    rating: 3,
  },
  {
    name: "Reetanjali",
    gender: "Female",
    designation: "Team Lead, software engineer",
    rating: 4.5,
  },
];

function App() {
  const [employeelist, setemployeelist] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setemployeelist(data);
    }, 2000);
  }, []);

  return employeelist.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="header">
        <div className="leftheader"></div>
        <div className="rightheader">
          <button
            onClick={() => {
              setemployeelist(employeelist.filter((item) => item.rating > 4));
            }}
          >
            Top Rated Employees
          </button>
          <button
            onClick={() => {
              setemployeelist(data);
            }}
          >
            Reset
          </button>
        </div>
      </div>
      <div className="container">
        {employeelist.map((item) => (
          <Card
            name={item.name}
            gender={item.gender}
            designation={item.designation}
            rating={item.rating}
          />
        ))}
      </div>
    </>
  );
}

export default App;
