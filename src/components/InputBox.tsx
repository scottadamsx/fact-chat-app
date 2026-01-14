import { useState } from "react"

export default function InputBox({ label, value, setValue }: any) {
    
    return (
        <>
        <label className="m-2 text-xl" htmlFor={label}>{label}</label><br></br>
        <input className="border" id={label} value={value} onChange={(e) => {setValue(e.target.value)}}></input><br></br>
        </>
    )
}