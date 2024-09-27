import Button from "../../ui/Button";

function DeleteCartItem({ onClick }: { onClick: () => void }) {
  return (
    <Button type="round" onClick={onClick}>
      Delete
    </Button>
  );
}

export default DeleteCartItem;
