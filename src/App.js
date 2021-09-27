//import logo from './logo.svg';
import './App.css';
import { makeStyles } from "@material-ui/styles";
import styles from "./styles"
import Rewards from './containers/Rewards';


const useStyles = makeStyles(styles);
function App() {
    const classes = useStyles();
  return (
    <div className="App">
    
     <Rewards classes={classes} />
    </div>
  );
}

export default App;
