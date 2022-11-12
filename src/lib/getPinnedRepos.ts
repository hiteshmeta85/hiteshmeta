import axios from "axios";

export async function getPinnedRepos() {
  const response = await axios.get(
    "https://gh-pinned-repos.egoist.dev/?username=hiteshmeta85",
  );

  return response.data;
}
