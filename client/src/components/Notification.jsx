const Notification = ({ notification }) => {
  // If there's no message, don't return anything
  if (notification === null) {
    return null;
  } else {
    // Set style of notification based on 'status'
    const style =
      status === true
        ? {
            color: "green",
            background: "lightgrey",
            fontSize: "20px",
            borderStyle: "solid",
            borderRadius: "5px",
            padding: "10px",
            marginBottom: "10px",
          }
        : {
            color: "red",
            background: "lightgrey",
            fontSize: "20px",
            borderStyle: "solid",
            borderRadius: "5px",
            padding: "10px",
            marginBottom: "10px",
          };

    return (
      <div className="notification" style={style}>
        {notification}
      </div>
    );
  } // Otherwise return message encased in a div
};

export default Notification;
