import { Row } from "../components/row";

const IDS = ["a", "b", "c"];

export default function Items() {
  return (
    <main>
      <h1>Items</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {IDS.map((id) => (
          <Row key={id} id={id} />
        ))}
      </ul>
    </main>
  );
}
