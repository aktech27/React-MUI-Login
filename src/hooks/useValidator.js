// This hook returns a function based on the validation type.
//Every function returns an array [bool, String]

const useValidator = (validationType) => {
  switch (validationType?.toLowerCase()) {
    case "email":
      return (email) => {
        if (!email) return [false, "Email is mandatory"];
        else if (!/@/.test(email)) return [false, "Missing an @"];
        else if (/@$/.test(email)) return [false, "Missing the domain part"];
        else if (!/\./.test(email)) return [false, "Missing the subdomain part"];
        else if (
          !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
        )
          return [false, "Invalid Email"];
        else return [true, "Valid Email"];
      };
    case "loginpassword":
      return (loginpassword) => {
        if (!loginpassword) return [false, "Password is mandatory"];
        else return [true, ""];
      };
    case "password":
      return (password) => {
        if (!password) return [false, "Password is mandatory"];
        else if (password.length < 8) return [false, "Minimum of 8 characters is recommended"];
        else return [true, ""];
      };
    case "confirmpassword":
      return (password, confirmpassword) => {
        if (!confirmpassword) return [false, "Confirm Password is mandatory"];
        else if (password !== confirmpassword) return [false, "Passwords do not match"];
        else return [true, ""];
      };
    case "phone":
      return (phone) => {
        if (!phone) return [false, "Phone number is mandatory"];
        else if (/[a-zA-Z]/.test(phone)) return [false, "Words are not allowed"];
        else if (/[^0-9]/.test(phone)) return [false, "Special Characters are not allowed"];
        else if (phone.length < 8 || phone.length > 10) return [false, "Invalid phone number"];
        else return [true, ""];
      };
    case "name":
      return (name) => {
        if (!name) return [false, "Name is mandatory"];
        else if (/\d/.test(name)) return [false, "Numbers are not allowed"];
        else if (/[^a-zA-Z\s]/.test(name)) return [false, "Special Characters are not allowed"];
        else return [true, ""];
      };
    default:
      return () => {
        return [true, ""];
      };
  }
};

export default useValidator;
