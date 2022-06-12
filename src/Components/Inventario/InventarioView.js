import React from 'react'

export const InventarioView = () => {


  return (
    <div className="container-fluid">
        <div className="row row-cols-1 row-cols-md-2 g-4"></div>
            {
               inventarios.map((inventario) => {
                return (
                  <div className="col" key={inventario_.id}>
                    <div className="card">
                      <img src="..." className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      </div>
                    </div>
                  </div>
                )
              })
            }
        </div>
    </div >
  )
}
