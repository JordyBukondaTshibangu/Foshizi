import { ProgressbarContainer } from "./ProgressBarElement";

const ProgressBar = ({ bgcolor = "blue", progress, text, id }) => {
  const style = {
    text: {
      padding: "10px",
      color: "#fff",
      fontSize: "12px",
      fontWeight: "bold",
    },
  };
  return (
    <ProgressbarContainer>
      <CurrentProgress width={progress} />
      <div
        style={{
          textAlign: "left",
          display: "flex",
          alignItems: "center",
          position: "absolute",
          top: "15%",
        }}
      >
        <span style={style.text}>{`${id}`}</span>
        <span style={style.text}>{`${progress}%`}</span>
        <span
          style={{
            ...style.text,
          }}
        >{`${text}`}</span>
      </div>
    </ProgressbarContainer>
  );
};

export default ProgressBar;
