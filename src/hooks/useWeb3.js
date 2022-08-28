import React, { useState, useEffect } from "react";
import Web3 from "web3";
import toast from "react-hot-toast";

export default function useWeb3() {
  const [account, setAccount] = useState(false);
  const [network, setNetwork] = useState("");
  const [balance, setBalance] = useState(0);
  const [web3, setWeb3] = useState(false);

  const truncateDecimals = function (number, digits) {
    var multiplier = Math.pow(10, digits),
      adjustedNum = number * multiplier,
      truncatedNum = Math[adjustedNum < 0 ? "ceil" : "floor"](adjustedNum);

    return truncatedNum / multiplier;
  };

  useEffect(() => {
    var web3 = new Web3(window.ethereum);
    setWeb3(web3);

    window.ethereum
      .request({ method: "eth_accounts" })
      .then((account) => setAccount(account[0]))
      .catch((err) => console.log(err));

    window.ethereum
      .request({ method: "eth_chainId" })
      .then((chainId) => setNetwork(chainId))
      .catch((err) => console.log(err));

    window.ethereum.on("accountsChanged", (accounts) => {
      setAccount(accounts[0]);
    });

    window.ethereum.on("chainChanged", (_chainId) => {
      setNetwork(_chainId);
    });

    return () => {
      window.ethereum.removeListener("accountsChanged", (accounts) => {
        setAccount(accounts);
      });

      window.ethereum.removeListener("chainChanged", (_chainId) => {
        setNetwork(_chainId);
      });
    };
  }, []);

  const readBalance = () => {
    if (web3 && account && network !== "") {
      web3.eth
        .getBalance(account)
        .then((balance) => {
          const walletBalance = web3.utils.fromWei(balance.toString(), "ether");
          const truncate = truncateDecimals(parseFloat(walletBalance), 2);
          setBalance(truncate);
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    readBalance();
  }, [account, network, web3]);

  const connectWallet = () => {
    if (typeof window.ethereum !== "undefined") {
      const connect = window.ethereum.request({
        method: "eth_requestAccounts",
      });
      toast.promise(connect, {
        loading: "Connecting...",
        success: "Connected",
        error: "Failed",
      });
    } else {
      toast.error("Metamask not installed");
    }
  };

  const addNetwork = ({ chainId }) => {
    window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          chainId: chainId,
          chainName: chainId === "0x89" ? "POLYGON" : "BSC",
          rpcUrls: [
            chainId === "0x89"
              ? "https://polygon-rpc.com"
              : "https://bscrpc.com",
          ],
          nativeCurrency: {
            name: chainId === "0x89" ? "MATIC" : "BNB",
            symbol: chainId === "0x89" ? "MATIC" : "BNB",
            decimals: 18,
          },
        },
      ],
    });
  };

  const changeNetwork = ({ chainId }) => {
    const change = window.ethereum
      .request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: chainId }],
      })
      .catch((err) => {
        if (err.code === 4902) {
          addNetwork({ chainId });
        }
      });

    toast.promise(change, {
      loading: "Connecting...",
      success: "Connected",
      error: "Failed",
    });
  };

  return {
    changeNetwork,
    connectWallet,
    readBalance,
    account,
    network,
    balance,
    web3,
  };
}
