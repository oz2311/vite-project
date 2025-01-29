// import { useState,ChangeEvent } from 'react'
import { memo } from "react";

type MemoListProps = {
    memos: string[];
    deleteMemo: (index: number) => void;
};

const MemoList = memo(({ memos, deleteMemo }: MemoListProps) => {
    console.log("MemoList");

    return (
        <ul>
            {memos.map((memo, index) => (
                <li key={memo}>
                    <div>
                        <p>{memo}</p>
                        <button onClick={() => deleteMemo(index)}>削除</button>
                    </div>
                </li>
            ))}
        </ul>
    );
});

export default MemoList;
