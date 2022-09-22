import React from 'react';
import ItemListContainer from './itemlistcontainer';

const Carwidget = () => {
    return (
        <>
          
            <div className='d-flex justify-content-around p-3'>
                <div className="card border-primary mb-3" style={{maxWidth: '20rem'}}>
                    <img src="..\..\..\img\fotopc.jpg" alt="" />
                     <div className="card-body">
                     <ItemListContainer/>
                    </div>
                </div>
                <div className="card border-primary mb-3" style={{maxWidth: '20rem'}}>
                    <img src="..\..\..\img\fotopc.jpg" alt="" />
                     <div className="card-body">
                     <ItemListContainer/>
                    </div>
                </div>
                <div className="card border-primary mb-3" style={{maxWidth: '20rem'}}>
                    <img src="..\..\..\img\fotopc.jpg" alt="" />
                     <div className="card-body">
                     <ItemListContainer/>
                    </div>
                </div>
                <div className="card border-primary mb-3" style={{maxWidth: '20rem'}}>
                    <img src="..\..\..\img\fotopc.jpg" alt="" />
                     <div className="card-body">
                     <ItemListContainer/>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Carwidget;
