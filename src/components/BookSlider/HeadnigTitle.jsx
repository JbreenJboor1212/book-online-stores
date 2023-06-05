


const HeadingTitle = ({ title }) => {
  return (
    <div style={divStyle}>
      <h2 style={h2Styles}>{title}</h2>
    </div>
  );
};


/* ----- بدل ما نعمل سسس خارجي لانو بسيط عملناه هي ك ---------------*/
const divStyle = {
  padding : "10px 30px",
  backgroundColor : "#fff"
}

const h2Styles = {
  color :"#1926d2",
  fontSize : "30px",
  fontWeight : "500",
  borderBottom : "2px solid",
  width : "max-content",
  paddingBottom : "5px",
}

export default HeadingTitle;
