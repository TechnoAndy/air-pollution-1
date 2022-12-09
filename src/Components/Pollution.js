import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { airpollution } from "../Redux/Reducers/Pollution";
import "../App";

const Time = (element) => {
  const date = new Date(element.props * 1000);
  return `${date.toLocaleDateString()}\n${date.toLocaleTimeString()}`;
};

const Pollution = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const info = location.state;
  useEffect(() => {
    dispatch(airpollution(info));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
  const pollutionData = useSelector((state) => state.pollutionReducer);

  return (
    <div className="tablePollution">
      <table>
        <div className="table-border">
          <thead className="table-Heading">
            <tr>
              <th>(AQI)</th>
              <th>(CO)</th>
              <th>(NO)</th>
              <th>(NO2)</th>
              <th>(O3)</th>
              <th>(SO2)</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody className="tabletextColor">
            {pollutionData?.map((element) => (
              <tr key={uuidv4()}>
                <td className="pollution-data">{element.main.aqi}</td>
                <td className="pollution-data">{element.components.co}</td>
                <td className="pollution-data">{element.components.no}</td>
                <td className="pollution-data">{element.components.no2}</td>
                <td className="pollution-data">{element.components.o3}</td>
                <td className="pollution-data">{element.components.so2}</td>
                <td className="pollution-data">
                  <Time props={element.dt} />
                </td>
              </tr>
            ))}
          </tbody>
        </div>
      </table>
      {pollutionData.length === 0 && (
        <div className="tabletextColor">
          Data for this city is currently unavailable
        </div>
      )}
    </div>
  );
};

export default Pollution;
