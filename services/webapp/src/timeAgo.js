function timeAgo(date) {
    const currentDate = new Date();
    const eventDate = new Date(date);
    const seconds = Math.floor((currentDate - eventDate) / 1000);
    let interval = seconds / 31536000; // seconds in one year
  
    if (interval > 1) {
      return Math.floor(interval) + " years ago";
    }
    interval = seconds / 2592000; // seconds in one month
    if (interval > 1) {
      return Math.floor(interval) + " months ago";
    }
    interval = seconds / 86400; // seconds in one day
    if (interval > 1) {
      return Math.floor(interval) + " days ago";
    }
    interval = seconds / 3600; // seconds in an hour
    if (interval > 1) {
      return Math.floor(interval) + " hours ago";
    }
    interval = seconds / 60; // seconds in a minute
    if (interval > 1) {
      return Math.floor(interval) + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
  }

  export default timeAgo;