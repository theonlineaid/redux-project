import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

const MAX_POST_PAGE = 5;

const fetchPosts = async (pageNumber) => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${MAX_POST_PAGE}&_page=${pageNumber}`
    );
    const posts = await response.json();
    return posts;
};

export default function Page() {
    const [currentPage, setCurrentPage] = useState(1);
    const { data, isError, isLoading } = useQuery({
        queryKey: ['posts', currentPage],
        queryFn: () => fetchPosts(currentPage),
        config: {
            staleTime: 0,
            keepPreviousData: true,
        },
    });

    // const { data, isError, isLoading } = useQuery(
    //     ['posts', currentPage],
    //     () => fetchPosts(currentPage),
    //     {
    //         staleTime: 0,
    //         keepPreviousData: true,
    //     }
    // );

    if (isError) return <>Error</>;

    if (isLoading) return <>Loading...</>;

    return (
        <>
            <ul>
                {data?.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>

            <div className="w-screen flex justify-around items-center">
                <button
                    className="border bg-blue-600 hover:bg-blue-400 text-white rounded-md w-24 h-12"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                >
                    Previous
                </button>
                <p className="font-semibold">Page {currentPage}</p>
                <button
                    className="border bg-blue-600 hover:bg-blue-400 text-white rounded-md w-24 h-12"
                    onClick={() => setCurrentPage(currentPage + 1)}
                >
                    Next
                </button>
            </div>
        </>
    );
}
