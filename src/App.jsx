import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "./Pages/Homepage/Homepage";
import Navbar from "./Components/Navbar/Navbar";
import { AuctionList } from "./Pages/AuctionList/AuctionList";
import { News } from "./Pages/News/News";
import { Contact } from "./Pages/Contact/Contact";
import { About } from "./Pages/About/About";
import { AuctionDetail } from "./Pages/AuctionDetail/AuctionDetail";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/auction-list" element={<AuctionList />} />
        <Route path="/auction-list/detail" element={<AuctionDetail />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
