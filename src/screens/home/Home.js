import './App.css';
import React from 'react'
import { YMApi } from "ym-api";

const SyncAccount = async (username, password) => {
  const api = new YMApi();
  console.log(username, password)
  try {
    await api.init({ username: username, password: password });
    const result = await api.searchArtists("gorillaz");
    console.log({ result });
  } catch (e) {
    console.log(`api error ${e.message}`);
  }
}

const Home = () => {
  const [login, setLogin] = React.useState("");
  const [pass, setPass] = React.useState("");

  return (
    <div className="App">
      <p class="text-white mb-4">
        Welcome to Terpander
      </p>
      <div class="w-full max-w-xs">
        <form 
          class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={() => SyncAccount(login, pass)}
        >
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Username
            </label>
            <input 
              class="text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="username" 
              type="text" 
              placeholder="Username"
              onChange={e => setLogin(e.target.value)}
            />
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input 
              class="text-sm shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
              id="password" type="password" 
              placeholder="******************"
              onChange={e => setPass(e.target.value)}
            />
            <p class="text-red-500 text-xs italic">Please choose a password.</p>
          </div>
          <div class="flex items-center justify-between">
            <button 
              class="text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
              type="button"
              value="button"
              onClick={() => SyncAccount(login, pass)}
            >
              Sign In
            </button>
            <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              Forgot Password?
            </a>
          </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
          &copy;2020 Acme Corp. All rights reserved.
        </p>
      </div>

    </div>
  );
}

export default Home;
