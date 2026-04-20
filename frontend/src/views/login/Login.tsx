type LoginProps = {
  flow: string;
};

const Login = (props: LoginProps) => {
  const { flow } = props;
  return <div>{flow}</div>;
};

export default Login;
