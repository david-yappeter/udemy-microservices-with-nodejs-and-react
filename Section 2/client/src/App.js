import PostCreate from "./PostCreate";
import PostList from "./PostList";

const App = () => {
  return (
    <div className="container">
      <h1 className="display-4">Create Post</h1>
      <PostCreate />
      <PostList />
    </div>
  );
};

export default App;
