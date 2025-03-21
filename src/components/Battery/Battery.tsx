import React from "react";
interface BatteryProps {
  level: number;
  charging: boolean | null;
  chargingTime: number | null;
  dischargingTime: number | null;
}

function Battery({ level, charging, chargingTime, dischargingTime }: BatteryProps) {
  return (
    <div>
      <p>Battery Level: {level}%</p>
      <p>Charging: {charging ? "Yes" : "No"}</p>
      <p>Charging Time: {chargingTime ?? "N/A"}</p>
      <p>Discharging Time: {dischargingTime ?? "N/A"}</p>
    </div>
  );
}
export default React.memo(Battery)