import { useEffect, useState } from 'react'

// 로컬 데이터를 불러오는 로직을 재사용하기 위해 훅을 만들려고 했으나 데이터를 불러오지 못함.
const useFetchLocalData = (dataLocation) => {
  const [jsonData, setJsonData] = useState([])

  const fetchData = () => {
    import(dataLocation)
      .then((data) => {
        const { default: _default } = data
        setJsonData(_default)
      })
      .catch((error) => console.error('address 데이터를 불러오지 못했습니다.'))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return [jsonData]
}

export default useFetchLocalData
