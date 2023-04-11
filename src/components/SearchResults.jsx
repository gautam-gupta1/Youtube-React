import { useEffect, useState } from "react";
import VideoCard from "./VideoCard.jsx";
import { fetchItems } from "../utilities/Connect.js";
import { Snackbar } from '@mui/material';

const searchResultOutcomes = {
   searching : "Searching",
   error : "Error",
  }

const SearchResults = ({ searchedValue }) => {
  console.log(searchedValue);
  const [fetchResult, setFetchResult] = useState("");
  useEffect(() => {
    setFetchResult(searchResultOutcomes.searching);
    fetchItems(searchedValue)
      .then((data) => setFetchResult(data))
      .catch((error) => setFetchResult(searchResultOutcomes.error));
  }, [searchedValue]);
  if (!fetchResult) {
    return <></>;
  }
  if (fetchResult === searchResultOutcomes.searching) {
    return <Snackbar message="Searching..." open={true}/>
  }

  if (fetchResult === searchResultOutcomes.error) {
    return <Snackbar message="Error" open={true}/>
  }
  

  return (
    <div className="searchResults-container">
      {fetchResult.map((video) => (
        <VideoCard key={video.id} videoInfo={video} />
      ))}
    </div>
  );
};

export default SearchResults;
