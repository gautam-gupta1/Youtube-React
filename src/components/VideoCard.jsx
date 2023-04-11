import { convertViews } from "../utilities/Views";
import { convertDate } from "../utilities/DateUtils";

const VideoCard = ({ videoInfo }) => {
  const id = videoInfo.id;
  const { channelTitle, description, title, publishedAt, thumbnails } =
    videoInfo.snippet;
  const { viewCount } = videoInfo.statistics;

  return (
    <div  className="video-container">
    <a className="videoLink"
      href={`https://www.youtube.com/watch?v=${id}`}
      target="_blank"
     
    >
      <img
        className="videoThumbnail"
        src={thumbnails.high.url}
        alt="thumbnail"
      />
      <h4 className="videoTitle"> {title}</h4>

      <section className="videoDetails">
        <h5 className="videoAuthor">{channelTitle}</h5>
        <p className="videoViews">{convertViews(viewCount)} views</p>
        <p className="videoPublishDate">{convertDate(publishedAt)}</p>
      </section>
      <p className="videoDescription">{description}...</p>
    </a>
    </div>
  );
};

export default VideoCard;
