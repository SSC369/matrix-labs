import { v4 } from "uuid";
import { BsSearch } from "react-icons/bs";
import { MdOutlineToken } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";
import { useState, useEffect } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import "./home.css";

const Home = () => {
  const [pairsData, setPairsData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const onSearch = async () => {
    const url = `https://api.dexscreener.io/latest/dex/search?q=${searchText}`;
    const response = await fetch(url);
    const data = await response.json();
    const { pairs } = data;
    setPairsData(pairs);
  };

  const fetchTokenAddress = async () => {
    const url =
      "https://api.dexscreener.io/latest/dex/tokens/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";
    const response = await fetch(url);
    const data = await response.json();
    const { pairs } = data;
    setPairsData(pairs);
  };

  useEffect(() => {
    fetchTokenAddress();
  }, []);

  return (
    <div className="home-container-small">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="search-container">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            placeholder="Search"
            className="search-input"
          />
          <button
            onClick={onSearch}
            type="button"
            className="search-icon-button"
          >
            <BsSearch fontSize={20} color="white" />
          </button>
        </div>
        <button className="connect-button-home">Connect</button>
      </div>

      <div className="pair-address-container">
        <h1 className="address-heading">Token Address</h1>
        <ul className="pair-address-list-container">
          {pairsData.map((pair) => {
            const {
              pairCreatedAt,
              priceNative,
              priceUsd,
              baseToken,
              quoteToken,
              dexId,
              pairAddress,
              chainId,
            } = pair;
            const { address, name, symbol } = baseToken;

            return (
              <li className="list-item" key={v4()}>
                <div className="list-container">
                  <div className="box">
                    <h1 className="heading">Basic Info</h1>
                    <div className="line">
                      <p className="name">Pair Created At</p>
                      <p className="value">{pairCreatedAt}</p>
                    </div>
                    <div className="line">
                      <p className="name">Symbol</p>
                      <p className="value">{symbol}</p>
                    </div>
                    <div className="line">
                      <p className="name">Dex ID</p>
                      <p className="value">{dexId}</p>
                    </div>
                    <div className="line">
                      <p className="name">Pair Address</p>
                      <p
                        style={{
                          fontSize: "10px",
                          width: "100px",
                          overflow: "auto",
                        }}
                        className="value"
                      >
                        {pairAddress}
                      </p>
                    </div>
                  </div>
                  <div className="circle">
                    <AiOutlineInfoCircle fontSize={20} />
                  </div>
                </div>

                <div className="list-container">
                  <div className="box">
                    <h1 className="heading">Base Token</h1>
                    <div className="line">
                      <p className="name">Name</p>
                      <p className="value">{chainId}</p>
                    </div>
                    <div className="line">
                      <p className="name">Symbol</p>
                      <p className="value">{symbol}</p>
                    </div>

                    <div className="line">
                      <p className="name">Pair Address</p>
                      <p
                        style={{
                          fontSize: "12px",
                          width: "100px",
                          overflow: "auto",
                        }}
                        className="value"
                      >
                        {address}
                      </p>
                    </div>
                  </div>
                  <div className="circle">
                    <MdOutlineToken fontSize={20} />
                  </div>
                </div>

                <div className="list-container">
                  <div className="box">
                    <h1 className="heading">QuoteToken</h1>
                    <div className="line">
                      <p className="name">Name</p>
                      <p className="value">{quoteToken.name}</p>
                    </div>
                    <div className="line">
                      <p className="name">Symbol</p>
                      <p className="value">{quoteToken.symbol}</p>
                    </div>

                    <div className="line">
                      <p className="name">Pair Address</p>
                      <p
                        style={{
                          fontSize: "12px",
                          width: "100px",
                          overflow: "auto",
                        }}
                        className="value"
                      >
                        {quoteToken.address}
                      </p>
                    </div>
                  </div>
                  <div className="circle">
                    <MdOutlineToken fontSize={20} />
                  </div>
                </div>

                <div className="list-container">
                  <div className="box">
                    <h1 className="heading">Price</h1>
                    <div className="line">
                      <p className="name">Price Native</p>
                      <p className="value">{priceNative}</p>
                    </div>
                    <div className="line">
                      <p className="name">Price USD</p>
                      <p className="value">{priceUsd}</p>
                    </div>
                  </div>
                  <div className="circle">
                    <BsCurrencyDollar fontSize={20} />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Home;
