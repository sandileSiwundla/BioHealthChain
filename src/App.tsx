import './App.css';
import Buy from './stages/buySate'; 
import Sell from './stages/sellStage';  
import Transfer from './stages/transfer';  
import Verify from './stages/verify';  
import Wallet from './stages/wallet';  
import VerifyOTP from './stages/verifyOTP';  



function App() {
  

  return (
    <div className="app">
      <div className="logo"></div>
      <div className="universal"></div>
      <div className="kotani"></div>
      <div className="poweredby"></div> 
      {/* <Buy /> */}
      {/* <Sell/> */}
      <Transfer/>
      {/* <Verify/> */}
      {/* <Wallet/> */}
      {/* <VerifyOTP/> */}
      
    </div>
  );
}

export default App;
