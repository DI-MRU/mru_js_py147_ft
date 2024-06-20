import "./App.css";
import Header from "./components/Header";
import ListDisplay from "./components/ListDisplay";
import SearchBar from "./components/SearchBar";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const listCars = [
    {
      id: 1,
      brand: "ford",
      name: "ford torino",
      year: "1970-01-01",
      origin: "USA",
    },
    {
      id: 2,
      brand: "ford",
      name: "ford galaxie 500",
      year: "1970-01-01",
      origin: "USA",
    },
    {
      id: 3,
      brand: "chevrolet",
      name: "chevrolet vega 2300",
      year: "1971-01-01",
      origin: "USA",
    },
    {
      id: 4,
      brand: "peugeot",
      name: "peugeot 504 (sw)",
      year: "1972-01-01",
      origin: "Europe",
    },
    {
      id: 5,
      brand: "renault",
      name: "renault 12 (sw)",
      year: "1972-01-01",
      origin: "Europe",
    },
    {
      id: 6,
      brand: "kia",
      name: "kia sportage",
      year: "2022-01-01",
      origin: "Europe",
    },
    {
      id: 7,
      brand: "volkswagen",
      name: "volkswagen golf",
      year: "2021-01-01",
      origin: "Europe",
    },
    {
      id: 8,
      brand: "chevrolet",
      name: "chevrolet camaro",
      year: "2010-01-01",
      origin: "US",
    },
    {
      id: 9,
      brand: "hyundai",
      name: "hyundai kona",
      year: "2023-01-01",
      origin: "Europe",
    },
  ];

  return (
    <div className="App">
      <ErrorBoundary>
        <Header />
        <SearchBar options={listCars} />
        <ListDisplay list={listCars} />
      </ErrorBoundary>
    </div>
  );
}

export default App;
