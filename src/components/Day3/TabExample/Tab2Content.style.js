const container = {
    display: "flex",
    border: "1px solid #aaa",
    width: "80%",
    margin: "0 auto",
    borderRadius: "10px",
    overflow: "hidden",
};
const tab = {
    display: "flex",
    flexDirection: "column",
    border: "1px solid #ccc",
    backgroundColor: "#f1f1f1",
    width: "100px",
    flex: "0 1 100px",
};
const tabContent = {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: "0 0 auto",
    padding: "0 0 0 24px",
};
const tabBtn = {
    padding: "20px 12px",
    border: "none",
    outline: "none",
    textAlign: "left",
    cursor: "pointer",
    fontSize: "17px",
};

export { tab, tabContent, tabBtn, container };
