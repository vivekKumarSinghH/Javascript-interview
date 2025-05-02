import "./App.css";
import withAuthProtection from "./component/withAuthProtection";
import Dashboard from "./component/Dashboard";
import FormValidation from "./component/FormValidation";
const ProtectedDashboard = withAuthProtection(Dashboard);
function App() {
  const isLoggedIn = false;
  return (
    <>
      {/* <ProtectedDashboard isLoggedIn={isLoggedIn} /> */}
      <FormValidation />
    </>
  );
}

export default App;
