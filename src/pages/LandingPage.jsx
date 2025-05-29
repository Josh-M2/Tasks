import { useNavigate } from "react-router";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate("/task1")}>Go to Task 1</button>
      <button onClick={() => navigate("/task2")}>Go to Task 2</button>
      <button onClick={() => navigate("/task3")}>Go to Task 3</button>
    </>
  );
}
