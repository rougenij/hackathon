import React from "react";
import { useEffect, useState } from "react";
import cultourApi from "../../../Api/cultourApi";

function AboutPage() {
  const [loading, setLoading] = useState(true);
  const [sites, setSites] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await cultourApi.get("sites");
        console.log(data);
        setSites(data);
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
          <h2>Sites</h2>
          {sites.map((site) => (
            <div key={site._id}>{site._id}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AboutPage;
