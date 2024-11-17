import { FaRegEye, FaShareAlt, FaStar, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = (props = {}) => {
  const { news } = props || {};

  // Function to render stars based on the rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating); // Full stars
    const maxStars = 5; // Total stars

    const stars = [];
    for (let i = 0; i < maxStars; i++) {
      if (i < fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-500" />);
      }
    }
    return stars;
  };

  return (
    <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <div className="flex items-center space-x-3">
          <img
            className="w-10 h-10 rounded-full"
            src={news.author.img}
            alt={news.author.name}
          />
          <div>
            <h4 className="font-medium text-gray-800">{news.author.name}</h4>
            <p className="text-sm text-gray-500">
              {new Date(news.author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <FaShareAlt className="text-gray-600 cursor-pointer hover:text-gray-800" />
      </div>

      {/* Title */}
      <div className="px-4 py-2">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          {news.title}
        </h3>
      </div>

      {/* Thumbnail */}
      <img
        className="w-full h-60 object-cover"
        src={news.thumbnail_url}
        alt="Thumbnail"
      />

      {/* Details */}
      <div className="px-4 py-3 text-gray-700">
        <p>
          {news.details.substring(0, 100)}...
          <Link to={`/news/${news._id}`} className="text-blue-500 font-medium cursor-pointer">
            {" "}
            Read More
          </Link>
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-3 border-t text-sm text-gray-500">
        {/* Rating */}
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">{renderStars(news.rating.number)}</div>
          <span className="text-gray-800 font-medium">
            {news.rating.number.toFixed(1)}
          </span>
          <span>({news.rating.badge})</span>
        </div>

        {/* Views */}
        <div className="flex items-center space-x-2">
          <FaRegEye />
          <span>{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
