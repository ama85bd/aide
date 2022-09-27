import React, { useEffect, useMemo, useRef, useState } from 'react';
import AllProducts from '../products/AllProducts';
import FeatureSlider from '../slideCarousel/FeatureSlider';
import SlideCarousel from '../slideCarousel/SlideCarousel';
import TopCategory from '../slideCarousel/TopCategory';
import {
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
} from 'reactstrap';
import Product from '../../app/api/product';
import qs from 'qs';
import ShopByBrand from '../slideCarousel/ShopByBrand';
import ShopByCompany from '../slideCarousel/ShopByCompany';
import Footer from '../footer/Footer';
import { read } from 'fs';
import axios from 'axios';
import { Guid } from 'guid-typescript';

const defaultImageSrc = '/assets/nat-1.jpg';

const initialFieldValues = {
  empId: Guid.EMPTY,
  empName: '',
  imageName: '',
  imageSrc: defaultImageSrc,
  imageFile: null,
};

function HomePage() {
  // get grid view number
  const [gridViewNumber, setGridViewNumber] = useState<number>(5);
  const [dropdownGridViewOpen, setDropdownGridViewOpen] = useState(false);
  const [lazyLoaderPage, setLazyLoaderPage] = useState<number>(67);

  let videoRef = useRef(null);

  let photoRef = useRef(null);

  const [values, setValues] = useState<any>(initialFieldValues);
  console.log('values', values);
  const [errors, setErrors] = useState<any>({});

  const testAPIUrl = (
    url = 'https://localhost:5001/api/student-image/addstudentimage'
  ) => {
    return {
      fetchAll: () => axios.get(url),
      create: (newRecord: any) => axios.post(url, newRecord),
      update: (id: any, updatedRecord: any) =>
        axios.put(url + id, updatedRecord),
      delete: (id: any) => axios.delete(url + id),
    };
  };

  const addOrEdit = (formData: any, onSuccess: any) => {
    testAPIUrl()
      .create(formData)
      .then((res) => {
        onSuccess();
      })
      .catch((err) => console.log(err));
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    console.log('name', name);
    console.log('value', value);
    setValues({
      ...values,
      [name]: value,
    });
  };

  const showPreview = (e: any) => {
    if (e.target.files && e.target.files[0]) {
      let imageFile = e.target.files[0];
      console.log('imageFile', imageFile);
      const reader = new FileReader();
      reader.onload = (x: any) => {
        setValues({
          ...values,
          imageName: imageFile.name,
          imageFile,
          imageSrc: x.target.result,
        });
      };
      reader.readAsDataURL(imageFile);
    } else {
      setValues({
        ...values,
        imageFile: null,
        imageSrc: defaultImageSrc,
      });
    }
  };

  const validate = () => {
    let temp: any = {};
    temp.empName = values.empName === '' ? false : true;
    temp.imageSrc = values.imageSrc === defaultImageSrc ? false : true;
    setErrors(temp);
    return Object.values(temp).every((x) => x === true);
  };

  const resetForm = () => {
    setValues(initialFieldValues);
    (document.getElementById('image-uploader') as HTMLInputElement).value = '';
    setErrors({});
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    if (validate()) {
      const formData = new FormData();
      formData.append('empId', values.empId);
      formData.append('empName', values.empName);
      formData.append('imageFile', values.imageFile);
      formData.append('imageName', values.imageName);
      addOrEdit(formData, resetForm);
      console.log('formData', formData);
    }
  };

  const applyErrorClass = (field: any) =>
    field in errors && errors[field] === false ? ' invalid-field' : '';

  // console.log('gridViewNumber', gridViewNumber);
  // console.log('lazyLoaderPage', lazyLoaderPage);
  const [allHomeProducts, setAllHomeProducts] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const toggleDropdownGridView = () =>
    setDropdownGridViewOpen(!dropdownGridViewOpen);

  const clientId = window.localStorage.getItem('client_id');
  const cusId: any = {
    CustomerId: clientId ? clientId : 0,
  };

  const getallHomeProducts = async () => {
    setLoading(true);
    const res = await Product.getProductsForHomePage(qs.stringify(cusId));

    if (res.IsSuccess) {
      setAllHomeProducts(res);
      setLoading(false);
    }
  };

  useMemo(() => {
    getallHomeProducts();
  }, []);
  // useEffect(() => {
  //   getallHomeProducts();
  // }, []);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
      })
      .then((stream) => {
        let video: any = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const [drawing, setDrawing] = useState();
  console.log('drawing', drawing);

  function dataURLtoFile(dataurl: any, filename: any) {
    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }

  const takePicture = () => {
    const width = 400;
    const height = width / (16 / 9);

    let video: any = videoRef.current;

    let photo: any = photoRef.current;

    photo.width = width;

    photo.height = height;

    let ctx = photo.getContext('2d');

    let image = ctx.drawImage(video, 0, 0, width, height);
    const imageSrc = video.current?.getScreenshot();
    console.log('imageSrc', imageSrc);

    const base64 = photo?.toDataURL('image/jpeg', 1.0);

    var file = dataURLtoFile(base64, 'hello.jpeg');
    console.log('file', file);

    // const points = photo?.getSaveData();
    setDrawing(base64);
    console.log(base64);
    // console.log(points);
    // const imageGet = photo?.canvasContainer?.childNodes[1]?.toDataURL();
    // const imageGet = photo?.toDataURL('image/png');
    // const imageGet = photo.domElement?.toDataURL('image/png');
    // const imageGet = document.getElementById('getphoto') as HTMLCanvasElement;
    // console.log('imageGet', imageGet);

    const formData = new FormData();
    formData.append('empId', Guid.EMPTY);
    formData.append('empName', 'My name');
    formData.append('imageFile', file);
    formData.append('imageName', 'image Name');
    addOrEdit(formData, resetForm);

    console.log('formData', formData);
    console.log('ctx', ctx);
    console.log('photo', photo);
    console.log('video', video);
  };

  const clearImage = () => {
    let photo: any = photoRef.current;

    let ctx = photo.getContext('2d');

    ctx.clearRect(0, 0, photo.width, photo.height);
  };

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  return (
    <>
      <section>
        <Row>
          <Col md={6}>
            <form autoComplete='off' noValidate onSubmit={handleFormSubmit}>
              <div className='card'>
                <img
                  src={values.imageSrc}
                  alt='imagesforemp'
                  className='card-img-top'
                />
                <div className='card-body'>
                  <div className='form-group'>
                    <input
                      type='file'
                      accept='image/*'
                      className={
                        'form-control-file' + applyErrorClass('imageSrc')
                      }
                      onChange={showPreview}
                      id='image-uploader'
                      name='imageName'
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      type='text'
                      className={'form-control' + applyErrorClass('empName')}
                      placeholder='Emp Name'
                      name='empName'
                      value={values.empName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className='form-group text-center'>
                    <button type='submit' className='btn btn-primary'>
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </Col>
          <Col md={6}>
            <h1 className='text-center'>Camera Selfie App in React</h1>

            <video ref={videoRef} className='container'></video>

            <button onClick={takePicture} className='btn btn-danger container'>
              Take Picture
            </button>

            <canvas className='container' ref={photoRef} id='getphoto'></canvas>

            <button onClick={clearImage} className='btn btn-primary container'>
              Clear Image
            </button>
          </Col>
        </Row>
      </section>
      <SlideCarousel />
      <FeatureSlider />
      <TopCategory />

      <div className='productpage sticky'>
        <div className='allproducts__views'>
          <div className='allproducts__viewsbar'></div>
          {/* <IoRepeatOutline
          style={{ fontSize: '2rem', transform: 'rotate(90deg)' }}
        /> */}
          <div className='allproducts__viewselect'>
            <h2 className='allproducts__viewheading'>
              Number of Column Per Row
            </h2>
            {/* <Row>
          <Col md={12}> */}
            <Dropdown
              isOpen={dropdownGridViewOpen}
              toggle={toggleDropdownGridView}
              title={gridViewNumber.toString()}
              style={{ padding: '0px 0 2px 5px' }}
            >
              <DropdownToggle
                // caret
                color='primary'
                outline
                className='dropdown-company'
                size={'xs'}
              >
                <span>
                  {gridViewNumber === 4
                    ? 'Four'
                    : gridViewNumber === 5
                    ? 'Five'
                    : 'Six'}
                </span>
              </DropdownToggle>
              <DropdownMenu left>
                <DropdownItem
                  className={gridViewNumber === 4 ? 'active' : ''}
                  onClick={() => {
                    setGridViewNumber(4);
                    setLazyLoaderPage(62);
                  }}
                >
                  Four
                </DropdownItem>
                <DropdownItem
                  className={gridViewNumber === 5 ? 'active' : ''}
                  onClick={() => {
                    setGridViewNumber(5);
                    setLazyLoaderPage(67);
                  }}
                >
                  Five
                </DropdownItem>
                <DropdownItem
                  className={gridViewNumber === 6 ? 'active' : ''}
                  onClick={() => {
                    setGridViewNumber(6);
                    setLazyLoaderPage(62);
                  }}
                >
                  Six
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            {/* </Col>
        </Row> */}
            {/* <div className='custom-select'>
          <select
            name='viewselect'
            id='viewselect'
            onChange={(e) => {
              setGridViewNumber(Number(e.target.value));
            }}
            // className='allproducts__dropdownview'
            // title='Select'
          >
            <option key={4} value='4'>
              4
            </option>
            <option key={5} value='5'>
              5
            </option>
            <option selected key={6} value='6'>
              6
            </option>
          </select>
          <span className='custom-arrow'></span>
        </div> */}
          </div>
        </div>
      </div>
      <div className='stickyProduct'>
        <section>
          <AllProducts
            gridViewNumber={gridViewNumber}
            loading={loading}
            allHomeProducts={
              allHomeProducts &&
              allHomeProducts.OBJ.slice(0, gridViewNumber === 5 ? 25 : 24)
            }
          />
        </section>

        <section>
          <ShopByBrand />
        </section>
        <section>
          <AllProducts
            gridViewNumber={gridViewNumber}
            loading={loading}
            allHomeProducts={
              allHomeProducts &&
              allHomeProducts.OBJ.slice(
                gridViewNumber === 5 ? 26 : 25,
                gridViewNumber === 5 ? 51 : 49
              )
            }
          />
        </section>
        <section>
          <ShopByCompany />
        </section>
        <section>
          <AllProducts
            gridViewNumber={gridViewNumber}
            loading={loading}
            allHomeProducts={
              allHomeProducts &&
              allHomeProducts.OBJ.slice(
                gridViewNumber === 5 ? 52 : 50,
                lazyLoaderPage
              )
            }
          />
          {allHomeProducts && lazyLoaderPage < allHomeProducts.OBJ.length && (
            <>
              <div className=' flex justify-center my-2'>
                <div
                  style={{
                    backgroundColor: '#009999',
                    height: '1px',
                    width: '30%',
                    marginTop: '3rem',
                    marginRight: '2rem',
                  }}
                ></div>
                <button
                  className=' custom-loadbtn'
                  onClick={() => {
                    if (lazyLoaderPage + 10 > allHomeProducts.OBJ.length) {
                      setLazyLoaderPage(allHomeProducts.OBJ.length);
                    } else {
                      setLazyLoaderPage(
                        gridViewNumber === 5
                          ? lazyLoaderPage + 15
                          : lazyLoaderPage + 12
                      );
                    }
                  }}
                >
                  Load More
                </button>
                <div
                  style={{
                    backgroundColor: '#009999',
                    height: '1px',
                    width: '30%',
                    marginTop: '3rem',
                    marginLeft: '2rem',
                  }}
                ></div>
              </div>
            </>
          )}
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </>
  );
}

export default HomePage;
