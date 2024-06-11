import React from "react";
import "./LiveUpdate.css";

const data = [
  {
    newCases: 2,
    country: "USA",
    firstCase: false,
  },
  {
    newCases: 15,
    country: "India",
    firstCase: true,
  },
  {
    newCases: 8,
    country: "Brazil",
    firstCase: false,
  },
  {
    newCases: 23,
    country: "Germany",
    firstCase: false,
  },
  {
    newCases: 7,
    country: "Canada",
    firstCase: true,
  },
  {
    newCases: 19,
    country: "France",
    firstCase: false,
  },
  {
    newCases: 4,
    country: "Italy",
    firstCase: false,
  },
  {
    newCases: 11,
    country: "Australia",
    firstCase: true,
  },
  {
    newCases: 6,
    country: "Japan",
    firstCase: false,
  },
];

const LiveUpdate = () => {
  return (
    <div className="liveupdate">
      <div className="heading">Live Update</div>
      <span>{"(1min ago)"}</span>
      <div className="livecontainer">
        {data.map((el) => (
          <div key={el.country}>
            <span
              className={`circle ${!el.firstCase ? "newcase" : "firstcase"}`}
            />
            <div>
              {el.firstCase
                ? `1st case in ${el.country}`
                : `${el.newCases} new cases in ${el.country}`}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveUpdate;
