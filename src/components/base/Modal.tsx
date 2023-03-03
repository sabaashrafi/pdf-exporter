import React, { type ReactNode } from 'react'

interface ModalProps {
  children: ReactNode
  isOpen: boolean
  toggle: () => void
}
export default function Modal(props: ModalProps) {
  return (
    <>
      {
        props.isOpen && (
          <div
            className='z-50 w-screen h-screen absolute top-0 bg-slate-400/30 flex justify-center items-center backdrop-blur-md'
            onClick={props.toggle}
          >
            <div
              onClick={(e) => {
                e.stopPropagation()
              }}
              className='block bg-white w-8/12 h-4/6 p-7 rounded-lg'
            >
              {props.children}
            </div>
          </div>
        )}
    </>
  )
}
