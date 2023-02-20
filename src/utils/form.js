export const inputHandler = (event, setData) => {
  const { name, value } = event.target;
  setData((previousState) => ({
    ...previousState,
    [name]: value,
  }));
};

export const isEmail = email => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
export const isPassword = password => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password)
export const isUserName = userName => /^[A-Za-z]+$/.test(userName)
export const isDesignation = designation =>/^[A-Za-z]+$/.test(designation)
export const isEmployeeId = employeeId =>/^[0-9]+$/.test(employeeId)

export const ErrorText = ({ children }) => <div className="ErrorText">
  {children}
</div>
