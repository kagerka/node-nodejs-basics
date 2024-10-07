const parseEnv = () => {
  const array = Object.keys(process.env).filter((key) => key.includes("RSS_"));
  array.forEach((el) => console.log(`${el}=${process.env[el]}`));
};

parseEnv();
