import React, { useState, useContext } from "react";
import {
  Grid,
  Modal,
  Text,
  Button,
  Switch,
  useTheme,
  Table,
} from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import { Context } from "../../../context/Context";

export function Stats({ donations, modal, setModal }) {
  const [stats, setStats] = useState(true);

  const maticDonations = donations.filter(
    (donation) => donation.token === "MATIC"
  );
  const bnbDonations = donations.filter((donation) => donation.token === "BNB");

  var maticTokens = 0;
  for (let i = 0; i < maticDonations.length; i++) {
    maticTokens += parseFloat(donations[i].amount);
  }

  var bnbTokens = 0;
  for (let i = 0; i < bnbDonations.length; i++) {
    bnbTokens += parseFloat(donations[i].amount);
  }

  const DonationData = ({ name1, name2, total, token }) => {
    return (
      <div>
        <Table shadow={false} aria-label={name2}>
          <Table.Header>
            <Table.Column css={{ padding: "10px" }}>{name1}</Table.Column>
            <Table.Column>{name2}</Table.Column>
          </Table.Header>
          <Table.Body>
            <Table.Row key="1">
              <Table.Cell>{total}</Table.Cell>
              <Table.Cell>{token}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
  };

  return (
    <Modal
      width="280px"
      blur
      open={modal}
      closeButton
      onClose={() => setModal(false)}
    >
      <Modal.Header>
        <Text h1 size={20}>
          Stats
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Grid.Container gap={0} justify="space-evenly">
          <Grid>
            <Button
              disabled={!stats}
              onPress={() => setStats(false)}
              size="xs"
              css={{ padding: "12px 0px 12px 0px", fontSize: "13px" }}
              ghost
              color="secondary"
            >
              Predictions
            </Button>
          </Grid>
          <Grid>
            <Button
              disabled={stats}
              onPress={() => setStats(true)}
              size="xs"
              css={{ padding: "12px 0px 12px 0px", fontSize: "13px" }}
              ghost
              color="secondary"
            >
              Donations
            </Button>
          </Grid>
        </Grid.Container>
        <Grid.Container gap={0} justify="center">
          <Text h2 size={13} css={{ marginTop: "10px" }}>
            {stats
              ? `Total donations ${donations.length}`
              : `Total predictions ${0}`}
          </Text>
          <Grid>
            {stats ? (
              <>
                <DonationData
                  name1="Donations"
                  name2="MATIC"
                  total={maticDonations.length}
                  token={maticTokens.toFixed(2)}
                />
                <DonationData
                  name1="Donations"
                  name2="BNB"
                  total={bnbDonations.length}
                  token={bnbTokens.toFixed(2)}
                />
              </>
            ) : (
              <>
                <DonationData
                  name1="Predictions"
                  name2="MATIC"
                  total={0}
                  token={0}
                />
                <DonationData
                  name1="Predictions"
                  name2="BNB"
                  total={0}
                  token={0}
                />
              </>
            )}
          </Grid>
        </Grid.Container>
      </Modal.Body>
    </Modal>
  );
}

export function Settings({ modal, setModal }) {
  const { history, setHistory } = useContext(Context);
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();
  return (
    <Modal
      width="280px"
      blur
      open={modal}
      closeButton
      onClose={() => setModal(false)}
    >
      <Modal.Header>
        <Text h1 size={20}>
          Settings
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Grid.Container gap={0} justify="space-around">
          <Grid>
            <Text h1 size={13}>
              Theme
            </Text>
            <Switch
              size="md"
              color="secondary"
              checked={isDark}
              onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
              iconOn={<i className="fa-solid fa-moon"></i>}
              iconOff={<i className="fa-solid fa-sun"></i>}
            />
          </Grid>
          <Grid>
            <Text h1 size={13}>
              Global history
            </Text>
            <Switch
              size="md"
              color="secondary"
              checked={history}
              onChange={() => setHistory(!history)}
            />
          </Grid>
        </Grid.Container>
      </Modal.Body>
    </Modal>
  );
}
