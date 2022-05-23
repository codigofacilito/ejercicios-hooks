import useAnalyticsTracker from "../../hooks/useAnalyticsTracker";
import useJsonPlaceholderFetch from "../../hooks/useJsonPlaceholderFetch";

const AnalyticsPageTwo = () => {  
  const todos = useJsonPlaceholderFetch("/todos");
  useAnalyticsTracker('AnalyticsPageTwo');

  return (
    <div>
      <h1>Analytics Page Two</h1>
      {todos.map(post => (
       <div key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
       </div>
      ))}
    </div>
  );
};

export default AnalyticsPageTwo;