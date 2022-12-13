import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './UserSetting.css';

const UserSetting = () => {
    return (
        <div>
            <div className='userinfo-container header-cntr'>
                <h4 id='userinfo-header'>My Profile</h4>
            </div>
            <div className='userinfo-container content-cntr' id='myprofile'>
                <div className='userinfo row'>
                    <label className='col-2'>Username</label>
                    <div className='col-10 userinfo-btn' id='username'>
                        <div>User1</div>
                        <div>
                            <button className='btn btn-secondary'>Edit</button>
                        </div>
                    </div>
                    <div className='col-10 userinfo-btn' id='username-edit' style={{ 'display': 'none' }}>
                        <input />
                        <div>
                            <button className='btn btn-danger'>Cancel</button>
                            <button className='btn btn-primary'>Save</button>
                        </div>
                    </div>
                </div>
                <div className='userinfo row'>
                    <label className='col-2'>Email</label>
                    <div className='col-10 userinfo-btn' id='email'>
                        <div>User1@gmail.com</div>
                        <div>
                            <button className='btn btn-secondary'>Edit</button>
                        </div>
                    </div>
                    <div className='col-10 userinfo-btn' id='email-edit' style={{ 'display': 'none' }}>
                        <input />
                        <div>
                            <button className='btn btn-danger'>Cancel</button>
                            <button className='btn btn-primary'>Save</button>
                        </div>
                    </div>
                </div>
                <button className='btn btn-secondary reset-pass'>Reset Password</button>
            </div>
            <div className='userinfo-container content-cntr' id='resetpass' style={{ 'display': 'none' }}>

            </div>
        </div>
    )
};

export default UserSetting;