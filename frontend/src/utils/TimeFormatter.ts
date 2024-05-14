







function getTimeIn12Hours() {
    const now = new Date();
    const twelveHoursLater = new Date(now.getTime() + 12 * 60 * 60 * 1000); // Add 12 hours in milliseconds
  
    const hours = twelveHoursLater.getHours();
    const minutes = twelveHoursLater.getMinutes();
    const amOrPm = hours >= 12 ? 'PM' : 'AM';
  
    const formattedHours = hours % 12 || 12; // Convert to 12-hour format
    const formattedMinutes = minutes.toString().padStart(2, '0'); // Ensure minutes are two digits
  
    return `${formattedHours}:${formattedMinutes} ${amOrPm}`;
  }
  
  console.log(getTimeIn12Hours()); 