import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './AdminMngRequest.css';
import { useEffect, useState } from 'react';

const AdminMngRequest = () => {
    // ini nanti diganti pakai axios get, status pending aja
    const pendingLists = [
        {
            postId: 'xuhd272dkwjkfh',
            foodName: 'Pempek',
            region: 'South Sumatra',
            imageUrls: [
                { imageId: '2872eygfd28dg', imageUrl: 'https://www.piknikdong.com/wp-content/uploads/2021/02/Cara-Membuat-Pempek.jpg' },
                { imageId: '228hddwhs28dg', imageUrl: 'https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2021/09/04/4062442039.jpeg' },
                { imageId: 'sd222ygfd28dg', imageUrl: 'https://img.okezone.com/content/2020/12/03/298/2321042/resep-pempek-dos-udang-rebon-rasanya-jos-n1FGhLyt0x.jpg' }],
            description: 'Pempek is a savoury Indonesian fish cake delicacy, made of fish and tapioca, from Palembang, South Sumatra.',
            status: 'pending'
        },
        {
            postId: 'xsa27dhsj28d',
            foodName: 'Nasi Pecel Madiun',
            region: 'East Java',
            imageUrls: [
                { imageId: '2232rfssd28dg', imageUrl: 'https://www.masakapahariini.com/wp-content/uploads/2021/10/Nasi-Pecel-Madiun-780x440.jpg' },
                { imageId: '282121fd28dg', imageUrl: 'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1601776952/t1kycswgiyq3swwipt91.jpg' }
            ],
            description: 'Nasi pecel is made from rice, vegetables, peanut sauce, and soybeancake.',
            status: 'pending'
        },
        {
            postId: 'daqjj381qsqad',
            foodName: 'Batagor',
            region: 'West Java',
            imageUrls: [
                { imageId: '2we22gfd28dg', imageUrl: 'https://asset.kompas.com/crops/5oHEqFj1cPDLV_wM6ZPUsZ_CCYM=/0x48:1000x715/780x390/data/photo/2020/09/06/5f54c3ebb1d41.jpg' },
                { imageId: '28wqeygfd28dg', imageUrl: 'https://img-global.cpcdn.com/recipes/5da4bf61bcd15f64/1200x630cq70/photo.jpg' }
            ],
            description: 'Batagor is well known food in Bandung.',
            status: 'pending'
        },
        {
            postId: 'wqhuwq82u092',
            foodName: 'Brem',
            region: 'East Java',
            imageUrls: [
                { imageId: '22e2ygfd28dg', imageUrl: 'https://1.bp.blogspot.com/-E240MPw9nIw/Xgq6IAwGhKI/AAAAAAAAC_k/0cbVImZKaK8IsQS08ibCP1b4jL4N2e26wCLcBGAsYHQ/s1600/brem.jpg' },
                { imageId: 'wj2022ygfd2g', imageUrl: 'https://jessicabakery.com/wp-content/uploads/2021/12/Resep-Brem-Kue-Kering-Khas-Madiun.jpg' }
            ],
            description: 'Brem is wellknown snack from Madiun.',
            status: 'pending'
        },
        {
            postId: 'jaquh937hdd',
            foodName: 'Cilok',
            region: 'West Java',
            imageUrls: [
                { imageId: 'sqj298e2fvsx', imageUrl: 'https://images.tokopedia.net/img/JFrBQq/2022/9/12/8d1dc78d-4aed-40a4-a66d-425e05e6db26.jpg' },
                { imageId: 'djq82ujjkwss', imageUrl: 'https://cdn0-production-images-kly.akamaized.net/nmTqRFdkbW-CU0crWnvdbMTRmE8=/0x0:1807x1018/640x360/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2856068/original/006530100_1563362133-1.jpg' }
            ],
            description: 'Cilok is well known snack from Sundaneese.',
            status: 'pending'
        },
        {
            postId: 'uq2h91hdwf3',
            foodName: 'Bolu Lembang',
            region: 'West Java',
            imageUrls: [
                { imageId: '11edcfffd28dg', imageUrl: 'https://hargamenu.net/wp-content/uploads/2018/11/Daftar-Harga-Bolu-Susu-Lembang-Terbaru-2018.png' },
                { imageId: 'dafh982q9fjkd', imageUrl: 'https://bolulembang.co.id/wp-content/uploads/2021/12/9.-Alpukat-opt.jpg' },
                { imageId: 'djwjq028ujdhw', imageUrl: 'https://id-test-11.slatic.net/p/432d1956511dbd5dc881fe21e682ddfd.png' }
            ],
            description: 'Bolu lembang is cake from Lembang, Bandung.',
            status: 'pending'
        },
        {
            postId: 'jadnjkdwquoi',
            foodName: 'Brownis Amanda',
            region: 'West Java',
            imageUrls: [
                { imageId: '2e2ygfd28dwwdg', imageUrl: 'https://amazingsingkawang.com/wp-content/uploads/2019/12/amanda_brownies_singkawang_bolu_kukus-1-1000x540.jpg' },
                { imageId: '21wqgeygfd28dg', imageUrl: 'https://media-cdn.yummyadvisor.com/store/cbc0703c-04af-481e-8958-720b01855c55.jpg' }
            ],
            description: 'Brownis is well known cake for Indonesian people specifically in Java',
            status: 'pending'
        },
        {
            postId: 'ashqhhwff',
            foodName: 'Rendang',
            region: 'West Sumatra',
            imageUrls: [
                { imageId: 'djqo32jqiofd32', imageUrl: 'https://cdn0-production-images-kly.akamaized.net/YHppKTMNcRz87-cP2Wrg5Ye8mFc=/1x112:1000x675/1200x675/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3245094/original/043061400_1600750232-shutterstock_1786027046.jpg' },
                { imageId: '27ehdajhndkih8', imageUrl: 'https://cdn-2.tstatic.net/tribunnews/foto/bank/images/tips-pasti-jadi-bikin-rendang-pakai-rice-cooker.jpg' }
            ],
            description: "Rendang is delicious meat that become most of Indonesian people's favorite.",
            status: 'pending'
        }
    ];

    const [selectedReq, setSelectedReq] = useState({
        foodName: '',
        region: '',
        imageUrls: [{ imageId: '', imageUrl: '' }],
        description: ''
    });

    const isAvailableReq = () => {
        if (pendingLists.length > 0) {
            document.getElementById('req-available').style.display = 'flex';
            document.getElementById('req-unavailable').style.display = 'none';
        } else {
            document.getElementById('req-available').style.display = 'none';
            document.getElementById('req-unavailable').style.display = 'flex';
        }
    };

    useEffect(() => {
        isAvailableReq();
    })

    const showbox = (req) => {
        document.getElementById("box1").classList.add('col-6');
        document.getElementById("box1").classList.remove('box1-width');
        document.getElementById("box2").style.display = 'block';

        setSelectedReq({
            ...selectedReq,
            foodName: req.foodName,
            region: req.region,
            imageUrls: req.imageUrls,
            description: req.description
        })
    };

    const hidebox = () => {
        document.getElementById("box1").classList.remove('col-6');
        document.getElementById("box1").classList.add('box1-width');
        document.getElementById("box2").style.display = 'none';

        setSelectedReq({
            ...selectedReq,
            foodName: '',
            region: '',
            imageUrls: [{ imageId: '', imageUrl: '' }],
            description: ''
        })
    };

    // const Urls = selectedReq.imageUrls.slice(1);

    const approved = (postId) => {
        //axios patch ubah status jadi approved
    };

    const reject = (postId) => {
        //axios patch ubah status jadi reject
    };

    console.log(selectedReq.imageUrls)

    return (
        <div className='row'>
            <div className='box1 box1-width' id='box1'>
                <div className='request-header'>
                    <h5>Manage Request</h5>
                </div>
                <div className='request-body' id='req-unavailable' style={{ 'display': 'none' }}>
                    <h6>There is no request...</h6>
                </div>
                <div className='request-body' id='req-available'>
                    <div className='request-map'>
                        {pendingLists.map((request) => (
                            <div className='cntn-row' key={`id-${request.postId}`}>
                                <div onClick={() => { showbox(request) }} className='title'>{request.foodName}</div>
                                <div className='check'>
                                    <i className="bi bi-check-circle-fill apprv" onClick={() => { approved(request.postId) }}></i>
                                    <i className="bi bi-x-circle-fill rejct" onClick={() => { reject(request.postId) }}></i>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='box2 col-6' id='box2' style={{ 'display': 'none' }}>
                <div className='detail-header'>
                    <i className="bi bi-caret-left-square-fill" onClick={hidebox}></i>
                    <div>Request Detail</div>
                </div>
                <div className='detail-body'>
                    <h4>{selectedReq.foodName}</h4>
                    <div className='region-box'>{selectedReq.region}</div>

                    <div id="carouselAdminReq" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {selectedReq.imageUrls.map((url, index) => (
                                <div key={`id-${url.imageId}`}>
                                    {index === 0 ? (
                                        <div className="carousel-item active" >
                                            <img src={url.imageUrl} className="d-block w-100 imgheight" alt={selectedReq.foodName} />
                                        </div>
                                    ) : (
                                        <div className="carousel-item" >
                                            <img src={url.imageUrl} className="d-block w-100 imgheight" alt={selectedReq.foodName} />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselAdminReq" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselAdminReq" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                    <div className='desc'>{selectedReq.description}</div>

                </div>
            </div>
        </div>
    )
};

export default AdminMngRequest;