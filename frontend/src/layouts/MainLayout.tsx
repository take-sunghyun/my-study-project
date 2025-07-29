import { Outlet, Link } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">여기서</Link> | <Link to="/about">수정 하면</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
