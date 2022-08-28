import React, { useState } from "react";
import Layout from "components/Layout";
import { Input, Text, Button } from "@nextui-org/react";

export default function Config() {
  const [wallet, setWallet] = useState(false);

  const handleInput = (e) => {
    e.preventDefault();
    setWallet(e.target.value);
  };

  const getAuthToken = () => {
    const response = "code";
    const clientId = "9mco1ahj5d62s8l1qtl7fhctsmr446";
    const redirect = "http://localhost:3000/config.html";
    const scopes = window.encodeURI("chat:read chat:edit whispers:edit");
    window.location.href = `https://id.twitch.tv/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirect}&response_type=${response}&scope=${scopes}`;
  };

  const saveConfig = () => {
    const twitch = window.Twitch.ext;
    const viewer = twitch.viewer;
    console.log(twitch);

    const options = [
      {
        wallet: wallet,
        uid: viewer.id,
      },
    ];

    twitch.configuration.set("global", "0.0.1", JSON.stringify(options));
  };

  return (
    <Layout>
      <button onClick={getAuthToken}>Log In</button>;
      <Text h2>Configuration</Text>
      <Input
        onChange={(e) => handleInput(e)}
        rounded
        bordered
        label="Metamask wallet"
        placeholder="Introduce wallet address"
        color="secondary"
      />
      <Button
        onPress={saveConfig}
        ghost
        color="secondary"
        size="xs"
        css={{ padding: "15px 25px 15px 25px", fontSize: "18px" }}
      >
        Save
      </Button>
    </Layout>
  );
}
