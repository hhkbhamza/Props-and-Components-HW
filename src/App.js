import "./styles.css";
import EmployeeList from "./components/EmployeeList";
import EmployeeListItem from "./components/EmployeeListItem";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Searchbar />
      <EmployeeList>
        <EmployeeListItem />
        <EmployeeListItem />
        <EmployeeListItem />
        <EmployeeListItem />
      </EmployeeList>
    </div>
  );
}
