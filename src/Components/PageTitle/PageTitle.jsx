export const PageTitle = (props) => {
  return (
    <>
      <h1
        style={{ color: "#3F5CA8", paddingLeft: "50px", paddingRight: "50px" }}
      >
        {props.pageTitle}
      </h1>
    </>
  );
};
