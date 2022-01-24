
import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import Toastmessage from "./components/Toast";



 function App() {
  return (
    <div>
      <Toastmessage closetime={5000} color={"green"} />
    </div>
    
  );
}


export default App;
