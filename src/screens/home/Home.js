import './App.css';
/*
import { YMApi } from "ym-api";

const SyncAccount = async ({username}, {password}) => {
  const api = new YMApi();
  try {
    await api.init({ username: "example@yandex.ru", password: "password" });
    const result = await api.searchArtists("gorillaz");
    console.log({ result });
  } catch (e) {
    console.log(`api error ${e.message}`);
  }
}
*/
const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to Terpander
        </p>
      </header>
      <div>

      </div>
    </div>
  );
}

export default Home;
