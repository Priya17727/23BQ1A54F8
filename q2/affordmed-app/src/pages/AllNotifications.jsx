import NotificationCard from "../components/NotificationCard";
import { useEffect, useState } from "react";
import { getNotifications } from "../api/notifications";

function AllNotifications() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
const fetchData = async () => {
  setLoading(true);   // start loading

  const res = await getNotifications(page, 10, "");
  setData(res.notifications);

  setLoading(false);  // stop loading
};
  useEffect(() => {
    fetchData();
  }, [page]);
  const fetchData = async () => {
    const res = await getNotifications(page, 10, "");
    setData(res.notifications);
  };
const isViewed = (id) => {
  const viewed = JSON.parse(localStorage.getItem("viewed")) || [];
  return viewed.includes(id);
};

const markViewed = (id) => {
  const viewed = JSON.parse(localStorage.getItem("viewed")) || [];

  if (!viewed.includes(id)) {
    viewed.push(id);
    localStorage.setItem("viewed", JSON.stringify(viewed));
  }
};
if (loading) {
  return <h3>Loading...</h3>;
}
  return (
    <div style={{ padding: "20px" }}>
      <h2>All Notifications</h2>

     {data.map((item, index) => (
  <div onClick={() => markViewed(item.id)}>
    <NotificationCard key={index} item={item} />
    
    {!isViewed(item.id) && (
      <span style={{ color: "red" }}>NEW</span>
    )}
  </div>
))}

      <button onClick={() => setPage(page - 1)}>Prev</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
}

export default AllNotifications;