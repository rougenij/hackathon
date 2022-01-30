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
        const { data } = await cultourApi.get("/api/sites");
        setSites(data);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const displayData = () => {
    console.log(sites);
    return sites.map((site, i) => {
      return <div key={i}>{site._id}</div>;
    });
  };

  return (
    <div className="about-page">
      <h1>Welcome to about page</h1>
      {loading && <div>Loading</div>}
      {!loading && (
        <div>
<<<<<<< HEAD
          <h2>Sites</h2>
          {sites.map((site) => (
            <div key={site._id}>{site._id}</div>
          ))}
=======
          <h2>Bank Accounts</h2>
          {displayData()}
>>>>>>> rouge
        </div>
      )}
    </div>
  );
}

export default AboutPage;
