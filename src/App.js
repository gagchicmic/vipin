import Form from "./Form";
const App = () => {
  const loginFields = [
    { email: { type: "email" } },
    { password: { type: "password" } },
  ];
  return <Form fields={loginFields} />;
};
export default App;
