import React, { useState } from 'react';
import './ButtonAlert.css'

function ButtonAlert() {
    const [alertType, setAlertType] = useState('success');


  return (
    <div>
      <div className={`alert-box ${alertType}`}>
        Đây là thông báo: {alertType}
      </div>

  <button onClick={() => setAlertType('success')}>Thành công</button>
  <button onClick={() => setAlertType('warning')}>Cảnh báo</button>
  <button onClick={() => setAlertType('error')}>Lỗi</button>
</div>
  );
}

export default ButtonAlert;