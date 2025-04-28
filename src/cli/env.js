const parseEnv = () => {
  const variables = Object.keys(process.env).filter((key) => key.includes("RSS_"));
  variables.forEach((el) => console.log(`${el}=${process.env[el]}`));
};

parseEnv();
