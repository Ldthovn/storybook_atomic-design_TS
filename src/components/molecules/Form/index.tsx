import { useState } from "react";
import { Alert } from "../../atoms/Alert";
import { Button } from "../../atoms/Button/Button";
import { Input } from "../../atoms/Input";
import "./style.css";

export const Form = ({ ...props }) => {
  const [username, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const setNoneALert = () => {
    const alert = document.getElementsByClassName(
      "alert"
    )[0] as HTMLElement | null;
    if (alert != null) {
      alert.style.display = "none";
    }
  };

  const renderResults = (
    <>
      <span>username: {username ? username : "null"}, </span>
      <span>phone: {phone ? phone : "null"}, </span>
      <span>email: abc@gmail.com</span>
      <span>, address: {address ? address : "null"}</span>
    </>
  );

  const onFinish = () => {
    const alert = document.getElementsByClassName(
      "alert"
    )[0] as HTMLElement | null;
    if (alert != null) {
      alert.style.display = "block";
      setTimeout(setNoneALert, 1500);
    }
  };

  return (
    <form className="Form">
      <div className="Form-content">
        <Input
          name="username"
          placeholderProp="Username"
          valueProp={username}
          onChangeProp={(el: any) => {
            setUserName(el.target.value);
          }}
        />
        <Input
          name="email"
          placeholderProp="Email"
          disabledProp
          valueProp="abc@gmail.com"
        />
        <Input
          name="phone"
          placeholderProp="Number phone"
          valueProp={phone}
          onChangeProp={(el: any) => {
            setPhone(el.target.value);
          }}
        />
        <Input
          name="address"
          placeholderProp="Address"
          valueProp={address}
          onChangeProp={(el: any) => {
            setAddress(el.target.value);
          }}
        />
      </div>
      <Button
        type="button"
        typeColor="success"
        label="Submit"
        onClick={onFinish}
      />
      <div className="alert">
        <Alert type="success" message={renderResults} />
      </div>
    </form>
  );
};
