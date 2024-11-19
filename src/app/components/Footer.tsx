import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black text-gray-400 py-12 bottom-1 left-2 w-full'>
      <div className='max-w-6xl mx-auto grid grid-flow-col sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 lg:px-8'>
        
        <div>
          <h3 className='text-lg font-bold text-white mb-4'>About us</h3>
          <p>
            We are passionate about empowering learners of all levels to master coding skills.
            Our mission is to provide high-quality programming education through expert-led
            courses, stay updated on the latest in tech, and achieve your goals.
          </p>
        </div>
        
        <div>
          <h3 className='text-lg font-bold text-white mb-4'>Links</h3>
          <ul>
            <li><a href="/" className='hover:text-slate-300'>Home</a></li>
            <li><a href="/courses" className='hover:text-slate-300'>Courses</a></li>
            <li><a href="/about" className='hover:text-slate-300'>About</a></li>
            <li><a href="/contact" className='hover:text-slate-300'>Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className='text-lg font-bold text-white mb-4'>Follow us</h3>
          <p>Email: <a href="mailto:wbs04907@gmail.com" className='hover:text-slate-300'>wbs04907@gmail.com</a></p>   
          <p>Phone: <span className='hover:text-white'>03136548388</span></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/feed/" className='hover:text-white'>linkedin.com/feed</a></p>
          <p>GitHub: <a href="https://github.com/gitextensions/gitextensions/releases/tag/v5.0" className='hover:text-white'>GitExtensions</a></p>
        </div>
        
      </div>
      <p className='flex justify-center p-2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A esse ducimus veniam laborum!
        Fugiat quam autem, aliquid facere soluta illum id labore earum nesciunt deleniti quisquam
        consequatur totam unde neque.
      </p>
    </footer>
  )
}

export default Footer
