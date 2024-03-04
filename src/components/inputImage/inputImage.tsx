"use client"

import { ChangeEvent, useState } from "react"
import Image from "next/image"


type inputImageTypes = {
  inputName: string,
  imgWidth: number,
  imgHeight: number
}

const InputImage = (props: inputImageTypes) => {
  const { inputName, imgWidth, imgHeight } = props
  const [selectedImg, setSelectedImg] = useState('')

  const changeInputImgHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (target.files) {
      const file = target.files[0]
      setSelectedImg(URL.createObjectURL(file))
    }
  }

  return (
    <label>
      <input onChange={changeInputImgHandler}
        type="file"
        name={inputName}
        accept="image/png, image/jpeg"
        hidden
      />
      <div>
        {selectedImg ?
          (<Image
            src={selectedImg}
            alt="product-img"
            width={imgWidth}
            height={imgHeight}
          />) : <span>Add Image</span>}
      </div>
    </label>
  )
}

export default InputImage