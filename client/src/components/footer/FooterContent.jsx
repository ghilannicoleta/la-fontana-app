import FooterInfo from "./FooterInfo";
import FooterNav from "./FooterNav";

export default function FooterContent() {
  return (
    <div className="flex h-[432px] justify-between border-t-4 border-colorYellow pt-20">
      <FooterNav />
      <FooterInfo />
    </div>
  );
}
