const ErrorMessage = ({xyz}) => {
//   let { xyz } = props;
  console.log(xyz);
  return <div>{xyz.length === 0 && <h3>Empty data</h3>}</div>;
};

export default ErrorMessage;
