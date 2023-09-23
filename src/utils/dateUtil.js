const dateUtil = {
  formatDateTime: (dateTimeStr) => {
    const options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZoneName: "short",
    };

    const date = new Date(dateTimeStr);
    return date.toLocaleString("en-US", options);
  },
};

export default dateUtil;
