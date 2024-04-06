import { Link } from 'react-router-dom';
import css from './ErrorPage.module.css';

const ErrorPage = () => {
  return (
    <div>
      <h1>Something is wrong! </h1>
      <Link className={css.found} to="/">
        Home page
      </Link>
    </div>
  );
};

export default ErrorPage;