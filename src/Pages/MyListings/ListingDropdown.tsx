import React, { useState, useRef, useEffect } from 'react';
import {
    MoreVertOutlined,
    VisibilityOutlined,
    EditOutlined,
    ContentCopyOutlined,
    IosShareRounded,
    BarChartRounded,
    Inventory2Outlined,
    DeleteOutlineRounded,
} from '@mui/icons-material';

export default function ListingDropdown({ onAction }: { onAction: (action: string, id: number) => void }) {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const toggleDropdown = () => setOpen((prev) => !prev);

    const closeDropdown = () => setOpen(false);

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                closeDropdown();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className="h-7 w-7 hover:bg-gray-200 rounded flex items-center justify-center"
            >
                <MoreVertOutlined className="!text-xl" />
            </button>

            {open && (
                <div className="absolute right-0 z-50 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black/5">
                    <ul className="py-1 text-sm text-gray-700">
                        <DropdownItem icon={<VisibilityOutlined className='!text-lg' />} label="View Listing" onClick={() => onAction('view', 1)} />
                        <DropdownItem icon={<EditOutlined className='!text-lg' />} label="Edit Listing" onClick={() => onAction('edit', 1)} />
                        <DropdownItem icon={<ContentCopyOutlined className='!text-lg' />} label="Duplicate" onClick={() => onAction('duplicate', 1)} />
                        <DropdownItem icon={<IosShareRounded className='!text-lg' />} label="Share" onClick={() => onAction('share', 1)} />
                        <DropdownItem icon={<BarChartRounded className='!text-lg' />} label="View Analytics" onClick={() => onAction('analytics', 1)} />
                        <div className="border-t my-1" />
                        <DropdownItem icon={<Inventory2Outlined className='!text-lg' />} label="Archive" onClick={() => onAction('archive', 1)} />
                        <DropdownItem
                            icon={<DeleteOutlineRounded className='!text-lg' />}
                            label="Delete"
                            onClick={() => onAction('delete', 1)}
                            className="text-red-600 hover:bg-red-50"
                        />
                    </ul>
                </div>
            )}
        </div>
    );
}

function DropdownItem({
    icon,
    label,
    onClick,
    className = '',
}: {
    icon: React.ReactNode;
    label: string;
    onClick: () => void;
    className?: string;
}) {
    return (
        <li
            className={`flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100 ${className}`}
            onClick={onClick}
        >
            <span className="mr-2">{icon}</span>
            {label}
        </li>
    );
}
