
import useAnalyticsTracker from "../../hooks/useAnalyticsTracker";
import useJsonPlaceholderFetch from "../../hooks/useJsonPlaceholderFetch";

const AnalyticsPageOne = () => {
  const posts = useJsonPlaceholderFetch("/posts");

  useAnalyticsTracker('AnalyticsPageOne');


  return (
    <div>
      <h1>Analytics Page One</h1>
      {posts.map(post => (
       <div key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
       </div>
      ))}
    </div>
  );
};

export default AnalyticsPageOne;