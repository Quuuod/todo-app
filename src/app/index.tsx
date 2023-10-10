// eslint-disable-next-line import/no-extraneous-dependencies
import cn from "classnames";

import { Router } from "../pages";

const App = () => {
  return <div className={cn("app-wrapper")}>{<Router />}</div>;
};

export { App };
