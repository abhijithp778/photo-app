import React from 'react'
import Navbar from './Navbar'

const Page = () => {
  return (
    <div>
      <Navbar/>
      <div className="container">
    <div className="row g-3">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
       <label htmlFor="" className="form-label"> <b>Title </b></label>
<input type="text" className="form-control" placeholder='Enter Title' />
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <button className="btn btn-danger">Search</button>
        </div>
    </div>
</div>






    </div>
  )
}

export default Page