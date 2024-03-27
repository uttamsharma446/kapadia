import Nav from "@/components/Nav";
import Provider from "@/components/Provider";
import { Toaster } from "react-hot-toast";
import "@/styles/globals.css";
export const metadata = {
  title: "Kapadia",
  description: "Kapadia: Empowering Minds with AI-driven Learning",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
      <Toaster position="bottom-center" />
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};
export default RootLayout;
