import { useEffect, useState } from "react";
import { getNotifications } from "../api/notifications";

function PriorityNotifications() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await getNotifications(1, 10, "");
    
    const filtered = res.notifications.filter(
      (n) => n.type === "Placement" || n.type === "Result"
    );

    setData(filtered);
  };

  return (
    <div>
      <h2>Priority Notifications</h2>

      {data.map((item, i) => (
        <div key={i}>
          <h4>{item.title}</h4>
          <p>{item.message}</p>
          <small>{item.type}</small>
        </div>
      ))}
    </div>
  );
}

export default PriorityNotifications;