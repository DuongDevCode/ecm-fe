import { Input } from '../ui/input'
import { SearchIcon } from 'lucide-react'
import NavMenu from './NavBarMenu'
export default function SearchHeader() {
    return (
        <div className='flex'>
            <div className="flex items-center relative mr-1">
                <Input placeholder='search' className='px-2 py-1 border rounded-xl' />
                <SearchIcon className='w-4 h-4 absolute right-2' />
            </div>
            <NavMenu />
        </div>
    )
}
