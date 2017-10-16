module.exports = (Franz) => {
  const getMessages = function getMessages() {
    let count = 0;

    if (document.querySelectorAll('.DsPmj').length > 0) {
      count = document.querySelectorAll('.DsPmj')[0].querySelectorAll('div.G3').length;
    }

    // set Franz badge
    Franz.setBadge(count);
  };

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
