const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;
const temperatureInFahrenheit = (callback) => console.log(`It is currently ${toFahrenheit(callback())}ºF at Mars`);
const greet = (callback) => console.log(`Hi there! Curiosity here. Right now is ${callback()}ºC at Mars`);

// definição da função sendMarsTemperature...
const sendMarsTemperature = (callback) => {
    callback(getMarsTemperature);
}

setTimeout(() => sendMarsTemperature(temperatureInFahrenheit), messageDelay) ; 
// imprime "It is currently 47ºF at Mars", por exemplo
setTimeout(() => sendMarsTemperature(greet), messageDelay) ;
// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo