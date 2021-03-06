import React, {useState} from "react";
import ConnectWalletModal from "../Components/Modals/ConnectWalletModal";
import ImportToken from "../Components/Modals/ImportToken";
import ManageList from "../Components/Modals/ManageList";
import SelectToken from "../Components/Modals/SelectToken";
import ConfirmSwapModal from "../Components/Modals/ConfirmSwapModal";
import SubmittedModal from "../Components/Modals/SubmittedModal";
import Navbar from "../Components/Navbar";
import Swap from "../Components/Swap";
import ConfirmSwap from "../Components/ConfirmSwap";

function Home() {
  const [showSwap, setShowSwap] = useState(false);
  const [showConnectWallet, setShowConnectWallet] = useState(false);
  const [showSelectToken, setShowSelectToken] = useState(false);
  const [showImportToken, setShowImportToken] = useState(false);
  const [showManageList, setShowManageList] = useState(false);
  const [showConfirmSwap, setShowConfirmSwap] = useState(false);
  const [showSubmittedModal, setShowSubmittedModal] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      <Navbar setShowConnectWallet={setShowConnectWallet} />
      {showSwap && <Swap setShowSelectToken={setShowSelectToken} />}
      <ConfirmSwap />
      {showConnectWallet && <ConnectWalletModal setShowConnectWallet={setShowConnectWallet} />}
      {showSelectToken && <SelectToken setShowSelectToken={setShowSelectToken} setShowImportToken={setShowImportToken} />}
      {showImportToken && <ImportToken setShowSelectToken={setShowSelectToken} setShowImportToken={setShowImportToken} setShowManageList={setShowManageList} />}
      {showManageList && <ManageList setShowManageList={setShowManageList} setShowImportToken={setShowImportToken} />}
      {showConfirmSwap && <ConfirmSwap />}
      {showSubmittedModal && <SubmittedModal />}
    </div>
  );
}

export default Home;
