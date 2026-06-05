import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={styles.nav}>
      <h3>AffordMed Notifications</h3>

      <div style={styles.links}>
        <Link to="/" style={styles.link}>All</Link>
        <Link to="/priority" style={styles.link}>Priority</Link>
      </div>
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
    background: "#222",
    color: "white"
  },
  links: {
    display: "flex",
    gap: "15px"
  },
  link: {
    color: "white",
    textDecoration: "none"
  }
};

export default Navbar;