import { Link } from "react-router-dom";

const BottomNavigation = ({ path, children } : { path: string, children: React.ReactNode }) => {

    return (
      <div className="mt-4">
        <Link to={path} className="text-blue-500 underline">{children}</Link>
      </div>
    );
  }

export default BottomNavigation;