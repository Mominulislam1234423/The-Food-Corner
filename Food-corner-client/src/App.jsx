function App() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Navbar Section */}
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl font-bold uppercase">
            Food Corner
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Menu</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero min-h-[70vh] bg-base-200 mt-5 rounded-box">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Delicious Food</h1>
            <p className="py-6">
              Experience the best cuisine in Chattogram. Fresh ingredients,
              amazing taste! div
            </p>
            <button className="btn btn-warning uppercase">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
