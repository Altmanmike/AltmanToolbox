// Liste des Snippets
import { useEffect, useState } from "react";
import axios from "axios";

const SnippetList = () => {
  const [snippets, setSnippets] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/snippets")
      .then(res => setSnippets(res.data.member ?? []))
      .catch(err => {
        console.error("Erreur API :", err);
        setSnippets([]);
      });
  }, []);

  return (
    <div>
      <h2>Liste des Snippets</h2>
      {snippets.length === 0 && <p>Aucun snippet pour le moment.</p>}
      <ul>
        {snippets.map(snippet => (
          <li key={snippet.id}>
            <strong>{snippet.title}</strong> ({snippet.language})<br />
            <pre>{snippet.code}</pre>
            <small>Tags: {snippet.tags?.join(", ")}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SnippetList;