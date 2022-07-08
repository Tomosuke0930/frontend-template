import { Button } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { shortenAddress } from "../lib";

const Home: NextPage = () => {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();
  if (isConnected)
    return (
      <div>
        {/* Connected to {address} */}
        {shortenAddress(address!.toString())}
        <Button colorScheme={"pink"} onClick={() => disconnect()}>
          Disconnect
        </Button>
      </div>
    );
  return (
    <Button colorScheme={"yellow"} onClick={() => connect()}>
      Connect Wallet
    </Button>
  );
};

export default Home;
