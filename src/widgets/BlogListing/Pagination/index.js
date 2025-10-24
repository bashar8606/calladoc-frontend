"use client"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
export default function Pagination({ page, setPage, pageCount }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const handlePagination = (term) => {
        const params = new URLSearchParams(searchParams);
        setPage(term);
        if (term) {
            params.set("page", term);
        } else {
            params.delete("page");
        }
        replace(`${pathname}?${params.toString()}`);
        window.scrollTo(0, 500)
    };
    return (
        <div className="w-full">
            <div className="flex justify-center mt-4 lg:mt-8">
                <nav aria-label="Page navigation example">
                    <ul className="inline-flex items-center gap-2">
                        <li>
                            <button
                                className={`flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 bg-white text-blue-600 hover:bg-blue-50 transition disabled:opacity-40 disabled:cursor-not-allowed`}
                                onClick={() => handlePagination(Number(page) - 1)}
                                disabled={Number(page) === 1}
                                aria-label="Previous Page"
                            >
                                <MdKeyboardArrowLeft size={22} />
                            </button>
                        </li>
                        {Array.from({ length: pageCount }, (_, index) => {
                            const selected = Number(page) === (index + 1);
                            return (
                                <li key={index}>
                                    <button
                                        className={
                                            `w-10 h-10 rounded-full flex items-center justify-center border 
                                            transition
                                            font-semibold 
                                            ${selected
                                                ? "bg-blue-600 text-white border-blue-600 cursor-default"
                                                : "bg-white text-blue-600 border-gray-200 hover:bg-blue-50"}
                                            `
                                        }
                                        disabled={selected}
                                        aria-current={selected ? "page" : undefined}
                                        onClick={() => handlePagination(index + 1)}
                                    >
                                        {index + 1}
                                    </button>
                                </li>
                            );
                        })}
                        <li>
                            <button
                                className={`flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 bg-white text-blue-600 hover:bg-blue-50 transition disabled:opacity-40 disabled:cursor-not-allowed`}
                                onClick={() => handlePagination(Number(page) + 1)}
                                disabled={Number(page) === pageCount}
                                aria-label="Next Page"
                            >
                                <MdKeyboardArrowRight size={22} />
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

