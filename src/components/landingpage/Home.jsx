import React from "react";
import "./home.css";
import { FaThermometerHalf } from "react-icons/fa";
import { FiWind } from "react-icons/fi";
import { WiRaindrop } from "react-icons/wi";
import { CiSun } from "react-icons/ci";

const Home = () => {
  return (
    <div className="mainCard">
      <div className="left">
        <div className="first">
          <div className="textWrapper">
            <h3>
              Lagos <p>Nigeria</p>
            </h3>
            <span>31'</span>
          </div>
          <div className="imgCon">
            <img
              src="src/assets/IMG/hot-weather-3d-rendering-isolated-on-transparent-background-ui-ux-icon-design-web-and-app-trend-png.webp"
              alt=""
            />
          </div>
        </div>
        <div className="second">
          <h3>TODAY'S FORECAST</h3>
          <div className="forecast">
            <div className="todFore">
              <p>6:00 AM</p>
              <span>
                <img
                  src="src/assets/IMG/rainy-weather-3d-rendering-isolated-on-transparent-background-ui-ux-icon-design-web-and-app-trend-png.webp"
                  alt=""
                />
              </span>
              <h3>25'</h3>
            </div>
            <div className="todFore">
              <p>9:00 AM</p>
              <span>
                <img
                  src="src/assets/IMG/sunny-weather-3d-rendering-isolated-on-transparent-background-ui-ux-icon-design-web-and-app-trend-png.webp"
                  alt=""
                />
              </span>
              <h3>28'</h3>
            </div>
            <div className="todFore">
              <p>12:00 PM</p>
              <span>
                <img
                  src="src/assets/IMG/hot-weather-3d-rendering-isolated-on-transparent-background-ui-ux-icon-design-web-and-app-trend-png.webp"
                  alt=""
                />
              </span>
              <h3>33'</h3>
            </div>
            <div className="todFore">
              <p>3:00 PM</p>
              <span>
                <img
                  src="src/assets/IMG/hot-weather-3d-rendering-isolated-on-transparent-background-ui-ux-icon-design-web-and-app-trend-png.webp"
                  alt=""
                />
              </span>
              <h3>34'</h3>
            </div>
            <div className="todFore">
              <p>6:00 PM</p>
              <span>
                <img
                  src="src/assets/IMG/hot-weather-3d-rendering-isolated-on-transparent-background-ui-ux-icon-design-web-and-app-trend-png.webp"
                  alt=""
                />
              </span>
              <h3>32'</h3>
            </div>
            <div className="todFores">
              <p>9:00 PM</p>
              <span>
                <img
                  src="src/assets/IMG/sunny-weather-3d-rendering-isolated-on-transparent-background-ui-ux-icon-design-web-and-app-trend-png.webp"
                  alt=""
                />
              </span>
              <h3>30'</h3>
            </div>
          </div>
        </div>
        <div className="third">
          <h4 style={{ color: "rgb(189, 185, 185)" }}>AIR CONDITIONS</h4>
          <div className="conditions">
            <div className="feel">
              <h5><FaThermometerHalf /></h5>
              <p>
                Real Feel <br />
                <span>30'</span>
              </p>
            </div>
            <div className="feel">
              <h5><FiWind /></h5>
              <p>
                Wind <br />
                <span>0.2km/h</span>
              </p>
            </div>
          </div>
          <div className="conditions">
            <div className="feel">
              <h5><WiRaindrop size={25}/></h5>
              <p>
                Chance of rain <br />
                <span>0%</span>
              </p>
            </div>
            <div className="feel">
              <h5><CiSun size={25}/></h5>
              <p>
                UV index <br />
                <span>3</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <h4>7-Day FORECAST</h4>
        <div className="day">
          <p>Today</p>{" "}
          <h3>
            <span>
              <img
                src="src/assets/IMG/hot-weather-3d-rendering-isolated-on-transparent-background-ui-ux-icon-design-web-and-app-trend-png.webp"
                alt=""
              />
            </span>
            Sunny
          </h3>{" "}
          <k>
            <j>36</j>/22
          </k>
        </div>
        <div className="day">
          <p>Tue</p> <h3><span><img src="src/assets/IMG/hot-weather-3d-rendering-isolated-on-transparent-background-ui-ux-icon-design-web-and-app-trend-png.webp" alt="" /></span> Sunny</h3>
          <k>
            <j>37</j>/21
          </k>
        </div>
        <div className="day">
          <p>Wed</p> <h3><span><img src="src/assets/IMG/hot-weather-3d-rendering-isolated-on-transparent-background-ui-ux-icon-design-web-and-app-trend-png.webp" alt="" /></span>Sunny</h3>
          <k>
            <j>37</j>/21
          </k>
        </div>
        <div className="day">
          <p>Thu</p> <h3><span><img src="src/assets/IMG/sunny-weather-3d-rendering-isolated-on-transparent-background-ui-ux-icon-design-web-and-app-trend-png.webp" alt="" /></span>Cloudy</h3>
          <k>
            <j>37</j>/21
          </k>
        </div>
        <div className="day">
          <p>Fri</p> <h3><span><img src="src/assets/IMG/sunny-weather-3d-rendering-isolated-on-transparent-background-ui-ux-icon-design-web-and-app-trend-png.webp" alt="" /></span>Cloudy</h3>
          <k>
            <j>37</j>/21
          </k>
        </div>
        <div className="day">
          <p>Sat</p> <h3><span><img src="src/assets/IMG/rainy-weather-3d-rendering-isolated-on-transparent-background-ui-ux-icon-design-web-and-app-trend-png.webp" alt="" /></span>Rainy</h3>
          <k>
            <j>37</j>/21
          </k>
        </div>
        <div className="days">
          <p>Sun</p> <h3><span><img src="src/assets/IMG/rainy-weather-3d-rendering-isolated-on-transparent-background-ui-ux-icon-design-web-and-app-trend-png.webp" alt="" /></span>Storm</h3>{" "}
          <k>
            <j>37</j>/21
          </k>
        </div>
      </div>
    </div>
  );
};

export default Home;
