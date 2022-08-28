import React, { useEffect, useState, useContext } from "react";
import { Context } from "../../context/Context";
import io from "socket.io-client";

let socketServer;

export default function useSocket() {
  const { channel, history } = useContext(Context);
  const [socket, setSocket] = useState(false);
  const [bot, setBot] = useState(false);
  const [donations, setDonations] = useState(false);
  const [predictions, setPredictions] = useState(false);

  useEffect(() => {
    const wssUrl = `wss://${process.env.REACT_APP_SOCKET_URL}`;
    const httpsUrl = `https://${process.env.REACT_APP_SOCKET_URL}`;

    const JWT = process.env.REACT_APP_JWT;

    const socketOptions = {
      query: {
        token: JWT,
      },
    };

    socketServer = io.connect(wssUrl, socketOptions);
    setSocket(socketServer);

    socketServer.on("receive_bot", (data) => {
      setBot(data);
    });

    if (channel) {
      socketServer.on("receive_donations", (data) => {
        const filter = !history
          ? data.filter((donation) => donation.cid === channel.uid)
          : data;
        const order = filter.sort((a, b) => b.time - a.time);
        setDonations(order);
      });
    }

    socketServer.on("receive_predictions", (data) => {
      setPredictions(data);
    });

    return () => {
      socketServer && socketServer.removeAllListeners();
    };
  }, [history, channel]);

  return { socket, bot, donations, predictions };
}
