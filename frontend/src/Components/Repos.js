import react from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Toolbar } from '@mui/material';
function createData(name, description, link) {
    return { name, description, link};
  }
  
  const rows = [
    createData('Python-Troll-Game', 'Graphic game where the goal is to place one troll per row/column/diagonal, with choosable board size. Also includes an algorithm that solves the game automatically.', 'https://github.com/ostromb/Python-Troll-Game'),
    createData('Java-3dimensional-distances','Takes n number of 3 dimensional coordinates as input and calculates the total distance traveled as output.','Takes n number of 3 dimensional coordinates as input and calculates the total distance traveled as output.'),
    createData('DD1368LAB3','Moviestreaming Database with GUI','https://github.com/ostromb/DD1368LAB3'),
    createData('java-Nextnumber','finds the next number in a number pattern of form: a(n+1)=a(n)*b+c, if not possible returns "no".','https://github.com/ostromb/java-Nextnumber'),
    createData('Java-Temperature','Compares tables of temperature statistics from different cities and sorts for given time period. First input line is the number of time periods followed by the number of cities. Thereafter follows each timeperiod and then each city and temperatures for given periods. Last input line is the chosen timeperiod.','Compares tables of temperature statistics from different cities and sorts for given time period. First input line is the number of time periods followed by the number of cities. Thereafter follows each timeperiod and then each city and temperatures for given periods. Last input line is the chosen timeperiod.'),
    createData('ADK','Advanced and Basic Heuristic that solves the role-casting problem. Role-casting problem: Given a r number of roles each actor can play, s number of scenes and k number of actors,two of which are diva actors; find a suitable solution so that no actor has more than one role in every scene, the two diva actors never share a secene together, and solve this with as few actors as possible. If no possible placement, we have k+n superactors, that can play any role, but adds cost of k+n to amount of actors (we want to use as few as possible superactors, since having only one superactor is worse than placing out ALL actors.','https://github.com/ostromb/ADK'),
    createData('ScaniaChallenge1','1_2_3_4_5, use the operations: +,-,x,/ once each in the _, what is the biggest possible value?','https://github.com/ostromb/ScaniaChallenge1'),
    
];
function Repos() {
    return (
        <div>
            <Toolbar variant="dense" >
                <a href="/"><Button >Home</Button></a>
                <a href="/Repositories"><Button>Repositories</Button></a>
                <a href="/About"><Button>About me</Button></a>
            </Toolbar>
            <a> Repos</a>
            <TableContainer component={Paper}>
        <Table style={{backgroundColor: "lightyellow"}} sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell align="center">Link to Repository</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center" component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.description}</TableCell>
                <TableCell align="center">
                  <Link href={row.link}> Github </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        </div>
    )
}
export default Repos;