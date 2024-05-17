import { QueryClient, QueryClientProvider } from 'react-query';
import { Link } from 'react-router-dom';
import styles from './assets/app.module.scss';
import Carousel from './components/carousel/carousel';
import { usePlanetList } from './data/queries';
const App = () => {
  const { data: list } = usePlanetList();
  return (
    <>
      <h1 className={styles.textCenter}>Ledn frontend challenge</h1>
        <Carousel planets={list}></Carousel>

        <div className={styles.btnWrapper}>
          <button className={styles.buttonToPage} aria-label="Go to planets Page"><Link to={'/planets'} >Visit all the Empire's planets</Link></button>

        </div>
      </>
  );
};

export default App;
