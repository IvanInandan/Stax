const Notification = ({ message }) => {
  // If there's no message, don't return anything
  if (message === null) {
    return null;
  } else {
    return <div className="notification">{message}</div>;
  } // Otherwise return message encased in a div
};

export default Notification;
