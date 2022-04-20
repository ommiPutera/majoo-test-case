import clsx from 'clsx';
import React from 'react';
import { useSelector } from "react-redux";
import CheckList from "./CheckList";
import EditList from "./EditList";
import OpenDetail from './OpenDetail';
import RemoveList from "./RemoveList";

function List({
  title,
  desc,
  date,
  status,
  id,
  openDetail
}) {
  const {
    itemsNotDone,
    itemsDone
  } = useSelector(state => state.todoList);
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className={clsx(
        "relative w-full flex items-center justify-between my-2.5 px-4 py-[14px] rounded-lg shadow-sm",
        "bg-white hover:bg-blue-50 border border-transparent hover:border-blue-400",
      )}
    >
      <OpenDetail
        title={title}
        desc={desc}
        id={id}
        status={status}
        date={date}
        itemsNotDone={itemsNotDone}
        itemsDone={itemsDone}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <CheckList
        id={id}
        status={status}
        itemsNotDone={itemsNotDone}
      />
      <div className='text-left flex-1'>
        <h1 className="font-semibold leading-5 text-base">{title}</h1>
      </div>
      <div className='flex gap-3'>
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
    </button>
  )
}

export default List