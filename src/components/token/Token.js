import { useEffect, useState } from "react";
import { ThreeCircles } from "react-loader-spinner";
import Address from "../address/Address";
import "./token.css";

const Token = () => {
  const [pairsData, setPairsData] = useState([]);
  const [response, setResponse] = useState("loading");
  console.log(pairsData);
  const fetchTokenAddress = async () => {
    const url =
      "https://api.dexscreener.io/latest/dex/tokens/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";
    const response = await fetch(url);
    const data = await response.json();
    const { pairs } = data;
    setPairsData(pairs);
    setResponse("success");
  };
  //0x2170Ed0880ac9A755fd29B2688956BD959F933F8
  useEffect(() => {
    fetchTokenAddress();
  }, []);

  const renderLoadingView = () => (
    <div className="loading-container">
      <ThreeCircles
        height="100"
        width="100"
        color="white"
        visible={true}
        ariaLabel="three-circles-rotating"
      />
    </div>
  );

  return (
    <>
      {response === "loading" ? (
        renderLoadingView()
      ) : (
        <Address
          pairsData={pairsData}
          text="Token"
          setPairsData={setPairsData}
        />
      )}
    </>
  );
};

export default Token;
