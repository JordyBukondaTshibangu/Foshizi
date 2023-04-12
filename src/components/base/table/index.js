import { useState } from "react";
import { HRLine, TableRow } from "./Table";

const Table = ({ data }) => {
  const [surveys, setSurveys] = useState(1);
  return (
    <table style={{ color: "white" }}>
      <thead>
        <tr>
          <th style={{ width: "24%", textAlign: "left" }}>
            <h3>Name</h3>
          </th>
          <th style={{ width: "24%", textAlign: "left" }}>
            <h3>Email</h3>
          </th>
          <th style={{ width: "24%", textAlign: "left" }}>
            <h3>Location</h3>
          </th>
          <th style={{ width: "24%", textAlign: "left" }}>
            <h3>
              <select
                value={surveys}
                onChange={(e) => setSurveys(e.target.value)}
                style={{
                  border: "none",
                  width: "24%",
                  textAlign: "left",
                  outline: "none",
                  backgroundColor: "#343A3F",
                  color: "white",
                }}
              >
                <option key={1} value={1}>
                  SAB
                </option>
                <option key={2} value={2}>
                  NBEV Trader
                </option>
                <option key={3} value={3}>
                  NBEV Consumer
                </option>
              </select>
            </h3>
          </th>
          <th style={{ width: "24%", textAlign: "left" }}>
            <h3>Time</h3>
          </th>
        </tr>
        <HRLine />
      </thead>

      <tbody>
        {!data ? (
          <tr>
            <td>
              <p>No Data...</p>
            </td>
          </tr>
        ) : (
          data.map(({ firstname, lastname, responder_email, location, time, _id }) => (
            <TableRow
              key={_id}
              {...{ firstname, responder_email, location, time, lastname, names: responder_email }}
            />
          ))
        )}
      </tbody>
    </table>
  );
};

export default Table;
