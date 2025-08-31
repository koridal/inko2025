import React from 'react'

export default function Hero() {
  return (
    <div className='relative flex w-7xl mx-auto justify-center py-4'>
			<video
				src='/videos/crane.mp4'
				className='object-cover max-h-screen'
				autoPlay
				loop
				muted
			/>
			<div className="absolute top-0 w-full h-full text-gray-100 flex flex-col items-center justify-center">
				<h1 className="text-2xl sm:text-4xl lg:text-6xl xl:tet-8xl font-bold mt-15 md:mt-40">
					An Expert Construction <br />
					Services &nbsp;you can &nbsp;Trust
				</h1>
				<p className="px-8 py-4 lg:py-10 text-sm sm:text-xl lg:text-3xl font-semibold text-center">
					We will do best to Build on Creative
					Architectural & Solution
				</p>
			</div>
		</div>
  )
}
