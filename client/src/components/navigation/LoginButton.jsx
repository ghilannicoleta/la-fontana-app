import { FaUser} from "react-icons/fa";

export default function LoginButton() {
  return (
    <button
      type="button"
      className="italic transition hover:text-colorYellow hover:delay-100"
    >
      <FaUser />
    </button>
  );
}
