import { useState,useContext,useEffect ,useCallback} from "react"
import IncidencesContext from "../context/IncidencesContext"
import IncidencesService from "../services/IncidendesService";


export function useIncidences(){

const [loading, setLoading] = useState(false)
const [updateIncidences, setUpdateIncidences] = useState()
const [createIncidences, setcreateIncidences] = useState()
const {incidences,setIncidences} = useContext(IncidencesContext)
const {nuevasIncidencias, setNuevasIncidencias} = useContext(IncidencesContext)

  useEffect(function(){ //admin list all incidences
  
    setLoading(true)
    IncidencesService.getIncidences()
    .then((data) => {
        setLoading(false)
        setIncidences(data.data.incidences)
        let contador= 0;
        for(let i=0;i< data.data.incidences.length ;i++ ){
          if(data.data.incidences[i].checked === false){
            contador = contador + 1;
          }
        } 
        setNuevasIncidencias(contador);

    }) 
  },[setLoading,updateIncidences,createIncidences]); 
  
  //crear una incidencia.
  const createIncidence = useCallback((param) => {
    
    IncidencesService.create_incidence(param)
    .then((data) =>{
     
        setcreateIncidences(data)        
        console.log(nuevasIncidencias);
    })
    .catch(err => {
      console.error(err)
    })
    }, [])
  
  // actualiza el estado de la incidencia a Resuelta.
  const updateIncidence = useCallback((param) => {
    
      IncidencesService.update_incidence(param)
      .then((data) =>{
          setUpdateIncidences(data)
      })
      .catch(err => {
        console.error(err)
      })
      }, [])

  //obtener las incidencias
  const getIncidences = useCallback((param) => {
      
    IncidencesService.getIncidences(param)
    .then((data) =>{
        setIncidences(data.data.incidences)
    })
    .catch(err => {
      console.error(err)
    })
  }, [])

  //actualiza el estado checked cuando el usuario a visto la incidencia.
  const updateIncidenceCheckedState = useCallback((param) => {

    IncidencesService.update_checked_incidence(param)
    .then((data) =>{
        setUpdateIncidences(data);
    })
    .catch(err => {
      console.error(err)
    })
  }, [])



return{
    loading: loading,
    incidences: incidences,
    newIncidences:nuevasIncidencias,
    createIncidence,
    updateIncidence,
    getIncidences,
    updateIncidenceCheckedState,


}
}