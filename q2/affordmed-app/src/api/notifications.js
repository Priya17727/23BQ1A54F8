import axios from "axios";

const BASE_URL = "http://4.224.186.213/evaluation-service";

export const getNotifications = async (page, limit, type) => {
  const res = await axios.get(`${BASE_URL}/notifications`, {
    params: {
      page,
      limit,
      notification_type: type
    }
  });

  return res.data;
};