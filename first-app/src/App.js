import Header from "./components/Header";

const App = () => {
  return (
    <div className="container">
      <Header color2="red" />
      <Header color1="blue" color2="brown" />
    </div>
  );
};

export default App;
