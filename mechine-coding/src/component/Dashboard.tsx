import { JSX } from "react";

type DashboardProps = {
  isLoggedIn: boolean;
};
const Dashboard = ({ isLoggedIn }: DashboardProps): JSX.Element => {
  return <div>Welcome to the Dashboard</div>;
};
export default Dashboard;
