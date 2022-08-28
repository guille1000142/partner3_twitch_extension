import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Grid,
  Text,
  Button,
  User,
  Table,
  Col,
  Row,
  Spacer,
  Dropdown,
  Loading,
  Avatar,
  Badge,
} from "@nextui-org/react";
import { Context } from "../../../context/Context";
import useSocket from "../../../hooks/socket/useSocket";
import PolygonLogo from "../../../assets/imgs/polygon.png";
import { Stats, Settings } from "./Modals";

export default function PanelCard() {
  const [stats, setStats] = useState(false);
  const [settings, setSettings] = useState(false);
  const { user, channel } = useContext(Context);
  const { donations } = useSocket();
  const navigate = useNavigate();

  const columns = [
    { name: "User", uid: "user" },
    { name: "Token", uid: "amount" },
    { name: "Channel", uid: "channel" },
  ];

  const users =
    donations &&
    donations.slice(0, 12).map((donation, index) => {
      const object = {
        id: index + 1,
        photo: donation.photo,
        name: donation.name,
        amount: donation.amount,
        token: donation.token,
        channel: donation.channel,
      };
      return object;
    });

  const renderCell = (user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "user":
        return (
          <Col>
            <Row>
              <Avatar size="xs" color="secondary" src={user.photo} />
            </Row>
          </Col>
        );
      case "amount":
        return (
          <Col>
            <Row>
              <Text b size={13} css={{ marginRight: "5px" }}>
                {cellValue}
              </Text>
              <img width={20} height={20} src={PolygonLogo} alt="polygon" />
            </Row>
          </Col>
        );

      case "channel":
        return (
          <Col>
            <Row>
              <Text b size={13}>
                {cellValue.length > 15
                  ? cellValue.substring(0, 15) + "..."
                  : cellValue}
              </Text>
            </Row>
          </Col>
        );

      default:
        return cellValue;
    }
  };

  const handleSelect = (key) => {
    console.log(key);
    if (key === "stats") setStats(true);
    if (key === "settings") setSettings(true);
  };
  return (
    <>
      <Card
        css={{
          mw: "280px",
          margin: "0 auto",
        }}
      >
        {user && channel && donations.length > 0 ? (
          <>
            <Card.Body
              css={{ py: "$8", display: "flex", alignItems: "center" }}
            >
              <Grid.Container gap={0} justify="space-between">
                <Grid sm={0}>
                  <Badge
                    enableShadow
                    disableOutline
                    color="secondary"
                    size="sm"
                  >
                    Partner3
                  </Badge>
                </Grid>
                <Grid sm={0}>
                  <Badge
                    enableShadow
                    disableOutline
                    color={channel.live ? "success" : "error"}
                    size="sm"
                  >
                    {channel.userName}
                  </Badge>
                </Grid>
              </Grid.Container>
              <Spacer />
              <Badge
                disableOutline
                placement="top-left"
                color="default"
                content="1"
                size="sm"
              >
                <Dropdown>
                  <Dropdown.Trigger>
                    <User
                      as="button"
                      size="md"
                      bordered
                      src={user.profile_image_url}
                      name={user.display_name}
                      description={user.role}
                      color="secondary"
                    />
                  </Dropdown.Trigger>
                  <Dropdown.Menu
                    onAction={(key) => handleSelect(key)}
                    aria-label="Static Actions"
                    css={{ width: "160px" }}
                    color="secondary"
                    disabledKeys={["profile"]}
                  >
                    <Dropdown.Item key="profile">
                      {user.display_name + " - VIP 1 (soon)"}
                    </Dropdown.Item>
                    <Dropdown.Item key="stats" withDivider>
                      Stats
                    </Dropdown.Item>
                    <Dropdown.Item key="settings">Settings</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Badge>

              <Spacer />
              <Grid.Container gap={0} justify="space-evenly">
                <Grid>
                  <Button
                    disabled
                    onPress={() => navigate("prediction")}
                    shadow
                    color="secondary"
                    size="xs"
                    css={{ padding: "15px 0px 15px 0px", fontSize: "16px" }}
                  >
                    Predict
                  </Button>
                </Grid>
                <Grid>
                  <Button
                    onPress={() => navigate("donation")}
                    shadow
                    color="secondary"
                    size="xs"
                    css={{ padding: "15px 0px 15px 0px", fontSize: "16px" }}
                  >
                    Donate
                  </Button>
                </Grid>
              </Grid.Container>
            </Card.Body>

            <Card.Divider />
            <Card.Body
              css={{ py: "$5", display: "flex", alignItems: "center" }}
            >
              <Text h2 size={13}>
                Total donations: {donations.length}
              </Text>
              {/* <Text h2 size={13}>
                    Total predictions: {predictions.length}
                  </Text> */}

              <Grid.Container gap={0} justify="center">
                <Table shadow={false} selectionMode="none" color="secondary">
                  <Table.Header columns={columns}>
                    {(column) => (
                      <Table.Column key={column.uid} align="start">
                        {column.name}
                      </Table.Column>
                    )}
                  </Table.Header>
                  <Table.Body items={users}>
                    {(item) => (
                      <Table.Row>
                        {(columnKey) => (
                          <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
                        )}
                      </Table.Row>
                    )}
                  </Table.Body>
                  <Table.Pagination
                    shadow
                    noMargin
                    align="center"
                    rowsPerPage={3}
                  />
                </Table>
              </Grid.Container>
            </Card.Body>

            <Stats
              donations={donations.filter(
                (donation) => donation.id === user.id
              )}
              modal={stats}
              setModal={setStats}
            />
            <Settings modal={settings} setModal={setSettings} />
          </>
        ) : (
          <Grid.Container gap={10} justify="center">
            <Grid>
              <Loading color="secondary" />
            </Grid>
          </Grid.Container>
        )}
      </Card>
    </>
  );
}
