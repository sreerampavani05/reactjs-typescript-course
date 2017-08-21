import * as React from "react";
import * as ReactDom from "react-dom";

import {Home} from "./components/Home";

ReactDom.render(<Home name="Pavani" age={30}/>, document.getElementById("app"));