import { Route } from "react-router-dom";
import { Home, NavBar, Bottom } from "./components";

import { Box } from "./styles";

function App() {
  return (
    <Box height="80rem" color="gray" flexDirection="column">
      <NavBar />
      <Route path="/" component={Home} exact={true} />
      <Bottom />
    </Box>
  );
}

export default App;
