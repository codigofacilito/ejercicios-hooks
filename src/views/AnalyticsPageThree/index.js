import useAnalyticsTracker from "../../hooks/useAnalyticsTracker";
import useJsonPlaceholderFetch from "../../hooks/useJsonPlaceholderFetch";

const AnalyticsPageThree = () => {
  const albums = useJsonPlaceholderFetch("/albums");

  useAnalyticsTracker('AnalyticsPageThree');

  return (
    <div>
      <h1>Analytics Page Three</h1>
      {albums.map(post => (
       <div key={post.id}>
        <h2>{post.title}</h2>
       </div>
      ))}
    </div>
  );
};

export default AnalyticsPageThree;