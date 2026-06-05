function NotificationCard({ item }) {
  return (
    <div style={styles.card}>
      <h4>{item.title}</h4>
      <p>{item.message}</p>
      <span style={styles.type}>{item.type}</span>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    padding: "10px",
    margin: "10px",
    borderRadius: "8px"
  },
  type: {
    fontSize: "12px",
    color: "blue"
  }
};

export default NotificationCard;