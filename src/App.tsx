import './App.css';
import Buy from './stages/buySate'; 
import Sell from './stages/sellStage';  
import Transfer from './stages/transfer';  
import Verify from './stages/verify';  
import Wallet from './stages/wallet';  
import VerifyOTP from './stages/verifyOTP';  
import DynamicContainerLoader from './stages/DynamicContainerLoader'; // Import the dynamic loader component


function App() {
  

  return (
    <div className="app">
      <div className="logo"></div>
      <div className="universal"></div>
      <div className="kotani"></div>
      <div className="poweredby"></div> 
      {/* <Buy /> */}
      <DynamicContainerLoader/>
      {/* <Sell/> */}
      {/* <Transfer/> */}
      {/* <Verify/> */}
      {/* <Wallet/> */}
      {/* <VerifyOTP/> */}
    </div>
  );
}

export default App;
