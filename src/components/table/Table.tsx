import { useSelector } from 'react-redux';

import { ReduxState } from '../../types/types';

function Table() {
  const globalState = useSelector((state:ReduxState) => state.wallet);
  return (

    <section>
      Table
    </section>
  );
}

export default Table;
