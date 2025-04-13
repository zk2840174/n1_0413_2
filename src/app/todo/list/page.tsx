import React from 'react';


import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    title: "Todo List | MyApp",
    description: "View your list of todos and manage your tasks easily.",
    keywords: ["todo", "task list", "productivity", "next.js"],
    openGraph: {
        title: "Todo List - MyApp",
        description: "Check your to-do items and stay organized.",
        url: "https://yourdomain.com/todo/list",
        type: "website",
    },
};

function TodoListPage() {
    return (
        <div>

            <div className={'text-4xl'}>Todo List Page</div>

        </div>
    );
}

export default TodoListPage;