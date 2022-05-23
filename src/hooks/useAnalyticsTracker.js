import { useEffect } from "react";

const useAnalyticsTracker = (pageName) => {
    useEffect(() => {
        logAnalytics(pageName);
    }, []);
     
    const logAnalytics = (pageName) => {
        console.log("=== Analytics start ===");
        console.log(pageName);
        console.log("=== Analytics end ====");
    }; 
};

export default useAnalyticsTracker;