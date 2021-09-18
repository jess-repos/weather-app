import { useState } from "react";
import Future from "./components/weatherfuture/Future";
import Main from "./components/main/Main";
import Search from "./components/ui/Search";
import WeatherNow from "./components/weathernow/WeatherNow";
function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <div className="App">
      <Main isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />
      <Search isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />
      <div className="more-info">
        <Future />
        <WeatherNow />
      </div>
    </div>
  );
}

export default App;
