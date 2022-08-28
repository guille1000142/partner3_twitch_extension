import React, { useState } from "react";
import {
  Card,
  Grid,
  Input,
  Text,
  Button,
  Dropdown,
  Spacer,
  Textarea,
  Tooltip,
  Popover,
} from "@nextui-org/react";
import Picker from "emoji-picker-react";
// import "emoji-picker-react/dist/main.css";
import { useNavigate } from "react-router-dom";
import useWeb3 from "../../hooks/useWeb3";
import useDonation from "../../hooks/useDonation";

export default function Donation() {
  const [token, setToken] = useState(new Set(["MATIC"]));
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const {
    connectWallet,
    changeNetwork,
    readBalance,
    account,
    network,
    balance,
    web3,
  } = useWeb3();
  const { sendTokens } = useDonation();

  const navigate = useNavigate();

  const handleAmount = (e) => {
    e.preventDefault();
    setAmount(parseFloat(e.target.value));
  };

  const handleMessage = (e) => {
    e.preventDefault();
    const text = e.target.value.trim();
    setMessage(text);
  };

  const handleEmoji = (event, emojiObject) => {
    let emoticon = emojiObject.emoji;
    if (message.length < 50) {
      setMessage(message + emoticon);
    }
  };

  return (
    <Card
      css={{
        mw: "280px",
        margin: "0 auto",
      }}
    >
      <Card.Header>
        <Grid.Container gap={0} justify="space-between">
          <Grid>
            <Button
              onPress={() => navigate("/panel")}
              flat
              size="xs"
              color="secondary"
              css={{ padding: "12px 0px 12px 0px", fontSize: "16px" }}
            >
              <i className="fa-solid fa-arrow-left"></i>
            </Button>
          </Grid>
          <Grid>
            <Tooltip
              content={
                (network === "0x89" && "MATIC Polygon Network") ||
                (network === "0x38" && "BNB BSC Network")
              }
              trigger="hover"
              color="secondary"
              placement="bottom"
            >
              <Button
                flat
                size="xs"
                color="secondary"
                css={{ padding: "12px 0px 12px 0px", fontSize: "16px" }}
              >
                {balance}
              </Button>
            </Tooltip>
          </Grid>
        </Grid.Container>
      </Card.Header>

      <Card.Divider />

      <Card.Body css={{ py: "$8", display: "flex", alignItems: "center" }}>
        <Text h1 size={20}>
          Donations
        </Text>
        <Dropdown>
          <Dropdown.Button
            css={{ margin: "10px" }}
            light
            size="sm"
            color="secondary"
          >
            {token}
          </Dropdown.Button>
          <Dropdown.Menu
            aria-label="Single selection actions"
            color="secondary"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={token}
            onSelectionChange={setToken}
          >
            <Dropdown.Item key="MATIC">MATIC (Low fee)</Dropdown.Item>
            <Dropdown.Item key="BNB">BNB (Medium fee)</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Input
          size="sm"
          type="number"
          onChange={(e) => handleAmount(e)}
          value={amount}
          min={0.0}
          step={0.1}
          rounded
          bordered
          label={`${token.entries().next().value[0]} amount`}
          placeholder="Introduce amount"
          color="secondary"
          css={{ marginBottom: "10px" }}
        />

        <Popover placement="top">
          <Popover.Trigger>
            <Button
              light
              size="xs"
              color="secondary"
              css={{ padding: "12px 0px 12px 0px", fontSize: "16px" }}
            >
              <i className="fas fa-smile"></i>
            </Button>
          </Popover.Trigger>
          <Popover.Content>
            <Picker
              onEmojiClick={handleEmoji}
              groupNames={{}}
              pickerStyle={{
                boxShadow: "none",
              }}
              disableSearchBar={true}
              preload={false}
            />
          </Popover.Content>
        </Popover>

        <Textarea
          spellCheck={false}
          onChange={(event) => handleMessage(event)}
          value={message}
          size="sm"
          bordered
          maxRows={3}
          color="secondary"
          maxLength={50}
          label="Message (optional)"
          placeholder="Type something..."
        />

        <Spacer />

        <Button
          onPress={() =>
            !account
              ? connectWallet()
              : sendTokens({
                  web3,
                  account,
                  token: token.entries().next().value[0],
                  network,
                  changeNetwork,
                  message,
                  setMessage,
                  amount,
                  setAmount,
                  balance,
                  readBalance,
                })
          }
          shadow
          color="secondary"
          size="xs"
          css={{ padding: "15px 0px 15px 0px", fontSize: "16px" }}
        >
          {!account ? "Connect" : "Donate"}
        </Button>
      </Card.Body>
    </Card>
  );
}
