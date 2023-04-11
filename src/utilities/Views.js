/**
 * converts views into millions and thousands
 **/
export function convertViews(views) {
    if(!views||views<0)
    return undefined;
    if (views >= 1000000) {
      return views.slice(0, -6) + "." + views.slice(-6, -5) + "M";
    }
    if (views >= 1000) {
      return views.slice(0, -3) + "k";
    }
    return views;
  }