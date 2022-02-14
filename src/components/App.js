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
export const esercizioSelezionato={id:'Benvenuto',muscoli:'seleziona esercizio'}

class App extends Component {
	state={esercizi,esercizioSelezionato}
	getEserciziPerGruppo = () => {
		return Object.entries(
    this.state.esercizi.reduce((esercizi,esercizio) => {
			const {muscoli} = esercizio;
			esercizi[muscoli]=esercizi[muscoli] ? [...esercizi[muscoli],esercizio] : [esercizio]
			return esercizi;
		},{}));
	}
  onEsecizioSelect = id => {console.log(id);
    if (id===undefined){return;}
    this.setState( (prevState)=> ({
      esercizioSelezionato: prevState.esercizi.find(ex => ex.id===id)
    }));
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
                      <ListItem button key={id}>
                        <ListItemText onClick={() => this.onEsecizioSelect(id)}>{id}</ListItemText>
                      </ListItem>
                    ))}
                  </List>
                </Fragment>
              )}
          </Paper>
        </Grid>
        <Grid item xs={5} >
          <Paper elevation={1} style={style.Paper}>
            <Typography variant="h5">{this.state.esercizioSelezionato.id}</Typography>
            <Typography variant="subtitle1">{this.state.esercizioSelezionato.muscoli}</Typography>
          </Paper>
        </Grid>
      </Grid>

      <Footer muscoli={muscoli}></Footer>
    </div>
  );}
}

export default App;
