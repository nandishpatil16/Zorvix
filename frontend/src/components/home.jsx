import { useNavigate } from "react-router-dom";

export default function Home() {
  const nav = useNavigate();

  return (
    <div className="home">
      <h1>Zorvix</h1>
      <p>Simple PDF Editing</p>
      <button onClick={()=>nav('/editor')}>Start Editing</button>
    </div>
  );
}
