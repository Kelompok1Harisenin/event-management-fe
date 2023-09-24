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
  formatDate: (dateStr) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", options);
  },
  formatTime: (dateStr) => {
    const options = { hour: "2-digit", minute: "2-digit", hour12: true };
    const date = new Date(dateStr);
    return date.toLocaleTimeString("en-US", options);
  },
};

export default dateUtil;
