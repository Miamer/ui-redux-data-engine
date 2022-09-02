import React from "react";
import {
  FormGroup,
  FormControlLabel,
  Switch,
  TextField,
  Slider,
  Box,
} from "@mui/material";
import {  createTheme, styled, ThemeProvider } from '@mui/material/styles';
import dayjs, { Dayjs } from "dayjs";
import style from "./Form.module.scss";
import {
  addCity,
  addDateRef,
  addYears,
  addCminDay,
  addCmaxDay,
  addRangeForecastWeather,
  inputForm,
} from "../../features/inputForm/inputForm";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";


function valuetext(value: number) {
  return `${value}`;
}

const CssTextField = styled(TextField)({
  '& label': {
    color: '#fff',
  },
  '&:hover label': {
    color: '#1976d2',
  },
  '& .MuiInputBase-input':{
    color: '#fff'
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#fff',
    },
    '&:hover fieldset': {
      borderColor: '#1976d2',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#fff',
    },
  },
});

const color = "#fff";
  const theme = createTheme({
    components: {
      MuiIconButton: {
        styleOverrides: {
          sizeMedium: {
            color
          }
        }
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            color
            },
          },          
        },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color
          }
        }
      }
    }
  });

 

const Form: React.FC = () => {
  const dispatch = useAppDispatch();
  const dataInputForm = useAppSelector(inputForm);

  const handleChange0 = (newValue: Dayjs | null) => {
    dispatch(addDateRef(dayjs(newValue as Dayjs)));
  };

  const handleChange1 = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    dispatch(addYears(newValue as number[]));
  };

  const handleChange2 = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    dispatch(addRangeForecastWeather(newValue as number));
  };

  return (
    <div className={style.containerForm}>
      <ThemeProvider theme={theme}>
      <CssTextField    
        id="outlined-basic"
        name="city"
        label="City"
        variant="outlined"
        required
        value={dataInputForm.city}
        onChange={(e) => dispatch(addCity(e.target.value))} />
      
     
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
        // sx={{color: "#fff"}}
         label="Date de référence"
          inputFormat="MM/DD/YYYY"
          value={dataInputForm.dateRef}
          onChange={handleChange0}
          renderInput={(params) => <CssTextField {...params} />}
        />
      </LocalizationProvider>
      </ThemeProvider>
      <div className={style.blocYearsRange}>
        <div className={style.labelYear}>
          <span>2000</span>
          <span>2022</span>
        </div>
        <Box sx={{ width: "80%" }}>
          <Slider
            value={dataInputForm.years}
            onChange={handleChange1}
            step={1}
            marks
            min={2000}
            max={2022}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
          />
        </Box>
      </div>

      <div className={style.line}></div>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              defaultChecked
              color="warning"
              value={dataInputForm.CmaxDay}
              onChange={() => dispatch(addCmaxDay())}
            />
          }
          labelPlacement="start"
          label="C° max journalière"
        />
        <FormControlLabel
          control={
            <Switch
              defaultChecked
              value={dataInputForm.CminDay}
              onChange={() => dispatch(addCminDay())}
            />
          }
          labelPlacement="start"
          label="C° min journalière"
        />
      </FormGroup>

      <div className={style.line}></div>

      <div className={style.blocForecastWeather}>
        <p>Prévision en jours</p>
        <div className={style.labelForecastWeather}>
          <span>3 jours</span>
          <span>15 jours</span>
        </div>
        <Box sx={{ width: "80%" }}>
          <Slider
            getAriaLabel={() => "Number of day in Forecast weather"}
            defaultValue={5}
            value={dataInputForm.rangeForecastWeather}
            onChange={handleChange2}
            step={1}
            marks
            min={3}
            max={15}
            valueLabelDisplay="auto"
          />
        </Box>
      </div>
    </div>
  );
};

export default Form;
