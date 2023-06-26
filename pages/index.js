import React from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import dynamic from "next/dynamic";
import CandyMachine from "../components/CandyMachine";

// Constantes
const TWITTER_HANDLE = "_buildspace";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const Home = () => {
  const WalletMultiButtonDynamic = dynamic(
    async () =>
      (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
    { ssr: false }
  );
  const wallet = useWallet();
  // Ações
  const renderNotConnectedContainer = () => (
    <div>
      <img
        src="https://nerdtec.net/wp-content/uploads/2013/08/fita.gif"
        alt="emoji"
      />

      <div className="button-container">
        <WalletMultiButtonDynamic className="cta-button connect-wallet-button" />
      </div>
    </div>
  );

  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header">👾 Assopra que vai 👾</p>
          <p className="sub-text">
            NFTs de fitas nintendistas. Pra mandar aquele alô pra nostalgia 🕹️!
          </p>
          {/* Renderize o botão de conexão com a carteira bem aqui */}
          {wallet.publicKey ? (
            <CandyMachine walletAddress={wallet} />
          ) : (
            renderNotConnectedContainer()
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
