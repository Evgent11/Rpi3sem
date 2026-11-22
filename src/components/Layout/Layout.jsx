import { Nav } from "../Nav/Nav";
import { Footer } from "../Footer/Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <header className="site-header">
        <div className="container">
          <Nav />
        </div>
      </header>
      <main className="container page">{children}</main>
      <Footer />
    </>
  );
};
