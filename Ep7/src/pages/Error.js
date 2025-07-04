/** @format */

import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();

  return (
    <div>
      <h1>Oooops Something went wrong</h1>
      <h2>
        {err.status} :{err.statusText}
      </h2>
    </div>
  );
};

export default Error;
