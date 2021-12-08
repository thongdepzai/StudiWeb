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
                            <strong>Thời gian bắt đầu khóa học : </strong>
                            <span>{course.Timedeadline}</span>
                            <br />
                            <CheckIcon className="dc-icon"/>
                            <strong>Số buổi :</strong>
                            <span>{course.NumberStudy} / {course.TimeStudy}</span>
                            <br />
                            <CheckIcon className="dc-icon"/>
                            <strong>Lịch học :</strong>
                            <span>6:00pm - 9:00pm , thứ 2 và thứ 5 hằng tuần</span>
                            <br />
                            <CheckIcon className="dc-icon"/>
                            <strong>Cách thức :</strong>
                            <span>học qua ứng dụng <strong> Zoom Cloud Meeting</strong>.</span>
                            
                        </div>
                    </div>
                    <div className="dc-content__section">
                        <div className="section--title">
                            <h3>Introduce Course</h3>
                        </div>
                        <div className="intro--content">
                        <strong>Như bạn đã biết,</strong>
                            <p>IELTS viết tắt cho International English Language Testing System, tạm dịch là Hệ thống Kiểm tra Anh ngữ Quốc tế với 4 kỹ năng Nghe, Nói, Đọc và Viết. IELTS là cuộc thi kiểm tra trình độ thông thạo Anh ngữ quan trọng và phổ biến nhất thế giới cho mục đích học tập, làm việc và định cư với hơn hai triệu thí sinh dự thi.

                            Thấu hiểu được tầm quan trọng của việc luyện thi IELTS, Unica hợp tác cùng giảng viên Bùi Đức Tiến xuất bản khóa học Luyện thi IELTS Online: listening, speaking, reading, writing. Khóa học ngoại ngữ sẽ giúp học viên rèn luyện cả 4 kỹ năng, kèm theo giảng giải chi tiết về cấu trúc đề thi, những lưu ý khi làm bài tập sẽ giúp bạn tự tin bước vào kỳ thi IELTS với kết quả như mong đợi. 

                            Lớp học dành cho những học viên mới tiếp xúc với IELTS, trình độ các kỹ năng còn thấp, vốn từ vựng, ngữ pháp còn chưa cao, và phát âm còn nhiều khiếm khuyết. Sau khoá học, học viên sẽ hiểu hơn về bố cục bài thi IELTS, cách thức học ôn IELTS, cũng như tìm ra được hướng đi đúng đắn cho sự học tiếng Anh của mình.Đến với khóa học này cùng Thạc sĩ Bùi Đức Tiến, bạn sẽ nắm vững các bước làm bài thi cũng như vận dụng hiệu quả các tuyệt chiêu để nhắm đến mục tiêu đạt 5.5 - 7.0 điểm IELTS. Với 4 chủ đề chính được biên soạn ứng với 4 phần của bài thi IELTS là Nghe, Nói, Đọc, Viết,  khóa học sẽ giúp bạn tự tin, vững vàng với các cuộc thi IELTS. 

                            Vậy còn chần chừ gì mà không nhanh tay đăng ký tham gia khóa học luyện thi tiếng Anh Luyện thi IELTS online: listening, speaking, reading, writing có tại Unica.vn để trang bị những kiến thức cần thiết để có thể Luyện thi IELTS hiệu quả !</p>
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
                                <p>Thạc sĩ ngôn ngữ học</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dc-sidebar">
                    <div className="card-checkout">
                        <div className="dc-price">
                            <strong>&#36; {course.Price}</strong>
                        </div>
                        <div className='text-success'><AccessTimeIcon/> Thời gian ưu đãi còn 12 ngày</div>
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