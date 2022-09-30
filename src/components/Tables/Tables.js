import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css';
import data from '../../users.json';

const ImageCell = ({ rowData, dataKey, ...rest }) => (
  <Cell {...rest}>
    <img src={rowData[dataKey]} width="50"/>
  </Cell>
);

export default function Tables() {
  return (
    <Table data={data}>
      <Column width={100} sortable fixed resizable>
        <HeaderCell>ID</HeaderCell>
        <Cell dataKey="id" />
      </Column>

      <Column width={100} sortable resizable>
        <HeaderCell>first_name</HeaderCell>
        <Cell dataKey='first_name'></Cell>
      </Column>

      <Column width={100} sortable resizable>
        <HeaderCell>last_name</HeaderCell>
        <Cell dataKey='last_name'></Cell>
      </Column>

      <Column width={100} sortable resizable>
        <HeaderCell>email</HeaderCell>
        <Cell>
          {(rowData) => {
            return <a href={`mailto:${rowData.email}`}>{rowData.email}</a>;
          }}
        </Cell>
      </Column>
    
      <Column width={100} sortable resizable>
        <HeaderCell>ip adress</HeaderCell>
        <Cell dataKey='ip_address'></Cell>
      </Column>

      <Column width={100} resizable>
        <HeaderCell>image</HeaderCell>
        <ImageCell dataKey="image" />
      </Column>
    
    </Table>
  );
}