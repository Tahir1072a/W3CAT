import DataTable, { TableHeaders } from "./DataTable.tsx";

const headers: Array<TableHeaders> = [
  { field: "id", headerName: "ID" },
  { field: "name", headerName: "First Name" },
  { field: "lastName", headerName: "Last Name" },
  { field: "age", headerName: "Age" },
];

const rows = [
  { id: 0, name: "Tahir", lastName: "Fid", age: 12 },
  { id: 1, name: "Ayş", lastName: "Fid", age: 19 },
];

function App() {
  return <DataTable data={rows} headers={headers}></DataTable>;
}

export default App;
