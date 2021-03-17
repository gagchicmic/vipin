import Form from "./Form";
const App = () => {
  const loginFields = [
    { email: { type: "email" } },
    { passwords: { type: "password" } },
  ];
  return <Form fields={loginFields} />;
};
export default App;
