import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import List from '../../components/list'
import { GET_DONE_TODO } from '../../constants/reducerCase';
import LoadingIcon from '../../utils/LoadingIcon'

function DoneList() {
  const dispatch = useDispatch();
  const { itemsDone } = useSelector(state => state.todoList);
  const [loading, setLoading] = React.useState(true)

  const load = React.useCallback(() => {
    axios
      .get('https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list')
      .then((items) => {
        const data = items.data.filter((item) => item?.status === 1)
        dispatch({ type: GET_DONE_TODO, data })
        setLoading(false)
      })
  }, [dispatch])

  React.useEffect(() => {
    if (itemsDone.length) {
      setTimeout(() => {
        setLoading(false)
      }, 500)
    }
    if (!itemsDone.length) load()
  }, [load, itemsDone])

  return (
    <React.Fragment>
      {
        itemsDone && !loading
          ?
          itemsDone.map((item) => (
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

export default DoneList