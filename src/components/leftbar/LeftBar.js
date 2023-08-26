import { RiNftFill } from "react-icons/ri";
import { useState } from "react";
import { MdOutlineToken } from "react-icons/md";
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./leftBar.css";

const LeftBar = () => {
  const [tab, setTab] = useState("Token");

  const isTab = tab === "Token" ? "selected" : "";
  const isPair = tab !== "Token" ? "selected" : "";

  return (
    <div className="leftbar-container">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100vh",
        }}
      >
        <div>
          <div className="leftbar-logo-container">
            <div className="icon-container">
              <RiNftFill fontSize={30} />
            </div>
            <h1 className="leftbar-logo-name">NFTify</h1>
          </div>
          <button
            className="transparent-button"
            type="button"
            onClick={() => setTab("Token")}
          >
            <div
              className={isTab}
              style={{ width: "100%", display: "flex", alignItems: "center" }}
            >
              <div className="icon-container">
                <MdOutlineToken fontSize={30} />
              </div>
              <Link to="/" className="link">
                <p className="leftbar-column-name">Token Address</p>
              </Link>
            </div>
          </button>
          <button
            className="transparent-button"
            type="button"
            onClick={() => setTab("Pair")}
          >
            <div
              className={isPair}
              style={{ width: "100%", display: "flex", alignItems: "center" }}
            >
              <div className="icon-container">
                <img
                  src="https://res.cloudinary.com/dcnpafcrg/image/upload/v1693054483/Vector_3_scvz7x.png"
                  className="pair-image"
                  alt="pair"
                />
              </div>
              <Link to="/pair" className="link">
                <p className="leftbar-column-name">Pair Address</p>
              </Link>
            </div>
          </button>
        </div>
        <div
          style={{
            display: "flex",
            alignSelf: "center",
            alignItems: "center",
            width: "80%",
            justifyContent: "space-around",
          }}
        >
          <FaFacebookSquare color="#F30050" fontSize={30} />
          <FaLinkedin color="#F30050" fontSize={30} />
          <FaTwitterSquare color="#F30050" fontSize={30} />
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
