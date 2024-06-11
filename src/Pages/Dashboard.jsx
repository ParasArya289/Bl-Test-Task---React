import React from "react";
import "./Dashboard.css";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineNotifications } from "react-icons/md";
import { RxExit } from "react-icons/rx";
import Layout from "../Components/Layout/Layout";
import CardWithLineChart from "../Components/CardWithLineChart/CardWithLineChart";
import Stats from "../Components/Stats/Stats";
import World from "../Components/World/World";
import LiveUpdate from "../Components/LiveUpdate/LiveUpdate";
import Symptoms from "../Components/Symptoms/Symptoms";

const Dashboard = () => {
  return (
    <Layout>
      <div className="dashboard">
        <header>
          <div className="brand">
            <div>Covid-19</div>
            <div>Live Tracker Dashboard</div>
          </div>
          <div className="input">
            <input type="text" placeholder="search..." />
            <IoSearch />
          </div>
          <div className="more">
            <div className="user">
              <img
                src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg"
                alt="user"
              />
              <IoIosArrowDown />
            </div>
            <div className="divider"></div>
            <div className="actions">
              <MdOutlineNotifications />
              <RxExit />
            </div>
          </div>
        </header>
        <div className="container">
          <div className="containerone flex">
            <div className="cards">
              <CardWithLineChart
                name="Cases"
                stroke="#51C0D8"
                fill="
           #CEF2F9"
                percentage="23"
                number="1,218,087"
              />
              <CardWithLineChart
                name="Deaths"
                stroke="#D44C42"
                fill="
              #FCE8E1"
                percentage="19"
                number="65,841"
              />
              <CardWithLineChart
                name="Recovered"
                stroke="#93BE51"
                fill="#E8F4D5
           "
                percentage="15"
                number="253,817"
              />
            </div>
            <div className="stats">
              <Stats />
            </div>
            <div className="worldstats">
              <World />
            </div>
          </div>
          <div className="containertwo flex">
            <LiveUpdate />
            <Symptoms />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
