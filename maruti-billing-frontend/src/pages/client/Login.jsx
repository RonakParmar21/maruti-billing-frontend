const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-6 shadow-md rounded-lg w-80">
        <h2 className="text-xl font-bold mb-4">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded"
        />

        <button className="w-full bg-[#0000ff] text-white py-2 rounded">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;