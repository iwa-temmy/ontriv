import { useState } from 'react';
import { Card } from 'reactstrap';
import { BsFillGridFill, BsListUl } from 'react-icons/bs';
// import {AiOutlineUnordered}
import { MdOutlineFileDownload } from 'react-icons/md';
import { HiPlus } from 'react-icons/hi';
import AddNewClient from './AddClient.js';
import GridView from './GridView.js'
import ListView from './ListView.js';

const ClientManagement = () => {
    const [view, setView] = useState('');
    const [addClient, setAddClient] = useState(false);




    return (
        <>
            <div className='client-management'>
                <div className="d-flex justify-content-between align-items-center">
                    <Card className='py-3 client-analytics-card'>
                        <div className="client-analytics d-flex justify-content-between align-items-center">
                            <h4 className='mb-0 client-analytics-text'>Number of Clients</h4>
                            <h4 className='mb-0 client-count'>0</h4>
                        </div>
                    </Card>

                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            {
                                view === 'list' ?
                                    <Card className='client-icon-card list' >
                                        <BsListUl
                                            className='client-ctrl-icon'
                                            color="#2062f4"
                                            size='22px'
                                            onClick={() => setView('grid')}
                                        />
                                    </Card>
                                    :
                                    <Card className='client-icon-card grid'>
                                        <BsFillGridFill
                                            className='client-ctrl-icon grid'
                                            color='#2062f4'
                                            size='18px'
                                            onClick={() => setView('list')}
                                        />
                                    </Card>

                            }

                        </div>
                        <div className=' mx-auto'>
                            <Card className='client-icon-card download'>
                                <MdOutlineFileDownload

                                    color='#2062f4'
                                    size='24px' />
                            </Card>
                        </div>
                        <div className='btn-lg  create-button align-items-center '
                            onClick={() => {
                                setAddClient(true)
                            }}>
                            <h6 className='mb-0'>
                                <HiPlus color='#2465ec' className='create-icon' />

                                ADD A NEW CLIENT
                            </h6>
                        </div>

                    </div>


                </div>
                {view === 'grid' ?
                    <GridView /> : 
                    view === 'list' ? <ListView /> :
                        <div className='client-inactive-state text-center'>
                            <Card className='client-inactive-state-card mx-auto'>
                                <h3 className='client-inactive-header-text mx-auto'>You currently have no client</h3>
                                <h3 className='client-inactive-header-text mx-auto'>you can add a new client.</h3>
                                <p className='client-inactive-subhead-text mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <div className=' client-create-button '
                                    onClick={() => {
                                        setAddClient(true)
                                    }}>
                                    <h6 className='mb-0'
                                    >
                                        ADD A NEW CLIENT
                                    </h6>
                                </div>

                            </Card>
                        </div>

                }

                {
                    addClient && <AddNewClient
                        addState={addClient}
                        setAddState={setAddClient}
                    />}

            </div>

        </>
    )

}

export default ClientManagement;