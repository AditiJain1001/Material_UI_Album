import './App.css'
import {Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button, Box } from '@mui/material'
import {PhotoCamera} from '@mui/icons-material'
import CopyrightRoundedIcon from '@mui/icons-material/CopyrightRounded';
 
//makeStyles is legacy code
import { styled } from '@mui/material/styles';

// const useStyles = styled( () => ())
const cards = [ 1, 2, 3, 4, 5, 6, 7, 8, 9]

function App() {




  return (
    <>
        <CssBaseline/>

        <AppBar position="sticky" color="primary" >
        <Toolbar>
          <PhotoCamera style={{ marginLeft: 20, marginRight: 20}}/>
          <Typography variant="h6" >Stunning Landscapes</Typography>
        </Toolbar>
        </AppBar> 
        <main>
          <Container maxWidth="sm">
            <Typography variant='h2' align="center" color="testPrimary" gutterBottom style={{ marginTop: 50}}>Photo Album</Typography>
            <Typography variant='h6' align="center" color="testSecondary" paragraph>Explore the beauty of nature through our curated collection of breathtaking landscape photographs.</Typography>
            <div>
              {/* style is sx in WU */}
              <Grid container spacing={2} justifyContent="center" style={{ marginBottom: 50 }}>
                <Grid  item>
                  <Button variant="contained" color="primary">My Photos</Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">Secondary</Button>
                </Grid>

              </Grid>
            </div>
          </Container>
          {/* maybe div tag ending here */}
          <Container maxWidth="md">
            <Grid container spacing={4}>
              {cards.map( (card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia 
                  // Images doen't appear unles they have height!
                  style={{ height: 140 }}
                  image={`https://source.unsplash.com/random?sig=${card}`} />
                  <CardContent>
                  <Typography gutterBottom variant="h5"> Heading</Typography>
                  <Typography>This is a media card. long description</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">View</Button>
                    <Button size="small" color="primary">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>))}
              
            </Grid>

          </Container>
        </main>
        <footer>
      <AppBar position="relative" color="primary" style={{marginTop: 50}}>
        <Toolbar>
          <Box width="100%" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <Typography variant="h6" color="inherit" align="center">
             Capturing Nature's Wonders
            </Typography>
            <Box display="flex" alignItems="center" justifyContent="center">
              
              {/* ICON POSITION SUCKS - FIX :( */}
              <CopyrightRoundedIcon fontSize="small"/>
              <Typography variant="caption" color="inherit" align="center" gutterBottom>
                &nbsp;{new Date().getFullYear()} Photography
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </footer>
    </>
  )
}

export default App
