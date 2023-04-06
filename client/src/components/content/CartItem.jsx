export default function CartItem({ produs }) {
  return (
    <div className="border-t border-gray py-5">
      <div className="grid grid-cols-2">
        <div className="grid grid-cols-2 justify-items-center">
          <img alt="img" className="rounded-md" src={produs.src} />
          <div>
            <div className="pb-2">{produs.title}</div>
            {produs.description}
          </div>
        </div>
        <div className="grid grid-cols-3 justify-items-center">
          <div>{produs.price} $</div>
          <div>1</div>
          <div>95 $</div>
          <div className="text-transparent">.</div>
          <div className="text-transparent">.</div>
          <button
            type="button"
            className="transition hover:text-yellow hover:delay-100"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
