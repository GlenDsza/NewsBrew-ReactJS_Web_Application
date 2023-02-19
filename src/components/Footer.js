import React from 'react'

const Footer = () => {
    return (
      <footer className='mt-5' style={{backgroundColor: 'silver'}}>
        <div className='d-flex justify-content-center py-2 align-items-end'>
            <img src="/favicon.png" width="50px" height="50px" alt="" />
            <h2 className="mx-2 text-dark" style={{marginBottom: '0px'}}>NewsBrew</h2>
        </div>
        <div className="">
          <a className="d-flex justify-content-center" style={{color: 'black'}} href="https://github.com/GlenDsza">
          <p style={{fontSize: '.8rem', marginBottom: '.5rem'}}>Developed with ❤️ by Glen Dsouza</p>
          <i class="fa-brands fa-github mx-2" style={{textDecoration: 'none'}}></i>
          </a>
        </div>    
      </footer>
    )
}

export default Footer
