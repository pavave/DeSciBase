import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import axios from "axios";

const contractABI = [
  "function totalPapers() view returns (uint256)",
  "function getPaper(uint256) view returns (tuple(address author,string title,string ipfsHash,uint256 timestamp,uint256 likes))",
  "function publish(string memory title, string memory ipfsHash) public",
  "function likePaper(uint256 paperId) public",
  "function hasUserLiked(uint256 paperId, address user) public view returns (bool)",
];

const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;

function App() {
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState(null);
  const [papers, setPapers] = useState([]);
  const [title, setTitle] = useState("");
  const [ipfsHash, setIpfsHash] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("Please install MetaMask!");
      return;
    }
    const prov = new ethers.providers.Web3Provider(window.ethereum);
    await prov.send("eth_requestAccounts", []);
    const signer = prov.getSigner();
    setAccount(await signer.getAddress());
    const cont = new ethers.Contract(contractAddress, contractABI, signer);
    setContract(cont);
    setProvider(prov);
  };

  const loadPapers = async () => {
    if (!contract) return;
    setLoading(true);
    const total = await contract.totalPapers();
    const temp = [];
    for (let i = 0; i < total; i++) {
      const paper = await contract.getPaper(i);
      temp.push({ id: i, ...paper });
    }
    setPapers(temp);
    setLoading(false);
  };

  useEffect(() => {
    loadPapers();
  }, [contract]);

  const uploadFileToIPFS = async (file) => {
    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
    let data = new FormData();
    data.append("file", file);

    const res = await axios.post(url, data, {
      maxContentLength: "Infinity",
      headers: {
        "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
        pinata_api_key: import.meta.env.VITE_PINATA_API_KEY,
        pinata_secret_api_key: import.meta.env.VITE_PINATA_SECRET_API_KEY,
      },
    });
    return res.data.IpfsHash;
  };

  const handleUpload = async () => {
    if (!file) return alert("Select a PDF file first");
    setUploading(true);
    try {
      const hash = await uploadFileToIPFS(file);
      setIpfsHash(hash);
      alert("Uploaded! IPFS Hash: " + hash);
    } catch (e) {
      alert("Upload error: " + e.message);
    }
    setUploading(false);
  };

  const publishPaper = async () => {
    if (!contract) return alert("Connect wallet first");
    if (!title || !ipfsHash) return alert("Enter title and upload PDF");
    setLoading(true);
    try {
      const tx = await contract.publish(title, ipfsHash);
      await tx.wait();
      alert("Published!");
      setTitle("");
      setIpfsHash("");
      setFile(null);
      loadPapers();
    } catch (e) {
      alert("Error publishing: " + e.message);
    }
    setLoading(false);
  };

  const likePaper = async (paperId) => {
    if (!contract) return alert("Connect wallet first");
    setLoading(true);
    try {
      const liked = await contract.hasUserLiked(paperId, account);
      if (liked) {
        alert("You already liked this paper");
        setLoading(false);
        return;
      }
      const tx = await contract.likePaper(paperId);
      await tx.wait();
      alert("Liked!");
      loadPapers();
    } catch (e) {
      alert("Error liking: " + e.message);
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <h1>DeSciBase — Scientific Publications</h1>
      {!account ? (
        <button onClick={connectWallet}>Connect Wallet</button>
      ) : (
        <p>Connected as: {account}</p>
      )}

      <h2>Publish new paper</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ width: "100%", marginBottom: 10 }}
      />
      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => setFile(e.target.files[0])}
        style={{ marginBottom: 10 }}
      />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload PDF to IPFS"}
      </button>
      <div style={{ marginTop: 10 }}>
        <input
          type="text"
          placeholder="IPFS Hash"
          value={ipfsHash}
          readOnly
          style={{ width: "100%", marginBottom: 10 }}
        />
      </div>
      <button onClick={publishPaper} disabled={loading || uploading}>
        {loading ? "Publishing..." : "Publish"}
      </button>

      <h2>All papers</h2>
      {loading && <p>Loading...</p>}
      {!loading && papers.length === 0 && <p>No papers found.</p>}

      <ul>
        {papers.map((paper) => (
          <li
            key={paper.id}
            style={{
              marginBottom: 15,
              borderBottom: "1px solid #ccc",
              paddingBottom: 10,
            }}
          >
            <b>{paper.title}</b>
            <br />
            Author: {paper.author}
            <br />
            IPFS:{" "}
            <a
              href={`https://ipfs.io/ipfs/${paper.ipfsHash}`}
              target="_blank"
              rel="noreferrer"
            >
              {paper.ipfsHash}
            </a>
            <br />
            Likes: {paper.likes.toString()}
            <br />
            <button onClick={() => likePaper(paper.id)} disabled={loading}>
              👍 Like
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
