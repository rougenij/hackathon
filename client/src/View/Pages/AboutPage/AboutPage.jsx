import React from "react";
import { useEffect, useState } from "react";
import cultourApi from "../../../Api/cultourApi";

function AboutPage(props) {
  const [loading, setLoading] = useState(true);
  const [sites, setSites] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await cultourApi.get("sites");
        setSites(response.data.sites);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="about-page">
      <h1>Welcome to about page</h1>
      {loading && <div>Loading</div>}
      {!loading && (
        <div>
          <h2>Bank Accounts</h2>
          {sites.map((site) => (
            <div>{site}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AboutPage;
