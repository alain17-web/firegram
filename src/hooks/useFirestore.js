import { useState, useEffect } from 'react'
import { projectFirestore } from '../firebase/config'
import { collection } from 'firebase/firestore'

const useFirestore = ( collection ) => {
const [docs, setDocs] = useState([])

    useEffect(() => {
        const unsub = collection(projectFirestore,'images')
        .orderBy('timestamp','desc')
        .onSnapshot((snapshot) => {
            let documents = []
            snapshot.forEach( doc => {
               documents.push({...doc.data(), id: doc.id}) 
            })
            setDocs(documents)
        })

        return () => unsub()
    }, [collection])

    return { docs }
}

export default useFirestore