import { Row, Col, Card, Input, Button } from "reactstrap";
import bluePlus from "../../../assets/img/blue-plus-bus-icon.svg";
import { connect } from "react-redux";

const BusinessDetails = ({currentUser}) => {
  return (
    <div className="business-details mt-4">
      <Row>
        <Col xl="6" className="mb-3">
          <div>
            <Card className="business-details-form-card">
              <h1 className="mb-5">Business Details</h1>
              <Input type="text" placeholder="Business name" className="" />
              <Input type="email" placeholder="Website" className="" />
              <Input type="email" placeholder="Office address" className="" />
              <Input type="email" placeholder="Country" className="" />
              <Button className="w-50">Update</Button>
            </Card>
          </div>
        </Col>
        <Col xl="6">
          <div>
            <Card className="upload-picture-container mb-4 w-100">
              <h1>Business Logo</h1>
              <div className="d-flex ">
                <div className="img-container"></div>
                <div className="upload-text-wrapper">
                  <h1>Upload Logo</h1>
                  <p className="mb-0">Image format with max size of 3mb</p>
                  <div className="d-flex">
                    <img src={bluePlus} alt="" />
                    <h6 className="pt-2 ms-2 business__right-section__image-upload-placeholder__image-upload-blue">
                      Upload new photo
                    </h6>
                    {/* <input type='file' className='w-100 file-upload-button' /> */}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = ({ auth }) => {
  const { currentUser } = auth;
  return {
    currentUser,
  };
};
export default connect(mapStateToProps, {})(BusinessDetails);
