import { useNetworkState } from "@uidotdev/usehooks";
import React, { useEffect, useState } from "react";

const OnlineStatus = () => {
  const { online } = useNetworkState();
  const [isFirstOffline, setIsFirstOffline] = useState(false);

  useEffect(() => {
    if (!online) {
      setIsFirstOffline(true);
    }
  }, [online]);
  return (
    <>
      {isFirstOffline ? (
        online ? (
          <p
            className="online-status"
            style={{ background: "green", color: "#fff", textAlign: "center" }}
          >
            Online
          </p>
        ) : (
          <p style={{ background: "red", color: "#fff", textAlign: "center" }}>
            Offline
          </p>
        )
      ) : (
        <></>
      )}
    </>
  );
};

export default React.memo(OnlineStatus);
