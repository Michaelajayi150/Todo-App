import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./styles/useDarkMode";
import { darkTheme, GlobalStyles, lightTheme } from "./styles/theme";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";

function App() {
  const [theme, toggleTheme] = useDarkMode();

  const themeMode = theme === "dark" ? darkTheme : lightTheme;
  const defaultTasks = [
    {
      text: "Complete online JavaScript course",
      checked: true,
      id: 1,
    },
    {
      text: "Jog around the park 3x",
      checked: false,
      id: 2,
    },
    {
      text: "10 minutes meditation",
      checked: false,
      id: 3,
    },
    {
      text: "Read for 1 hour",
      checked: false,
      id: 4,
    },
    {
      text: "Pick up groceries",
      checked: false,
      id: 5,
    },
    {
      text: "Complete Todo app on Frontend Mentor",
      checked: false,
      id: 6,
    },
  ];

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Main defaultTasks={defaultTasks} />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
