const ProgressBar = ({ bgcolor = "blue", progress, text, id }) => {
  const style = {
    text: {
      padding: "10px",
      color: "#fff",
      fontWeight: "200",
      fontSize: "12px",
    },
  };
  return (
    <div
      style={{
        height: "44px",
        width: "100%",
        backgroundColor: "#3a434c",
        borderRadius: "4px",
        borderColor: "rgba(0; 0; 0; 0.2)",
        margin: " 15px 0",
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${progress}%`,
          backgroundColor: bgcolor,
          borderRadius: "4px",
          textAlign: "left",
          display: "flex",
          alignItems: "center",
        }}
      >
        <span style={style.text}>{`${id}`}</span>
        <span style={style.text}>{`${progress}%`}</span>
        <span
          style={{
            ...style.text,
            width: "50%",
          }}
        >{`${text}`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
