export const PageTitle = (props) => {
  return (
    <>
      <h1
        style={{ color: "#3F5CA8", paddingLeft: "30px", paddingRight: "50px" }}
      >
        {props.pageTitle}
      </h1>
    </>
  );
};
