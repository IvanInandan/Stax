import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { useThemeStore } from "./stores/themeStore";

const App = () => {
  const setTheme = useThemeStore((s) => s.setTheme);
  const theme = useThemeStore((s) => s.theme);

  useEffect(() => {
    setTheme(theme);
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <h1>Hello World</h1>
        <p>
          This application is built using React and modern tooling to provide a
          fast, responsive user experience. Styling is handled with Tailwind CSS
          and daisyUI, allowing themes to be switched at runtime without
          rebuilding the app. The component-based architecture keeps the
          codebase modular and easy to maintain, while the design system ensures
          consistent visuals across the interface. Together, these choices make
          the application flexible, scalable, and easy to extend.
        </p>
      </div>
    </>
  );
};

export default App;
