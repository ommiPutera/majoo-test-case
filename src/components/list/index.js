import clsx from 'clsx';
import React from 'react';
import { useSelector } from "react-redux";
import CheckList from "./CheckList";
import EditList from "./EditList";
import RemoveList from "./RemoveList";

function List({
  title,
  desc,
  date,
  status,
  id
}) {
  const {
    itemsNotDone,
    itemsDone
  } = useSelector(state => state.todoList);

  return (
    <button
      className={clsx(
        "relative w-full flex items-center my-2.5 px-4 py-[14px] rounded-lg shadow-sm",
        "bg-white hover:bg-blue-50 border border-transparent hover:border-blue-400",
      )}
    >
      <CheckList
        id={id}
        status={status}
        itemsNotDone={itemsNotDone}
      />
      <div className='text-left w-2/3'>
        <h1 className="font-semibold leading-5 text-base">{title}</h1>
        <h2 className="text-sm">{desc}</h2>
      </div>
      <div className='flex gap-3 absolute right-4 top-[14px]'>
        <EditList
          title={title}
          desc={desc}
          id={id}
          status={status}
          date={date}
          itemsNotDone={itemsNotDone}
          itemsDone={itemsDone}
        />
        <RemoveList
          id={id}
          status={status}
          items={itemsNotDone}
        />
      </div>
      <div className='absolute right-4 bottom-1'>
        <h4 className='text-xs'>{date}</h4>
      </div>
    </button>
  )
}

export default List