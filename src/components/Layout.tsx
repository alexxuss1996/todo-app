import React from 'react'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex h-screen justify-center overflow-hidden bg-slate-100">
      <div className="flex w-full max-w-2xl flex-col items-center justify-normal gap-5 p-5">
        <h1 className="text-3xl font-bold">Todo app</h1>
        {children}
      </div>
    </div>
  )
}
