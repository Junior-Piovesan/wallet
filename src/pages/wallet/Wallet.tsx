import WalletForm from '../../components/walletForm/WalletForm';
import Header from '../../components/header/Header';

import styles from './wallet.module.css';
import Table from '../../components/table/Table';

function Wallet() {
  return (
    <div className={ styles.container }>
      <Header />
      <main className={ styles.main }>
        <WalletForm />
        <Table />
      </main>
    </div>
  );
}

export default Wallet;
