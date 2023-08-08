import { readWordList } from './fileUtils';

export const hello = async (event, context) => {
  const validWords = readWordList();
  
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Go Serverless v2.0! ${(await message({ time: 0.1, copy: 'Your function executed successfully!'}))}`,
      validWords: validWords,
    }),
  };
};

const message = ({ time, ...rest }) => new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve(`${rest.copy} (with a delay)`);
  }, time * 100)
);
