import { Grid, List, ListItem, ListItemText, Paper, Typography } from "@material-ui/core";
import { Component, Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";

const style={
  Paper: {padding:10,margin:10}
}
export const muscoli = ['spalle','addominali','gambe'];
export const esercizi = [
  {id:'flessioni', muscoli:'spalle'},
  {id:'pesi', muscoli:'spalle'},
  {id:'piegamenti', muscoli:'addominali'},
  {id:'pushp', muscoli:'addominali'},
  {id:'corsa', muscoli:'gambe'},
];

class App extends Component {
	state={esercizi}
	getEserciziPerGruppo = () => {
		return Object.entries(
    this.state.esercizi.reduce((esercizi,esercizio) => {
			const {muscoli} = esercizio;
			esercizi[muscoli]=esercizi[muscoli] ? [...esercizi[muscoli],esercizio] : [esercizio]
			return esercizi;
		},{}));
	}
  render(){return (
    <div className="App" >
      <Header></Header>
      <Grid container spacing={10} >
        <Grid item xs={5}  >
          <Paper elevation={1} style={style.Paper}>
              {this.state.esercizi.map (({id,muscoli}) =>
                <Fragment>
                  <Typography variant="h4">{muscoli}</Typography>
                  <List component="nav">
                    {esercizi.map(({id,muscoli}) => (
                      <ListItem button><ListItemText>{id}</ListItemText></ListItem>
                    ))}
                  </List>
                </Fragment>
              )}
          </Paper>
        </Grid>
        <Grid item xs={5} >
          <Paper elevation={1} style={style.Paper}>
              Card dx</Paper>
        </Grid>
      </Grid>

      <Footer muscoli={muscoli}></Footer>
    </div>
  );}
}

export default App;
