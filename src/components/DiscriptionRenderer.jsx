"use client";
import 'simplebar-react/dist/simplebar.min.css';
import SimpleBar from 'simplebar-react';

import { BlocksRenderer } from '@strapi/blocks-react-renderer';

export default function DiscriptionRenderer({ description, height = 200 }) {
    if (!description || description.length === 0) {
        return null; // or some fallback UI
    }
    return (
        <SimpleBar className="mt-[25px] custom-scrollbar p-[15px] lg:p-[0px] w-full max-h-none text-silver" style={{ maxHeight: height || 200 + "px" }} forceVisible="y" autoHide={false}>
            {
                description && <BlocksRenderer content={description} />
            }
        </SimpleBar>
    );
}