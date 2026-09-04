import PageTransition from "./PageTransition.jsx";

function LegalPage({ navbar, children }) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFFFFF" }}>
      {navbar}

      <PageTransition>{children}</PageTransition>
    </div>
  );
}

export default LegalPage;
