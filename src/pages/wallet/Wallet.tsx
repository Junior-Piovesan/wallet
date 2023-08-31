import WalletForm from '../../components/walletForm/WalletForm';
import Header from '../../components/header/Header';

import styles from './wallet.module.css';

function Wallet() {
  return (
    <div className={ styles.container }>
      <Header />
      <main>
        <WalletForm />
      </main>
    </div>
  );
}

export default Wallet;
