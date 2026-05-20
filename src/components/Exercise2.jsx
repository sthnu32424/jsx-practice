import { devices } from "../data/data";

const Exercise2 = () => {
  return (
    <ul>
      {devices.map(
        (device) =>
          device.width >= 700 && (
            <li key={device.id}>
              {device.name} {device.price >= 1000 ? "💰 高級品" : "🛒 お買い得"}
            </li>
          ),
      )}
    </ul>
  );
};

export default Exercise2;
