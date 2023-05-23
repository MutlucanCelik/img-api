import axios from "axios";
export default class api {
  async getImages(value) {
    const result = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: "Client-ID MLgWSU1yQ3ToNBNpoUZHSslsxqju9Efy9z5z54dahHE",
      },
      params: {
        query: value,
      },
    });
    return result.data.results;
  }
}
