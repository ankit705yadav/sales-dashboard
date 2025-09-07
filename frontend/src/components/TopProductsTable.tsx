import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

interface TopProduct {
  id: number;
  name: string;
  popularity: number;
  sales: number;
}

const TopProductsTable = ({ products }: { products: TopProduct[] }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Top Products
        </Typography>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Popularity</TableCell>
                <TableCell>Sales</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product, index) => (
                <TableRow key={product.id}>
                  {/*<TableCell>{`0${product.id}`}</TableCell>*/}
                  <TableCell>{`0${index + 1}`}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <LinearProgress
                        variant="determinate"
                        value={product.popularity}
                        sx={{ width: "100px", mr: 1 }}
                      />
                      <Typography variant="body2">{`${product.popularity}%`}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ color: "success.main" }}>
                    {`${product.sales}%`}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default TopProductsTable;
