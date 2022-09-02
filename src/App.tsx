import React from "react";

import Form from "./component/Form/Form";
import CurveTemperatureByYear from "./component/CurveTemperatureByYear/CurveTemperatureByYear";
import BarTemperatureMinMax from "./component/BarTemperatureMinMax/BarTemperatureMinMax";
import ArrayOfForcastWeather from "./component/ArrayOfForcastWeather/ArrayOfForcastWeather";

import style from "./App.module.scss";

const App: React.FC = () => {
  return (
    <div className={style.App}>
      <Form />
      <div className={style.Dashboard}>
        <div className={style.Graphs}>
          <CurveTemperatureByYear/>
          
          <BarTemperatureMinMax/>
        </div>
        <ArrayOfForcastWeather/>
      </div>
    </div>
  );
};

export default App;
