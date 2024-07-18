import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
} from "@mui/material";

export interface TableHeaders {
  field: string;
  headerName: string;
  width?: number;
}

export interface DataTableProps {
  headers: Array<TableHeaders>;
  data: Array<object>;
}

export default function DataTable({ data, headers }: DataTableProps) {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {headers.map((column, index) => (
              <TableCell key={index}>{column.headerName}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            {headers.map((row, index) => (
              <TableCell key={index}></TableCell>
            ))}
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableCell>Footer</TableCell>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
