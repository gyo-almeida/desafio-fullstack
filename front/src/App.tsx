import { AuthProvider } from "./providers/AuthProvider";
import { RegisterProvider } from "./providers/RegisterProvider";
import { RoutesMain } from "./routes";
import GlobalStyle from "./styles/GlobalStyle";

export function App() {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <RegisterProvider>
          <RoutesMain />
        </RegisterProvider>
      </AuthProvider>
    </>
  );
}
