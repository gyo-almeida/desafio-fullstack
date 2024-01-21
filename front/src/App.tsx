import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./providers/AuthProvider";
import { RegisterProvider } from "./providers/RegisterProvider";
import { RoutesMain } from "./routes";
import GlobalStyle from "./styles/GlobalStyle";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Toaster />
      <AuthProvider>
        <RegisterProvider>
          <RoutesMain />
        </RegisterProvider>
      </AuthProvider>
    </>
  );
}
