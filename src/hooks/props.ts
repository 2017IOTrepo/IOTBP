import { createContext, Dispatch, SetStateAction } from 'react'
import { storeData } from '../store'

export type context = {
  storeSender: storeData
  setStoreSender: Dispatch<SetStateAction<storeData>>
  storeReceiver: storeData
  setStoreReceiver: Dispatch<SetStateAction<storeData>>
}

export const AppContext = createContext<context|undefined>(undefined)
