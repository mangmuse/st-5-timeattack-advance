import QueryProvider from "./query/QueryProvider";
import Router from "./shared/Router";

function App() {
  return (
    <QueryProvider>
      <Router />
    </QueryProvider>
  );
}

export default App;
