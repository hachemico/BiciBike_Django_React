import { useState,useContext,useEffect ,useCallback} from "react"
import IncidenceContext from "../context/IncidenceContext"
import IncidencesService from "../services/IncidendesService";


export function useIncidences(){

const [loading, setLoading] = useState(false)
const [updateIncidences, setUpdateIncidences] = useState()
const {incidences,setIncidences}=useContext(IncidenceContext)

  useEffect(function(){ //admin list all incidences
    console.log("USEFECT INCIDENCES")
    setLoading(true)
    IncidencesService.getIncidences()
    .then((data) => {
        setLoading(false)
    
        setIncidences(data.data.incidences)
        console.log(data.data)

  }) 
  },[setLoading,setIncidences,updateIncidences]); 
  


  const createIncidence = useCallback((param) => {
    
    IncidencesService.create_incidence(param)
    .then((data) =>{

        console.log(data)
    })
    .catch(err => {
      console.error(err)
    })
    }, [])

  const updateIncidence = useCallback((param) => {
    
      IncidencesService.update_incidence(param)
      .then((data) =>{
          setUpdateIncidences(data)
          console.log(data)
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


}
}