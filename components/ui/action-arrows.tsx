import ArrowBtn from "./ArrowButton";

export default function ActionArrows({
  onLeftClick,
  onRightClick,
}: {
  onLeftClick?: () => void;
  onRightClick?: () => void;
}) {
  return (
    <div className="flex gap-2.5">
      <ArrowBtn direction="left" onClick={onLeftClick} />
      <ArrowBtn direction="right" onClick={onRightClick} />
    </div>
  );
}
