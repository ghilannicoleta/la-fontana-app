export default function Button({ title }) {
  return (
    <button type="button" className="italic delay-150 hover:text-yellow-300">
      {title}
    </button>
  );
}
