// components/DashboardLayout.jsx
import Navbar from "./Navbar";

export default function DashboardLayout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <Navbar />
      <div style={{ flexGrow: 1, padding: "1rem" }}>{children}</div>
    </div>
  );
}
