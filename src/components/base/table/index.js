import { HRLine, TableRow } from "./Table";

const Table = ({ data }) => {
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
                style={{
                  border: "none",
                  width: "24%",
                  textAlign: "left",
                  outline: "none",
                  backgroundColor: "#343A3F",
                  color: "white",
                }}
              >
                <option>SAB</option>
                <option>NBEV Trader</option>
                <option>NBEV Consumer</option>
              </select>
            </h3>
          </th>
          <th style={{ width: "24%", textAlign: "left" }}>
            <h3>Time</h3>
          </th>
        </tr>
      </thead>
      <HRLine />
      <tbody>
        {!data ? (
          <p>No Data...</p>
        ) : (
          data.map(({ firstname, lastname, email, location, time, _id }) => (
            <TableRow
              key={_id}
              {...{ firstname, email, location, time, lastname }}
            />
          ))
        )}
        {/* <TableRow
          name="Sara Johan"
          email="sarajohan@gmail.com"
          location="Limpopo"
          time="7:15"
        />
        <TableRow
          name="Sara Johan"
          email="sarajohan@gmail.com"
          location="Gauteng"
          time="7:15"
        />
        <TableRow
          name="Sara Johan"
          email="sarajohan@gmail.com"
          location="Cape Town"
          time="7:15"
        /> */}
      </tbody>
    </table>
  );
};

export default Table;
