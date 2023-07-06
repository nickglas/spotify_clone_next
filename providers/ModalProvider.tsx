"use client"

import AuthModal from "@/components/AuthModal"
import SubscribeModal from "@/components/SubscribeModal"
import UploadModal from "@/components/UploadModal"
import { ProductWithPrice } from "@/types"
import { useEffect, useState } from "react"


interface ModalProviderProps{
  products: ProductWithPrice[]
}

const ModalProvider:React.FC<ModalProviderProps> = ({products}) => {
  
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  },[])

  if(!isMounted){
    return null
  }
  
  return (
    <>
      <SubscribeModal products={products} />
      <AuthModal />
      <UploadModal />
    </>
  )
}

export default ModalProvider