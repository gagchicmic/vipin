const Form = ({ fields }) => {
  const fieldArr = Object.keys(fields).map((keyid) => {
    return (
      <>
        <label forName={fields[keyid]}>{fields[keyid]} :</label>
        <input type="text" id={fields[keyid]} name={fields[keyid]} value="" />
      </>
    );
  });
  return fieldArr;
};

export default Form;
