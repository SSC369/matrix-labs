import { useEffect, useState } from "react";
import { ThreeCircles } from "react-loader-spinner";
import Address from "../address/Address";

const PairAddress = () => {
  const [pairsData, setPairsData] = useState([]);
  const [response, setResponse] = useState("loading");
  const fetchPairAddress = async () => {
    const url =
      "https://api.dexscreener.io/latest/dex/pairs/bsc/0x16b9a82891338f9ba80e2d6970fdda79d1eb0dae";
    const response = await fetch(url);
    const data = await response.json();
    const { pairs } = data;
    setPairsData(pairs);
    setResponse("success");
  };

  useEffect(() => {
    fetchPairAddress();
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
          text="Pair"
          setPairsData={setPairsData}
        />
      )}
    </>
  );
};

export default PairAddress;
