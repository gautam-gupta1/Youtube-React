const API_KEY = "AIzaSyAfb5TgVcXbFOuDWqu9_RiCEfR0r8yi2eE";

export async function fetchItems(value) {
    try {
        if(!value){
            value= "javascript";
        }
      let searchUrl = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&type=video&part=snippet&maxResults=15&q=${value}`;
 


      //Calling first API
      const searchUrlResponse = await fetch(searchUrl);
      const searchResultsObj = await searchUrlResponse.json();
     // pageToken = searchResultsObj?.nextPageToken;

      //Extracting id's from first API
      let videoIds = searchResultsObj?.items?.map(
        (item) => item?.id?.videoId
      );
      videoIds = videoIds.join();

      let videosInfoUrl = `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&part=snippet,statistics&id=${videoIds}`;

      //Calling second API
      const videosStatsResponse = await fetch(videosInfoUrl);
      const videosObj = await videosStatsResponse.json();
      
       return videosObj?.items;
    } catch(err) {
        throw err;
    }
    finally{
      
    }
  }
  
