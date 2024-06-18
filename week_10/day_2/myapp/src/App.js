import "./App.css";
import Card from "./card";
import Student from "./Students";

function App() {
  return (
    <>
      <h1
        style={{
          fontSize: "20px",
          fontWeight: "300",
          letterSpacing: "2px",
          alignItems: "center",
        }}
      >
        Students
      </h1>
      <Student name="Bob" age={20} isEnrolled={true} />
      <Student name="Alice" age="24" isEnrolled={false} />
      <Student name="Jill" age={25} isEnrolled={true} />
      <Student name="Sam" />
      <Card name="Bob" ISStudent={true} />
      <Card name="Jessie" ISStudent={true} />
      <Card name="Roupesh" ISStudent={true} />
      <Card name="bob2" ISStudent={false} />
    </>
  );
}

export default App;
