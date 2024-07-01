import React,{useState} from 'react'
import axios from 'axios'
import Api from '../utils/Api'

const useFetchData = (Api, initialData) => {
    const [error, seterror] = useState(null)
    const [loading, setloading] = useState(false)
    const [data, setdata] = useState(initialData)
    const [token, settoken] = useState(localStorage.getItem("access") || [])
    // console.log(token);
    const fetchData = async()=>{
        setloading(true)
        try {
            
            const response = await axios.get(Api, {
                headers: {
                  'Authorization': `Bearer ${token}`
                },
                })
                // .then((response)=>{
                    console.log(response)
                    // console.log(response.status)
                    if(response.status === 200 ||response.status === 200 ){
                        setdata(response?.data)
                        console.log(data)
                    }
                // })
        } catch (error) {
            console.log(error);
            seterror(error.response?.data?.message)
        }
        finally{
            setloading(false)
        }
    }
    // console.log(data);
    return { fetchData, data, loading, error}
}

//  default useFetchStudent

export const useFetchCourses =()=>{
    return useFetchData(Api.studentCourses, []);
}

export const useFetchMessages =()=>{
    return useFetchData(Api.studentMessages, {});
}