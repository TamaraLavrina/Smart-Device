const SERVER = 'https://echo.htmlacademy.ru';

const sendData = (onSuccess, onFail, body) => {
  fetch(SERVER, {
    method: 'POST',
    body,
  })
      .then((response) => {
        if (response.ok) {
          onSuccess();
        } else {
          onFail();
        }
      })
      .catch(() => {
        onFail();
      });
};

export {sendData};
