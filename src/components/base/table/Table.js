import Link from "next/link";

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
  firstname ="Axole",
  lastname = "Maranjana",
  email = "axoile@mailcom",
  location = "Unknown",
  time = "00:00",
  link = "#",
}) => {
  return (
    <tr
      style={{
        fontWeight: "lighter",
        fontSize: "14px",
      }}
    >
      <td style={{ padding: "10px 0" }}>{firstname + " " + lastname}</td>
      <td style={{ padding: "10px 0" }}>{email}</td>
      <td style={{ padding: "10px 0" }}>{location}</td>
      <td style={{ padding: "10px 0" }}>
        <Link
          href={link}
          style={{ color: "#008FDF", textDecoration: "none", fontSize: "16px" }}
        >
          View Results
        </Link>
      </td>
      <td style={{ padding: "10px 0" }}>{time}</td>
    </tr>
  );
};
