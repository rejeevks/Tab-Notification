import { Button } from "@chakra-ui/react";
import React from "react";
import { useTabNotification } from "./useTabNotification";

const TabComponent = () => {
  const [setMessage, clearMessage] = useTabNotification(1000);
  return (
    <div>
      <Button onClick={() => setMessage(" 🔴 (1) New Message", 1000)}>
        Notify
      </Button>
      <Button onClick={() => clearMessage()}>Stop</Button>
    </div>
  );
};

export default TabComponent;
