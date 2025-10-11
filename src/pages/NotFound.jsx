import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>404 - Page Not Found</h2>
      <Link to="/" style={{ color: 'blue', textDecoration: 'underline' }}>
        Return to Home
      </Link>
    </div>
  );
}

export default NotFound;
