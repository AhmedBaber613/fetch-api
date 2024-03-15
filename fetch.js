const fech = async () => {
  const response = await fetch('JSON/co.json');

  if (response.status !== 200) {
    throw new Error('problem in javascript');
  }

  const data = await response.json();
  return data;
};

fech()
  .then(data => console.log(data))
  .catch(err => console.log('there was an error', err.message));