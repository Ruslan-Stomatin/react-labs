import Layout from "@/components/Layout/Layout";
import LoginForm from "@/components/LoginForm/LoginForm";

type AuthHandler = (email: string, password: string) => Promise<void>;

type LoginPageProps = {
  onLogin: AuthHandler;
};

export default function LoginPage({ onLogin }: LoginPageProps) {
  return (
    <Layout>
      <LoginForm onLogin={onLogin} />
    </Layout>
  );
}
