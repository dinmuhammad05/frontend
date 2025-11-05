import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigateToHome = useNavigate();

  const handleHomeNavigate = () => {
    navigateToHome("/");
  };
  return (
      <main className="h-[600px] bg-indigo-200  p-4">
        <h1>404</h1>
        <button onClick={handleHomeNavigate}>Back To Home</button>
      </main>
  );
};

export default NotFound;
