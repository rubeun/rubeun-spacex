import './App.css';
import { RelayEnvironmentProvider, Environment } from "react-relay/hooks";
import relayEnvironment from './relay/relayEnvironment';

function App() {
  return (
    <RelayEnvironmentProvider
      environment={relayEnvironment as unknown as Environment}
    >

    </RelayEnvironmentProvider>
  );
}

export default App;
