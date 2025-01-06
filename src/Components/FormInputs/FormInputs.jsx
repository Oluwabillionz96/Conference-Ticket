import infoIcon from "../../assets/icon-info.svg";

const FormInputs = ({
  classname,
  label,
  labelInput,
  type,
  inputName,
  errorMessage,
  upload,
  placeHolder,
  msg = upload && (
    <p>
      <img src={infoIcon} alt="Info icon" /> Upload your photo (JPG or PNG, max
      size: 500KB).
    </p>
  ),
}) => {
  return (
    <div className={classname}>
      <label htmlFor={label}>
        <p>{labelInput}</p>
      </label>
      <input
        type={type}
        name={inputName}
        id={label}
        placeholder={placeHolder}
      />
      {msg}
      <p className="error">{errorMessage}</p>
    </div>
  );
};

export default FormInputs;
