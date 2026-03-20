import React, { useState } from 'react';
import Bai1 from './component/Bai1';
import Bai2 from './component/Bai2';
import Bai3 from './component/Bai3';
import Bai4 from './component/Bai4';

// import Bai2 from './Bai2_Axios'; 

function App() {
  // 1. Khởi tạo state để biết đang ở bài nào (mặc định là 'home' hoặc 'bai1')
  const [currentTab, setCurrentTab] = useState('home');

  // 2. Hàm render nội dung dựa trên state
  const renderContent = () => {
    switch (currentTab) {
      case 'bai1':
        return <Bai1 />;
      case 'bai2':
        return <Bai2/>;
        case 'bai3':
        return <Bai3/>;
        case 'bai4':
        return <Bai4/>;
      default:
        return <h3>Vui lòng chọn một bài tập để hiển thị</h3>;
    }
  };

  return (
    <div>

      <nav>
        <button onClick={() => setCurrentTab('bai1')}>Bài 1</button>
        <button onClick={() => setCurrentTab('bai2')} style={{ marginLeft: '10px' }}>Bài 2</button>
        <button onClick={() => setCurrentTab('bai3')} style={{ marginLeft: '10px' }}>Bài 3</button>
        <button onClick={() => setCurrentTab('bai4')} style={{ marginLeft: '10px' }}>Bài 4</button>
        <button onClick={() => setCurrentTab('bai5')} style={{ marginLeft: '10px' }}>Bài 5</button>

      </nav>

      <hr />
      <div>
        {renderContent()}
      </div>
    </div>
  );
}

export default App;