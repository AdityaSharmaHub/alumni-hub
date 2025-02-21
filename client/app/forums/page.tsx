import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const ForumsPage = () => {
  return (
    <div className='flex flex-col items-center my-12 gap-2'>
        <h1 className='text-3xl font-bold'>Forums Page</h1>
        <h2 className='text-xl font-medium'>Currently under development...</h2>
        <Button className='mt-8' asChild>
            <Link href="/">Back to home</Link>
        </Button>
    </div>
  )
}

export default ForumsPage