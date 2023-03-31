export default function Button({ title }) {
  return (
    <button
      type="button"
      className="italic transition  hover:text-colorYellow hover:delay-100"
    >
      {title}
    </button>
  );
}
