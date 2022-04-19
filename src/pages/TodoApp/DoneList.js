import axios from 'axios'
import React from 'react'
import List from '../../components/List'
import LoadingIcon from '../../utils/LoadingIcon'

function DoneList() {
  const [data, setData] = React.useState(null)
  const [loading, setLoading] = React.useState(false)

  const load = () => {
    setLoading(true)

    axios
      .get('https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list')
      .then((items) => {
        const data = items.data.filter((item) => item?.status === 1)
        setData(data);
        setLoading(false)
      })
  }

  React.useEffect(() => {
    load()
  }, [])

  return (
    <React.Fragment>
      {
        data && !loading
          ?
          data.map((item) => (
            <div key={item.id}>
              <List
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