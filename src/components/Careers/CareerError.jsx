import { useRouteError, Link } from "react-router-dom";

function CareerError() {
  const error = useRouteError();
  return (
    <div>
      <h1>Error</h1>
      <p>
        {error.message}
        </p>
        <Link to="/">Back to Home</Link>
    </div>
  );
}

export default CareerError;
