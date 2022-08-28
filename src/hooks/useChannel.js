import React, { useEffect, useContext } from "react";
import { Context } from "../context/Context";
import useConfig from "./useConfig";
import useSocket from "./socket/useSocket";

export default function useChannel() {
  const { channel, setChannel } = useContext(Context);
  const { config } = useConfig();
  const { bot } = useSocket();
  console.log({ bot, config });
  useEffect(() => {
    if (bot && config && !channel) {
      fetch(`https://api.twitch.tv/helix/streams?user_id=${config[0].uid}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${bot[0].access_token}`,
          "Client-Id": process.env.REACT_APP_CLIENT_ID,
        },
      })
        .then((res) => {
          res.json().then((stream) => {
            const streamData = stream.data;
            if (streamData.length > 0) {
              const { user_name, title } = streamData[0];
              const data = {
                ...config[0],
                userName: user_name,
                title,
                live: true,
              };
              setChannel(data);
            } else {
              fetch(
                `https://api.twitch.tv/helix/channels?broadcaster_id=${config[0].uid}`,
                {
                  method: "GET",
                  headers: {
                    Authorization: `Bearer ${bot[0].access_token}`,
                    "Client-Id": process.env.REACT_APP_CLIENT_ID,
                  },
                }
              )
                .then((res) => {
                  res.json().then((channel) => {
                    const channelData = channel.data;
                    if (channelData.length > 0) {
                      const { broadcaster_name, title } = channelData[0];
                      const data = {
                        ...config[0],
                        userName: broadcaster_name,
                        title,
                        live: true,
                      };
                      setChannel(data);
                    }
                  });
                })
                .catch((err) => {
                  console.log(err);
                });
            }
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [bot, config, channel]);

  return;
}
