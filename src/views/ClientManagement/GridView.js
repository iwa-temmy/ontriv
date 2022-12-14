import { Card, Row, Col } from 'reactstrap'
// import { FiTag } from 'reeact-icons/fi'
import Tag from '../../assets/img/Tag.svg'
import arrowRight from '../../assets/img/arrowRight.svg'
// import ontriv from '../../assets/img/ontriv.png'
import { Link } from 'react-router-dom'

// import DatatablePagination from '../../components/Pagination'

const GridView = ({ clients }) => {
  return (
    <div className='grid-view'>
      <Row>
        {clients.map(el => (
          <Col xs='12' sm='6' md='4' xl='3' className='mb-4'>
            <Card className='grid-view-card pb-4'>
              <div className='client-details d-flex  align-items-center'>
                <Link to={`/client-details/${el.id}`}>
                  <div
                    className='client-logo-wrapper'
                    style={{
                      width: '40px',
                      height: '40px'
                    }}
                  >
                    <img
                      src={el.profile_image}
                      alt='logo'
                      style={{
                        width: '40px',
                        height: '40px'
                      }}
                    />
                  </div>
                </Link>
                <div>
                  <h1 className='client-name mb-0'>{el.fullname}</h1>
                  <p className='client-project mb-0'>{el.project}</p>
                </div>
              </div>

              <div className='d-flex justify-content-between project-details align-items-center'>
                {/* <div>
                  <h1 className='project-timeline-header'>Project Timeline</h1>
                  <p className='project-timeline'>{el.projectTimeline}</p>
                </div> */}
                <div>
                  <h3
                    className='date-created-header'
                    style={{
                      fontWeight: '600',
                      fontSize: '12px',
                      lineHeight: '18px',
                      letterSpacing: '0.04px',
                      color: '#04004D'
                    }}
                  >
                    Business Category
                  </h3>
                  <p
                    className='date-created'
                    style={{
                      marginBottom: '28px'
                    }}
                  ></p>
                </div>
              </div>
              <div></div>
              <div className='d-flex justify-content-between align-items-center'>
                <div className='tag-container d-flex'>
                  <img src={Tag} alt='tag-icon' />
                  <p className='tag-container-text mb-0'>
                    {'Content Calendar'}
                  </p>
                </div>
                <div>
                  <img src={arrowRight} alt='tag-icon' />
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      {/* <DatatablePagination
        position='center'
        page={0}
        pages={5}
        canPrevious={true}
        canNext={true}
        pageSizeOptions={[4, 10, 20, 30, 40, 50]}
        showPageSizeOptions={false}
        showPageJump={false}
        defaultPageSize={1}
        onPageChange={p => console.log(p)}
        onPageSizeChange={s => console.log(s)}
        paginationMaxSize={clients.length}
      /> */}
    </div>
  )
}
export default GridView
