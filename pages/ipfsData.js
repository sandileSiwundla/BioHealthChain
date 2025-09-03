import { useEffect, useState } from 'react';
import axios from 'axios';

const IpfsDataPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // IPFS hash
  const ipfsHash = 'QmRDbihs4fCWvRaf7DXGYte9C9RdqXm2eDyviV6cxJptk7';

  useEffect(() => {
    // Fetch data from IPFS using the IPFS gateway
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://ipfs.io/ipfs/${ipfsHash}`);
        setData(response.data);  // Store the data from the IPFS JSON file
      } catch (err) {
        setError('Error fetching data from IPFS');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [ipfsHash]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>IPFS Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre> 
    </div>
  );
};

export default IpfsDataPage;
