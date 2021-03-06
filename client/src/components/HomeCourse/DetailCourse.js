import React from "react";
import './course.css';

import CheckIcon from '@mui/icons-material/Check';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PayPal from "./PayPal";

import { useParams } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import * as actions from '../../redux/actions'
import {mycourse$} from '../../redux/selector'
import HeaderHome from '../Home/HeaderHome'



export default function DetailCourse(){

const dispatch = useDispatch();
const mycourse =useSelector(mycourse$);
const {id} = useParams()

React.useEffect(()=>{
    dispatch(actions.getMyCourse.getMyCoursesRequest())
},[dispatch]);

    return(
        
        <div className="detailcourse">
            <HeaderHome/>

                        {
                          mycourse.map(course => {

                            console.log("[aaa]",typeof(course.Price))

                            if(course.id == id){
                                return (             
                       
            <div>
            <div className="dc-banner">
                <div className="banner__wrapper">
                    <div className="banner__content">
                        <div className="banner__content--title">
                            <h2>{course.Name}</h2>
                        </div>
                        <div className="banner__content--decription">
                            <p>{course.Title}</p>
                        </div>
                    </div>
                </div>
               
            </div>
            <div className="dc-container">
                <div className="dc-content">
                    <div className="dc-content__img">
                        <img src={course.img} alt="abc" />
                    </div>
                    <div className="dc-content__section">
                        <div className="section--title">
                            <h3>Schedule Course</h3>
                        </div>
                        <div className="duration__content">
                            <CheckIcon className="dc-icon"/>
                            <strong>Th???i gian b???t ?????u kh??a h???c : </strong>
                            <span>{course.Timedeadline}</span>
                            <br />
                            <CheckIcon className="dc-icon"/>
                            <strong>S??? bu???i :</strong>
                            <span>{course.NumberStudy} / {course.TimeStudy}</span>
                            <br />
                            <CheckIcon className="dc-icon"/>
                            <strong>L???ch h???c :</strong>
                            <span>6:00pm - 9:00pm , th??? 2 v?? th??? 5 h???ng tu???n</span>
                            <br />
                            <CheckIcon className="dc-icon"/>
                            <strong>C??ch th???c :</strong>
                            <span>h???c qua ???ng d???ng <strong> Zoom Cloud Meeting</strong>.</span>
                            
                        </div>
                    </div>
                    <div className="dc-content__section">
                        <div className="section--title">
                            <h3>Introduce Course</h3>
                        </div>
                        <div className="intro--content">
                        <strong>Nh?? b???n ???? bi???t,</strong>
                            <p>IELTS vi???t t???t cho International English Language Testing System, t???m d???ch l?? H??? th???ng Ki???m tra Anh ng??? Qu???c t??? v???i 4 k??? n??ng Nghe, N??i, ?????c v?? Vi???t. IELTS l?? cu???c thi ki???m tra tr??nh ????? th??ng th???o Anh ng??? quan tr???ng v?? ph??? bi???n nh???t th??? gi???i cho m???c ????ch h???c t???p, l??m vi???c v?? ?????nh c?? v???i h??n hai tri???u th?? sinh d??? thi.

                            Th???u hi???u ???????c t???m quan tr???ng c???a vi???c luy???n thi IELTS, Unica h???p t??c c??ng gi???ng vi??n B??i ?????c Ti???n xu???t b???n kh??a h???c Luy???n thi IELTS Online: listening, speaking, reading, writing. Kh??a h???c ngo???i ng??? s??? gi??p h???c vi??n r??n luy???n c??? 4 k??? n??ng, k??m theo gi???ng gi???i chi ti???t v??? c???u tr??c ????? thi, nh???ng l??u ?? khi l??m b??i t???p s??? gi??p b???n t??? tin b?????c v??o k??? thi IELTS v???i k???t qu??? nh?? mong ?????i. 

                            L???p h???c d??nh cho nh???ng h???c vi??n m???i ti???p x??c v???i IELTS, tr??nh ????? c??c k??? n??ng c??n th???p, v???n t??? v???ng, ng??? ph??p c??n ch??a cao, v?? ph??t ??m c??n nhi???u khi???m khuy???t. Sau kho?? h???c, h???c vi??n s??? hi???u h??n v??? b??? c???c b??i thi IELTS, c??ch th???c h???c ??n IELTS, c??ng nh?? t??m ra ???????c h?????ng ??i ????ng ?????n cho s??? h???c ti???ng Anh c???a m??nh.?????n v???i kh??a h???c n??y c??ng Th???c s?? B??i ?????c Ti???n, b???n s??? n???m v???ng c??c b?????c l??m b??i thi c??ng nh?? v???n d???ng hi???u qu??? c??c tuy???t chi??u ????? nh???m ?????n m???c ti??u ?????t 5.5 - 7.0 ??i???m IELTS. V???i 4 ch??? ????? ch??nh ???????c bi??n so???n ???ng v???i 4 ph???n c???a b??i thi IELTS l?? Nghe, N??i, ?????c, Vi???t,  kh??a h???c s??? gi??p b???n t??? tin, v???ng v??ng v???i c??c cu???c thi IELTS. 

                            V???y c??n ch???n ch??? g?? m?? kh??ng nhanh tay ????ng k?? tham gia kh??a h???c luy???n thi ti???ng Anh Luy???n thi IELTS online: listening, speaking, reading, writing c?? t???i Unica.vn ????? trang b??? nh???ng ki???n th???c c???n thi???t ????? c?? th??? Luy???n thi IELTS hi???u qu??? !</p>
                        </div>
                        
                    </div>
                    <div className="dc-content__section">
                        <div className="section--title">
                            <h3>Instructor Information</h3>
                        </div> 
                        <div className="teacher--content">
                            <div className="teacher--image">
                                <img src="https://static.unica.vn/uploads/linhntd@unica.vn/January1920171135am_bui-duc-tien_thumb.jpg" alt="" />
                            </div>
                            <div className="teacher--info">
                                <strong>{course.NameTeach}</strong>
                                <p>Th???c s?? ng??n ng??? h???c</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dc-sidebar">
                    <div className="card-checkout">
                        <div className="dc-price">
                            <strong>&#36; {course.Price}</strong>
                        </div>
                        <div className='text-success'><AccessTimeIcon/> Th???i gian ??u ????i c??n 12 ng??y</div>
                    <PayPal
                    price = {course.Price}
                    ></PayPal>
                    </div>
                    
                </div>
            </div>
            </div>

             )}})
            }                     
   
        </div>
    )
}