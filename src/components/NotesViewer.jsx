export default function NotesViewer({ notes }) {
  if (!notes) return null;

  return (
    <div style={{ marginTop: 20 }}>
      <h2>Generated Notes</h2>

      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: 12,
          padding: 16,
          background: "#fafafa",
          whiteSpace: "pre-wrap",
          lineHeight: 1.6,
        }}
      >
        {notes}
      </div>
    </div>
  );
}