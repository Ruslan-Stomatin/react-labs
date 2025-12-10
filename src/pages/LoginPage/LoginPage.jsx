import Layout from "@/components/Layout/Layout";
import LoginForm from "@/components/LoginForm/LoginForm";

function LoginPage({ onLogin, onRegister }) {
  return (
    <Layout>
        <LoginForm onLogin={onLogin} onRegister={onRegister} />
    </Layout>
  );
}

export default LoginPage;
