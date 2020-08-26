const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = (callback) => {
    const temperature = callback();
    console.log(`Mars temperature is: ${temperature} degree Celsius`)
}

setTimeout(() => sendMarsTemperature(getMarsTemperature), messageDelay); // imprime "Mars temperature is: 20 degree Celsius", por exemplo
