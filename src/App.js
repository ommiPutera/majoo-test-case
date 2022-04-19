import React from "react";
import Layout from "./components/layout";
import TodoApp from "./pages/TodoApp";

function App() {
  return (
    <React.Fragment>
      <Layout>
        <TodoApp />
      </Layout>
    </React.Fragment>
  );
}

export default App;
