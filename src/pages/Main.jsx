import {useState} from "react";

//hooks
import { useFetch } from "../hooks/useFetch";

//components
import UserPanel from "../components/UserPanel"
import Countries from "../components/Countries";

const Main = () => {

    const [url, setUrl] = useState("https://restcountries.com/v3.1/all");
    const { data, error, isPending } = useFetch(url);
    const [q, setQ] = useState("");

    const setFilter = (keywords) => {
        setQ(keywords);
      };
    
      const setRegion = (region) => {
        const url2 =
          region === "all"
            ? "https://restcountries.com/v3.1/all"
            : "https://restcountries.com/v3.1/region/" + region;
            
        setUrl(url2);
      };
    
      const searchBar = (items) => {
        if (q === "") return items;
        return items.filter((item) =>
          item.name.common.toLowerCase().startsWith(q.toLowerCase())
        );
      };

  return (
    <div className="xl:w-[1280px] xl:px-0 w-full px-5">
      <UserPanel setFilter={setFilter} setRegion={setRegion} />
      <Countries countries={{ data: searchBar(data), error, isPending }} />
    </div>
  );
};

export default Main;
