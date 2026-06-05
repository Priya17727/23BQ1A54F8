const getNotifications = require("./notificationService");

async function main() {
  try {
    const notifications = await getNotifications();

    const priorityMap = {
      Placement: 3,
      Result: 2,
      Event: 1
    };

    const sorted = notifications
      .map(n => ({
        ...n,
        score:
          priorityMap[n.type] * 100000 +
          new Date(n.timestamp).getTime()
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);

    console.log(sorted);
  } catch (err) {
    console.error("Failed to load notifications:", err.message);
    if (err.response) {
      console.error("Response status:", err.response.status);
      console.error("Response body:", err.response.data);
    }
    process.exit(1);
  }
}

main();