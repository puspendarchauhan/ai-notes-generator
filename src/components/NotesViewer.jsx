import ReactMarkdown from "react-markdown";

export default function NotesViewer({ notes, onCopy, onClear }) {
  if (!notes) return null;

  return (
    <div style={{ marginTop: 20 }}>
      <div
        style={{
          display: "flex",
          gap: 10,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h2 style={{ margin: 0 }}>Generated Notes</h2>

        <div style={{ display: "flex", gap: 10 }}>
          <button
            onClick={onCopy}
            style={{ padding: "8px 12px", cursor: "pointer" }}
          >
            Copy
          </button>
          <button
            onClick={onClear}
            style={{ padding: "8px 12px", cursor: "pointer" }}
          >
            Clear
          </button>
        </div>
      </div>

      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: 12,
          padding: 16,
          background: "#fff",
          marginTop: 10,
          lineHeight: 1.7,
        }}
      >
        <ReactMarkdown>{notes}</ReactMarkdown>
      </div>
    </div>
  );
}