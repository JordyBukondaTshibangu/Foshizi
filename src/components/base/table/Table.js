import Link from "next/link";
import { useEffect, useState } from "react";

export const HRLine = () => {
  return (
    <tr>
      <td>
        <hr style={{ borderColor: "#FFFFFF0D" }} />
      </td>
      <td>
        <hr style={{ borderColor: "#FFFFFF0D" }} />
      </td>
      <td>
        <hr style={{ borderColor: "#FFFFFF0D" }} />
      </td>
      <td>
        <hr style={{ borderColor: "#FFFFFF0D" }} />
      </td>
      <td>
        <hr style={{ borderColor: "#FFFFFF0D" }} />
      </td>
    </tr>
  );
};

export const TableRow = ({
  names = "Placeholding@foshizi.co.za",
  firstname = "Axole",
  lastname = "Maranjana",
  responder_email = "axoile@mailcom",
  location = "Unknown",
  time = "00:00",
  link = "#",
}) => {
  const [loc, setLoc] = useState("loading...")

  useEffect(() => {
    const getLocationName = async (location) => {
      const [latitude, longitude] = location.substring(1, location.length - 1).split(",");

      const apiKey = process.env.LOCATION_API_KEY || "3dcf9e77cd9d4b56a81f0e33778489e0";

      try {
        const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`);
        const data = await response.json();
        setLoc(data.results[0].components.state);
      } catch (error) {
        setLoc(location);
      }
    };

    return () => {
      getLocationName(location)
    }
  }, [])

  return (
    <tr
      style={{
        fontWeight: "lighter",
        fontSize: "14px",
      }}
    >
      <td style={{ padding: "10px 0" }}>{names.split("@")[0] /*firstname + " " + lastname*/}</td>
      <td style={{ padding: "10px 0" }}>{responder_email}</td>
      <td style={{ padding: "10px 0" }}>{loc}</td>
      <td style={{ padding: "10px 0" }}>
        <p style={{ color: "blue", cursor: "pointer" }} onClick={() => { }}> View Results</p>
        {/* <Link
          href={link}
          style={{ color: "#008FDF", textDecoration: "none", fontSize: "16px" }}
        >
          View Results
        </Link> */}
      </td>
      <td style={{ padding: "10px 0" }}>{time}</td>
    </tr>
  );
};
