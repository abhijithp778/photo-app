import React from 'react'
import Navbar from './Navbar'

const Add = () => {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Title</label>
                        <input type="text" className="form-control" placeholder='Enter Title' />
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    <label htmlFor="" className="form-label">Thumbnail</label>
                    <input type="text" className="form-control" placeholder='Enter Thumbnail' />

                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    <label htmlFor="" className="form-label">Image url</label>
                    <input type="text" className="form-control" placeholder='Enter Url' />

                    </div>


                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className=" btn btn-success">Submit</button>
                    </div>
                </div>
            </div>
        </div>
      </div>





      



    </div>
  )
}

export default Add