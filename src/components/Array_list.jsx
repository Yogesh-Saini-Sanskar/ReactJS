import ErrorMessage from "./ErrorMessage";

const Array_list = () => {
  let items = [1, "yash", 3, 4, 40, 5, 66, 2];
  // let items = [];

  return (
    <ul className="flex">
      {items.map((item) => (
        <>
          <ErrorMessage xyz={item} />
          <li className="mx-[160px]">{item}</li>
        </>
      ))}
    </ul>
  );
};
export default Array_list;
