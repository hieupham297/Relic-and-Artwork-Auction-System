import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "./Pages/Homepage/Homepage";
import { AuctionList } from "./Pages/AuctionList/AuctionList";
import { News } from "./Pages/News/News";
import { Contact } from "./Pages/Contact/Contact";
import { About } from "./Pages/About/About";
import { AuctionDetail } from "./Pages/AuctionDetail/AuctionDetail";
import { Register } from "./Pages/Register/Register";
import { Profile } from "./Pages/Profile/Profile";
import { Navbar } from "./Components/Navbar/Navbar";
import { AuctionInSession } from "./Pages/AuctionInSession/AuctionInSession";
import { AdminUserManage } from "./Pages/AdminUserManage/AdminUserManage";
import { AdminApproveAuction } from "./Pages/AdminApproveAuction/AdminApproveAuction";
import { AdminStatistic } from "./Pages/AdminStatistic/AdminStatistic";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleLoginSuccess = (user) => {
    setIsLoggedIn(true);
    setUserData(user);
  };
  return (
    <div className="App">
      <Navbar
        isLoggedIn={isLoggedIn}
        userData={userData}
        handleLoginSuccess={handleLoginSuccess}
      />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/auction-list" element={<AuctionList />} />
        <Route
          path="/auction-list/detail/:auctionId"
          element={<AuctionDetail />}
        />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/auction-in-session" element={<AuctionInSession />} />
        <Route path="/admin/user-manage" element={<AdminUserManage />} />
        <Route path="/admin/approve-auction" element={<AdminApproveAuction />} />
        <Route path="/admin/statistic" element={<AdminStatistic/>}/>
      </Routes>
    </div>
  );
}

export default App;
