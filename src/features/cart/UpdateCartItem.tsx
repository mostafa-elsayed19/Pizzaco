import Button from "../../ui/Button";

function UpdateCartItem({ onClick }: { onClick: () => void }) {
  return (
    <div className="flex items-center gap-2">
      <Button type="round" onClick={onClick}>
        -
      </Button>
      <span>2</span>
      <Button type="round" onClick={onClick}>
        +
      </Button>
    </div>
  );
}

export default UpdateCartItem;
