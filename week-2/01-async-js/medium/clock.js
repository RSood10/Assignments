function clockTime() {
  let date = new Date();

  //   console.log(date.toLocaleString()); with full date and time
  console.log(date.getHours(), ":", date.getMinutes(), ":", date.getSeconds());
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  //padstart used to maintain the desired formate for the string
  //This code uses the padStart method to ensure that single-digit hours, minutes, and seconds are padded with a leading zero to maintain the "HH:MM:SS" format.
  // Create the formatted time string
  const formattedTime = `${hours}:${minutes}:${seconds}`;
  console.log(formattedTime);
  console.log("Time in HH:MM::SS AM/PM : ", date.toLocaleTimeString());
  setTimeout(clockTime, 1000);
}

clockTime();
