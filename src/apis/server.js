import axios from "axios";
import keys from "../../Keys";

export default axios.create({
  baseURL: keys.serverURL,
  headers: {
    "X-Parse-Application-Id": keys.applicationId,
    "X-Parse-REST-API-Key": keys.restId,
    "Content-Type": "application/json",
  },
});
