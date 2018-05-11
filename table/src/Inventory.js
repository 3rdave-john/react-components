import React from "react";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";

import logo from "./logo.svg";

const Inventory = () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>PHOTO</TableHeaderColumn>
        <TableHeaderColumn>CODE</TableHeaderColumn>
        <TableHeaderColumn>NAME</TableHeaderColumn>
        <TableHeaderColumn>BARCODE</TableHeaderColumn>
        <TableHeaderColumn>AMOUNT</TableHeaderColumn>
        <TableHeaderColumn>AMOUNT IN STOCK</TableHeaderColumn>
        <TableHeaderColumn>NEEDS REPAIR</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>1</TableRowColumn>
        <div>
          <img src={logo} />
        </div>
        <TableRowColumn>SKATE-001</TableRowColumn>
        <TableRowColumn>SKATE</TableRowColumn>
        <TableRowColumn>11111111111</TableRowColumn>
        <TableRowColumn>4</TableRowColumn>
        <TableRowColumn>2</TableRowColumn>
        <TableRowColumn>2</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>2</TableRowColumn>
        <div>
          <img src={logo} />
        </div>
        <TableRowColumn>SURF-001</TableRowColumn>
        <TableRowColumn>SURF</TableRowColumn>
        <TableRowColumn>2222222222</TableRowColumn>
        <TableRowColumn>4</TableRowColumn>
        <TableRowColumn>10</TableRowColumn>
        <TableRowColumn>21</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>3</TableRowColumn>
        <div>
          <img src={logo} />
        </div>
        <TableRowColumn>CHAR-001</TableRowColumn>
        <TableRowColumn>CHAR</TableRowColumn>
        <TableRowColumn>33333333333</TableRowColumn>
        <TableRowColumn>15</TableRowColumn>
        <TableRowColumn>21</TableRowColumn>
        <TableRowColumn>6</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>4</TableRowColumn>
        <div>
          <img src={logo} />
        </div>
        <TableRowColumn>WHIP-001</TableRowColumn>
        <TableRowColumn>WHIP</TableRowColumn>
        <TableRowColumn>44444444444</TableRowColumn>
        <TableRowColumn>12</TableRowColumn>
        <TableRowColumn>4</TableRowColumn>
        <TableRowColumn>1</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>5</TableRowColumn>
        <div>
          <img src={logo} />
        </div>
        <TableRowColumn>SKI-001</TableRowColumn>
        <TableRowColumn>SKI</TableRowColumn>
        <TableRowColumn>5555555555</TableRowColumn>
        <TableRowColumn>6</TableRowColumn>
        <TableRowColumn>1</TableRowColumn>
        <TableRowColumn>40</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
);

export default Inventory;
