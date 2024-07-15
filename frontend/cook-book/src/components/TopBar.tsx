import { useState } from "react";
import { SearchPanel } from "./SearchPanel";
import { Link } from "react-router-dom";
import { InputAdornment } from "@mui/material";
import styles from "./TopBar.module.css";
import logo from "../logo.png";
import TextField from "@mui/material/TextField";
import SearchIcon from '@mui/icons-material/Search';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

export function TopBar() {

  const [inputText, setInputText] = useState<string>("");
  let handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    //convert input text to lower case
    var lowerCase = e.currentTarget.value.toLowerCase();
    setInputText(lowerCase);
  };

  let handleFocusEvent = (e: React.FocusEvent<HTMLInputElement>) => {
    console.log('should show panel now')
  }

  return (
    <div className={styles.topBarContainer}>
      <div className={styles.topBar}>
        <div><Link className={styles.homeLink} to={'/'}><img src={logo} alt="Logo" className={styles.logo}/></Link></div>
        <div className={styles.searchContainer}>
          <TextField
            id="outlined-basic"
            InputProps={{
              className: styles.searchBox,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <ArrowCircleRightIcon/>
                </InputAdornment>
              ),
            }}
            onFocus={handleFocusEvent}
            onChange={handleInput}
            variant="outlined"
            fullWidth
            label="Szukaj przepisów, składników itp."
          />
          <div className={styles.searchPanel}>
            <SearchPanel input={inputText} />
          </div>
        </div>
      </div>
    </div>
  );
}