import { useStore } from "./store/Cart";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
export default function Cart() {
  const { totalCart } = useStore();
  return (
    <Link href={'/cart'} className="mr-4 hover:text-gray-300 relative border rounded-full p-2">
      <ShoppingCart className="w-4 h-4" />
      {totalCart > 0 && (
        <span className="bg-red-500 text-white w-4.5 h-4.5 rounded-full px-2.5 absolute top-[-12]">
          {totalCart}
        </span>
      )}
    </Link>
  );
}
