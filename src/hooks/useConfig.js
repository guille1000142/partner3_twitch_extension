import React, { useEffect, useState } from "react";

export default function useConfig() {
  const [config, setConfig] = useState(false);

  useEffect(() => {
    try {
      const twitch = window.Twitch.ext;
      const config = twitch.configuration.global.content;
      const configData = JSON.parse(config);
      setConfig(configData);
    } catch (err) {
      // window.location.reload();
    }
  }, []);

  return { config };
}
