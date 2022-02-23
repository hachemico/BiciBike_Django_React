import { useState,useContext,useEffect ,useCallback} from "react"
import IncidencesContext from "../context/IncidencesContext"
import IncidencesService from "../services/IncidendesService";


export function useIncidences(){

const [loading, setLoading] = useState(false)
const [updateIncidences, setUpdateIncidences] = useState()
const [createIncidences, setcreateIncidences] = useState()
// const [incidences,setIncidences] = useState([])
const {incidences,setIncidences} = useContext(IncidencesContext)

  useEffect(function(){ //admin list all incidences
  
    setLoading(true)
    IncidencesService.getIncidences()
    .then((data) => {
        setLoading(false)
        setIncidences(data.data.incidences)
  }) 
  },[setLoading,updateIncidences,createIncidences]); 
  

  const createIncidence = useCallback((param) => {
    
    IncidencesService.create_incidence(param)
    .then((data) =>{
        setcreateIncidences(data)
    })
    .catch(err => {
      console.error(err)
    })
    }, [])

  const updateIncidence = useCallback((param) => {
    
      IncidencesService.update_incidence(param)
      .then((data) =>{
          setUpdateIncidences(data)
      })
      .catch(err => {
        console.error(err)
      })
      }, [])
const getIncidences = useCallback((param) => {
    
        IncidencesService.getIncidences(param)
        .then((data) =>{
          console.log("VALOR DEVUELTO")
          console.log(data.data.incidences)
            setIncidences(data.data.incidences)
        })
        .catch(err => {
          console.error(err)
        })
        }, [])
return{
    loading: loading,
    incidences: incidences,
    createIncidence,
    updateIncidence,
    getIncidences,


}
}