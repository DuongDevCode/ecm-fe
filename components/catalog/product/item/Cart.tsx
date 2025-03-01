import { Button } from "@/components/ui/button";
import { _ } from "@/lib/locale/translate";
// import { ShoppingCartIcon } from "lucide-react";
import { useStore } from "@/components/store/Cart";
import { ShoppingCartIcon } from "lucide-react";

export default function AddToCart({id_item_prod}: {id_item_prod: string}) {
  const { setTotalCart } = useStore();
  return(
    <Button 
      className="p-2 text-black"
      variant={'outline'}
      type="button"
      onClick={setTotalCart}
    >
      <ShoppingCartIcon className="w-5 h-5 mr-2" /> ADD TO CART
    </Button>
  )
}

{/* <button
            className="hover:text-orange-500 flex items-center border p-2 hover:border-orange-500"
            onClick={setTotalCart}
          >
            <ShoppingCartIcon className="w-5 h-5 mr-2" />
            Add to cart
          </button> */}