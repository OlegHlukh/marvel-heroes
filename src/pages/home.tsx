import { useEffect } from 'react';
import md5 from 'js-md5';

const Home: React.FC = () => {
  useEffect(() => {
    const ts = Number(new Date());

    const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY || '';
    const PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY || '';

    const hash = md5.create();
    hash.update(ts + PRIVATE_KEY + PUBLIC_KEY);

    fetch(
      `http://gateway.marvel.com/v1/public/characters?apikey=${PUBLIC_KEY}&ts=${ts}&hash=${hash.toString()}`
    )
      .then((res) => {
        if (res.status === 200) {
          res.json().then((data) => {
            console.log(data);
          });
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return <>Home</>;
};

export default Home;
