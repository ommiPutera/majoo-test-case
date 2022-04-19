import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import List from '../../components/list'
import { GET_NOT_DONE_TODO } from '../../constants/reducerCase';
import LoadingIcon from '../../utils/LoadingIcon'

function NotDoneList() {
  const dispatch = useDispatch();
  const { itemsNotDone } = useSelector(state => state.todoList);
  const [loading, setLoading] = React.useState(true)

  const load = React.useCallback(() => {
    axios
      .get('https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list')
      .then((items) => {
        const data = items.data.filter((item) => item?.status === 0)
        dispatch({ type: GET_NOT_DONE_TODO, data })
        setLoading(false)
      })
  }, [dispatch])

  React.useEffect(() => {
    if (itemsNotDone.length) {
      setTimeout(() => {
        setLoading(false)
      }, 500)
    }
    if (!itemsNotDone.length) load()
  }, [load, itemsNotDone])

  return (
    <React.Fragment>
      {
        itemsNotDone.length && !loading
          ?
          itemsNotDone.map((item) => (
            <div key={item.id}>
              <List
                id={item.id}
                status={item.status}
                title={item.title}
                desc={item.description}
                date={item.createdAt}
              />
            </div>
          ))
          :
          <LoadingIcon />
      }
    </React.Fragment>
  )
}

export default NotDoneList;