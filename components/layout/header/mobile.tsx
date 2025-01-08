import {Button} from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {AlignJustify} from "lucide-react";
import Image from "next/image";

export function MobileHeader() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" className='border border-gray-200 rounded-md'>
                    <AlignJustify/>
                </Button>
            </SheetTrigger>
            <SheetContent side={"left"}>
                <SheetHeader>
                    <SheetTitle>
                        <Image
                            className=" mr-4"
                            src="https://nextjs.org/icons/next.svg"
                            alt="Next.js logo"
                            width={160}
                            height={18}
                            priority
                        />
                    </SheetTitle>
                    {/* <SheetDescription>
                    </SheetDescription> */}
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}
