import FormInputs from "../FormInputs/FormInputs";
import infoIcon from "../../assets/icon-info.svg";

const Form = () => {
  return (
    <form>
      {/* <div className="avatar">
          <label htmlFor="upload">Upload Avatar</label>
          <input type="file" name="Image" id="upload" />
          <p>
            <img src={infoIcon} alt="Info icon" /> Upload your photo (JPG or PNG,
            max size: 500KB).
          </p>
      </div> */}
      <FormInputs
        classname="avatar"
        label="upload"
        labelInput="Upload Avatar"
        type="file"
        inputName="Image"
        upload
        errorMessage={
          <p>
            <img src={infoIcon} alt="info icon" /> File too large, please upload
            a photo under 500kb.
          </p>
        }
      />

      <FormInputs
        classname="name"
        label="name"
        labelInput="Full Name"
        type="text"
      />

      <FormInputs
        classname="email"
        label="email"
        labelInput="Email Address"
        type="email"
        errorMessage={
          <p>
            <img src={infoIcon} alt="info icon" /> Please enter a valid email
            address.
          </p>
        }
        placeHolder="example@email.com"
      />

      <FormInputs
        classname="github"
        label="github"
        labelInput="GitHub UserName"
        type="text"
        placeHolder="@yourusername"
      />
    </form>
  );
};

export default Form;
