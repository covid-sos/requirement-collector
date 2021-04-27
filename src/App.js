import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import React from "react";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  row: {
    display: "flex",
    flexFlow: "row nowrap",
    margin: "8px auto",
    padding: "16px",
    maxWidth: "650px",
    "&>div": {
      flex: 1,
    },
    "&>h4": {
      flex: 1,
    },
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const FormLinks = [
  {
    city: "DELHI",
    link: "https://forms.gle/bYRA7CW552H7iUXVA",
  },
  {
    city: "Mumbai/Thane/Navi Mumbai",
    link: "https://forms.gle/6ghtCFk1nVpWDKt48",
  },
  {
    city: "Kanpur",
    link: "https://forms.gle/WYK5spnyAQ5rPjAw9",
  },
];

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <header className="App-header">
        <h2>Covid SOS</h2>
        <p>
          In need any sort of covid resources viz Remdesivir, Medicines, Oxygen
          cylinders, Hospital Beds, etc? <br />
          <br />
          Just fill in your & patient details and we will forward your details
          to relevant individuals or people who can help you. <br />
          <br />
          This is purely out of empathy for humankind, so don't use this to pull
          pranks or fool people. <br />
          <br />
          Submit only if you are comfortable sharing your details or are in need
          of the resouces. <br />
          <br />
          <i>
            <b>Note</b>: We only guarantee to get you in touch with parties
            possessing the resources. We are in no way part of the transactions
            and negotiations
          </i>
        </p>
      </header>
      <body>
        <Paper className={classes.row}>
          <h4>Cities</h4>
        </Paper>
        {FormLinks.map((data, index) => {
          return (
            <Paper className={classes.row} key={index}>
              <div>
                <a href={data.link} rel="noreferrer" target="_blank">
                  {data.city}
                </a>
              </div>
            </Paper>
          );
        })}
      </body>
    </div>
  );
}

export default App;
