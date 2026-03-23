import { Outlet, Link } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen">
      
      {/* Sidebar */}
      <div className="w-64 bg-[#0000ff] text-white p-4">
        <h2 className="text-xl font-bold mb-6">Admin</h2>

        <nav className="flex flex-col space-y-3">
          <Link to="/admin">Dashboard</Link>
          <Link to="/admin/users">Users</Link>
        </nav>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;