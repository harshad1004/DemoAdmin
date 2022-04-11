import React from "react";
import Navbar from "./Components/Admin/Navbar";
import Rotuing from "./Components/Admin/Routes/Rotuing";
import Sidebar from "./Components/Admin/Sidebar";

const App = () => {
  return (
    <div className="row">
      <div className="col-md-3">
        <Sidebar />
        <div style={{ right: "10px", position: "absolute" }}>
          <Navbar />
        </div>
      </div>
      <div className="col-md-9" style={{ marginTop: "8%" }}>
        <Rotuing />
      </div>
    </div>
  );
};

export default App;
