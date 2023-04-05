import { Link } from "react-router-dom";

export default function Button({ title }) {
  return (
    <button
      type="button"
      className="transition  hover:text-colorYellow hover:delay-100"
    >
      <Link to={`/${title.toLowerCase()}`}>{title}</Link>
    </button>
  );
}
