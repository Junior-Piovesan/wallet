import styles from './logo.module.css';
import iconMoney from '../../assets/🦆 emoji _money with wings_.svg';

export default function Logo() {
  return (
    <div className={ styles.containerTitleImage }>
      <div>
        <img
          className={ styles.image }
          src={ iconMoney }
          alt="Icone de dinheiro"
        />
      </div>
      <h1 className={ styles.title }>Trybe </h1>
      <h1 className={ styles.title2 }>Wallete</h1>

    </div>
  );
}
