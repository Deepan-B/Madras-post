import { useState, useEffect } from "react";
import { HashLoader } from "react-spinners";
import { toast } from "react-toastify";
import { BASE_URL } from "../../config";

const News = () => {
  const [loading, setLoading] = useState(true);
  const [newsTypes, setNewsTypes] = useState({
    "General News": [],
    Tenders: [],
    Notifications: [],
    Recruitment: [],
  });

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(`${BASE_URL}/news/view-news`, {
          method: "get",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const result = await res.json();

        if (!res.ok) {
          throw new Error(result.message);
        }

        const fetchedNews = result.data;

        const updatedNewsTypes = {
          "General News": [],
          Tenders: [],
          Notifications: [],
          Recruitment: [],
        };

        fetchedNews.forEach((news) => {
          if (updatedNewsTypes[news.news_type]) {
            updatedNewsTypes[news.news_type].push(news);
          }
        });

        setNewsTypes(updatedNewsTypes);
        toast.success(result.message);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return loading ? (
    <HashLoader size={50} color={"#36d7b7"} loading={loading} />
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 m-4">
      <div className="border-4 p-2 border-blue-400">
        <h2 className="border-2 max-h-40 overflow-auto p-1 border-blue-300">
          General News
        </h2>
        {newsTypes["General News"].map((news) => (
          <div key={news.news_id} className="flex items-baseline">
            <p className="text-red-800 text-xl font-semibold">*</p>
            <a
              href={news.news_link}
              target="_blank"
              className="hover:underline"
            >
              {news.news_info}
            </a>
          </div>
        ))}
      </div>
      <div className="border-4 p-2 border-blue-400">
        <h2 className="border-2 p-1 max-h-40 overflow-auto border-blue-300">
          Tenders
        </h2>
        {newsTypes.Tenders.map((tender) => (
          <div key={tender.news_id} className="flex items-baseline">
            <p className="text-red-800 text-xl font-semibold">*</p>
            <a
              href={tender.news_link}
              target="_blank"
              className="hover:underline"
            >
              {tender.news_info}
            </a>
          </div>
        ))}
      </div>
      <div className="border-4 p-2 border-blue-400">
        <h2 className="border-2 p-1 max-h-40 overflow-auto border-blue-300">
          Notifications
        </h2>
        {newsTypes.Notifications.map((notification) => (
          <div key={notification.news_id} className="flex items-baseline">
            <p className="text-red-800 text-xl font-semibold">*</p>
            <a
              href={notification.news_link}
              target="_blank"
              className="hover:underline"
            >
              {notification.news_info}
            </a>
          </div>
        ))}
      </div>
      <div className="border-4 p-2 border-blue-400">
        <h2 className="border-2 p-1 max-h-40 overflow-auto border-blue-300">
          Recruitment
        </h2>
        {newsTypes.Recruitment.map((recruitment) => (
          <div key={recruitment.news_id} className="flex items-baseline">
            <p className="text-red-800 text-xl font-semibold">*</p>
            <a
              href={recruitment.news_link}
              target="_blank"
              className="hover:underline"
            >
              {recruitment.news_info}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
